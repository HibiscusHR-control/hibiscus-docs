---
sidebar_position: 5
sidebar_label: "Employees"
---

# Employees

The Employees module is the foundation of Hibiscus HR. Every other module — payroll, leave, benefits, performance — pulls from the employee records you maintain here. This module covers the full employee lifecycle: hiring, ongoing management, and termination.

> **[Screenshot: Employees module showing the Active Employees tab with the employee table and toolbar]**

---

## Overview

The Employees module has three tabs:

| Tab | What it shows |
|-----|--------------|
| **Active Employees** | All currently employed staff |
| **Former Employees** | Terminated employees (archived after 1 year) |
| **Compensation Changes** | Pending, approved, and denied salary/role change requests |

---

## Active Employees Tab

### The Employee Table

The Active Employees table displays the following columns:

| Column | Description |
|--------|-------------|
| **Employee** | Avatar initials, full name, and work email |
| **Department** | The employee's department (e.g. Engineering, Sales, Operations) |
| **Province** | Province of employment — used for ESA and tax purposes |
| **Type** | Employment type: Full-Time, Part-Time, or Contract |
| **Salary** | Annual salary or hourly rate |
| **Status** | Active or On Leave |

> **[Screenshot: Active Employees table with several rows visible]**

### Searching and Filtering

**Search bar** — Type any part of an employee's name, email, department, or province to filter the table in real time.

**Filter button** — Click to open the filter panel with the following options:

| Filter | Options |
|--------|---------|
| Department | All departments in your organization |
| Province | All 10 Canadian provinces |
| Status | Active, On Leave |
| Employment Type | Full-Time, Part-Time, Contract |

Apply multiple filters at once. Active filters are shown as badges below the toolbar. Click the × on any badge to remove that filter.

> **[Screenshot: Filter panel open with a couple of filters applied]**

### Exporting Employee Data

Click **Export CSV** to download a spreadsheet of all currently displayed employees (after any active filters are applied). The export includes all visible columns plus the employee's phone number.

### Employee Actions

Each row in the table has action controls on the right side:

| Action | How to access |
|--------|--------------|
| **Email** | Click the envelope icon to open a new email to this employee |
| **Call** | Click the phone icon to initiate a call (opens your default dialer) |
| **View Profile** | Click the three-dot menu → View Profile |
| **Edit** | Click the three-dot menu → Edit (opens the Edit Employee drawer) |
| **Delete Record** | Click the three-dot menu → Delete Record (requires confirmation) |

> **Warning:** Deleting an employee record is permanent and will remove them from all linked modules. For departing employees, use the termination workflow instead (see [Offboarding](./onboarding-offboarding.md)).

---

## Adding a New Employee (Guided Wizard)

Click the **+ Add Employee** button in the top-right corner to launch the 4-step Employee Creation Wizard.

> **[Screenshot: Employee Creation Wizard showing the step indicator and Step 1 form]**

### Step Indicator

The wizard displays a step indicator bar at the top. Each step is colour-coded:

| Colour | Meaning |
|--------|---------|
| **Purple** | Current step — the one you are filling in now |
| **Green** | Completed step — you can click it to go back and edit |
| **Gray** | Future step — not yet reached |

### Step 1 — Personal Info

| Field | Notes |
|-------|-------|
| **First Name** | Legal first name |
| **Last Name** | Legal last name |
| **Work Email** | Used for login and communications |
| **Phone Number** | Work or personal contact number (optional) |
| **Address** | Home address (used for T4 generation, optional) |

### Step 2 — Employment Details

| Field | Notes |
|-------|-------|
| **Department** | Select from your configured departments |
| **Job Title** | e.g. Software Developer, Operations Manager |
| **Province** | Province of employment — affects ESA rules, tax, and payroll |
| **Employment Type** | Full-Time, Part-Time, or Contract |
| **Start Date** | First day of employment |
| **Salary** | Annual salary (for salaried employees) or hourly rate |

### Step 3 — Emergency & Compliance

| Field | Notes |
|-------|-------|
| **Emergency Contact Name** | Name of emergency contact person |
| **Emergency Contact Phone** | Phone number for emergency contact |
| **SIN** | Social Insurance Number (stored encrypted) |
| **Benefits Eligibility** | Whether this employee qualifies for benefits enrollment |

### Step 4 — Review & Onboarding

Step 4 displays a summary of all information entered across the previous three steps. You can review everything before submitting.

| Element | Notes |
|---------|-------|
| **Full summary** | All fields from steps 1–3 displayed in a read-only review layout |
| **Auto-start onboarding toggle** | Default ON — automatically creates an onboarding record for this employee upon submission |
| **Manager name** | Enter the employee's direct manager — used for onboarding task assignments and leave approvals |

### Per-Step Validation

Only the fields on the current step are validated when you click **Next**. You do not need to fill in future steps' fields to proceed.

### Save & Complete Later

On steps 1, 2, and 3, a **Save & Complete Later** button is available. Clicking it saves a draft employee record. The employee appears in the Active Employees table with a **"Setup Incomplete"** badge. You can return to the wizard at any time by clicking the employee and choosing **Complete Setup** to resume from where you left off.

### Final Submit

Click **Create Employee** on step 4 to finalize the record. The new employee will immediately appear in the Active Employees table and will be available in all other modules. If the onboarding toggle is ON, an onboarding record is automatically created.

> **Tip:** After adding a new employee, you can also send them an onboarding invite so they can complete their own information through the [Employee Self-Service Portal](./onboarding-offboarding.md).

---

## Compensation Changes

Compensation changes — salary adjustments, promotions, role changes, and demotions — follow a request-and-approval workflow. This ensures all pay changes are documented, justified, and reviewed before taking effect.

### Requesting a Compensation Change

1. Open the employee's profile (click their name in the Active Employees table)
2. Click the **Request Change** button
3. Fill in the Compensation Change form:

| Field | Notes |
|-------|-------|
| **Change Type** | Salary Adjustment, Promotion, Role Change, or Demotion |
| **Current Salary** | Auto-populated from the employee's record (read-only) |
| **Proposed Salary** | Enter the new salary amount |
| **Percentage Difference** | Auto-calculated — shows the percentage increase or decrease |
| **Current Role** | Auto-populated (read-only) |
| **Proposed Role** | Enter the new role (for Promotion, Role Change, or Demotion) |
| **Effective Date** | The date the change should take effect |
| **Justification** | Required — explain the reason for the change |

Click **Submit Request** to create the pending compensation change.

### Compensation Changes Tab

A **Compensation Changes** tab is available on the Employees page alongside Active Employees and Former Employees. This tab lists all pending, approved, and denied compensation change requests.

> **[Screenshot: Compensation Changes tab showing pending requests with Approve/Deny buttons]**

### Reviewing Compensation Changes (HR)

Pending requests display **Approve** and **Deny** buttons for HR administrators:

- **Approve** — The employee's salary and/or role are automatically updated in the system as of the effective date. The change is logged in the employee's history.
- **Deny** — The request is marked as denied. HR must enter **review notes** explaining the reason for denial before confirming.

> **Note:** Only HR Admins and Super Admins can approve or deny compensation change requests.

---

## Editing an Employee

Click the three-dot menu on any employee row and select **Edit** to open the Edit Employee drawer. All fields from the Add Employee form are editable here.

Changes are saved immediately when you click **Save**.

---

## Former Employees Tab

The **Former Employees** tab shows all employees who have been terminated. This tab is important for:

- Accessing historical payroll records for terminated staff
- Viewing ROE filing status
- Generating T4s for employees who left during the tax year

> **[Screenshot: Former Employees tab showing the table with a terminated date column]**

### Former Employee Table Columns

| Column | Description |
|--------|-------------|
| **Employee** | Name and email |
| **Department** | Department at time of termination |
| **Province** | Province of employment |
| **Type** | Employment type |
| **Last Salary** | Salary at time of termination |
| **Terminated Date** | Date employment ended |

### Auto-Archiving

Former employee records are automatically archived (hidden from this tab) one year after their termination date. Archived records are retained for the legally required period for audit and tax purposes but are no longer visible in the UI.

---

## Footer Stats

At the bottom of the employee table you will see a count showing how many employees are currently displayed versus the total (e.g. "Showing 12 of 47 employees"). This updates dynamically when you apply search filters.
