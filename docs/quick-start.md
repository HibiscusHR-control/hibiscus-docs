---
sidebar_position: 2
sidebar_label: "Quick Start Guide"
---

# Quick Start Guide

Get your Hibiscus HR account running in under 15 minutes. This walkthrough covers the setup an accounting firm actually needs: firm profile, staff and partners, first payroll, and the ledgers that keep the firm ticking (CPD, dues, draws).

---

## Step 1 — Log in (1 minute)

1. Open **app.hibiscushr.ca**
2. Enter the email and password from your welcome email
3. First time in? Use the **Set your password** link in the invite email

You land on the **Dashboard** — firm health at a glance.

---

## Step 2 — Set up the firm (3 minutes)

Go to **Settings** (gear icon at the bottom of the sidebar) and click **Company** (in the **Firm** group).

Fill in the basics:

- **Firm name** — legal business name as registered with CRA
- **CRA Business Number** — your 9-digit BN
- **Address and province** — the firm's primary office
- **Active provinces** — toggle on every province where you have staff
- **Partnership fiscal year start month** — set this only if your partnership isn't on a calendar year (e.g. July for a July–June fiscal year). Default is January

Click **Save Changes**.

> **Why this matters:** the CRA number is used on every T4 and ROE. The fiscal-year setting drives the Partner Draws ledger.

---

## Step 3 — Add your staff (5 minutes)

Click **Employees** in the sidebar, then **+ Add Employee**.

The wizard has 4 steps:

| Step | What to enter |
|------|--------------|
| **1. Personal** | Name, work email, phone |
| **2. Employment** | Job title, department, province, employment type, salary, start date |
| **3. Emergency** | Emergency contact, SIN (optional now — the employee can enter it themselves) |
| **4. Review** | Confirm everything, toggle onboarding ON, click **Add Employee** |

For **employment type**, pick **Partner** for partners drawing on a T5013 and **Full-Time / Part-Time / Contract** for T4 staff. Only staff marked **Partner** appear in the Partner Draws ledger.

**Short on time?** Click **Save & Complete Later** on any step. Repeat for each employee.

**Migrating from another platform?** The Import Employees drawer supports CSV migration from Rise People, Wagepoint, Payworks, Humi, Ceridian Dayforce, ADP Canada, plus a generic template. Column mapping is automatic. See [Employees](./employees.md).

---

## Step 4 — Send onboarding invites (2 minutes)

For each new hire:

1. Go to **Onboarding** in the sidebar
2. Click the employee's card
3. Click **Send Onboarding Invite**

The employee finishes their own setup (SIN, banking, TD1) before their first day. No paper.

---

## Step 5 — Run first payroll (3 minutes)

Go to **Payroll** and click **Run Payroll**. The wizard:

1. **Select pay period** — pick the dates
2. **Preflight** — sanity checks. If your staff span multiple provinces, a warning surfaces (not a blocker) listing them
3. **Preview** — per-employee gross, CPP, EI, federal tax, provincial tax, net
4. **Confirm and process** — click to finalize

CPP, EI, and provincial tax are calculated automatically from the T4127 tables. CRA remittance is tracked for you.

---

## Step 6 — Set up the firm operations ledgers

The three ledgers most accounting firms want live from day one:

### Partner Draws

Go to **Partner Draws** (admin-only).

1. Confirm the partners you added in Step 3 appear in the ledger. Each partner needs an **annualDrawTarget** set on their profile
2. Add each partner's monthly (or ad-hoc) draw amount
3. The ledger tracks YTD total, ratio against target, policy status (over-drawn / on-track / under-drawn / no-target), and remaining headroom

Draw policy percentage (default 75) and tolerance percentage (default 10) come from Settings → Payroll. Fiscal-year override is honoured automatically. See [Partner Draws](./partner-draws.md).

### Credentials and CPD

Go to **Employees → click a staff member → Credentials tab**.

1. Add the credential (CPA Ontario, CPA BC, LSO, etc.) — 20 Canadian regulators pre-loaded
2. Cycle hours target and cycle length come from the registry
3. Log CPD activities as they happen (verifiable / unverifiable / ethics / other)

Expiring credentials feed the Dashboard's Partner Health widget. See [Credentials & CPD](./credentials.md).

### Professional Dues

Go to **Settings → Professional Dues** (in the **Pay & Comp** group).

1. Record annual dues you pay on behalf of staff
2. Set **paid-by** (firm / employee / split), **reimbursed by employer**, and the **T4 Box 40** taxable-benefit flag
3. The T4 slip generator picks these up automatically at year-end

See [Professional Dues](./professional-dues.md).

---

## Step 7 — Billing (2 minutes)

Go to **Settings → Billing**.

Verify payment method through HelcimPay.js (PCI-DSS Level 1). Card data is tokenized in your browser and never touches Hibiscus HR servers.

Billing is monthly in arrears, based on active employees during the billing period. Sales tax uses Canadian place-of-supply rules on your firm's province.

---

## What to try next

| Module | What to try |
|--------|------------|
| **Partner Draws** | Export the T5013-friendly CSV to preview what your tax-prep handoff will look like in season |
| **Reports → Utilization** | Set a 4- or 12-week window and see billable-hour utilization by staff member |
| **Credentials & CPD** | Log a couple of CPD activities; watch the cycle-hours badge update |
| **Leave Management** | Approve a leave request. If it's parental leave, the top-up eligibility surfaces automatically |
| **Compliance** | Check your compliance score. Nine ESA rules run nightly |
| **Integrations** | Connect QuickBooks Time (bearer token) or Karbon (AccessKey + Bearer) for time and utilization data |
| **Broker Portal** | Invite your benefits broker via Settings → Benefits Admin → Invite Broker |

---

## 5-minute daily routine

Once set up:

1. **Check the Dashboard** — Partner Health, upcoming CRA deadlines, expiring credentials, and pending leave
2. **Approve leave requests** — one click each
3. **Review timesheets** — approve weekly hours; billable-hours splits feed utilization
4. **Handle alerts** — CPD gaps, credential expiries, document expiry, ROE deadlines

That's it. The platform handles the compliance math. You make the calls.

---

## Getting help

- **User Guide:** browse this documentation for every module
- **FAQ:** the [Frequently Asked Questions](./faq.md) page
- **Support email:** support@hibiscushr.ca (one business day)
- **Sales:** sales@hibiscushr.ca
- **In-app:** the help icon in the bottom-left opens a support ticket
- **Demo:** [book a walkthrough](https://hibiscushr.ca/book-demo)

---

## Keyboard shortcuts

| Shortcut | Action |
|----------|--------|
| `Esc` | Close any open drawer or modal |
| Click **X** button | Close the drawer or modal (drawers do not close on backdrop click) |

---

## Tips for success

- **Start with a small subset of staff** to get comfortable before adding the whole firm
- **Use onboarding invites** — let each employee enter their own SIN and banking
- **Get partners' annualDrawTarget set early** so the ledger's policy math is meaningful from month one
- **Check compliance weekly** — the module surfaces issues before they bite
- **Export reports monthly** for the partners or the accountant
