---
sidebar_position: 14
sidebar_label: "Settings"
---

# Settings

The Settings module is where you configure your Hibiscus HR account: firm profile, users and roles, payroll preferences, professional dues, benefits administration, letter templates, notifications, integrations, security, and billing.

> **Access:** Settings are for Super Admins. HR Admins can view but not change most sections.

> **[Screenshot: Settings module with the left navigation and the Company section]**

---

## Settings navigation

Settings use a two-panel layout. The left panel groups 11 sections into five clusters. The right panel shows the selected section's configuration fields.

### The five groups

| Group | Sections |
|-------|----------|
| **Firm** | Company, Users & Roles |
| **Pay & Comp** | Payroll, Professional Dues |
| **Employee Experience** | Onboarding, Letter Templates, Benefits Admin |
| **Notifications & Integrations** | Notifications, Integrations |
| **Account** | Security, Billing |

---

## Company (Firm)

Firm's core information used across the platform — on T4s, ROEs, payroll reports, and compliance documents.

### Fields

| Field | Notes |
|-------|-------|
| **Firm Name** | Legal business name as registered with CRA |
| **Business Number (BN)** | Your 9-digit CRA BN |
| **Address** | Registered address |
| **Province** | Province of registration |
| **Industry** | Industry category (affects some defaults) |
| **Fiscal Year Start** | Corporation fiscal year start month (default: January) |
| **Partnership fiscal year start month** | Fiscal year override for the partnership — used by Partner Draws. Set to `1` for calendar year, `7` for a July–June year, etc. |
| **Firm Logo** | Upload your logo for reports and generated documents |

---

## Users & Roles (Firm)

Manage who has access and what they can do.

### User list

| Column | Description |
|--------|-------------|
| **Name** | Full name |
| **Email** | Login email |
| **Role** | Current role |
| **Last Login** | Most recent login |
| **Status** | Active or Deactivated |

### Adding a user

Click **+ Add User**:

| Field | Notes |
|-------|-------|
| **Email** | Their login email |
| **Role** | Select one of the platform roles |
| **Send Invite** | Toggle ON to email them a welcome message |

### Platform roles

| Role | Access |
|------|--------|
| **Super Admin** | Full access — all modules, all settings, user management, billing |
| **HR Admin** | All modules except system-level settings and billing |
| **Payroll Admin** | Payroll module, Employees (read-only), Reports (payroll tab) |
| **Benefits Admin** | Benefits module, broker invites |
| **Manager** | Leave approvals for their team, Time & Attendance for their team, read-only Reports |
| **Employee** | Self-service portal — profile, leave, pay stubs, T4s, benefits |
| **Broker** | Read-only Benefits (plan configurations, enrollment CSV — personal data redacted) |

### Deactivating a user

Three-dot menu → **Deactivate**. Login is disabled immediately, activity history preserved.

---

## Payroll (Pay & Comp)

### Fields

| Field | Notes |
|-------|-------|
| **Pay Schedule** | Weekly, bi-weekly, semi-monthly, or monthly |
| **Pay Day** | Which day of the week or month payroll is deposited |
| **Default Province** | Used when no specific province is set on an employee |
| **TD1 Defaults** | Default federal and provincial TD1 claim amounts |
| **Payroll Contact** | Internal contact for payroll questions |

### Partner Draws controls

Two settings that drive the Partner Draws policy math:

| Field | Default | What it does |
|-------|---------|--------------|
| **drawPolicyPct** | 75 | Target-draw threshold. A partner drawing >= this percentage of their annualDrawTarget for the fiscal year is flagged **on-policy** |
| **drawTolerancePct** | 10 | Wiggle room around the policy line. Between (drawPolicyPct - drawTolerancePct) and drawPolicyPct partners are **under-drawn (watch)**; above drawPolicyPct + drawTolerancePct they are **over-drawn (over-policy)** |

The **partnership_fiscal_year_start_month** setting on the Company section (see above) is respected — the ledger totals draws for the partnership fiscal year, not the calendar year.

### Parental top-up policy

Firm-level top-up on approved parental leave.

| Field | Default | Notes |
|-------|---------|-------|
| **Enabled** | Off | Toggle to switch top-up on |
| **Weeks** | 17 | How many weeks of top-up you'll pay |
| **Percentage** | 100 | Top-up percentage of regular pay |
| **Notes** | Empty | Firm-facing notes to display on the leave view |

When enabled and an employee's parental leave is approved, the leave view surfaces "top-up eligible: N weeks x $X/wk" so payroll knows to add the top-up to the pay run.

### Centralized rate configuration

CRA payroll rates (CPP, CPP2, EI, federal and provincial tax) are stored in year-versioned rate files. When CRA publishes new rates for the next year, copy the current year's file, update the values, and every calculation across the platform uses the new rates immediately. No code changes required.

---

## Professional Dues (Pay & Comp)

Firm-paid dues register. The firm pays CPA-body / LSO / PEO / EGBC / etc. dues on behalf of staff.

### Recording a dues payment

| Field | Notes |
|-------|-------|
| **Employee** | Select the employee |
| **Regulator** | CPA Ontario, CPA BC, LSO, etc. (pulls from the credentials registry) |
| **Amount** | Dues amount |
| **Tax Year** | The tax year this counts toward |
| **Paid By** | Firm, Employee, or Split |
| **Reimbursed by Employer** | Toggle when the firm reimbursed the employee after the fact |
| **T4 Box 40 taxable benefit** | Flag whether this counts as a taxable benefit for T4 purposes |

The T4 slip generator picks up rows marked as Box 40 taxable benefits and populates Box 40 automatically.

See [Professional Dues](./professional-dues.md) for the full picture.

---

## Onboarding (Employee Experience)

Configure the default 7-step onboarding template for new hires: task set per category (Documentation, Payroll, Benefits, IT, Orientation, Compliance), assignees, and due-date offsets from start date.

---

## Letter Templates (Employee Experience)

Manage the firm's letter template library — offer letters, employment verification letters, and other standard staff correspondence. Merge fields pull from the employee record.

---

## Benefits Admin (Employee Experience)

Configure your benefits program structure. Plans are fully configurable — you're not limited to a fixed set.

### Configurable benefit plans

Create, edit, and deactivate plans directly from this section (or from the Benefits module).

Supported plan types (10):

| Plan Type | Description |
|-----------|-------------|
| **Health** | Extended health care |
| **Dental** | Dental coverage |
| **Vision** | Eyecare and eyewear |
| **Life Insurance** | Group life |
| **Disability (Short-Term)** | STD |
| **Disability (Long-Term)** | LTD |
| **Critical Illness** | Lump-sum payout |
| **AD&D** | Accidental death and dismemberment |
| **EAP** | Employee assistance program |
| **HSA/WSA** | Health / wellness spending account |

### Plan configuration fields

| Field | Notes |
|-------|-------|
| **Plan Name** | Descriptive name |
| **Plan Type** | Select from the 10 types |
| **Provider** | Insurance carrier |
| **Plan Number** | Policy or group number |
| **Employee Premium** | Monthly employee contribution |
| **Employer Premium** | Monthly employer contribution |
| **Cost Split** | Visual bar showing employer vs employee share |
| **Waiting Period** | Days after start date before eligibility begins |
| **Status** | Active or Deactivated |

### RRSP formula (retirement plans)

Retirement plans carry a **rrspFormula** JSONB field. Three shapes:

| Shape | Config | What it does |
|-------|--------|--------------|
| **match** | matchPct, capPct | Employer matches up to `matchPct`% of employee's contribution, capped at `capPct`% of eligible earnings |
| **fixed_pct** | pct | Flat employer contribution of `pct`% of eligible earnings, regardless of what the employee contributes |
| **tiered** | tiers[] | Employer % scales with tenure. `[{ minYears: 0, pct: 3 }, { minYears: 5, pct: 5 }]` |

Payroll pulls this formula at pay time to compute the employer contribution.

### Broker invite

Click **Invite Broker** to send access to your external benefits broker. Same as before: broker gets read-only Benefits access.

| Field | Notes |
|-------|-------|
| **Broker Name** | Contact name |
| **Broker Email** | Invitation email |
| **Brokerage Name** | Brokerage firm |

Access is revocable at any time.

---

## Notifications (Notifications & Integrations)

Control which events trigger email and in-app notifications, and who receives them.

### Notification events

| Event | Default recipients |
|-------|---------------------|
| New leave request submitted | Manager of the employee, HR Admin |
| Leave request approved/denied | Employee |
| Document expiring in 30 days | HR Admin |
| Document expired | HR Admin |
| Credential expiring within 60 days | HR Admin, employee |
| CPD cycle target at risk | HR Admin, employee |
| ROE due within 5 days | HR Admin, Payroll Admin |
| New employee added | HR Admin |
| Payroll run completed | Payroll Admin |
| CRA deadline within 14 days | Payroll Admin, HR Admin |
| Partner draw exceeds policy | HR Admin |
| Weekly Partner Health digest | HR Admin |
| Weekly compliance digest (Monday) | HR Admin |

Toggle each on or off. Custom email addresses can be added to any event.

---

## Integrations (Notifications & Integrations)

See the full [Integrations](./integrations.md) page.

Categories:

- Accounting (QuickBooks Online, Xero, Sage 50 Canada)
- Time Tracking (QuickBooks Time)
- Practice Management (Karbon)
- Benefits Carriers (Manulife, Sun Life, Canada Life)
- Identity & SSO (Microsoft SSO, Google SSO)
- Communication (Slack, Microsoft Teams, Zapier via webhooks)
- Government & Compliance (CRA My Business Account, Service Canada ROE Web)

---

## Security (Account)

Security controls in effect at the platform level.

| Control | Description |
|---------|-------------|
| **Password requirements** | Min 8 characters, at least one uppercase, one lowercase, one number, one special. Enforced on every password set |
| **Breached-password check** | New and reset passwords are checked against the HIBP (Have I Been Pwned) database via k-anonymity — your password is never sent, only a hashed prefix |
| **HttpOnly session cookies** | Auth tokens stored in HttpOnly cookies. Scoped to `.hibiscushr.ca`, SameSite=Lax, Secure in production |
| **CSRF double-submit** | State-changing requests require a matching CSRF cookie + header |
| **Idle session timeout** | Sessions auto-logout after inactivity. 60-second warning before logout |
| **Field-level encryption** | SINs and banking details encrypted with AES-256-GCM at the column level |
| **Email verification** | New user accounts must verify email. A banner prompts unverified users |
| **Login rate limits** | Failed logins are rate-limited by email and IP |
| **SSO** | Sign in with Microsoft or Google available at login |

**On the Phase 2 roadmap:** TOTP / SMS 2FA, SSO-only mode, audit log export from the admin UI, in-product security posture dashboard.

---

## Billing (Account)

The Billing section manages your Hibiscus HR subscription, payment method, and invoice history.

### Single-tier pricing

Hibiscus HR ships with a single **$18 CAD / employee / month** tier during the founding-customer program. All modules are included. Founding customers get 50% off the first year.

### Payment method

Click **Add Payment Method** or **Update Payment Method** to enter or change your card. Card verification runs through **HelcimPay.js** — card data is tokenized in the browser and never touches Hibiscus HR servers. PCI-DSS Level 1 through Helcim.

### Estimated monthly charge

A summary card shows the estimate for the current period:

| Item | Description |
|------|-------------|
| **Active Employees** | Number in the current period |
| **Base Charge** | Per-employee rate x active employees |
| **Sales Tax** | GST / HST / PST / QST calculated by place of supply (your firm's province) |
| **Estimated Total** | Base + tax |

Partners on employment type Partner count as active employees.

### Place-of-supply tax

Sales tax follows Canadian place-of-supply rules based on your firm's province:

| Province Type | Tax Applied |
|---------------|-------------|
| HST provinces (ON, NB, NS, NL, PE) | HST |
| BC, MB, SK | GST + PST |
| Quebec | GST + QST |
| Alberta and Territories | GST |

### Invoice history

| Column | Description |
|--------|-------------|
| **Invoice Date** | When invoice was generated |
| **Period** | Billing period covered |
| **Amount** | Total including tax |
| **Status** | Paid, Pending, or Failed |
| **Download** | Branded PDF invoice |

Invoices are generated after each monthly charge and emailed to the billing contact. Every invoice includes a full tax breakdown.
