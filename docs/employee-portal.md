---
sidebar_position: 16
sidebar_label: "Employee Portal"
---

# Employee Portal

The Employee Portal is the everyday self-service experience for the people on your payroll. New hires use it to finish their own onboarding (SIN, banking, TD1, document sign-off) before their first day; existing employees use it to view pay stubs, download T4s, request leave, manage their benefits elections, update their own contact details, and upload compliance documents.

This page covers the full path an employee takes — from the moment HR adds them in the Employees module to their day-to-day use of the portal afterward.

> **Access:** The Employee Portal is available to anyone with the **Employee** role. Admins and Managers see the back-office dashboard instead and never enter the portal subtree directly.

---

## How an Employee Gets Into the System

Hibiscus HR has **one** way for a new employee to land in the system. The Admin enters them, and the rest happens automatically.

> **Admin only.** Adding a new employee is restricted to users with the Admin role. Managers can view and edit their team members but cannot create new employee records.

### Step 1 — Admin clicks "Add Employee"

In the Employees module, the Admin clicks **+ Add Employee** and walks through the 4-step Employee Creation Wizard (Personal → Employment → Emergency & Compliance → Review). At minimum the Admin needs to enter the employee's name, work email, province, employment type, and start date — anything else can be filled in later, either by the Admin or by the employee themselves through the portal.

When the Admin clicks **Create Employee** on Step 4, three things happen automatically:

1. The employee record is created in the Employees module
2. A login account is provisioned in the background (with no password yet — the employee will pick one)
3. A **welcome email** goes out to the employee's work email immediately

The Admin doesn't have to navigate anywhere else, click any "send invite" button, or remember any extra step. Adding the employee *is* the trigger.

### Step 2 — Employee receives the welcome email

Within a minute or two, the employee receives an email titled **"You're all set — choose a password for Hibiscus HR"**. The email contains a single button — **Choose Password** — that opens a secure password setup page.

The link is valid for **7 days**. If the employee doesn't act in time, the Admin can resend it from the Onboarding module (see [Resending the Welcome Email](#resending-the-welcome-email)).

### Step 3 — Employee sets their password

Clicking the link opens the **Set Password** page on app.hibiscushr.ca. The employee enters a password (minimum 8 characters, with at least one uppercase, lowercase, number, and special character) and confirms it.

This is the moment the employee's account becomes real. Until they pick a password, their record exists in the system but they cannot sign in.

After saving the password, the employee is sent to the standard sign-in page with a confirmation message: *"Password set — sign in with your email and new password."*

### Step 4 — Employee signs in for the first time

The employee enters their work email and the password they just chose. From here, one of two things happens:

- **If their onboarding wizard is incomplete** (which is the default for any new hire), they are routed straight to the 8-step **Self-Service Onboarding Wizard**. They cannot access any other part of the portal until the wizard is done.
- **If their onboarding is already marked complete** (e.g. an Admin entered every field in the Employee Wizard, or this employee was migrated from another system), they go directly to the Employee Portal home page.

### Step 5 — Self-Service Onboarding Wizard (new hires only)

The wizard has 8 steps. Each step auto-saves as the employee fills it in, so they can close their browser and resume later from exactly where they left off.

| # | Step | What the employee provides |
|---|------|---------------------------|
| 1 | **Welcome** | Intro and overview of what to expect |
| 2 | **Personal Info** | Address, personal phone, emergency contact, pronouns |
| 3 | **Work Eligibility** | SIN (stored encrypted), work authorization (Citizen / PR / Work Permit) |
| 4 | **Banking** | Direct deposit — institution number, transit number, account number, account type |
| 5 | **TD1 Tax Forms** | Federal TD1 personal amount, provincial TD1 |
| 6 | **Documents** | Sign-off on Employment Agreement, Employee Handbook, Health & Safety Policy, PIPEDA Privacy Notice, and Direct Deposit Authorization |
| 7 | **About You** | Optional — bio, icebreaker, dietary restrictions, t-shirt size |
| 8 | **All Done** | Confirmation and download of signed documents |

When the employee clicks **Complete** on Step 8, their employee record is updated with everything they entered, the wizard is marked done, HR is notified by email and Slack, and the employee is dropped into the **Employee Portal home page**.

From that point on, signing in lands them on the home page directly — the wizard is no longer reachable.

### Resending the Welcome Email

If the original welcome email never landed (spam folder, typo in the email address, employee deleted it), the Admin can resend it without re-creating the employee record.

1. Open **Onboarding** in the sidebar
2. Find the employee on the kanban board and click their card
3. Click **Resend Welcome Email** at the top of the detail drawer

A fresh password-setup token is minted and a new email is sent. The previous link is invalidated.

> **Note for back-office invites:** The same welcome-email flow is used by Admins inviting other Admins or Managers from **Settings → Users & Roles → Invite User**. The recipient gets the same "Choose your password" email and lands in the platform once they've set a password — they bypass the onboarding wizard because they don't have an employee record.

---

## What the Employee Sees Once They're In

After completing onboarding (or signing in for the first time if onboarding was already complete), the employee lands on the Employee Portal at `/employee`. The portal has a left-hand navigation with 6 sections: **Home**, **Leave**, **Pay**, **Benefits**, **Profile**, and **Documents**.

The employee can never see admin-only areas — payroll runs, other employees' records, compliance dashboards, settings, billing, or reports. Their session is sandboxed to the portal subtree.

### Home

> **[Screenshot: Employee Portal home page showing welcome banner, four stat cards, quick action grid, profile sidebar, leave balances, and recent activity]**

The home page is a personal dashboard. It shows:

| Element | Description |
|---------|-------------|
| **Welcome banner** | Greeting with the employee's first name and today's date |
| **Stat cards** | Four cards: Vacation Days remaining, Sick Days remaining, Last Pay Date (with net amount), and Tenure (months or years since start date) |
| **Quick Actions** | Five large cards linking to Leave, Pay & T4, Benefits, Profile, and Documents |
| **My Profile** | A summary widget showing name, email, phone, department, role, and province with a **View / Edit** link |
| **Leave Balances** | Year-to-date vacation and sick day usage with progress bars and a "pending requests" badge |
| **Recent Activity** | The 3 most recent events relevant to the employee — last pay stub published, upcoming approved leaves, onboarding-complete marker |

### Leave

> **[Screenshot: Employee Leave page showing balances, upcoming approved leaves, request history, and the New Request button]**

The Leave page is where the employee manages their own time off. They can:

- View **This Year** balances (vacation, sick, and any other leave types their company has configured)
- See **Upcoming Approved** leaves with start and end dates
- Browse the full **request history**, with status badges (Pending / Approved / Denied)
- Submit a **+ New Request** — pick the leave type, start and end dates, and optional notes

New requests appear in HR's Leave Management queue with **Pending** status. The employee gets a notification when a manager approves or denies the request, and the balance bars on the home page update automatically.

### Pay

> **[Screenshot: Employee Pay page showing pay stub list and T4 download section]**

The Pay page lists every pay stub the employee has received, newest first. Each row shows:

- **Pay period** — date range
- **Pay date** — when funds were deposited
- **Gross / Net** amounts
- **Download PDF** button — opens a full pay stub showing earnings, all deductions (CPP, EI, federal tax, provincial tax, any pre-tax items), and YTD totals

Below the pay stubs is the **Tax Documents (T4)** section, which lists every T4 slip generated for the employee. Click any year to download the official CRA-compliant PDF for personal tax filing.

### Benefits

> **[Screenshot: Employee Benefits page showing current enrollment per plan and the Recent Requests section]**

The Benefits page shows the employee's own enrollment across all of the company's benefit plans. For each plan they see:

- Plan name, type, and provider
- Their enrollment status (Enrolled, Waived, or Not Yet Elected)
- Their monthly contribution (if applicable)
- Coverage start date

The **Your Recent Requests** section lists any benefit change requests the employee has submitted (e.g. switching from Single to Family coverage after a life event). HR sees these requests in the Benefits Change Requests panel on their side and can approve, deny, or request more info — the employee gets notified of the decision.

> **Note:** Employees can submit *requests* to change their elections, but they cannot directly modify enrollment outside of the company's open-enrollment window or a qualifying life event. HR controls when changes take effect.

### Profile

> **[Screenshot: Employee Profile page with editable contact and banking sections]**

The Profile page is where the employee maintains their own contact and banking details. Editable fields typically include:

- Phone number (work and personal)
- Home address
- Emergency contact name and phone
- Banking — institution number, transit number, account number (stored encrypted)
- Pronouns
- TD1 personal amounts (re-claim if their tax situation changes)

Some fields are read-only because they're set by HR — name, work email, province, department, job title, salary, start date. Changes to read-only fields go through HR.

### Documents

> **[Screenshot: Employee Documents page showing required uploads and the upload area]**

The Documents page lists every employment document on file for the employee — both ones HR has uploaded for them (employment agreement, T4 slips, signed policies) and ones the employee has uploaded themselves (work permits, training certificates, tickets).

The employee can:
- **Download** any document they have access to
- **Upload** a new document (e.g. a renewed First Aid certificate) — uploads default to **Pending** status until HR reviews and approves them
- **See expiry dates** on time-limited certifications, with amber and red badges as the expiry approaches

Documents flagged as **Pending** appear in HR's Compliance Documents tab for review.

---

## Signing Out and Coming Back

The employee signs out via the avatar menu at the bottom of the left sidebar. Their next sign-in goes through the same `/login` page as everyone else — work email + password (or **Sign in with Microsoft** / **Sign in with Google** if SSO is enabled in the integrations tile).

If the employee forgets their password, they use the **Forgot password?** link on the sign-in page to receive a reset email. The reset link uses the same secure flow as the original welcome email — set a new password, then sign in.

---

## What Employees Cannot Do

To keep the data model and the audit trail consistent, the Employee Portal is intentionally restricted. Employees **cannot**:

- Access any other employee's information
- View payroll runs, compliance dashboards, reports, or settings
- Add, edit, or delete compliance documents for other employees
- Change their own salary, role, department, employment type, or start date (these go through the Compensation Change request flow on the Admin side)
- Approve their own leave requests
- Directly modify benefit enrollments outside of an open-enrollment window or qualifying event
- Resend their own welcome email (this is an Admin action)

If an employee needs something outside the portal's scope, the standard path is to contact their HR Admin via the support email configured for the tenant.

---

## Admin Tools for Managing Employee Access

Admins can manage employee accounts from two places:

| Action | Where |
|--------|-------|
| Add a new employee + send welcome email | **Employees → + Add Employee** |
| Resend a welcome email | **Onboarding → click employee card → Resend Welcome Email** |
| See who has logged in / who is still pending | **Settings → Users & Roles** (employees show alongside admins and managers, with a **pending** badge until they've set a password) |
| Deactivate an employee account | **Settings → Users & Roles** → three-dot menu → Deactivate |
| Reset an employee's password (admin-initiated) | Same as Forgot Password — the employee has to click the link in their email |

> **Note:** Admins **cannot** see or set an employee's password directly. The platform never stores recoverable passwords — only one-way bcrypt hashes — and the only way to set or change one is through the email-link flow.
