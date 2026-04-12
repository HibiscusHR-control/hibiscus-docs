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

If your account was just created by your HR administrator, you will receive an email with your temporary credentials. You will be prompted to set a new password on first login.

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

| Icon | Module |
|------|--------|
| Grid / Home | Dashboard |
| People | Employees |
| Dollar sign | Payroll |
| Calendar | Leave Management |
| Clock | Time & Attendance |
| Clipboard check | Onboarding & Offboarding |
| Shield | Compliance |
| Star | Performance |
| Heart | Benefits |
| Bar chart | Reports |
| Gear | Settings |

The currently active module is highlighted in purple.

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

## Security and PCI Compliance

Hibiscus HR uses encrypted connections (TLS) for all data in transit and AES-256 encryption for data at rest. Sensitive fields such as SINs and banking information are stored with additional field-level encryption.

The platform is **PCI compliant** via Helcim. All payment card data is processed by Helcim's PCI-DSS Level 1 certified infrastructure. Card numbers never touch Hibiscus HR servers — they are tokenized at the point of entry using HelcimPay.js.

---

## Logging Out

Click your avatar at the bottom of the left sidebar, then click **Log Out**. Your session is securely ended and you are returned to the login screen.

> **Tip:** For security, always log out when using a shared computer.
