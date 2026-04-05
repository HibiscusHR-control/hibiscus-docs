---
sidebar_position: 6
sidebar_label: "Payroll"
---

# Payroll

The Payroll module handles your entire Canadian payroll cycle — from calculating CPP/CPP2 contributions and EI premiums to processing pay runs, generating T4 XML files, and tracking CRA remittance obligations. All calculations use **CRA-compliant 2026 tax rates** for all 13 provinces and territories, loaded from a centralized rate configuration. Provincial tax is calculated using real tax brackets — not estimates.

> **[Screenshot: Payroll module showing the Next Payroll hero section, YTD stat cards, and payroll history table]**

---

## Overview

The Payroll module is organized into three areas:

1. **Next Payroll hero** — shows what is coming up and lets you initiate the next run
2. **YTD summary cards** — year-to-date totals at a glance
3. **Payroll history table** — a full record of every past run

---

## Next Payroll Section

At the top of the page, the **Next Payroll** panel shows:

| Field | Description |
|-------|-------------|
| **Pay period** | The date range for the upcoming run (e.g. Apr 1–15, 2026) |
| **Estimated employees** | Number of active employees who will be included |
| **Estimated gross pay** | Projected total gross before deductions |

This section also shows the **CRA Remittance Due** alert — the date by which CPP, EI, and income tax deductions from the previous period must be remitted to the CRA.

> **[Screenshot: Next Payroll hero panel with the CRA remittance alert visible]**

---

## Year-to-Date Summary Cards

Four cards below the hero show your cumulative payroll figures for the current calendar year:

| Card | Description |
|------|-------------|
| **YTD Gross Payroll** | Total gross wages paid to all employees since January 1 |
| **YTD Net Paid Out** | Total net pay actually deposited to employees (after all deductions) |
| **YTD CRA Remittance** | Total CPP, EI, and income tax remitted to the CRA year-to-date |
| **Payroll Runs** | Number of payroll runs completed in the current year |

> **[Screenshot: YTD summary cards]**

---

## Running Payroll

Click the **Run Payroll** button in the top-right corner to open the payroll wizard.

> **[Screenshot: Run Payroll wizard drawer — Step 1]**

### Step 1 — Select Pay Period

Choose the pay period start and end dates. The system will suggest the next period based on your payroll schedule.

### Step 2 — Preview

The wizard calculates a preview for every active employee showing:

| Column | Description |
|--------|-------------|
| **Employee** | Name |
| **Gross Pay** | Base salary or hours × rate for the period |
| **CPP** | Canada Pension Plan employee contribution |
| **EI** | Employment Insurance premium |
| **Federal Tax** | Federal income tax withheld |
| **Provincial Tax** | Provincial income tax based on employee's province |
| **Net Pay** | Take-home amount after all deductions |

> **[Screenshot: Payroll preview table showing per-employee breakdown]**

Review the preview carefully. The preview is calculated live — if you spot an error (wrong salary, wrong province), close the wizard, fix the employee record, and re-open the wizard.

### Step 3 — Process

Click **Process Payroll** to finalize the run. Once processed:

- The run appears in the Payroll History table with status **Processed**
- Each employee's year-to-date CPP and EI accumulators are updated
- The CRA remittance amount is added to your remittance tracking
- The pay period can no longer be edited

> **Important:** Processed payroll runs cannot be reversed in the current version. If you need to make a correction, contact your HR administrator.

---

## Payroll History Table

Every completed payroll run is listed in the history table.

> **[Screenshot: Payroll history table with several rows]**

### Table Columns

| Column | Description |
|--------|-------------|
| **Pay Period** | Date range of the run (e.g. Mar 16–31, 2026) |
| **Employees** | Number of employees included in the run |
| **Gross Pay** | Total gross wages for the period |
| **Net Pay** | Total net pay for the period |
| **CRA Remittance** | CPP + EI + income tax owing to CRA for the period |
| **Status** | Processed or Draft |
| **Processed Date** | Date the run was finalized |

### Viewing Run Details

Click on any row in the payroll history table to open the **Run Detail** drawer. This shows the per-employee breakdown for that specific run — useful for answering employee questions about their pay.

> **[Screenshot: Run Detail drawer showing per-employee breakdown for a completed run]**

### Exporting Payroll History

Click **Export History** to download a CSV of all payroll runs visible in the table. The export includes all columns shown in the table.

---

## Understanding Canadian Payroll Deductions

Hibiscus HR automatically calculates all mandatory Canadian deductions using **CRA-compliant 2026 rates**. All rates are stored in a centralized, year-versioned configuration file (`2026.js`) that makes annual updates straightforward. Here is a summary of how each deduction is handled:

### CPP (Canada Pension Plan)

- Employee rate: **5.95%** of pensionable earnings (2026)
- Employer rate: **5.95%** (matched, 1:1)
- Annual employee maximum: **$3,867.50** (2026)
- Basic exemption: **$3,500**
- Hibiscus HR tracks each employee's YTD CPP and stops deducting once the annual maximum is reached

### CPP2 (Second Additional CPP Contribution)

Starting in 2024, a second ceiling for CPP contributions applies to higher-income earners:

- CPP2 rate: **4.00%** on earnings between the first and second earnings ceilings (2026)
- Second ceiling maximum pensionable earnings: tracked per the CRA schedule
- Hibiscus HR automatically calculates CPP2 once an employee's pensionable earnings exceed the first ceiling
- YTD tracking ensures CPP2 deductions stop at the annual maximum

### EI (Employment Insurance)

- Employee rate: **1.64%** of insurable earnings (2026)
- Employer rate: **2.296%** (1.4x the employee rate)
- Annual employee maximum: **$1,049.12** (2026)
- Hibiscus HR tracks YTD EI and stops deducting at the annual maximum

### Quebec-Specific Deductions

Quebec employees are subject to different payroll deductions than employees in other provinces:

**QPP (Quebec Pension Plan)** — Quebec's equivalent of CPP:
- Employee rate: **6.40%** of pensionable earnings (2026)
- Employer rate: **6.40%** (matched, 1:1)
- QPP replaces CPP for Quebec employees — the system automatically applies QPP instead of CPP when an employee's province is set to Quebec

**QPIP (Quebec Parental Insurance Plan):**
- Employee rate: **0.494%** of insurable earnings (2026)
- Employer rate: **0.692%**
- QPIP is a Quebec-only deduction that funds parental leave benefits

Quebec employees also have distinct provincial tax brackets, which are applied automatically.

### Income Tax

- Federal and provincial tax are calculated using **real 2026 CRA tax brackets** for all 13 provinces and territories
- Tax is based on each employee's province of employment, annualized salary, and TD1 claim amounts
- Hibiscus HR uses the payroll deduction method (periodic method) as prescribed by the CRA
- Provincial tax is no longer estimated — it uses the actual bracket rates published by the CRA and provincial revenue authorities

### CRA Remittance

Your total CRA remittance for each period = Employee CPP/QPP + Employer CPP/QPP + Employee EI + Employer EI + Federal tax withheld + Provincial tax withheld + CPP2 (if applicable) + QPIP (Quebec only).

The CRA remittance due date for most small businesses is the **15th of the month following the pay period**. Check your CRA account for your assigned remittance schedule.

### Centralized Rate Configuration

All payroll rates are stored in year-versioned configuration files (e.g. `2026.js`). When the CRA publishes new rates for the next tax year:

1. Copy the current year's rate file (e.g. `2026.js` to `2027.js`)
2. Update the rates to match the new CRA schedule
3. All payroll calculations across the platform will automatically use the new rates

This design eliminates the need for code changes during annual rate updates.

---

## T4 Filing Page

Hibiscus HR includes a dedicated **T4 Filing** page for generating CRA-compliant T4 XML files.

Navigate to **Payroll → T4 Filing** to:

1. **Select the tax year** — choose the year for T4 generation
2. **Preview T4 data** — review each employee's annual earnings, CPP/QPP contributions, EI premiums, and income tax withheld
3. **Generate T4 XML** — click to produce a CRA-compliant T4 XML file ready for upload to CRA My Business Account
4. **Download** — save the XML file to your computer for filing

The T4 XML follows the CRA's prescribed electronic filing format. Employee T4 slips can also be generated for distribution.

---

## ROE XML Generation

When an employee leaves (termination, resignation, or extended leave), a Record of Employment must be filed with Service Canada within specific timelines.

Hibiscus HR generates **ROE XML files** in the **Service Canada ROE Web Payroll Extract V2.0 format**. This means you can:

1. Generate the ROE from the [Onboarding & Offboarding](./onboarding-offboarding.md) module during the offboarding process
2. Download the XML file
3. Upload it directly to Service Canada's ROE Web system

The Payroll module provides the underlying earnings data (insurable hours, insurable earnings by pay period) used to populate the ROE.

---

## Payroll and the Reports Module

For detailed payroll analytics — deduction breakdowns, YTD remittance summaries, cost-per-head analysis — navigate to **Reports → Payroll**. See [Reports](./reports.md) for full details.
