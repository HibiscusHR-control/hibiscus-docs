---
sidebar_position: 9
sidebar_label: "Onboarding  Offboarding"
---

# Onboarding & Offboarding

The Onboarding & Offboarding module manages the beginning and end of every employee's journey at your organization. Onboarding gives new hires a structured first experience. Offboarding ensures every legal and administrative step is completed — including filing the Record of Employment (ROE) within the required CRA timeline.

> **[Screenshot: Onboarding & Offboarding module showing the two tabs and the onboarding board]**

---

## Two Tabs

| Tab | Purpose |
|-----|---------|
| **Onboarding** | Manage new hire checklists from pre-start to full productivity |
| **Offboarding** | Manage departing employee checklists and ROE obligations |

---

## Onboarding Tab

### Stats

Three cards at the top of the Onboarding tab give you a quick picture of where things stand:

| Card | Description |
|------|-------------|
| **Active Onboardings** | Number of employees currently going through onboarding |
| **Pending Tasks** | Total incomplete tasks across all active onboardings |
| **Starting This Week** | Employees whose start date falls within the current week |

> **[Screenshot: Onboarding stats cards]**

### The Onboarding Board

New hire onboarding is displayed as a **kanban-style board**. Each employee is represented as a card that moves through onboarding stages as tasks are completed.

**Onboarding stages:**

| Stage | Description |
|-------|-------------|
| **Pre-Start** | Tasks to complete before the employee's first day (equipment order, system access setup, welcome email) |
| **Day 1** | First-day orientation tasks (workspace setup, introductions, policy review) |
| **Week 1** | First week tasks (team introductions, initial training, HR paperwork collection) |
| **Month 1** | First month tasks (role-specific training, goal setting, check-in meeting) |
| **Complete** | All tasks finished — onboarding closed |

> **[Screenshot: Onboarding board showing employee cards in different stages]**

### Starting a New Onboarding

Click **+ New Onboarding** to open the New Onboarding drawer.

> **[Screenshot: New Onboarding drawer]**

| Field | Notes |
|-------|-------|
| **Employee** | Select from active employees (typically a new hire just added to the Employees module) |
| **Start Date** | The employee's first day — used to calculate task due dates |
| **Manager** | The assigned manager who will be notified of pending tasks |

Once created, the onboarding record appears in the **Pre-Start** column of the board.

### Viewing and Managing Onboarding Tasks

Click any employee card on the board to open the **Onboarding Detail** drawer.

> **[Screenshot: Onboarding Detail drawer showing the task list with checkboxes]**

The detail drawer shows:
- Employee name, start date, and current stage
- The complete task list with checkboxes
- Task assignee (HR, Manager, or IT)
- Due date for each task
- Overall completion percentage

**To complete a task:** Click the checkbox next to the task name. The task is immediately marked as done and the overall progress updates.

As tasks are completed, the system automatically advances the employee card to the next stage when all tasks in the current stage are complete.

---

## Employee Self-Service Onboarding Portal

In addition to the admin-side onboarding board, Hibiscus HR includes a **self-service onboarding portal** that lets new hires complete their own onboarding before their first day.

### Sending an Onboarding Invite

From the Onboarding Detail drawer for any employee, click **Send Onboarding Invite**. The system sends a branded email to the employee with a "Start Onboarding" link.

### What the New Hire Sees

When the new hire clicks the link:

1. Their employee account is created automatically
2. They are logged in immediately — no separate registration step
3. They see an 8-step onboarding wizard (not the admin dashboard)

### The 8-Step Employee Onboarding Wizard

| Step | What the employee completes |
|------|-----------------------------|
| **1. Welcome** | Introduction to the company, overview of what to expect |
| **2. Personal Info** | Legal name, address, phone, date of birth |
| **3. Work Eligibility (SIN)** | Social Insurance Number entry — stored with field-level encryption |
| **4. Banking** | Direct deposit information (institution number, transit number, account number) — stored encrypted |
| **5. TD1 Tax Forms** | Federal and provincial TD1 personal tax credit claims |
| **6. Documents** | Review and sign-off on company policies (e.g. code of conduct, confidentiality agreement, health and safety) |
| **7. About You** | Optional personal details — preferred name, dietary restrictions, t-shirt size, fun facts |
| **8. All Done** | Confirmation screen showing that onboarding is complete |

### Auto-Save and Resume

Each step auto-saves as the employee fills it in. If the employee closes their browser, they can return later and resume from exactly where they left off.

### On Completion

When the employee completes all 8 steps:

- Their employee record is updated with all the information they entered
- HR is notified that the employee has completed self-service onboarding
- The onboarding record on the admin board is marked as complete
- The employee becomes eligible to be added to payroll

> **Important:** Employees must complete the self-service onboarding portal before they can be added to payroll. This ensures SIN, banking, and TD1 information are on file.

---

## Offboarding Tab

### Stats

Three cards at the top of the Offboarding tab:

| Card | Description |
|------|-------------|
| **Active Offboardings** | Employees currently going through the offboarding process |
| **ROE Pending** | Employees whose ROE has not yet been filed |
| **ROE Due in ≤3 Days** | Employees whose ROE deadline is within 3 days |

> **[Screenshot: Offboarding stats cards]**

### ROE Urgency Banner

When any employee's ROE is due within 3 days, a **red urgency banner** appears at the top of the Offboarding tab. This is a high-priority alert — failing to file an ROE on time is a compliance violation.

> **[Screenshot: ROE urgency banner in red]**

### Canadian Compliance Notice

The Offboarding tab includes a compliance notice reminding you of key obligations when an employee leaves:

- **ROE filing:** Must be filed with Service Canada within 5 calendar days of the employee's last day (or within 5 calendar days of the end of the pay period in which the interruption of earnings occurs)
- **Termination pay:** Must be paid on or before the employee's last day, or within the statutory period required by the province
- **Severance:** Required for employees with 5+ years of service at organizations with a payroll of $2.5M+ (Ontario ESA)
- **Final pay:** All outstanding wages, vacation pay, and expenses must be settled

> **Note:** Requirements vary by province. Always verify obligations against the applicable provincial ESA. Contact an employment lawyer for complex terminations.

### Starting an Offboarding — The 5-Step Offboarding Wizard

Click **+ Start Offboarding** to launch the guided 5-step Offboarding Wizard.

> **[Screenshot: Offboarding Wizard showing Step 1 — Departure Details]**

#### Step 1 — Departure Details

| Field | Notes |
|-------|-------|
| **Employee** | Select the departing employee from the dropdown |
| **Termination Type** | Resignation, Termination With Cause, Termination Without Cause, Retirement, Contract End, Layoff |
| **ROE Code** | Auto-suggested based on termination type (e.g. Code E for Quit, Code M for Dismissal, Code A for Shortage of Work) |
| **Last Day** | The employee's final day of work |
| **Notes** | Internal notes (e.g. notice period given, agreement details) |

#### Step 2 — Final Pay Calculation

Step 2 presents province-aware ESA entitlements based on the employee's province, tenure, and termination type:

| Entitlement | Description |
|-------------|-------------|
| **Outstanding Vacation Pay** | Accrued but unused vacation days, calculated at the employee's daily rate |
| **Pay in Lieu of Notice** | Required notice period pay if the employee is not working through their notice (province-specific) |
| **Severance Pay** | For eligible employees (e.g. Ontario: 5+ years service at organizations with $2.5M+ payroll) |
| **Outstanding Expenses** | Any submitted but unreimbursed expense claims |

Each line item is auto-calculated where possible and editable for manual adjustments.

#### Step 3 — Access & Equipment Checklist

An 8-item checklist to ensure all company property and access is recovered:

| Item | Description |
|------|-------------|
| **Laptop / Computer** | Collect company-issued devices |
| **Keys / Access Cards** | Office keys, building access cards |
| **Email Account** | Disable or redirect company email |
| **VPN Access** | Revoke VPN credentials |
| **Credit / Expense Cards** | Collect and cancel company cards |
| **Parking Pass** | Recover parking permits |
| **Slack / Teams** | Remove from communication channels |
| **Software Licenses** | Revoke licenses (e.g. Adobe, Microsoft 365, SaaS tools) |

Check each item as completed. All items should be addressed before proceeding.

#### Step 4 — Exit Process

| Field | Notes |
|-------|-------|
| **Exit Interview** | Schedule an exit interview — select date, time, and interviewer |
| **Knowledge Transfer Notes** | Free-text field to document handover instructions, key contacts, ongoing projects |
| **Replacement Planning** | Notes on whether a replacement will be hired, and any interim coverage arrangements |

#### Step 5 — Review & Confirm

Step 5 displays a full summary of all information from steps 1–4. Each section has an **Edit** button allowing you to jump back and make corrections without losing progress.

Additional elements on the review step:

| Element | Description |
|---------|-------------|
| **ROE Deadline** | Auto-calculated as the employee's last day + 5 calendar days. Displayed prominently with a countdown. |
| **Auto-Generated Checklist Preview** | A preview of the offboarding checklist that will be created, combining access/equipment items and administrative tasks |

Click **Complete Offboarding** to finalize. The offboarding record is created, tasks are assigned, and the ROE countdown begins.

### Legacy Offboarding Tasks

The offboarding wizard replaces the previous simple drawer. All standard tasks — revoking access, collecting equipment, final payroll, ROE filing, exit interview, benefits termination, and record archiving — are now covered within the wizard steps.

When the **File ROE** task is marked complete, the ROE status on the employee's record updates and the urgency countdown stops.

### ROE Status

Each offboarding record shows an **ROE Status** badge:

| Status | Meaning |
|--------|---------|
| **Pending** | ROE has not been filed |
| **Filed** | ROE has been submitted to Service Canada |
| **Overdue** | ROE deadline has passed and it has not been filed |

Overdue ROEs are flagged in the Compliance module as well.
