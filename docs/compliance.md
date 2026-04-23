---
sidebar_position: 10
sidebar_label: "Compliance"
---

# Compliance

The Compliance module is your audit-readiness hub. It tracks employment document expiry dates, monitors ESA obligations, maintains a CRA filing calendar, and gives you a live compliance score across your organization. If something needs attention — an expiring certificate, a missed ROE, an overtime violation — it surfaces here.

For the **policy-authoring** side of compliance (writing employee handbooks and HR policies), see the separate [AI Handbook & Policies](./handbook-policies.md) module. The two work together: policies you publish there count toward compliance readiness, and employee handbook acknowledgements are tracked separately for audit.

> **[Screenshot: Compliance module showing the Overview tab with the compliance score and checklist]**

---

## Six Tabs

| Tab | Purpose |
|-----|---------|
| **Overview** | Compliance score and priority checklist |
| **Trend** | 30/90-day history of your compliance score and findings |
| **Documents** | All employment documents with expiry tracking |
| **CRA Calendar** | Upcoming CRA and provincial filing deadlines |
| **ESA Audit** | Employment Standards Act compliance checklist and overtime violations |
| **Incidents** | Workplace incident reports and WSIB tracking |

---

## Compliance-as-Monitoring

Hibiscus HR doesn't just tell you what's compliant right now — it **watches your compliance posture every day** and emails you when something breaks. Most HR platforms are data-entry tools; you find out you're out of compliance when an auditor tells you. Compliance-as-Monitoring flips that: the system scans your ESA obligations daily and pages you the moment a new problem appears.

Three things happen automatically:

1. **Daily background scan** — Every day, the platform re-runs the ESA compliance checks for your organization and stores a snapshot (score + findings). This builds your historical trend line over time.
2. **Dashboard compliance widget** — A live health score sits at the top of your Dashboard with the top 3 action items, a 30-day sparkline, and a "new this week" pill when something recently broke.
3. **Email notifications** — Opt-in alerts when things change:
   - **Weekly Digest** (every Monday morning): current score, 7-day trend direction, what's new this week, link back to the Dashboard.
   - **Instant Alerts** (same day): whenever the daily scan finds a new *action-required* item, admins are emailed immediately — not waiting for Monday.

Both email types are controlled from **[Settings → Notifications → Compliance](./settings.md)**. They're on by default and can be toggled off independently. The first Monday digest arrives after at least 7 days of data; instant alerts require at least one prior daily snapshot to compare against.

> **[Screenshot: Dashboard compliance health widget showing score, findings, sparkline]**

---

## Overview Tab

### Compliance Score

A circular progress indicator shows your organization's overall **Compliance Score** — a percentage representing how many compliance items are in good standing.

> **[Screenshot: Compliance score circular gauge with the breakdown below it]**

The compliance score is computed from **real employee and organizational data**, including:

- Document currency (valid, expiring, or expired certifications and work permits)
- ROE filing status (filed on time, pending, or overdue)
- ESA checklist completion (minimum wage compliance, SIN on file, emergency contacts, overtime violations)
- CRA deadline adherence

The score is broken down into three categories:

| Category | Description |
|----------|-------------|
| **Complete** | Items with no issues (documents current, ROEs filed, ESA items met) |
| **Expiring** | Items expiring within 30 days — action recommended soon |
| **Action Required** | Items that are expired, overdue, or flagged as violations |

The score is recalculated automatically as you update records throughout the platform.

### Compliance Checklist

Below the score is a dynamic checklist combining items from all compliance categories. Each item shows:

- A status icon (green checkmark, amber warning, red alert)
- A description of the item
- A linked action (e.g. "Renew", "File ROE", "Review")

> **[Screenshot: Compliance checklist with a mix of green, amber, and red items]**

Items on the checklist are drawn from:
- Employment documents nearing expiry or expired
- Overdue or nearly-due ROE filings
- ESA checklist items not confirmed
- CRA deadlines within 14 days

---

## Trend Tab

The **Trend tab** is the historical counterpart to the Overview tab. Where Overview shows "what's broken right now," Trend shows "how has our compliance changed over time."

> **[Screenshot: Trend tab showing the score line chart, stat tiles, and daily breakdown table]**

### Range Selector

Toggle between **7 / 30 / 90 days** at the top. Each option pulls the matching window from your daily snapshot history.

### Stat Tiles

Four cards summarize the selected window:

| Tile | Shows |
|------|-------|
| **Current** | Latest score and how it changed vs the start of the window |
| **Average** | Mean score across the window |
| **Best** | Highest score in the window |
| **Worst** | Lowest score in the window (red-tinted if below 60) |

### Score Chart

A line chart plots your daily ESA score (0–100) across the range, with horizontal reference lines at **60** (amber threshold) and **85** (green threshold). Each daily data point is coloured green / amber / red based on where it falls — a quick way to spot multi-day drops before they become a problem.

### Daily Breakdown Table

Below the chart, a table shows each day's exact figures: score, action-required count, watch count, passing count. Useful for pinpointing *which day* a regression started so you can correlate it with a hire, a policy change, or an expired document.

### When the Tab Is Empty

On a brand-new tenant there's no history yet. The Trend tab shows a placeholder ("No history yet — check back tomorrow") until the daily scan has written at least one snapshot. Full chart behaviour requires 2+ data points; most admins start seeing useful trend lines within the first week.

---

## Documents Tab

The Documents tab tracks every employment document on file across all employees — certifications, training records, work permits, and other time-limited documents.

> **[Screenshot: Documents tab showing the filter buttons and document table]**

### Filter Buttons

At the top of the Documents tab, four filter buttons let you narrow the view:

| Filter | Shows |
|--------|-------|
| **All** | Every document on file |
| **Expired** | Documents where the expiry date has passed |
| **Expiring** | Documents expiring within the next 30 days |
| **Current** | Documents that are valid and not near expiry |

### Document Table Columns

| Column | Description |
|--------|-------------|
| **Employee** | Name of the employee the document belongs to |
| **Document Type** | E.g. First Aid Certificate, WHMIS Training, Work Permit, Driver's Abstract |
| **Issued** | Date the document was issued |
| **Expires** | Expiry date |
| **Status** | Current, Expiring, or Expired |
| **Action** | Renew button for expiring/expired documents |

> **[Screenshot: Document table with a mix of Current, Expiring, and Expired rows]**

### Filter Badges with Counts

Each filter button displays a count badge showing how many documents fall into that category (e.g. "Expired (3)", "Expiring (7)"). This gives you an instant overview of how many documents need attention without clicking into each filter.

### Adding a New Document

Click **+ Add Document** in the toolbar to add a compliance document. This flow is available from both the Documents tab and from an individual employee's profile.

> **[Screenshot: Add Document drawer with employee selector and document fields]**

| Field | Notes |
|-------|-------|
| **Employee** | Select the employee this document belongs to (pre-filled if adding from an employee profile) |
| **Document Type** | Select or type the document type (e.g. First Aid Certificate, WHMIS Training, Work Permit) |
| **Issued Date** | Date the document was issued |
| **Expiry Date** | When the document expires (leave blank for non-expiring documents) |
| **Certificate Number** | Optional — the document or certificate reference number |
| **File Upload** | Upload a copy of the document (PDF, image, or scan) |

Click **Save** to add the document. It immediately appears in the Documents table and is factored into the compliance score.

> **Tip:** You can also add documents from the Employee Profile — click the **Documents** tab on any employee, then **+ Add Document**.

### Renewing a Document — Guided Renewal Drawer

Click **Renew** on any expiring or expired document row to open the **Document Renewal** drawer.

> **[Screenshot: Document Renewal drawer showing the timeline and renewal fields]**

The renewal drawer includes:

| Element | Description |
|---------|-------------|
| **Timeline visualization** | A visual timeline showing three dates: Issued → Expired (or Expires) → New Expiry. This gives a clear picture of the document's lifecycle. |
| **New Expiry Date** | Enter the updated expiry date for the renewed document |
| **Renewal Method** | How the document was renewed (e.g. Online, In-Person, By Mail) |
| **Certificate Number** | The new certificate or document number (if applicable) |
| **File Upload** | Upload a copy of the renewed document (PDF, image, or scan) |

Click **Save Renewal** to update the record. The document status will update immediately from Expired or Expiring to Current.

### Bulk Renewal Reminders

Click **Send Renewal Reminders** in the toolbar to send email reminders to all employees who have expiring or expired documents. The system generates one email per employee listing all their documents that need attention.

### Document Status Colours

| Status | Colour | Meaning |
|--------|--------|---------|
| Current | Green | Valid — no action needed |
| Expiring | Amber | Expiring within 30 days — renew soon |
| Expired | Red | Expiry date has passed — renew immediately |

---

## CRA Calendar Tab

The CRA Calendar tab shows upcoming filing and payment deadlines from the CRA and provincial tax authorities. The calendar is **dynamically generated** for any year — use the **year selector** at the top of the tab to view deadlines for the current year, past years, or future years.

> **[Screenshot: CRA Calendar tab showing the year selector, category filter, and deadline list]**

### Category Filters

| Filter | Deadlines shown |
|--------|----------------|
| **All** | All upcoming deadlines |
| **Year-End** | T4, T4A, and year-end filing deadlines |
| **Remittance** | Monthly CPP, EI, and income tax remittance due dates |
| **Tax** | Corporate and payroll tax deadlines |
| **Provincial** | Province-specific payroll tax deadlines (e.g. Ontario EHT, Quebec payroll tax) |

### Deadline List

Each deadline shows:
- **Date** — the filing or payment due date
- **Title** — short description (e.g. "T4 filing deadline", "Monthly remittance due")
- **Description** — additional context about the obligation
- **Category** — coloured badge (Year-End, Remittance, Tax, Provincial)
- **Days remaining** — countdown to the deadline

Deadlines within 14 days are highlighted in amber. Past-due deadlines appear in red.

> **[Screenshot: CRA Calendar showing a mix of upcoming deadlines with category badges]**

### Key Annual Deadlines Reference

| Deadline | Date |
|---------|------|
| T4 / T4A filing | Last day of February |
| T4 employee copies issued | Last day of February |
| Corporate tax return (most small businesses) | 6 months after fiscal year-end |
| Monthly CRA remittance | 15th of following month |
| Ontario Employer Health Tax (EHT) | March 15 |
| Quebec payroll tax return | February 28 |

> **Note:** This list is for reference only. Your specific deadlines depend on your filing schedule, province, and CRA account type. Always verify with your accountant or the CRA directly.

---

## ESA Audit Tab

The ESA Audit tab checks your **real employee data** against provincial Employment Standards Act requirements and flags violations automatically.

> **[Screenshot: ESA Audit tab showing the info box, checklist with real-data checks, and overtime violations table]**

### ESA Coverage Note

A notice at the top of the tab explains the current coverage:

> *This audit covers Ontario ESA and federal Canada Labour Code. Quebec labour standards (CNESST) will be incorporated in Phase 2.*

### ESA Checklist

The checklist automatically checks real employee data and flags issues. Items are marked as **Confirmed** (green) when the data passes the check, or **Needs Review** (amber/red) when action is required.

| Check | What it verifies |
|-------|-----------------|
| **Minimum wage compliance** | All employees' hourly rates meet or exceed their province's minimum wage |
| **SIN on file** | All active employees have a Social Insurance Number recorded |
| **Emergency contacts** | All active employees have at least one emergency contact |
| **Overtime violations** | No employees have unapproved hours exceeding their provincial OT threshold |
| **Vacation entitlement** | Vacation entitlement meets provincial minimum |
| **Parental leave policy** | Parental leave policy documented |
| **Pay stubs provided** | Pay stubs provided each pay period |
| **Termination pay** | Termination pay calculated correctly for all offboardings |

Items marked **Needs Review** contribute to the Action Required count in your Compliance Score. Click on any item to see which employees are affected.

### Overtime Violations Table

If any employees have exceeded their provincial overtime threshold in recent pay periods without approved overtime, they appear in the **Overtime Violations** table.

> **[Screenshot: Overtime violations table]**

| Column | Description |
|--------|-------------|
| **Employee** | Name and province |
| **Province** | Determines the OT threshold applied |
| **Threshold** | Weekly OT threshold for their province |
| **Hours Worked** | Total hours in the flagged week |
| **OT Hours** | Hours above the threshold |
| **Week** | The week the violation occurred |

Use this table to ensure you are either paying overtime premiums or adjusting scheduling to avoid threshold breaches.

---

## Incidents Tab

The Incidents tab is a centralized register for workplace incident reports. It helps you document, track, and manage workplace incidents in compliance with provincial occupational health and safety requirements.

> **[Screenshot: Incidents tab showing the incident table with severity badges and WSIB flags]**

### Reporting a New Incident

Click **+ Report Incident** to open the Incident Report drawer.

> **[Screenshot: Incident Report drawer with all fields visible]**

#### Incident Details

| Field | Notes |
|-------|-------|
| **Date** | Date the incident occurred |
| **Time** | Time of the incident |
| **Location** | Where in the workplace the incident occurred (e.g. Warehouse, Office Floor 2, Parking Lot) |
| **Incident Type** | Injury, Near Miss, Property Damage, Hazard, Violence/Harassment, Environmental |
| **Severity** | Low, Medium, High, or Critical |

#### People Involved

| Field | Notes |
|-------|-------|
| **Reporter** | The person filing the report (defaults to the logged-in user) |
| **Affected Person** | The employee(s) directly involved in the incident |
| **Witnesses** | Any employees who witnessed the incident |

#### Description and Follow-Up

| Field | Notes |
|-------|-------|
| **Description** | Detailed account of what happened |
| **Immediate Action Taken** | What was done at the time to address the incident |
| **Follow-Up Required** | Toggle ON if additional follow-up actions are needed |
| **WSIB Reportable** | Toggle ON if this incident must be reported to WSIB (Ontario — 72-hour reporting requirement) |

> **Important (Ontario):** Under the Workplace Safety and Insurance Act, employers must report workplace injuries to the WSIB within 72 hours. Toggling the WSIB flag ensures the incident is tracked against this deadline.

Click **Submit Report** to file the incident.

### Incidents Table

The Incidents tab displays all reported incidents in a table:

| Column | Description |
|--------|-------------|
| **Date** | Date of the incident |
| **Type** | Incident type (Injury, Near Miss, etc.) |
| **Severity** | Severity badge (colour-coded: green for Low, amber for Medium, red for High, dark red for Critical) |
| **Location** | Where the incident occurred |
| **Reporter** | Who filed the report |
| **Status** | Open, Under Investigation, or Closed |
| **WSIB** | WSIB badge appears if the incident is flagged as WSIB-reportable |

### Incident Detail Drawer

Click any incident row to open the **Incident Detail Drawer**. The detail drawer provides a full view of the incident with editing capabilities and a complete audit trail.

> **[Screenshot: Incident Detail Drawer showing editable fields, investigation notes, and audit log]**

#### Editing an Incident

All incident fields are editable from the detail drawer — update the status, severity, people involved, or description as new information becomes available. Changes are saved when you click **Save Changes**.

#### Investigation Notes

Add timestamped investigation notes to document the progress of an investigation. Each note records:
- The note text
- Who added the note
- The date and time it was added

Notes cannot be deleted once added — this ensures a complete investigation record.

#### Audit Log

The bottom of the detail drawer shows a **full audit log** of every change made to the incident:

| Log entry | What it records |
|-----------|----------------|
| **Created** | When the incident was first reported and by whom |
| **Status changed** | Each status transition (Open → Under Investigation → Closed) with timestamp and user |
| **Field updated** | Any change to severity, type, location, or other fields |
| **Note added** | Each investigation note with author and timestamp |
| **WSIB flag changed** | When the WSIB reportable flag is toggled on or off |

The audit log is read-only and cannot be modified. It provides a complete, tamper-proof record of the incident lifecycle for compliance and legal purposes.

---

## Regulatory Archive (WORM Storage)

When a tenant account is cancelled, certain records must be retained for Canadian regulatory compliance — they cannot be deleted with the rest of the account data. Hibiscus HR archives these records to **Azure Blob Storage with time-based WORM (Write-Once-Read-Many) immutability**.

### What gets archived

| Category | Retention | Legal basis |
|----------|-----------|-------------|
| Payroll records | 7 years | CRA Income Tax Act s.230 |
| T4 / tax filings | 7 years | CRA |
| ROE filings | 6 years | Service Canada |
| Incident / WSIB records | 7 years | OHSA |
| Benefits enrollment | 7 years | CRA taxable benefit reporting |
| Employee records | 3 years after termination | ESA |
| Timesheets | 3 years | ESA |
| Performance reviews | 3 years | Employment standards |

### Immutability guarantee

The archive container has a **locked** time-based retention policy at the storage-infrastructure level. Once written, data cannot be modified or deleted — by Hibiscus HR staff, by the customer, or even by the storage administrator — until the retention period expires. This guarantee is enforced by Azure Storage, not by application code.

SINs within archived records remain encrypted with AES-256-GCM at the field level. Archives are stored in Azure Canada Central — data never leaves Canada.

See the [Data Retention Policy](https://hibiscushr.ca/data-retention) for the full customer-facing policy, including the three-tier retention model (90/120-day deletion windows).
