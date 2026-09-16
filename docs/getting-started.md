---
sidebar_position: 3
sidebar_label: "Getting Started"
---

# Getting Started

This page covers everything you need to go from zero to running: logging in, navigating the platform, understanding your role, and orienting yourself on the dashboard.

---

## Logging In

Navigate to your Hibiscus HR application URL. You see the login screen.

> **[Screenshot: Login screen with email and password fields]**

**To log in:**

1. Enter your **Work Email** in the first field (e.g. `sarah.chen@acmecpa.ca`)
2. Enter your **Password**
3. Click **Sign In**

Forgotten password? Click **Forgot password?** above the password field.

### First-time login

If your account was just created by your firm's admin, you receive a welcome email titled **"You're all set — choose a password for Hibiscus HR"**. Click **Choose Password** to open the Set Password page, enter a password that meets the complexity requirements (min 8 characters, one uppercase, one lowercase, one number, one special), then sign in normally. The setup link is valid for 7 days.

### Email verification banner

If you haven't verified your email address, an amber banner appears at the top of every page: *"Please verify your email address."* Click **Resend email** to get a fresh verification link. The banner disappears once verified. You can keep using Hibiscus HR while unverified, but verifying secures your account and enables password recovery.

### Login errors

| Message | Cause | Fix |
|---------|-------|-----|
| Invalid credentials | Wrong email or password | Double-check both |
| Account not found | Email not registered | Contact your firm's admin |
| Session expired | Timed out after inactivity | Log in again |

---

## Navigating the Platform

Once logged in, you land on the **Dashboard**. The layout has three areas.

### Left sidebar — Navigation

The left sidebar contains links to every module. Each icon represents one:

| Icon | Module | Who sees it |
|------|--------|-------------|
| Dashboard grid | Dashboard | Admin, Manager |
| User check | My Team | Admin, Manager |
| People | Employees | Admin, Manager |
| Dollar sign | Payroll | Admin |
| File text | T4 Filing | Admin (indented under Payroll) |
| Wallet | Partner Draws | Admin only |
| Clock | Time & Attendance | Admin, Manager |
| Calendar | Leave Management | Admin, Manager |
| Heart | Benefits | Admin |
| Award | Credentials | Admin, Manager |
| Receipt | Professional Dues | Admin |
| User plus | Onboarding | Admin, Manager |
| Shield check | Compliance | Admin, Manager |
| Bar chart | Reports | Admin |
| Gear | Settings | Super Admin |

The active module is highlighted. Items you don't have access to (by role or plan) show a lock icon and an upgrade prompt when clicked.

At the bottom of the sidebar is your avatar. Click it for your profile or to log out.

### Top bar — Page title and actions

Each module page has a header showing the module name and its primary action buttons (e.g. **Add Employee**, **Run Payroll**).

### Main content area

The main area is where module content lives: tables, charts, forms, and detail drawers.

---

## Understanding Drawers and Modals

Hibiscus HR uses two overlays:

- **Side drawers** — slide in from the right. Used for adding and editing records (new employee, new leave request, run payroll wizard).
- **Modals** — centred pop-ups. Used for rich cross-module detail views.

Close a drawer with the **X** in the top-right or by pressing **Escape**. Drawers do not close on backdrop click (prevents accidental data loss). Modals close the same way.

---

## Your User Profile

Your profile is at the bottom of the left sidebar. From there you can:

- View your name, email, and role
- Change your password
- Log out

---

## Employee Login Experience

Employees interact with Hibiscus HR through the **Employee Portal** — a self-service area separate from the admin dashboard. High-level path:

1. **Admin clicks Add Employee** — the 4-step wizard provisions the employee's login and emails them a "Choose your password" link
2. **Employee sets a password** — they click the link, pick a password on Set Password, and are redirected to the standard sign-in page
3. **Employee signs in** — on first sign-in, incomplete onboarding routes straight into the 7-step self-service onboarding wizard. Otherwise, they go to the portal home
4. **Onboarding wizard (new hires only)** — Welcome, Personal Info, Work Eligibility (SIN), Banking (direct deposit), TD1 Tax Forms, Documents, All Done. Each step auto-saves
5. **Ongoing portal** — pay stubs, T4s, leave requests, benefits, profile, documents

For the full walkthrough, see the [Employee Portal](./employee-portal.md) page.

> **Note:** Adding a new employee is restricted to Admin. Managers can view and edit existing employees but cannot create new ones.

---

## Broker Login Experience

Benefits brokers interact with Hibiscus HR through a limited, read-only portal:

1. **Broker invite** — an admin sends an invite from Settings → Benefits Admin → Invite Broker
2. **Account activation** — the invite link creates the broker's account
3. **Limited access** — brokers see only Benefits (read-only): plan configurations, enrollment data, and CSV download for handoff to the carrier. Personal information is redacted
4. **Session security** — same policies as every other user (session timeout, password complexity)

Brokers cannot modify data. Plan and enrollment changes go through an admin.

---

## Your First Week of Compliance Monitoring

Hibiscus HR watches your compliance posture from day one.

**Day 1 — the Dashboard widget.** Once you've added staff, the Compliance Health widget on the Dashboard shows a live score against nine ESA checks (minimum wage, SINs on file, emergency contacts, vacation entitlement, termination pay, document expiry, and more). The top 3 action items are clickable straight to the fix.

**Day 2+ — the trend line.** Daily scans build a snapshot history. Within a couple of days the widget sparkline and the Compliance → Trend tab start showing history.

**Your first Monday — the weekly digest.** Every Monday morning, admins get an emailed compliance digest: current score, 7-day trend, what broke this week, link back to the Dashboard.

**Any day — instant alerts.** If a new action-required item appears (SIN removed, key document expired), admins get an email the same day.

Both email types are opt-in at the firm level and toggleable at **[Settings → Notifications](./settings.md)**. They're on by default.

> **Tip:** If you're tired of compliance emails, turn off the toggle. The Dashboard widget and Trend tab keep working regardless.

---

## Partner Health widget

If your firm has partners on file (employment type = Partner), the Dashboard also carries a **Partner Health** three-column hero:

- **Column 1 — Partner draws** — how many partners are over-drawn or over policy
- **Column 2 — Utilization** — rolling firm-average utilization %
- **Column 3 — Credentials expiring** — count of credentials expiring within 60 days (14 / 30 / 60 day bands)

Each column links to its module. The widget auto-hides when there are zero partners on file.

Admins also get a **weekly Partner Health email digest** surfacing flagged draws and expiring credentials. Skipped when there's nothing to report.

---

## Security and PCI Compliance

Hibiscus HR uses encrypted connections (TLS) for all data in transit and AES-256 encryption at rest. Sensitive fields (SINs, banking) carry additional field-level encryption.

Payment processing runs through Helcim (PCI-DSS Level 1). Card numbers are tokenized by HelcimPay.js in the browser and never touch Hibiscus HR servers.

---

## Logging Out

Click your avatar at the bottom of the left sidebar, then **Log Out**. The session is securely ended and you land back at the login screen.

> **Tip:** always log out on a shared computer.
