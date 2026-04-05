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

Employees who are not HR administrators interact with Hibiscus HR through the **Employee Self-Service Onboarding Portal**. Here is how it works:

1. **Onboarding invite** — The HR administrator sends an onboarding invite from the Onboarding module. The new hire receives a branded email with a "Start Onboarding" link.
2. **Account activation** — Clicking the link creates the employee's account and logs them in automatically. No separate registration is needed.
3. **Onboarding wizard** — The employee sees only the onboarding wizard (not the full admin dashboard). They complete 8 steps: Welcome, Personal Info, Work Eligibility (SIN), Banking (direct deposit), TD1 Tax Forms, Documents (policy sign-off), About You, and All Done.
4. **Auto-save and resume** — Each step auto-saves. The employee can close their browser and come back later to pick up where they left off.
5. **Completion** — Once the employee finishes onboarding, their data is automatically added to the system. HR is notified, and the onboarding record is marked complete.

> **Note:** Employees must complete the onboarding portal before they can be added to payroll.

---

## Broker Login Experience

Benefits brokers interact with Hibiscus HR through a limited, read-only portal. Here is how it works:

1. **Broker invite** — An HR administrator sends a broker invite from Settings → Benefits Admin → Invite Broker. The broker receives an email with a secure login link.
2. **Account activation** — Clicking the link creates the broker's account. No separate registration is needed.
3. **Limited access** — Once logged in, the broker sees only the Benefits module in read-only mode. They can view plan configurations, enrollment data, and download EDI 834 files for carrier uploads. They cannot access employee personal information, payroll, or any other module.
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
