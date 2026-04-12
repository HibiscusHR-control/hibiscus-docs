---
sidebar_position: 12
sidebar_label: "Benefits"
---

# Benefits

The Benefits module administers your employee benefits program with fully configurable plans across 10 plan types. Create your own benefit plans, set employer/employee cost splits, manage eligibility rules, invite your benefits broker, and export enrollment data as a universal CSV to hand off to your broker or carrier team.

> **[Screenshot: Benefits module showing the plan cards, cost summary strip, and the Enrollments tab]**

---

## Overview

The Benefits module is organized into:

1. **Plan cards** — one card per benefit plan showing enrollment stats and cost
2. **Monthly cost summary strip** — total employer and employee costs
3. **Open enrollment alert** — employees who haven't made elections
4. **Tab bar** — switch between the Enrollments matrix and Open Enrollment list

---

## Plan Cards

Plan cards appear at the top of the Benefits page — one for each active benefit plan configured by your organization. Plans are fully configurable and support 10 plan types:

| Plan Type | Description |
|-----------|-------------|
| **Health** | Extended health care (prescriptions, paramedical, etc.) |
| **Dental** | Dental coverage (preventive and restorative) |
| **Vision** | Eyecare and eyewear coverage |
| **Life Insurance** | Group life insurance |
| **Disability (Short-Term)** | Short-term disability coverage |
| **Disability (Long-Term)** | Long-term disability coverage |
| **Critical Illness** | Lump-sum payout for qualifying diagnoses |
| **AD&D** | Accidental death and dismemberment |
| **EAP** | Employee assistance program |
| **HSA/WSA** | Health or wellness spending account |

> **[Screenshot: Plan cards in a row showing configurable plans with cost split bars]**

### Creating a New Plan

Click **+ Add Plan** to open the plan configuration drawer. Select a plan type, enter the provider details, set premiums, and define eligibility rules. See [Settings → Benefits Admin](./settings.md) for full plan configuration details.

### Editing and Deactivating Plans

Click **Edit** on any plan card to modify its configuration. Click **Deactivate** to remove a plan from new enrollments (existing enrollments are preserved). Deactivated plans can be reactivated at any time.

### What Each Plan Card Shows

| Element | Description |
|---------|-------------|
| **Plan icon** | Visual identifier for the plan type |
| **Plan name** | e.g. "Gold Health Plan", "Dental Basic" |
| **Plan type** | The category (Health, Dental, Vision, etc.) |
| **Provider** | The insurance provider for this plan |
| **Enrolled count** | Number of employees enrolled in this plan |
| **Enrollment %** | Percentage of eligible employees enrolled |
| **Progress bar** | Visual representation of enrollment rate |
| **Cost split bar** | Visual bar showing employer vs. employee premium split |
| **Employee cost** | Monthly employee contribution for this plan |
| **Employer cost** | Monthly employer contribution for this plan |
| **Details button** | Opens the plan detail drawer |

### Plan Detail Drawer

Click **Details** on any plan card to open the Plan Detail drawer.

> **[Screenshot: Plan Detail drawer showing coverage levels and provider information]**

The detail drawer shows:
- Full plan name and provider
- Coverage summary (what is included)
- Employee and employer monthly premiums
- Eligibility rules (e.g. full-time only, after 3-month waiting period)
- Enrolled employees list

---

## Monthly Cost Summary Strip

Below the plan cards, a summary strip shows your total benefits spend:

| Item | Description |
|------|-------------|
| **Total Employer Cost / Month** | What your organization pays in benefits premiums each month |
| **Employee Contributions / Month** | What employees contribute to their own premiums monthly |
| **Annual Employer Total** | Projected annual employer cost (monthly employer cost × 12) |
| **Manage Enrollment** | Button to open the enrollment management drawer |

> **[Screenshot: Monthly cost summary strip]**

---

## Open Enrollment Alert

If any active employees have not made benefits elections, an alert appears below the cost summary strip listing those employees and showing a **Remind All** button.

> **[Screenshot: Open Enrollment alert with employee names and the Remind All button]**

**Remind All** sends a notification to all employees on the list prompting them to complete their elections.

---

## Enrollments Tab

The Enrollments tab shows a **benefits matrix** — a table with one row per employee and one column per plan, making it easy to see at a glance which employees are enrolled in which plans.

> **[Screenshot: Benefits matrix table]**

### Matrix Table Columns

| Column | Description |
|--------|-------------|
| **Employee** | Name and avatar initials |
| **Health** | Enrollment status for the Health plan |
| **Dental** | Enrollment status for the Dental plan |
| **Vision** | Enrollment status for the Vision plan |
| **Life Insurance** | Enrollment status for the Life Insurance plan |
| **Plans Enrolled** | Badge showing X/4 plans enrolled |
| **Edit** | Opens the enrollment drawer for this employee |

### Matrix Cell Icons

| Symbol | Meaning |
|--------|---------|
| Green checkmark | Employee is enrolled in this plan |
| **W** badge | Employee has waived this plan |
| — | No election has been made |

> **[Screenshot: Matrix cells showing enrolled, waived, and no-election states]**

### Editing an Employee's Enrollment

Click **Edit** on any employee row to open the Enrollment drawer.

> **[Screenshot: Enrollment drawer with plan checkboxes and waive options]**

For each plan you can:
- **Enroll** — click the checkbox to enroll the employee in the plan
- **Waive** — click Waive to record the employee's decision to opt out

Click **Save** to record the changes. The matrix updates immediately.

> **Note:** Enrolling an employee in a plan they previously waived re-activates their enrollment. Waiving an active enrollment sets status to Waived.

### Searching Employees

Use the **Search** bar above the matrix to filter the table by employee name.

---

## Open Enrollment Tab

The Open Enrollment tab shows a list of employees who still need to complete their benefits elections.

> **[Screenshot: Open Enrollment tab showing the list of employees needing enrollment]**

For each employee on the list, two buttons are available:

| Button | Action |
|--------|--------|
| **Remind** | Sends a notification to the employee to complete their elections |
| **Enroll Now** | Opens the Enrollment drawer for this employee so you can complete elections on their behalf |

When all employees have made elections, the Open Enrollment tab shows a confirmation message: *"All employees have made benefit elections."*

---

## Open Enrollment Periods

Open Enrollment periods let you define a window during which employees can make or change their benefits elections. This is typically done annually but can be configured for any schedule.

### Creating an Open Enrollment Period

Click the **Open Enrollment** button in the monthly cost summary strip to open the Open Enrollment Period drawer.

> **[Screenshot: Open Enrollment Period drawer showing the configuration fields]**

| Field | Notes |
|-------|-------|
| **Period Name** | A descriptive name (e.g. "2026 Annual Open Enrollment", "Mid-Year Benefits Update") |
| **Start Date** | The first day employees can make elections |
| **End Date / Deadline** | The last day to submit elections — after this date, the enrollment period closes |
| **Eligible Employee Count** | Auto-calculated — shows how many active, benefits-eligible employees are included |
| **Send Notification** | Toggle ON to send an email to all eligible employees informing them the enrollment period is open |

### Duration Preview

Below the date fields, a duration preview shows how long the enrollment window will be open (e.g. "14 days", "3 weeks"). This helps you confirm the window is neither too short for employees to act nor unnecessarily long.

Click **Create Period** to activate the open enrollment window.

> **Note:** While an open enrollment period is active, the Open Enrollment tab on the Benefits page will show all employees who have not yet made their elections, along with Remind and Enroll Now buttons.

---

## Benefit Eligibility

Benefit eligibility is controlled by the **Benefits Eligibility** flag on each employee record in the [Employees](./employees.md) module. Employees marked as ineligible do not appear in the Open Enrollment list and are excluded from enrollment stats.

Common eligibility rules set by employers:
- Full-time employees only (Part-Time and Contract may be excluded)
- 3-month waiting period from start date before enrollment opens
- Minimum hours threshold (e.g. 20+ hours/week)

Configure your eligibility rules in [Settings → Benefits Admin](./settings.md).

---

## Broker Portal

Hibiscus HR includes a dedicated portal for external benefits brokers. Brokers get limited, read-only access to your benefits data without seeing sensitive employee information like SINs or banking details.

### Inviting a Broker

1. Go to **Settings → Benefits Admin**
2. Click **Invite Broker**
3. Enter the broker's name, email, and brokerage firm name
4. Click **Send Invite**

The broker receives an email with a secure login link. Once logged in, they see only the Benefits module with the following access:

| Access | Description |
|--------|-------------|
| **Plan configurations** | View all active and deactivated plans, premiums, and eligibility rules |
| **Enrollment data** | View enrollment counts and status by plan (no personal employee details) |
| **Enrollment CSV download** | Download a universal benefits enrollment CSV for handoff to the carrier (no SINs, no addresses in the broker-facing version) |
| **Cost summaries** | View monthly employer and employee cost totals |

Brokers **cannot** modify any data, access other modules, or view employee SINs, addresses, or banking information.

### Managing Broker Access

Broker access can be revoked at any time from Settings → Benefits Admin. Click the three-dot menu next to any broker and select **Revoke Access**.

---

## Enrollment CSV Export

Hibiscus HR generates a **universal benefits enrollment CSV** for sharing with your broker or carrier enrollment team.

Click **Export Enrollment CSV** from the Benefits module toolbar (or from the Broker Portal) to generate the file. The export includes 22 columns covering:

- Action (ADD, CHANGE, TERMINATE)
- Member identification (ID, name, relationship, SIN, date of birth)
- Contact details (email, phone, address)
- Employment details (hire date, employment status, department)
- Plan details (type, name, carrier, coverage start and end dates)

The file is a standard comma-separated CSV that opens cleanly in Excel or Google Sheets. From Settings → Integrations, you can filter the export by carrier (Manulife, Sun Life, or Canada Life) to produce a carrier-specific file.

### Why CSV instead of EDI 834?

Canadian SMB carriers (Manulife GroupNet, Sun Life Connect, Canada Life GroupNet) do not accept raw ANSI X12 834 file uploads from third-party HR platforms via their plan admin portals. That type of integration requires an ISV partnership and is generally reserved for enterprise payroll/HRIS vendors with thousands of covered lives per employer.

For Canadian SMBs, the practical workflow is: generate the enrollment CSV → hand it to your broker or the carrier's enrollment team → they apply the changes through the carrier's own admin tools. The CSV is human-readable, easy to review before sending, and can be mapped into any carrier-specific template.

> **Tip:** Open the CSV in Excel to verify the enrollment records before sending. The broker-facing version downloaded from the Broker Portal redacts SINs and addresses.
