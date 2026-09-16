---
sidebar_position: 8
sidebar_label: "Time  Attendance"
---

# Time & Attendance

The Time & Attendance module tracks weekly hours, calculates overtime against provincial ESA thresholds, and manages timesheet approvals. For accounting firms, it also carries a **billable_hours** weekly split per timesheet so utilization can be reported without a separate practice-management tool.

Every province has its own overtime threshold — Hibiscus HR applies the correct rule automatically based on each employee's province.

> **[Screenshot: Time & Attendance module — week navigation, summary cards, overtime warning, and timesheet table]**

---

## Overview

The page is organized into:

1. **Week navigation** — move between weeks
2. **Summary cards** — key stats for the selected week
3. **Overtime warning banner** — alerts when staff exceed provincial thresholds
4. **Toolbar** — approve all, export, add entry
5. **Timesheet table** — editable hours per employee per day, with a billable split
6. **Week totals footer** — daily and weekly totals
7. **ESA Overtime Reference** — quick reference for provincial thresholds

---

## Week navigation

**Prev** and **Next** move between weeks. The week always runs **Monday to Friday** and the current week label appears between the arrows.

---

## Summary cards

| Card | Description |
|------|-------------|
| **Total Hours** | Sum of all hours logged this week |
| **Overtime Hours** | Hours above provincial thresholds |
| **Approved** | Timesheets with Approved status |
| **Avg Hours / Employee** | Average this week |

---

## Overtime warning banner

If any staff have exceeded their provincial overtime threshold, a yellow banner appears listing the affected staff and their OT hours. Informational — it does not apply overtime pay rates automatically. Review and approve before passing to payroll.

---

## The timesheet table

### Columns

| Column | Description |
|--------|-------------|
| **Employee** | Name and province |
| **Mon – Fri** | Editable hours for each day |
| **Total** | Sum of Mon to Fri hours |
| **Billable** | Sum of billable hours for the week (the accountant-firm split) |
| **OT** | Overtime hours (above provincial threshold) |
| **Status** | Pending or Approved |
| **Approve** | Approve button (Pending rows only) |

### Editing hours

Click a Mon–Fri cell to edit. Enter hours (decimals accepted, 7.5 = 7 hrs 30 min). Press Enter to save.

### Billable hours

Each timesheet carries a **billable_hours** weekly field. Enter the billable subset of the employee's total hours; this feeds [Reports → Utilization](./reports.md). Karbon and QuickBooks Time can populate billable hours automatically if you have those integrations connected — see [Integrations](./integrations.md).

> **Note:** Approved timesheets are locked. To correct an approved timesheet, contact an admin.

### Salaried lock

Salaried employees' Mon–Fri cells auto-populate to a standard 40 hours and remain locked. Billable hours can still be edited on salaried rows because the utilization report cares about the billable split.

### Approving a timesheet

Click **Approve** in the rightmost column. The status badge flips from Pending to Approved and the row locks.

### Approve All

Click **Approve All** in the toolbar to approve every pending timesheet for the displayed week. Confirmation required.

---

## Week totals footer

At the bottom of the table:

- **Daily totals** — total hours across all employees for each day
- **Weekly total** — total hours across the week
- **Billable weekly total** — total billable across the week (feeds utilization)

Useful for spotting anomalies (an unusually short Tuesday, a whole week with zero billable hours logged).

---

## Adding a timesheet entry

Click **+ Add Entry** to open the drawer.

| Field | Notes |
|-------|-------|
| **Employee** | Select from active staff |
| **Week** | Select the week start date (Monday) |
| **Mon–Fri hours** | Enter hours for each day |
| **Billable hours** | Weekly billable subset (defaults to 0) |

If a timesheet already exists for that employee and week, the entry updates the existing record.

---

## Exporting

Click **Export** for a CSV of the selected week. Includes employee, province, daily hours, total, billable, overtime, and status.

---

## Provincial overtime thresholds

Overtime is calculated against the employee's province:

| Province | Weekly OT Threshold | Notes |
|---------|---------------------|-------|
| Ontario (ON) | 44 hours/week | Hours above 44 are overtime |
| British Columbia (BC) | 40 hours/week | Daily threshold: >8 hrs/day also triggers OT |
| Alberta (AB) | 44 hours/week | |
| Manitoba (MB) | 40 hours/week | |
| Saskatchewan (SK) | 40 hours/week | |
| Nova Scotia (NS) | 48 hours/week | |
| New Brunswick (NB) | 44 hours/week | |
| Prince Edward Island (PE) | 48 hours/week | |
| Newfoundland & Labrador (NL) | 40 hours/week | |
| Federal jurisdiction | 40 hours/week | Federally regulated staff |

> **Important (BC):** BC has both a weekly threshold (40) and a daily threshold (>8 in a day). A BC employee working 9 hours on Monday accrues 1 hour of daily overtime even if the weekly total stays under 40.

The ESA Overtime Reference panel at the bottom of the page shows these thresholds as a quick reference.

---

## Time & Attendance and the Reports module

For weekly summaries and overtime by province, navigate to **Reports → Time & Attendance**. For firm-average utilization and per-employee billable-hours percentage, navigate to **Reports → Utilization**. See [Reports](./reports.md) for the full picture.
