---
sidebar_position: 14
sidebar_label: "Settings"
---

# Settings

The Settings module is where you configure your Hibiscus HR account — your company profile, users and roles, payroll preferences, benefits administration, billing and subscription management, notification rules, security settings, and integrations.

> **Access:** Settings are accessible to Super Admins only. HR Admins can view but not change most settings sections.

> **[Screenshot: Settings module showing the left navigation and the Company section]**

---

## Settings Navigation

The Settings page uses a two-panel layout:

- **Left panel** — navigation menu with 8 sections
- **Right panel** — the selected section's configuration fields

### Navigation Sections

| Section | What you configure |
|---------|--------------------|
| **Company** | Organization name, address, industry, fiscal year |
| **Users & Roles** | Add/remove platform users, assign roles |
| **Payroll** | Pay schedule, payroll provider, tax settings, centralized rate config |
| **Benefits Admin** | Configurable benefit plans, eligibility rules, broker invites |
| **Billing** | Plan tier, payment method, invoice history, upgrade/downgrade |
| **Notifications** | Email and in-app notification preferences |
| **Security** | Password policies, session timeout, two-factor authentication |
| **Integrations** | Connect third-party tools (real OAuth flows for most integrations) |

---

## Company

The Company section stores your organization's core information, which is used throughout the platform — on T4s, ROEs, payroll reports, and compliance documents.

> **[Screenshot: Company settings section]**

### Fields

| Field | Notes |
|-------|-------|
| **Company Name** | Legal business name as registered with the CRA |
| **Business Number (BN)** | Your 9-digit CRA Business Number |
| **Address** | Registered business address |
| **Province** | Province of registration (may differ from employee provinces) |
| **Industry** | Industry category — affects some ESA and compliance defaults |
| **Fiscal Year Start** | The start month of your fiscal year (default: January) |
| **Company Logo** | Upload your logo for use in reports and documents |

---

## Users & Roles

Manage who has access to Hibiscus HR and what they can do.

> **[Screenshot: Users & Roles section showing the user list and Add User button]**

### User List

The user list shows every person with access to your Hibiscus HR account:

| Column | Description |
|--------|-------------|
| **Name** | Full name |
| **Email** | Login email |
| **Role** | Current role assignment |
| **Last Login** | Most recent login date |
| **Status** | Active or Deactivated |

### Adding a User

Click **+ Add User** to invite a new person to the platform.

| Field | Notes |
|-------|-------|
| **Email** | The email address they will use to log in |
| **Role** | Select one of the four platform roles |
| **Send Invite** | Toggle on to email them a welcome message with login instructions |

### Platform Roles

| Role | Access level |
|------|-------------|
| **Super Admin** | Full access — all modules, all settings, user management |
| **HR Admin** | All modules — add/edit employees, approve leave, run payroll, manage compliance |
| **Payroll Admin** | Payroll module, Employees (read-only), Reports (payroll tab) |
| **Manager** | Leave approvals for their team, Time & Attendance for their team, read-only Reports |

### Deactivating a User

Click the three-dot menu next to any user and select **Deactivate**. The user's account is immediately disabled — they cannot log in, but their activity history is preserved.

---

## Payroll

Configure how payroll is run at your organization.

> **[Screenshot: Payroll settings section]**

### Fields

| Field | Notes |
|-------|-------|
| **Pay Schedule** | Weekly, bi-weekly, semi-monthly, or monthly |
| **Pay Day** | Which day of the week or month payroll is deposited |
| **Default Province** | The province used when no specific province is set on an employee |
| **TD1 Defaults** | Default federal and provincial TD1 personal amount claims |
| **Payroll Contact** | The internal contact for payroll questions |

### Centralized Rate Configuration

All CRA payroll rates — CPP, CPP2, EI, QPP, QPIP, federal and provincial tax brackets — are stored in year-versioned rate files (e.g. `2026.js`). This centralized configuration makes annual rate updates straightforward:

1. The current year's rates are loaded automatically based on the calendar year
2. When the CRA publishes new rates for the next year, copy the current year file (e.g. `2026.js` to `2027.js`) and update the values
3. All payroll calculations across the platform immediately use the new rates

This ensures every payroll run uses the correct, up-to-date CRA rates without requiring code changes.

---

## Benefits Admin

Configure your benefits program structure. Hibiscus HR supports fully configurable benefit plans — you are no longer limited to a fixed set of plan types.

> **[Screenshot: Benefits Admin settings section showing configurable plans and broker invite]**

### Configurable Benefit Plans

Create, edit, and deactivate your own benefit plans directly from this section. You can also manage plans from the Benefits module.

**Supported plan types (10):**

| Plan Type | Description |
|-----------|-------------|
| **Health** | Extended health care (prescriptions, paramedical) |
| **Dental** | Preventive and restorative dental coverage |
| **Vision** | Eyecare and eyewear |
| **Life Insurance** | Group life insurance |
| **Disability (Short-Term)** | Short-term disability coverage |
| **Disability (Long-Term)** | Long-term disability coverage |
| **Critical Illness** | Lump-sum payout for qualifying diagnoses |
| **AD&D** | Accidental death and dismemberment |
| **EAP** | Employee assistance program |
| **HSA/WSA** | Health or wellness spending account |

### Plan Configuration Fields

For each benefit plan:

| Field | Notes |
|-------|-------|
| **Plan Name** | Descriptive name (e.g. "Gold Health Plan") |
| **Plan Type** | Select from the 10 supported types |
| **Provider** | Insurance carrier name |
| **Plan Number** | Your policy/group number with the provider |
| **Employee Premium** | Monthly employee contribution |
| **Employer Premium** | Monthly employer contribution |
| **Cost Split** | Visual cost split bar showing employer vs. employee share |
| **Waiting Period** | Number of days after start date before eligibility begins |
| **Status** | Active or Deactivated |

### Cost Split Visualization

Each plan displays a visual cost split bar showing the percentage split between employer and employee contributions. This makes it easy to see at a glance how costs are shared across your benefits program.

### Deactivating a Plan

Click **Deactivate** on any plan to remove it from new enrollments. Existing enrollments are preserved for audit purposes, but no new employees can be enrolled in a deactivated plan. Deactivated plans can be reactivated at any time.

### Eligibility Rules

| Rule | Options |
|------|---------|
| **Eligible Employment Types** | Full-Time only, or Full-Time + Part-Time |
| **Minimum Hours/Week** | Minimum weekly hours to qualify (e.g. 20 hours) |
| **Waiting Period** | Days from start date until coverage begins |

### Broker Invite

Click **Invite Broker** to send an access invitation to your external benefits broker. The broker receives an email with a secure login link that grants them read-only access to the Benefits module, including plan configurations, enrollment data, and benefits enrollment CSV downloads (with SINs and addresses redacted in the broker-facing version).

| Field | Notes |
|-------|-------|
| **Broker Name** | Contact name at the brokerage |
| **Broker Email** | Email address for the invitation |
| **Brokerage Name** | Name of the brokerage firm |

The broker's access can be revoked at any time from this section.

---

## Billing

The Billing section manages your Hibiscus HR subscription, payment method, and invoice history.

> **[Screenshot: Billing settings section showing plan cards and invoice history]**

### Plan Tiers

Hibiscus HR offers three plan tiers. Your current plan is highlighted with a "Current Plan" badge.

| Plan | Price | Employee Limit | Storage | Modules Included |
|------|-------|---------------|---------|-----------------|
| **Starter** | $8 / employee / month | Up to 25 | 1 GB | Dashboard, Employees, Leave Management, Time & Attendance, Onboarding & Offboarding, Compliance |
| **Growth** | $12 / employee / month | Up to 150 | 5 GB | Everything in Starter, plus Payroll, Performance, Benefits, Reports, Integrations, T4 Filing, ROE generation |
| **Scale** | $16 / employee / month | Unlimited | 25 GB | Everything in Growth, plus multi-location support and advanced analytics |

Modules not included in your current plan are visible in the sidebar but display a lock icon and an upgrade prompt when clicked.

### Upgrade / Downgrade

Click **Change Plan** to switch between tiers. Upgrades take effect immediately. Downgrades take effect at the end of the current billing cycle.

### Payment Method

Click **Add Payment Method** or **Update Payment Method** to securely enter or change your credit card. Card verification is handled by **HelcimPay.js** — card data is tokenized in the browser and never touches Hibiscus HR servers. The platform is **PCI compliant** through this integration.

### Estimated Monthly Charge

A summary card shows your estimated charge for the current billing period:

| Item | Description |
|------|-------------|
| **Plan** | Your current tier (Starter, Growth, or Scale) |
| **Active Employees** | Number of employees in the current period |
| **Base Charge** | Per-employee rate x active employees |
| **Sales Tax** | GST/HST/PST/QST calculated by place of supply (your company province) |
| **Estimated Total** | Base charge + applicable taxes |

### Place-of-Supply Tax

Sales tax is calculated based on your company's province of registration, following Canadian place-of-supply rules:

| Province Type | Tax Applied |
|--------------|-------------|
| HST provinces (ON, NB, NS, NL, PE) | HST only |
| BC, MB, SK | GST + PST |
| Quebec | GST + QST |
| Alberta, Territories | GST only |

### Invoice History

A table listing all past invoices with the following columns:

| Column | Description |
|--------|-------------|
| **Invoice Date** | Date the invoice was generated |
| **Period** | Billing period covered |
| **Amount** | Total charge including tax |
| **Status** | Paid, Pending, or Failed |
| **Download** | Click to download a branded PDF invoice |

Invoices are automatically generated after each monthly charge and emailed to the billing contact. Each invoice includes a full tax breakdown (GST, HST, PST, or QST as applicable).

---

## Notifications

Control which events trigger email and in-app notifications, and who receives them.

> **[Screenshot: Notifications settings section]**

### Notification Events

| Event | Default recipients |
|-------|--------------------|
| New leave request submitted | Manager of the employee, HR Admin |
| Leave request approved/denied | Employee |
| Document expiring in 30 days | HR Admin |
| Document expired | HR Admin |
| ROE due within 5 days | HR Admin, Payroll Admin |
| New employee added | HR Admin |
| Payroll run completed | Payroll Admin |
| CRA deadline within 14 days | Payroll Admin, HR Admin |

Toggle each notification on or off. You can also add custom email addresses to any notification event.

---

## Security

Configure security settings for your organization's Hibiscus HR account.

> **[Screenshot: Security settings section]**

### Options

| Setting | Description |
|---------|-------------|
| **Password minimum length** | Minimum characters required for all user passwords |
| **Password complexity** | Require uppercase, numbers, and special characters |
| **Session timeout** | Minutes of inactivity before users are automatically logged out |
| **Two-factor authentication** | Require 2FA for all users or Super Admins only |
| **Login attempt limit** | Number of failed logins before account is temporarily locked |

---

## Integrations

Connect Hibiscus HR to your other business tools.

> **[Screenshot: Integrations settings section showing available integration tiles]**

### Integration Categories

Integrations are grouped into seven categories in the Settings → Integrations tab:

1. **Accounting**
2. **Benefits Carriers**
3. **Identity & SSO**
4. **Communication**
5. **Recruiting**
6. **Government & Compliance**
7. **Background Checks**

Each integration tile shows its current status — **Live**, **Connected**, **Available**, or **Coming Soon** — along with the appropriate action button.

### Available Integrations

#### Accounting

| Integration | Connection Type | Purpose |
|-------------|----------------|---------|
| **QuickBooks Online** | OAuth 2.0 | Post payroll journal entries, deductions, and employer contributions directly into your QuickBooks chart of accounts after each pay run |
| **Xero** | OAuth 2.0 | Post payroll costs and employee expenses into Xero and read your chart of accounts |
| **Sage 50 Canada** | CSV export | Download a GL journal CSV from the payroll completion screen and import it into Sage 50 |

#### Benefits Carriers

| Integration | Connection Type | Purpose |
|-------------|----------------|---------|
| **Manulife GroupBenefits** | CSV export | Download a Manulife-filtered universal benefits enrollment CSV to hand off to your broker or Manulife plan admin team |
| **Sun Life Connect** | CSV export | Download a Sun Life-filtered universal benefits enrollment CSV to hand off to your broker or Sun Life plan admin team |
| **Canada Life** | CSV export | Download a Canada Life-filtered universal benefits enrollment CSV to hand off to your broker or Canada Life plan admin team |

#### Identity & SSO

| Integration | Connection Type | Purpose |
|-------------|----------------|---------|
| **Microsoft SSO** | OAuth 2.0 (live) | Sign in with a Microsoft work or personal account — no separate password required |
| **Google SSO** | OAuth 2.0 (live) | Sign in with a Google account — no separate password required |
| **Okta** | OAuth 2.0 | Enterprise SSO via Okta — *coming soon* |

#### Communication

| Integration | Connection Type | Purpose |
|-------------|----------------|---------|
| **Slack** | OAuth 2.0 | Post real-time HR alerts to a Slack channel — leave approvals, payroll completion, ROE deadlines, onboarding tasks |
| **Microsoft Teams** | Webhook URL | Send HR notifications to a Teams channel via incoming webhook |

#### Recruiting

| Integration | Connection Type | Purpose |
|-------------|----------------|---------|
| **LinkedIn Jobs** | OAuth 2.0 | Automatically post "We're hiring" updates to your LinkedIn page when a position opens through offboarding |
| **Indeed Canada** | API key | Post open roles to Indeed Canada and import applicants directly into onboarding — *coming soon* |
| **Greenhouse** | API key | ATS handoff — when a candidate is marked Hired in Greenhouse, trigger onboarding in Hibiscus HR — *coming soon* |

#### Government & Compliance

| Integration | Connection Type | Purpose |
|-------------|----------------|---------|
| **CRA My Business Account** | XML export | Generate CRA-compliant T4/T4A XML files from the T4 Filing page and upload via CRA Internet File Transfer |
| **Service Canada ROE Web** | XML export | Generate Record of Employment XML files from each offboarding record and upload to ROE Web |
| **WSIB eBusiness** | API key | File WSIB injury reports and premium payments for Ontario employees — *coming soon* |

#### Background Checks

| Integration | Connection Type | Purpose |
|-------------|----------------|---------|
| **Sterling Canada** | API key | Order criminal, credit, and reference checks directly from onboarding — *coming soon* |
| **Triton Canada** | API key | Canadian criminal record checks, vulnerable sector checks, and reference verification — *coming soon* |

### OAuth Integrations

QuickBooks Online, Xero, Slack, LinkedIn Jobs, Microsoft SSO, and Google SSO use real OAuth 2.0 flows. When you click **Connect** (or **Sign in with…**), you are redirected to the provider's login page to authorize access. No API keys or secrets need to be entered manually.

For the accounting integrations (QuickBooks and Xero), Hibiscus HR requests the minimum scopes needed to post manual journal entries and read your chart of accounts — nothing more.

For the SSO integrations (Microsoft and Google), authentication is handled entirely on the provider side — Hibiscus HR receives only the verified email and basic profile.

### Webhook Integrations

**Microsoft Teams** uses an incoming webhook URL rather than OAuth. In Teams: select a channel → Connectors → Incoming Webhook → Create → copy the URL into the Teams integration tile in Hibiscus HR.

### CSV Export Integrations

Sage 50, Manulife, Sun Life, and Canada Life are **export integrations**. Canadian SMB carriers and desktop accounting products don't accept direct third-party API uploads, so Hibiscus HR generates clean, industry-standard CSV files that you hand off to the destination — your broker, the carrier's enrollment team, or your Sage 50 import wizard.

- **Sage 50 Canada** — The GL export button lives on the payroll wizard's completion screen (Step 5). After processing a pay run, click **Download Sage 50 GL Export (CSV)** to get a balanced journal entry file you can import into Sage 50 via File → Import/Export → Import Records → General Journal Entries. Account numbers use Canadian small-business defaults; edit in Excel or remap during Sage's import wizard to match your chart of accounts.

- **Benefits carriers (Manulife / Sun Life / Canada Life)** — Clicking the carrier tile in Settings → Integrations opens a panel with a **Download Enrollment CSV** button. This produces the same 22-column universal benefits enrollment CSV available from the Benefits module toolbar, but pre-filtered to that one carrier's plans. Your broker or the carrier's enrollment team can map the columns into the carrier's own template — none of these portals (Manulife GroupNet, Sun Life Connect, Canada Life GroupNet) accepts raw uploads from third-party HR platforms.

### XML Export Integrations

CRA Internet File Transfer and Service Canada ROE Web both use regulator-specified XML formats. The files are generated by their respective source modules (T4 Filing for CRA, Offboarding for ROE Web) and you upload them to the regulator's portal manually.
