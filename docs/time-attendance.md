---
sidebar_position: 8
sidebar_label: "Time  Attendance"
---

# Time & Attendance

The Time & Attendance module tracks weekly employee hours, calculates overtime against provincial ESA thresholds, and manages timesheet approvals. Every province has its own overtime threshold — Hibiscus HR applies the correct rules automatically based on each employee's province.

> **[Screenshot: Time & Attendance module showing the week navigation, summary cards, overtime warning banner, and timesheet table]**

---

## Overview

The Time & Attendance page is organized into:

1. **Week navigation** — move between weeks
2. **Summary cards** — key stats for the selected week
3. **Overtime warning banner** — alerts when employees exceed provincial thresholds
4. **Toolbar** — approve all, export, and add entry
5. **Timesheet table** — editable hours per employee per day
6. **Week totals footer** — daily and weekly totals
7. **ESA Overtime Reference** — quick reference for provincial thresholds

---

## Week Navigation

Use the **← Previous** and **Next →** buttons to move between weeks. The current week label (e.g. "Week of Mar 31 – Apr 4, 2026") is shown between the buttons.

The week always runs **Monday to Friday**.

> **[Screenshot: Week navigation controls with the week label]**

---

## Summary Cards

Four cards show key stats for the currently selected week:

| Card | Description |
|------|-------------|
| **Total Hours** | Sum of all hours logged across all employees for the week |
| **Overtime Hours** | Total hours that exceed provincial overtime thresholds |
| **Approved** | Number of individual timesheets with Approved status |
| **Avg Hours / Employee** | Average hours worked per employee this week |

---

## Overtime Warning Banner

If any employees have exceeded their provincial overtime threshold for the selected week, a yellow warning banner appears at the top of the table listing the affected employees and their overtime hours.

This banner is informational — it does not automatically apply overtime pay rates. Use it to review and approve timesheets before passing to payroll.

> **[Screenshot: Overtime warning banner showing two employees over threshold]**

---

## The Timesheet Table

> **[Screenshot: Timesheet table showing editable hour cells for each employee and day]**

### Table Columns

| Column | Description |
|--------|-------------|
| **Employee** | Name and province |
| **Mon – Fri** | Editable hours for each day |
| **Total** | Sum of Mon–Fri hours |
| **OT** | Overtime hours (hours above provincial threshold) |
| **Status** | Pending or Approved |
| **Approve** | Approve button (Pending timesheets only) |

### Editing Hours

Click on any **Mon–Fri** cell to edit the hours for that employee on that day. Enter the number of hours (decimals accepted, e.g. 7.5 for 7 hours 30 minutes). Press **Enter** or click elsewhere to save.

> **Note:** Approved timesheets are locked and cannot be edited. To make a correction to an approved timesheet, contact your HR administrator.

### Approving a Timesheet

Click the **Approve** button in the rightmost column to approve an individual employee's timesheet for the selected week. The status badge changes from **Pending** to **Approved** and the row becomes read-only.

### Approve All

Click **Approve All** in the toolbar to approve every pending timesheet for the currently displayed week in a single action. A confirmation prompt will appear before the approvals are processed.

---

## Week Totals Footer

At the bottom of the timesheet table, a footer row shows:

- **Daily totals** — total hours for all employees on each day of the week
- **Weekly total** — total hours for all employees across the full week

This helps managers quickly spot anomalies (e.g. an unusually short Tuesday).

---

## Adding a Timesheet Entry

Click **+ Add Entry** to open the Add Timesheet drawer.

> **[Screenshot: Add Timesheet Entry drawer]**

| Field | Notes |
|-------|-------|
| **Employee** | Select from active employees |
| **Week** | Select the week start date (Monday) |
| **Mon–Fri hours** | Enter hours for each day |

If a timesheet already exists for the selected employee and week, the entry will update the existing record rather than create a duplicate.

---

## Exporting Timesheet Data

Click **Export** to download a CSV of all timesheet data for the currently selected week. The export includes employee name, province, daily hours, total hours, overtime hours, and approval status.

---

## Provincial Overtime Thresholds

Hibiscus HR automatically calculates overtime based on the employee's province. The overtime amount shown in the **OT** column represents hours worked *above* the weekly threshold.

| Province | Weekly OT Threshold | Notes |
|---------|--------------------|----|
| Ontario (ON) | 44 hours/week | Hours above 44 are overtime |
| British Columbia (BC) | 40 hours/week | Daily threshold: >8 hrs/day also triggers OT |
| Alberta (AB) | 44 hours/week | |
| Quebec (QC) | 40 hours/week | |
| Manitoba (MB) | 40 hours/week | |
| Saskatchewan (SK) | 40 hours/week | |
| Nova Scotia (NS) | 48 hours/week | |
| New Brunswick (NB) | 44 hours/week | |
| Prince Edward Island (PE) | 48 hours/week | |
| Newfoundland & Labrador (NL) | 40 hours/week | |
| Federal jurisdiction | 40 hours/week | Federally regulated employees |

> **Important (BC):** British Columbia has both a weekly threshold (40 hours) and a daily threshold (more than 8 hours in a day). Hibiscus HR tracks both. A BC employee working 9 hours on Monday accrues 1 hour of daily overtime even if their weekly total stays under 40 hours.

The ESA Overtime Reference panel at the bottom of the page shows these thresholds as a quick reference.

> **[Screenshot: ESA Overtime Reference panel]**

---

## Time & Attendance and the Reports Module

For weekly summaries, overtime by province, and employee attendance patterns across multiple weeks, navigate to **Reports → Time & Attendance**. See [Reports](./reports.md) for full details.
