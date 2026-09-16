---
sidebar_position: 5
sidebar_label: "Employees"
---

# Employees

The Employees module is the foundation. Every other module (payroll, leave, benefits, credentials, dues, partner draws) pulls from the records you maintain here. It covers the full staff lifecycle: hiring, ongoing management, and termination.

> **[Screenshot: Employees module — Active Employees tab with the table and toolbar]**

---

## Overview

The Employees module has three tabs:

| Tab | What it shows |
|-----|--------------|
| **Active Employees** | Everyone currently employed (partners plus T4 staff) |
| **Former Employees** | Terminated employees (archived after 1 year) |
| **Compensation Changes** | Pending, approved, and denied salary and role change requests |

---

## Active Employees tab

### The employee table

| Column | Description |
|--------|-------------|
| **Employee** | Avatar initials, full name, and work email |
| **Department** | Their department (e.g. Audit, Tax, Advisory, Admin) |
| **Province** | Province of employment — used for ESA and tax purposes |
| **Type** | Employment type: Full-Time, Part-Time, Contract, or **Partner** |
| **Salary** | Annual salary, hourly rate, or draw target (for partners) |
| **Status** | Active or On Leave |

Employment type **Partner** flags T5013 principals. Partners appear in the [Partner Draws](./partner-draws.md) ledger. Every other type runs T4 payroll.

### Search and filter

**Search bar** filters by name, email, department, or province in real time.

**Filter panel** dropdowns:

| Filter | Options |
|--------|---------|
| Department | All departments in your firm |
| Province | English-Canada provinces + territories |
| Status | Active, On Leave |
| Employment Type | Full-Time, Part-Time, Contract, Partner |

Active filters appear as removable badges below the toolbar.

### Export

Click **Export CSV** for a spreadsheet of the currently displayed employees.

### Row actions

| Action | Access |
|--------|--------|
| **Email** | Click the envelope icon |
| **View Profile** | Three-dot menu → View Profile |
| **Edit** | Three-dot menu → Edit |
| **Archive Employee** | Three-dot menu → Archive Employee (confirmation required) |

> **Important:** Archiving moves the employee to Former Employees and removes them from active rosters, payroll, and reports. The record stays in the database — Canadian ESA requires retention for 3 years after termination, so permanent deletion is not offered in the admin UI. For proper offboarding (with ROE filing, final pay), use the termination workflow. See [Offboarding](./onboarding-offboarding.md).

---

## Adding a new employee (guided wizard)

Click **+ Add Employee** in the top-right to launch the 4-step Employee Creation Wizard.

### Step Indicator

The wizard shows a step bar. Colour-coded: purple = current, green = completed (clickable to jump back), grey = future.

### Step 1 — Personal Info

| Field | Notes |
|-------|-------|
| **First Name** | Legal first name |
| **Last Name** | Legal last name |
| **Work Email** | Used for login and communications |
| **Phone Number** | Work or personal contact (optional) |
| **Address** | Home address (used for T4 generation, optional) |

### Step 2 — Employment Details

| Field | Notes |
|-------|-------|
| **Department** | Select from your configured departments |
| **Job Title** | e.g. Senior Accountant, Manager, Staff Accountant |
| **Province** | Province of employment — affects ESA rules, tax, and payroll |
| **Employment Type** | Full-Time, Part-Time, Contract, or **Partner** |
| **Start Date** | First day of employment |
| **Salary** | Annual salary (for salaried staff), hourly rate, or annualDrawTarget (for Partners) |

### Step 3 — Emergency & Compliance

| Field | Notes |
|-------|-------|
| **Emergency Contact Name** | Name of emergency contact |
| **Emergency Contact Phone** | Phone for emergency contact |
| **SIN** | Social Insurance Number (stored encrypted) |
| **Benefits Eligibility** | Whether this employee qualifies for benefits enrollment |

### Step 4 — Review & Onboarding

| Element | Notes |
|---------|-------|
| **Full summary** | Fields from steps 1 to 3 in read-only review |
| **Auto-start onboarding toggle** | Default ON — creates an onboarding record on submit |
| **Manager name** | Direct manager — used for onboarding tasks and leave approvals |

### Per-step validation

Only the current step is validated when you click **Next**. You don't need to complete future steps to proceed.

### Save & Complete Later

On steps 1, 2, and 3, click **Save & Complete Later** to save a draft. The employee appears in the table with a **Setup Incomplete** badge. Return any time and click **Complete Setup**.

### Final Submit

Click **Create Employee** on step 4. The employee immediately appears in the table and is available to every other module. If the onboarding toggle is ON, an onboarding record is created and a welcome email is sent.

---

## Importing employees from another platform

If you're migrating off another payroll or HR platform, use **Import Employees** (toolbar). The drawer includes a **source tool selector** that auto-maps columns from the CSVs those platforms export.

Supported source tools:

| Source | Notes |
|--------|-------|
| **Rise People** | Column map handles employee status enum and province codes |
| **Wagepoint** | Column map covers hourly and salaried structures |
| **Payworks** | Column map handles legacy employee codes |
| **Humi** | Column map covers named locations and department codes |
| **Ceridian Dayforce** | Column map covers Dayforce's flat export |
| **ADP Canada** | Column map handles the ADP Workforce Now export |
| **Generic Hibiscus template** | A blank template if none of the above fits |

The import normalizes:
- Province codes (e.g. `Ontario` → `ON`)
- Employment types (Rise's `permanent_full_time` → `Full-Time`)
- Salary strings (`$75,000.00` → `75000`)
- Mixed date formats (M/D/YYYY, YYYY-MM-DD, DD-MMM-YY)

Review flagged rows in the preview screen, then confirm the import. Migrated employees flow into Active Employees and can carry onboarding data forward through the standard wizard if you haven't already collected it.

---

## Credentials and CPD

Each employee's profile has a **Credentials** tab where you record their professional credentials (CPA Ontario, CPA BC, LSO, PEO, and 16 other regulators) and log CPD hours against the cycle.

See [Credentials & CPD](./credentials.md) for the full walkthrough.

---

## Partners

Employees with employment type **Partner** are automatically surfaced in [Partner Draws](./partner-draws.md). To make the draw ledger useful, set the partner's **annualDrawTarget** on their profile — the ledger uses it to compute ratio-against-target and policy status. See [Partner Draws](./partner-draws.md).

---

## Compensation Changes

Compensation changes (salary adjustments, promotions, role changes, demotions) follow a request-and-approval workflow so pay changes are documented, justified, and reviewed.

### Requesting a compensation change

1. Open the employee's profile (click their name)
2. Click **Request Change**
3. Fill in:

| Field | Notes |
|-------|-------|
| **Change Type** | Salary Adjustment, Promotion, Role Change, or Demotion |
| **Current Salary** | Auto-populated (read-only) |
| **Proposed Salary** | Enter the new amount |
| **Percentage Difference** | Auto-calculated |
| **Current Role** | Auto-populated (read-only) |
| **Proposed Role** | Enter the new role (for Promotion, Role Change, Demotion) |
| **Effective Date** | When the change takes effect |
| **Justification** | Required — explain the reason |

Click **Submit Request**.

### Reviewing changes (Admin)

The **Compensation Changes** tab lists all pending, approved, and denied requests. Pending rows show Approve and Deny buttons:

- **Approve** — the employee's salary and role update automatically as of the effective date
- **Deny** — the request is denied. HR enters review notes before confirming

> **Note:** Only HR Admin and Super Admin can approve or deny.

---

## Editing an Employee

Three-dot menu → **Edit** opens the Edit Employee drawer. All wizard fields are editable. Changes save when you click **Save**.

---

## Former Employees tab

Terminated employees, showing:

| Column | Description |
|--------|-------------|
| **Employee** | Name and email |
| **Department** | Department at termination |
| **Province** | Province at termination |
| **Type** | Employment type |
| **Last Salary** | Salary at termination |
| **Terminated Date** | Date employment ended |

### Auto-archiving

Former employee records are hidden from this tab one year after termination. Archived records are retained for the legally required period.

---

## Footer stats

At the bottom of the employee table, a count shows the current view against the total (e.g. "Showing 12 of 47 employees"). Updates dynamically with filters.
