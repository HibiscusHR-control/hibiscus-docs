---
sidebar_position: 13
sidebar_label: "Reports"
---

# Reports

The Reports module brings together data from every module in a single analytics hub. Whether you need a workforce headcount for a board presentation, a payroll deduction breakdown for your accountant, or an overtime summary for a compliance review, it is all here.

> **[Screenshot: Reports module showing the five-tab bar and the Workforce report]**

---

## Five Report Tabs

| Tab | What it covers |
|-----|---------------|
| **Workforce** | Headcount, departments, provinces, salary bands, tenure |
| **Payroll** | YTD payroll, deductions, remittances, pay run history |
| **Leave** | Days approved by type, top leave takers, approval rates |
| **Performance** | Rating distributions, review completion, goal progress |
| **Time & Attendance** | Hours logged, overtime by province, weekly summaries |

---

## Exporting Reports

At the top of the Reports page, an **Export CSV** button downloads a summary report across all modules as a single spreadsheet. This is useful for board reporting or external HR audits.

---

## Workforce Report

> **[Screenshot: Workforce report showing KPI cards, headcount by department bars, and the employee roster table]**

### KPI Cards

| Card | Description |
|------|-------------|
| **Total Headcount** | All active employees |
| **New Hires (90 days)** | Employees whose start date is within the last 90 days |
| **Avg Annual Salary** | Mean salary across all active employees |
| **Inactive / Former** | Employees who have been terminated |

### Headcount by Department

A horizontal bar chart shows the number of employees in each department, sorted from largest to smallest. Each bar also shows the department's percentage of total headcount.

> **[Screenshot: Headcount by Department chart]**

### Province Distribution

A horizontal bar chart shows how your workforce is distributed across provinces. This is particularly useful for multi-province employers managing multiple ESA rule sets.

> **[Screenshot: Province Distribution chart]**

### Salary Bands

Employees are grouped into salary bands with a count for each band and a breakdown by employment type (Full-Time / Part-Time / Contract):

| Band | Range |
|------|-------|
| Under $50K | < $50,000/year |
| $50K – $75K | $50,000 – $74,999 |
| $75K – $100K | $75,000 – $99,999 |
| $100K – $130K | $100,000 – $129,999 |
| $130K+ | ≥ $130,000 |

> **[Screenshot: Salary Bands chart]**

### Employee Roster Table

A full roster of all active employees with the following columns:

| Column | Description |
|--------|-------------|
| **Name** | Full name |
| **Department** | Current department |
| **Type** | Full-Time, Part-Time, or Contract |
| **Province** | Province of employment |
| **Salary** | Annual salary |
| **Status** | Active or On Leave |
| **Tenure** | Length of service (shown in months for under 1 year, years for over 1 year) |

---

## Payroll Report

> **[Screenshot: Payroll report showing KPI cards, deduction breakdown, and pay run history table]**

### KPI Cards

| Card | Description |
|------|-------------|
| **YTD Gross Payroll** | Total gross wages paid since January 1 |
| **YTD Net Payroll** | Total net pay deposited since January 1 |
| **Avg Cost per Run** | Mean gross pay per payroll run year-to-date |
| **YTD Cost per Head** | Total YTD gross divided by active employee count |

### Deduction Breakdown

A table showing each deduction category as a dollar amount and percentage of gross pay:

| Category | Description |
|----------|-------------|
| **Federal Tax** | Federal income tax withheld year-to-date |
| **Provincial Tax** | Provincial income tax withheld year-to-date |
| **CPP (Employee)** | Employee CPP contributions year-to-date |
| **EI (Employee)** | Employee EI premiums year-to-date |
| **Net Pay** | After all deductions |

> **[Screenshot: Deduction breakdown table]**

### YTD Remittance Summary

A breakdown of your total CRA remittance obligation year-to-date:

| Item | Notes |
|------|-------|
| **CPP (Employer)** | 1.1× the employee CPP amount (employer match) |
| **EI (Employer)** | 1.4× the employee EI amount (employer share) |
| **Federal Tax Withheld** | Sum of federal income tax across all employees |
| **Provincial Tax Withheld** | Sum of provincial income tax across all employees |
| **Total Remittance** | Sum of all four items |

### Pay Run History Table

Every payroll run listed with full detail:

| Column | Description |
|--------|-------------|
| **Period** | Pay period date range |
| **Employees** | Count of employees included |
| **Gross Pay** | Total gross for the period |
| **CPP** | Employee CPP deducted |
| **EI** | Employee EI deducted |
| **Fed. Tax** | Federal income tax withheld |
| **Prov. Tax** | Provincial income tax withheld |
| **Net Pay** | Total net pay |
| **Status** | Processed or Draft |

---

## Leave Report

> **[Screenshot: Leave report showing KPI cards, days by leave type chart, and leave requests table]**

### KPI Cards

| Card | Description |
|------|-------------|
| **Total Leave Requests** | All leave requests ever submitted |
| **Total Days Approved** | Sum of approved leave days year-to-date |
| **Avg Days per Request** | Mean length of approved leave requests |
| **Approval Rate** | Percentage of requests that were approved (vs denied) |

### Days by Leave Type

A horizontal bar chart showing approved days broken down by leave type, with a request count for each. This shows where leave is being consumed most.

> **[Screenshot: Days by Leave Type chart]**

### Top Leave Takers

A horizontal bar chart showing the top 5 employees by approved days year-to-date. Useful for identifying employees who may be approaching their entitlement limits.

### Approval Status Summary

Three mini-cards showing counts across your entire leave history:

| Card | Count |
|------|-------|
| Approved | Total approved requests |
| Pending | Requests still awaiting review |
| Denied | Requests that were denied |

### All Leave Requests Table

A complete list of every leave request with full detail:

| Column | Description |
|--------|-------------|
| **Employee** | Name |
| **Type** | Leave type |
| **Start Date** | First day of leave |
| **End Date** | Last day of leave |
| **Days** | Total days |
| **Status** | Approved, Pending, or Denied |
| **Province** | Employee's province |

---

## Performance Report

> **[Screenshot: Performance report showing rating distribution chart and review results table]**

### KPI Cards

| Card | Description |
|------|-------------|
| **Avg Rating** | Mean rating across all completed reviews |
| **Reviews Completed** | Count of submitted reviews |
| **In Progress** | Reviews started but not submitted |
| **Not Yet Started** | Reviews created but not opened |

### Rating Distribution

A horizontal bar chart grouping completed reviews by rating band:

| Band | Range |
|------|-------|
| Exceptional | 4.5 – 5.0 |
| Exceeds Expectations | 4.0 – 4.4 |
| Meets Expectations | 3.0 – 3.9 |
| Needs Improvement | Below 3.0 |

> **[Screenshot: Rating distribution chart]**

### Review Completion Status

A stacked progress bar showing the proportion of reviews that are Completed, In Progress, and Not Started — plus an overall completion percentage.

### Review Results Table

| Column | Description |
|--------|-------------|
| **Employee** | Name |
| **Reviewer** | Manager or HR admin who conducted the review |
| **Period** | Review cycle (e.g. Q1 2026) |
| **Rating** | Final score out of 5.0 |
| **Status** | Completed, In Progress, Not Started |

Rows are sorted by rating (highest first) by default.

---

## Time & Attendance Report

> **[Screenshot: Time & Attendance report showing KPI cards, overtime by province chart, and weekly summary table]**

### KPI Cards

| Card | Description |
|------|-------------|
| **Total Hours Logged** | Sum of all hours across all timesheets on record |
| **Total Overtime Hours** | Sum of all overtime hours across all timesheets |
| **Timesheets Approved** | Count of individually approved timesheet records |
| **Weeks on Record** | Number of distinct weeks with timesheet data |

### Overtime by Province

If any overtime has been logged, a horizontal bar chart shows total overtime hours broken down by province — with each province's weekly threshold shown for reference. This is a useful view for multi-province employers managing compliance.

> **[Screenshot: Overtime by Province chart]**

### Weekly Summary Table

| Column | Description |
|--------|-------------|
| **Week** | Date range (Mon–Fri) |
| **Employees** | Number of employees with timesheets that week |
| **Total Hours** | Sum of all hours for the week |
| **OT Hours** | Total overtime hours for the week |
| **Approved** | Count of approved timesheets for the week |

### Employee Attendance Summary Table

| Column | Description |
|--------|-------------|
| **Employee** | Name |
| **Province** | Province of employment (determines OT threshold) |
| **OT Threshold** | Weekly overtime threshold for their province |
| **Avg Hrs / Week** | Average hours per week across all recorded weeks |
| **Total OT** | Cumulative overtime hours across all recorded weeks |
