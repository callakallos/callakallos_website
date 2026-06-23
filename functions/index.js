const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");

admin.initializeApp();

// ─── Configuration (set via Firebase CLI) ───
// firebase functions:config:set whatsapp.phone_id="YOUR_PHONE_NUMBER_ID"
// firebase functions:config:set whatsapp.token="YOUR_ACCESS_TOKEN"
// firebase functions:config:set whatsapp.recipient="971XXXXXXXXX"

exports.sendOrderWhatsApp = functions.database
  .ref("/ck-wa-queue/{orderId}")
  .onCreate(async (snapshot, context) => {
    const order = snapshot.val();
    if (!order || !order.message) {
      await snapshot.ref.remove();
      return null;
    }

    const config = functions.config().whatsapp || {};
    const phoneNumberId = config.phone_id;
    const accessToken   = config.token;
    const recipientNum  = config.recipient;

    if (!phoneNumberId || !accessToken || !recipientNum) {
      console.error("WhatsApp config missing. Set via firebase functions:config:set");
      await snapshot.ref.remove();
      return null;
    }

    try {
      const res = await fetch(
        `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: recipientNum,
            type: "text",
            text: { body: order.message },
          }),
        }
      );

      const data = await res.json();
      if (data.error) {
        console.error("WhatsApp API error:", data.error);
      } else {
        console.log("WhatsApp sent to", recipientNum, "order:", context.params.orderId);
      }
    } catch (err) {
      console.error("Failed to send WhatsApp:", err);
    }

    // Remove from queue after processing
    await snapshot.ref.remove();
    return null;
  });
