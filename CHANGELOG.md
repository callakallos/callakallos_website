# Calla Kallos — Version History
### callakallos.ae | Dubai's Luxury Florist

---

## v1.0 — 2026-06-28
### Added
- IP address and location tracking in Activity Log (via ipapi.co)
- Device, IP, and location badges shown on each log entry
- Date shown alongside time in log entries
- Activity Log PDF export — professional report with summary cards, confidential footer
- Unique IPs count in report

### Changed
- Excel report now has branded company header (Calla Kallos logo bar, date, totals row)
- Phone columns use text format in Excel (no scientific notation)
- Activity log search now includes IP and location data

---

## v0.9 — 2026-06-28
### Added
- "Ready for Delivery" status between Preparing and In Transit
- Delivery boy WhatsApp number field on Ready for Delivery orders
- "📲 Notify Rider" button — sends order details to delivery boy via WhatsApp
- Delivery Boy # column in Excel export

### Changed
- PDF Report button hidden for florist users
- Excel phone columns use text format (no scientific notation)
- saveOrderStatus now saves delivery boy number and re-renders table

---

## v0.8 — 2026-06-28
### Added
- Separate "📊 Export Excel" button — generates .xls file with styled header
- Separate "📄 PDF Report" button — professional printable report
- Order action buttons (Accept/Decline/Save/Delete) now have hover lift + shadow animation

### Fixed
- Order table row no longer highlights on hover (was covering status colors)
- Action buttons now use proper CSS classes instead of inline styles

---

## v0.7 — 2026-06-28
### Changed
- All admin buttons now have subtle hover animation (lift + shadow)
- Export orders redesigned — professional HTML report with summary cards, dark header, status pills, striped rows, totals footer
- Report opens in print view (save as PDF or print)
- Landscape orientation for better table fit

---

## v0.6 — 2026-06-28
### Added
- Qty column in orders table (auto-counts items per order)

### Changed
- Action buttons redesigned — stacked vertically with rounded corners, subtle backgrounds
- Accept (green), Decline (red), Save (champagne), Delete (red) with icons
- Print dropdown with rounded styling

---

## v0.5 — 2026-06-28
### Changed
- Orders table compacted — removed separate Email, Phone, Location columns
- Customer column now shows name + phone + email + location in one cell (hover for full details)
- Smaller buttons, tighter spacing, no horizontal scroll needed
- Print dropdown made more compact

---

## v0.4 — 2026-06-28
### Fixed
- Top banner now shows "Florist" instead of "Admin" when logged in as florist
- Version code (v0.4) displayed on top banner for both admin and florist

---

## v0.3 — 2026-06-28
### Added
- Activity Log now captures device info (iPhone/Android/Mac/Windows + browser)
- Device badge shown in each log entry
- Role-specific admin themes (admin and florist have separate theme selections)
- Themes saved per role in localStorage

### Changed
- Activity Log tab hidden from florist users
- Admin Theme tab hidden from florist users
- Florist cannot access dashboard, settings, logs, or admin-themes tabs
- Theme selection persists independently per role

---

## v0.2 — 2026-06-28
### Added
- Visitor tracking (total, today, yesterday, weekly) on admin dashboard
- One count per device per day using localStorage
- Firebase `ck-stats` for visit data storage

---

## v0.1 — 2026-06-28
### Added
- Auto-translate English → Arabic on field exit (product name & description)
- MyMemory translation API integration
- Skips translation if Arabic field already has content
- Version code display on admin dashboard

---

## v0.0 — 2026-06-28 (Initial Stable)
### Store Features
- Product catalog with category & occasion filtering
- Product detail page with image gallery, description, qty selector
- Multi-image product uploads with hover slideshow
- Build Your Own Gift Box customizer with live pricing
- Shopping cart with checkout flow
- WhatsApp order integration with pre-filled messages
- Bilingual support (English / Arabic)
- Hero image slideshow (5 slots, admin-uploadable)
- Corporate Gifting Portal (hidden, toggleable)
- Coming Soon / Maintenance Mode banner (admin-toggleable)
- Responsive design (mobile + desktop)

### Admin Panel
- Firebase Authentication (Admin + Florist roles)
- Secret admin login (triple-click / long-press logo)
- Sales Dashboard with revenue cards, 7-day chart, top products
- Inventory status with low-stock alerts
- Navigable order calendar with day detail view
- Products management (add/edit/delete, product codes, visibility toggle)
- Hide All / Show All products
- Offers & Badges management
- Orders management with Accept/Decline + WhatsApp notifications
- Manual order entry for offline/phone orders
- Invoice, Delivery Note, Gift Receipt PDF generator
- Customer CRM (VIP/Regular/New grouping, order history, favourites)
- Enquiries with WhatsApp & Email reply buttons
- File Manager with product images grouped by product
- 11 Admin Themes (Default, SAP Fiori, Midnight Blue, Charcoal Rose, Emerald Pro, Sunset Warm, Lavender Dream, Pure Noir, Deep Ocean, Modern SaaS Light, Modern SaaS Dark)
- Activity Log (all admin operations tracked)
- Settings: Store info, passwords, theme, hero images, payment, storage usage
- Maintenance Mode with presets (Coming Soon, Under Maintenance, Holiday, Custom)
- Gift Box section visibility toggle
- Notification sound for new orders & enquiries
- Toast notifications (top banner, 1.5s)

### Integrations
- Firebase Realtime Database (cross-device sync)
- Firebase Authentication (email/password)
- GitHub API (image storage)
- GitHub Pages hosting
- Custom domain: callakallos.ae
- WhatsApp Business messaging
- MyMemory Translation API

### Removed
- Wishlist/heart buttons (no user account system)
- Arctic Snow theme
- Cherry Blossom theme
- Corporate Portal nav link (section hidden, toggleable)
- Admin login button (replaced with secret logo gesture)

---

## Stable Checkpoints
| Tag | Commit | Date | Description |
|-----|--------|------|-------------|
| v1.0-stable | f1e5d48 | 2026-06-24 | First stable release |
| stable-v1.0-backup | f1e5d48 | 2026-06-24 | Backup branch (frozen) |
