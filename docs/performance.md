---
sidebar_position: 11
sidebar_label: "Performance"
---

# Performance

The Performance module manages employee review cycles and goal tracking. You can run quarterly or annual reviews, assign ratings, and track progress on individual goals — all in one place.

> **[Screenshot: Performance module showing the stats cards, tab bar, and reviews table]**

---

## Overview

The Performance module has two tabs:

| Tab | Purpose |
|-----|---------|
| **Reviews** | Create, manage, and complete performance reviews |
| **Goals** | Set and track individual employee goals |

---

## Stats Cards

Four cards at the top of the page show the current state of reviews across your organization:

| Card | Description |
|------|-------------|
| **Reviews Completed** | Number of reviews fully submitted with a final rating |
| **In Progress** | Reviews that have been started but not yet submitted |
| **Not Started** | Reviews assigned but not yet opened |
| **Average Rating** | The mean rating across all completed reviews (out of 5.0) |

> **[Screenshot: Performance stats cards]**

---

## Reviews Tab

### Reviews Table

> **[Screenshot: Reviews table with a mix of Completed, In Progress, and Not Started rows]**

| Column | Description |
|--------|-------------|
| **Employee** | The employee being reviewed |
| **Reviewer** | The manager or HR admin conducting the review |
| **Cycle** | The review period (e.g. Q1 2026, Q2 2026, Annual 2025) |
| **Due Date** | Date by which the review should be completed |
| **Status** | Not Started, In Progress, or Completed |
| **Rating** | Star rating display (Completed reviews only) |
| **Action** | Context-dependent button |

### Action Button

The button in the rightmost column changes based on the review status:

| Status | Button label | What it does |
|--------|-------------|--------------|
| Not Started | **Start** | Opens the review form |
| In Progress | **Continue** | Reopens the partially completed review |
| Completed | **View** | Opens the completed review in read-only mode |

### Searching and Filtering Reviews

**Search bar** — Search by employee name, reviewer name, or review cycle.

**Filter dropdowns:**

| Filter | Options |
|--------|---------|
| **Status** | All, Completed, In Progress, Not Started |
| **Cycle** | All cycles, Q1 2026, Q2 2026, Q3 2026, Q4 2026 |

---

## Creating a New Review

Click **+ New Review** to open the New Review drawer.

> **[Screenshot: New Review drawer]**

| Field | Notes |
|-------|-------|
| **Employee** | The employee being reviewed |
| **Reviewer** | The person conducting the review (defaults to the logged-in user) |
| **Cycle** | Select the review period |
| **Due Date** | Deadline for completion |

Click **Create** to add the review with **Not Started** status. It will appear in the Reviews table.

---

## Creating a Review Cycle

Instead of creating individual reviews one at a time, you can create a **Review Cycle** that generates reviews for multiple employees at once.

Click the **New Cycle** button in the toolbar to open the Review Cycle drawer.

> **[Screenshot: New Cycle drawer showing the cycle configuration fields]**

### Cycle Fields

| Field | Notes |
|-------|-------|
| **Cycle Name** | A descriptive name for the cycle (e.g. "Q1 2026 Quarterly Review", "2026 Annual Performance Review") |
| **Due Date** | The deadline by which all reviews in this cycle should be completed |
| **Review Type** | Quarterly, Annual, Probation, or Mid-Year |
| **Scope** | Choose between **All Active Employees** or **Select Departments** (pick one or more departments) |
| **Default Reviewer** | Who will conduct the reviews: Direct Manager, HR Admin, or a specific person you select |

### What Happens When You Create a Cycle

When you click **Create Cycle**:

1. The system creates an individual review record for each employee within the selected scope
2. Each review is assigned the default reviewer you specified
3. All reviews are set to **Not Started** status with the cycle's due date
4. A toast notification confirms the result: *"Created X reviews for &#123;cycle name&#125;"*

The newly created reviews appear in the Reviews table and can be filtered by cycle name. Each review can then be started, completed, and submitted individually by the assigned reviewer.

> **Tip:** Use the Probation review type when creating cycles for employees approaching their 90-day probation end. The dashboard will show alerts for employees nearing this milestone with a "Start Review" button.

---

## Completing a Review

Click **Start** or **Continue** on any review to open the review form.

> **[Screenshot: Review form showing rating sliders and comments section]**

The review form includes:

### Rating Categories

Each review scores the employee across multiple dimensions. Scores are entered on a **1.0–5.0** scale:

| Category | What it measures |
|----------|-----------------|
| **Performance** | Quality and output of work |
| **Collaboration** | Teamwork and communication |
| **Initiative** | Self-direction and problem-solving |
| **Reliability** | Consistency and meeting commitments |
| **Growth** | Learning, development, and skill-building |

### Overall Rating

The **Overall Rating** is automatically calculated as the average of all category scores. It is shown as a decimal (e.g. 4.2) and as a star display.

### Star Rating Scale

| Rating | Label |
|--------|-------|
| 4.5 – 5.0 | Exceptional |
| 4.0 – 4.4 | Exceeds Expectations |
| 3.0 – 3.9 | Meets Expectations |
| Below 3.0 | Needs Improvement |

### Comments

A free-text field is provided for written comments supporting the ratings. This is strongly recommended for any rating below 3.0 or above 4.5.

### Submitting

Click **Submit Review** to finalize. The status changes to **Completed**, the rating is recorded, and the average rating card on the stats panel updates.

> **Note:** Submitted reviews cannot be edited. If a correction is needed, contact your HR administrator.

---

## Goals Tab

The Goals tab tracks individual employee goals — project milestones, skill development targets, or any measurable objective.

> **[Screenshot: Goals tab showing goal progress rows]**

### Goal List

Each goal is displayed as a row showing:

| Element | Description |
|---------|-------------|
| **Goal** | Description of the goal |
| **Employee** | The employee the goal is assigned to |
| **Due Date** | Target completion date |
| **Progress bar** | Visual representation of progress (0–100%) |
| **Progress %** | Numeric progress percentage |
| **Update button** | Opens the progress update control |

### Updating Goal Progress

Click **Update** on any goal row to expand an inline progress slider.

> **[Screenshot: Progress slider expanded on a goal row]**

- Drag the slider from 0% to 100% in increments of 5%
- Click **Save** to record the new progress
- Click **Cancel** to discard the change

A goal at **100%** is considered complete.

### Creating a New Goal

Click **+ New Goal** to open the New Goal drawer.

> **[Screenshot: New Goal drawer]**

| Field | Notes |
|-------|-------|
| **Employee** | The employee this goal is assigned to |
| **Goal Description** | A clear, measurable description of what success looks like |
| **Due Date** | Target completion date |

Goals are stored locally per session. For full persistence across sessions, ensure you are connected to the backend API.

### Goal Footer Stats

At the bottom of the Goals tab, a summary line shows how many goals are complete out of total (e.g. "14 of 22 goals complete").

---

## Performance and the Reports Module

For a full picture of rating distributions, review completion rates by department, and goal completion summaries, navigate to **Reports → Performance**. See [Reports](./reports.md) for details.
