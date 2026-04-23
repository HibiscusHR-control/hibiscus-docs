---
sidebar_position: 3
sidebar_label: "Getting Started"
---

# Getting Started

This page covers everything you need to go from zero to running — logging in, navigating the platform, understanding your role, and orienting yourself on the dashboard.

---

## Logging In

Navigate to your Hibiscus HR application URL and you will see the login screen.

> **[Screenshot: Login screen showing the Hibiscus HR logo, email and password fields, and the demo account selector panel]**

**To log in:**

1. Enter your **Work Email** in the first field (e.g. `sarah.chen@acmecorp.ca`)
2. Enter your **Password** in the second field
3. Click **Sign In**

If you have forgotten your password, click **Forgot password?** above the password field.

### First-time login

If your account was just created by your HR administrator, you'll receive a welcome email titled **"You're all set — choose a password for Hibiscus HR"**. Click the **Choose Password** button to open the Set Password page, enter a password that meets the complexity requirements (min 8 characters, one uppercase, one lowercase, one number, one special character), then sign in normally. The password-setup link is valid for 7 days.

### Email verification banner

If you haven't yet verified your email address, an amber banner appears at the top of every page after login: *"Please verify your email address."* Click **Resend email** to receive a fresh verification link, then click the link in the email. The banner disappears once verified. You can keep using Hibiscus HR while unverified, but verifying secures your account and enables password recovery.

### Login errors

| Message | Cause | Fix |
|---------|-------|-----|
| Invalid credentials | Wrong email or password | Double-check your email address and password |
| Account not found | Email not registered | Contact your HR administrator |
| Session expired | Your session timed out after inactivity | Log in again |

---

## Navigating the Platform

Once logged in, you land on the **Dashboard**. The layout has three areas:

### Left sidebar — Navigation

The left sidebar contains links to all modules. It is always visible. Each icon represents a module:

| Icon | Module | Who sees it |
|------|--------|-------------|
| Dashboard grid | Dashboard | Admin, Manager |
| User check | My Team | Admin, Manager |
| People | Employees | Admin, Manager |
| Network tree | Org Chart | Admin, Manager |
| Dollar sign | Payroll | Admin |
| File text | T4 Filing | Admin (indented under Payroll) |
| Clock | Time & Attendance | Admin, Manager |
| Calendar | Leave Management | Admin, Manager |
| Heart | Benefits | Admin |
| Star | Performance | Admin, Manager |
| User plus | Onboarding | Admin, Manager |
| Shield check | Compliance | Admin, Manager |
| Book open | Policies (AI Handbook) | Admin (indented under Compliance) |
| Bar chart | Reports | Admin |
| Gear | Settings | Super Admin |

The currently active module is highlighted in purple. Items you don't have access to (either by role or by plan tier) show a lock icon and a gentle upgrade prompt when clicked.

At the bottom of the sidebar you will find your user avatar and name. Click it to access your profile or log out.

### Top bar — Page title and actions

Each module page has a header bar showing the current module name and the primary action buttons for that module (e.g. **Add Employee**, **Run Payroll**).

### Main content area

The main area is where all module content appears — tables, charts, forms, and detail drawers.

---

## Understanding Drawers and Modals

Hibiscus HR uses two types of overlays:

- **Side drawers** — slide in from the right side of the screen. Used for adding and editing records (new employee, new leave request, run payroll wizard, etc.)
- **Modals** — centred pop-up windows. Used for rich cross-module detail views.

To close a drawer, click the **X** button in the top-right corner or press **Escape**. Drawers do not close when clicking the backdrop — this prevents accidental data loss while filling in forms. Modals can be closed the same way.

---

## Your User Profile

Your profile is accessible from the bottom of the left sidebar. From there you can:

- View your name, email, and role
- Change your password
- Log out

---

## Employee Login Experience

Employees interact with Hibiscus HR through the **Employee Portal** — a self-service area separate from the admin dashboard. Here is the high-level path:

1. **Admin clicks Add Employee** — In the Employees module, the Admin runs the 4-step Employee Wizard. Submitting the wizard automatically provisions the employee's login and emails them a "Choose your password" link.
2. **Employee sets a password** — The employee clicks the link in their welcome email, picks a password on the Set Password page, and is redirected to the standard sign-in page.
3. **Employee signs in** — On their first sign-in, employees with incomplete onboarding are routed straight into the 8-step self-service onboarding wizard. Employees whose onboarding is already complete go directly to their portal home page.
4. **Onboarding wizard (new hires only)** — 8 steps: Welcome, Personal Info, Work Eligibility (SIN), Banking (direct deposit), TD1 Tax Forms, Documents (policy sign-off), About You, and All Done. Each step auto-saves so the employee can resume later.
5. **Ongoing portal** — Once onboarding is complete, the employee uses the portal to view pay stubs, request leave, manage benefits, edit their profile, and upload documents.

For the full walkthrough — including the welcome email flow, what each portal page looks like, and what employees can and cannot do — see the [Employee Portal](./employee-portal.md) page.

> **Note:** Adding a new employee is restricted to users with the Admin role. Managers can view and edit existing employees but cannot create new ones.

---

## Broker Login Experience

Benefits brokers interact with Hibiscus HR through a limited, read-only portal. Here is how it works:

1. **Broker invite** — An HR administrator sends a broker invite from Settings → Benefits Admin → Invite Broker. The broker receives an email with a secure login link.
2. **Account activation** — Clicking the link creates the broker's account. No separate registration is needed.
3. **Limited access** — Once logged in, the broker sees only the Benefits module in read-only mode. They can view plan configurations, enrollment data, and download a benefits enrollment CSV to hand off to the carrier. They cannot access employee personal information, payroll, or any other module.
4. **Session security** — Broker sessions follow the same security policies as all other users, including session timeouts and password requirements.

> **Note:** Brokers cannot modify any data. All changes to benefit plans and enrollments must be made by an HR administrator or Super Admin.

---

## Your First Week of Compliance Monitoring

Hibiscus HR watches your compliance posture in the background from day one, and expects you to see three things as your first week unfolds:

**Day 1 — the Dashboard widget.** As soon as you've added a handful of employees, the Compliance Health widget at the top of the Dashboard starts showing a live score. It runs nine automated ESA checks (minimum wage, SINs on file, emergency contacts, vacation entitlement, termination pay, document expiry, and more) and surfaces your top 3 action items as clickable cards. Click any card to jump straight to the fix in the [Compliance module](./compliance.md).

**Day 2+ — the trend line appears.** The daily scan job runs every day and stores a snapshot of your score. By your second login, the widget sparkline and the Compliance → Trend tab start showing historical data. By day 7, the "new this week" pill on the widget begins firing when new items break.

**Your first Monday — the weekly digest email.** Every Monday morning, admins get an emailed compliance digest: current score, 7-day trend direction, what broke this week, link back to the Dashboard. The first digest arrives on the Monday after 7+ days of daily snapshots have accumulated.

**Any day — instant alerts.** If a new action-required compliance item appears (say, an employee's SIN was removed, or a key document expired overnight), admins get an email the same day the scan runs — no waiting for Monday.

Both email types are opt-in at the tenant level and can be toggled off independently at **[Settings → Notifications → Compliance](./settings.md)**. They're on by default because a silent compliance regression is exactly the problem this feature is designed to prevent.

> **Tip:** If you're tired of compliance emails, turn off the toggle — don't delete the account. The Dashboard widget and trend tab keep working regardless.

---

## Security and PCI Compliance

Hibiscus HR uses encrypted connections (TLS) for all data in transit and AES-256 encryption for data at rest. Sensitive fields such as SINs and banking information are stored with additional field-level encryption.

The platform is **PCI compliant** via Helcim. All payment card data is processed by Helcim's PCI-DSS Level 1 certified infrastructure. Card numbers never touch Hibiscus HR servers — they are tokenized at the point of entry using HelcimPay.js.

---

## Logging Out

Click your avatar at the bottom of the left sidebar, then click **Log Out**. Your session is securely ended and you are returned to the login screen.

> **Tip:** For security, always log out when using a shared computer.
