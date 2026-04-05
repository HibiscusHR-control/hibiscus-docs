---
sidebar_position: 7
sidebar_label: "Leave Management"
---

# Leave Management

The Leave Management module tracks all employee time-off requests — vacation, sick days, parental leave, bereavement, and more. All leave policies are built around ESA (Employment Standards Act) minimums for each province, so you are always in compliance regardless of where your employees are based.

> **[Screenshot: Leave Management module showing the summary strip, pending approvals alert, and leave request table]**

---

## Overview

The Leave Management page is organized into:

1. **Summary strip** — four at-a-glance stats across all leave requests
2. **Pending approvals alert** — a banner when requests are waiting for review
3. **Toolbar** — search, filters, export, and new request
4. **Leave request table** — all requests with their status
5. **Sidebar** — days used by leave type and ESA quick reference

---

## Summary Strip

| Card | Description |
|------|-------------|
| **Pending Approval** | Number of leave requests awaiting a decision |
| **Approved (Active)** | Leave requests that are approved and currently in effect |
| **Total Requests** | All requests across all statuses |
| **Parental Leave Days Used** | Total parental leave days approved year-to-date across all employees |

> **[Screenshot: Summary strip with the four stat cards]**

---

## Pending Approvals Alert

If any requests are waiting for approval, a yellow banner appears at the top of the page showing the count. This is a reminder that action is needed — click the banner or scroll to the table and filter by "Pending" to review them.

---

## Leave Request Table

> **[Screenshot: Leave request table with a mix of Pending, Approved, and Denied rows]**

### Table Columns

| Column | Description |
|--------|-------------|
| **Employee** | Name and avatar initials |
| **Type** | Leave type (Vacation, Sick, Parental, Bereavement, Family Responsibility, Domestic Violence) |
| **Dates** | Start and end date of the leave |
| **Days** | Total calendar days requested |
| **Province** | Employee's province — determines which ESA rules apply |
| **Status** | Pending, Approved, or Denied |
| **Submitted** | Date the request was submitted |
| **Review** | Approve/Deny buttons (Pending requests only) |

### Approving or Denying a Request

For any request with **Pending** status, two buttons appear in the Review column:

- **Approve** — marks the request as Approved. The employee's leave balance is updated.
- **Deny** — marks the request as Denied. The employee's leave balance is not affected.

> **[Screenshot: A pending leave request row with the Approve and Deny buttons highlighted]**

> **Tip:** For context before approving, check the employee's leave balance in the Days Used sidebar on the right.

---

## Searching and Filtering

**Search bar** — Search by employee name, leave type, or province.

**Filter panel** — Click the filter button to open three dropdowns:

| Filter | Options |
|--------|---------|
| **Status** | All, Pending, Approved, Denied |
| **Leave Type** | All, Vacation, Sick, Parental, Bereavement, Family Responsibility, Domestic Violence |
| **Province** | All 10 provinces |

Active filters appear as removable badges below the toolbar.

---

## Creating a New Leave Request

Click **+ New Request** to open the Leave Request drawer.

> **[Screenshot: New Leave Request drawer with all fields visible]**

| Field | Notes |
|-------|-------|
| **Employee** | Select from your active employee list |
| **Leave Type** | Select the type of leave |
| **Start Date** | First day of leave |
| **End Date** | Last day of leave |
| **Notes** | Optional — reason for the request or manager notes |

Click **Submit** to create the request with **Pending** status. It will appear in the table and trigger a notification to the approving manager.

---

## Days Used Sidebar

The sidebar on the right side of the Leave Management page shows year-to-date days used by leave type across your entire organization. Each leave type shows:

- Total days used
- A progress bar against the expected maximum

| Leave Type | YTD Maximum (reference) |
|-----------|------------------------|
| Parental | 130 days |
| Vacation | 75 days |
| Sick | 30 days |
| Bereavement | 30 days |
| Family Responsibility | 30 days |
| Domestic Violence | 30 days |

These are organization-wide totals, not per-employee limits. Per-employee entitlements are governed by provincial ESA minimums (see below).

> **[Screenshot: Days Used sidebar showing progress bars for each leave type]**

---

## ESA Quick Reference

The sidebar also includes an **ESA Quick Reference** panel showing Ontario minimums for each leave type. This is a convenience reference — not a substitute for legal advice.

| Leave Type | Ontario Minimum (ESA) |
|-----------|----------------------|
| **Vacation** | 2 weeks after 1 year; 3 weeks after 5 years |
| **Sick** | 3 days unpaid (job-protected) |
| **Bereavement** | 2 days unpaid |
| **Family Responsibility** | 3 days unpaid |
| **Parental** | Up to 61 weeks (following pregnancy/adoption) |
| **Domestic Violence** | 10 days (first 5 paid after 13 weeks) |

> **Note:** Quebec labour standards are tracked separately and will be fully incorporated in Phase 2 of the platform. For Quebec employees, refer to the *Act respecting labour standards* for minimum entitlements.

---

## Provincial ESA Coverage

Hibiscus HR applies the correct ESA rules based on each employee's **Province** field. This means:

- An Ontario employee's leave is validated against the Ontario ESA
- A BC employee's leave is validated against the BC Employment Standards Act
- A Manitoba employee uses Manitoba standards — and so on for all 10 provinces

The province is set on the employee record and can be updated in the [Employees](./employees.md) module.

---

## Return from Leave

When an employee's approved leave ends, the **Return from Leave** workflow helps ensure a smooth reintegration back into the workplace.

### When the Return Button Appears

A **Return** button appears on any approved leave request where the end date has passed within the last 7 days. This gives HR a one-week window to initiate the return process.

> **[Screenshot: Leave request row with the Return button visible]**

### Reintegration Checklist

Clicking **Return** opens the Reintegration Checklist drawer. The checklist contains 7 items that must all be completed before the return is finalized:

| # | Checklist Item | Description |
|---|---------------|-------------|
| 1 | **Confirm return date with employee** | Verify the employee is returning on the expected date and note any changes |
| 2 | **Update work schedule** | Re-activate the employee's regular schedule or adjust as needed |
| 3 | **Re-enable system access** | Restore any IT access that was suspended during the leave |
| 4 | **Benefits re-confirmation** | Confirm benefits coverage is active and unchanged, or process any changes |
| 5 | **Catch-up meeting with manager** | Schedule a meeting between the employee and their manager to discuss updates, priorities, and any changes |
| 6 | **Workspace / equipment check** | Ensure the employee's workspace and equipment are ready |
| 7 | **Update leave balance records** | Reconcile the employee's leave balance to reflect the completed leave period |

Check each item as it is completed. All 7 items must be marked done before the **Complete Return** button becomes active.

Click **Complete Return** to finalize the reintegration. The leave request status updates to reflect that the employee has returned, and any leave-related flags on the employee record are cleared.

---

## Exporting Leave Data

Click **Export CSV** to download all currently displayed leave requests (after any active filters). The export includes all table columns plus the employee's department.

---

## Leave and the Reports Module

For leave analytics — total days approved by type, top leave takers, approval rate, and request trends — navigate to **Reports → Leave**. See [Reports](./reports.md) for full details.
