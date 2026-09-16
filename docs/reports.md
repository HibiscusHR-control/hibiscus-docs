---
sidebar_position: 13
sidebar_label: "Reports"
---

# Reports

The Reports module brings data from every module into a single analytics hub. Whether you need a workforce headcount for a partners' meeting, a payroll deduction breakdown for your bookkeeper, a utilization view for staffing decisions, or an overtime summary for a compliance review — it's here.

> **[Screenshot: Reports module — the tab bar and the Workforce report]**

---

## Report tabs

| Tab | What it covers |
|-----|---------------|
| **Workforce** | Headcount, departments, provinces, salary bands, tenure |
| **Payroll** | YTD payroll, deductions, remittances, pay run history |
| **Leave** | Days approved by type, top leave takers, approval rates |
| **Time & Attendance** | Hours logged, overtime by province, weekly summaries |
| **Utilization** | Firm-average utilization, per-employee billable %, burnout band |

---

## Exporting

At the top of the page, **Export CSV** downloads a summary spreadsheet spanning all tabs. Useful for the partners' meeting or an external review.

---

## Workforce

### KPI cards

| Card | Description |
|------|-------------|
| **Total Headcount** | Active staff (partners plus T4 employees) |
| **New Hires (90 days)** | Employees whose start date is within the last 90 days |
| **Avg Annual Salary** | Mean salary across active staff (excludes partners) |
| **Inactive / Former** | Terminated employees |

### Headcount by Department

Horizontal bar chart of employees per department, sorted from largest.

### Province Distribution

Horizontal bar chart of workforce by province. Useful for multi-province firms managing multiple ESA rule sets.

### Salary bands

Grouped by band with employment type split:

| Band | Range |
|------|-------|
| Under $50K | < $50,000/year |
| $50K – $75K | $50,000 – $74,999 |
| $75K – $100K | $75,000 – $99,999 |
| $100K – $130K | $100,000 – $129,999 |
| $130K+ | >= $130,000 |

### Employee roster table

Full roster of active staff with name, department, type, province, salary, status, and tenure.

---

## Payroll

### KPI cards

| Card | Description |
|------|-------------|
| **YTD Gross Payroll** | Total gross wages paid since January 1 |
| **YTD Net Payroll** | Total net pay deposited since January 1 |
| **Avg Cost per Run** | Mean gross pay per payroll run YTD |
| **YTD Cost per Head** | Total YTD gross / active employee count |

### Deduction breakdown

| Category | Description |
|----------|-------------|
| **Federal Tax** | Federal income tax withheld YTD |
| **Provincial Tax** | Provincial income tax withheld YTD |
| **CPP (Employee)** | Employee CPP contributions YTD |
| **EI (Employee)** | Employee EI premiums YTD |
| **Net Pay** | After all deductions |

### YTD remittance summary

| Item | Notes |
|------|-------|
| **CPP (Employer)** | Matched employer contribution |
| **EI (Employer)** | 1.4x the employee EI amount |
| **Federal Tax Withheld** | Sum across all employees |
| **Provincial Tax Withheld** | Sum across all employees |
| **Total Remittance** | Sum of all four items |

### Pay Run History table

Every run listed with period, employees, gross, CPP, EI, fed tax, prov tax, net, and status.

---

## Leave

### KPI cards

| Card | Description |
|------|-------------|
| **Total Leave Requests** | All requests ever submitted |
| **Total Days Approved** | Sum of approved leave days YTD |
| **Avg Days per Request** | Mean length of approved requests |
| **Approval Rate** | % approved (vs denied) |

### Days by Leave Type

Horizontal bar chart of approved days by leave type with a request count for each.

### Top Leave Takers

Horizontal bar chart of the top 5 employees by approved days YTD.

### Approval status summary

Mini-cards for Approved, Pending, and Denied counts across the whole history.

### All leave requests table

Every request with employee, type, dates, days, status, and province.

---

## Time & Attendance

### KPI cards

| Card | Description |
|------|-------------|
| **Total Hours Logged** | Sum across all timesheets |
| **Total Overtime Hours** | Sum across all timesheets |
| **Timesheets Approved** | Count of approved records |
| **Weeks on Record** | Distinct weeks with timesheet data |

### Overtime by Province

Horizontal bar chart of overtime broken down by province with each province's threshold shown for reference.

### Weekly summary table

Per-week: employees, total hours, OT hours, approved count.

### Employee attendance summary table

Per-employee: province, OT threshold, average hours per week, cumulative OT.

---

## Utilization

The Utilization tab reports billable-hour utilization across your staff. The underlying API is `GET /api/timesheets/utilization?weeks=N`.

### Window selector

Choose the reporting window from the selector at the top of the tab: **2 / 4 / 8 / 12 / 26 / 52 weeks**. Default is **4 weeks**.

### KPI cards

| Card | Description |
|------|-------------|
| **Firm-Average Utilization** | Average utilization across staff with data in the window |
| **Employees With Data** | How many staff logged billable hours in the window |
| **Above 85% (burnout band)** | Count of employees averaging above 85% utilization — a sustained overload flag |

### Per-employee table

| Column | Description |
|--------|-------------|
| **Employee** | Name |
| **Billable Hours (window)** | Total billable hours in the window |
| **Standard Hours / Week** | Standard weekly hours (usually 40) |
| **Weeks Reported** | Weeks with timesheet data in the window |
| **Utilization %** | Billable / (standard x weeks reported) |

Where billable-hour data comes from:

- Manually entered in [Time & Attendance](./time-attendance.md), OR
- Synced from Karbon (Timesheets, Billable=true only), OR
- Synced from QuickBooks Time

See [Integrations](./integrations.md) for setting up either source.

> **Tip:** the burnout band is deliberately soft. Above 85% utilization for a couple of weeks is normal during tax season. Above 85% for a whole quarter is a staffing signal.
