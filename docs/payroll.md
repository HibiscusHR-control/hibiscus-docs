---
sidebar_position: 6
sidebar_label: "Payroll"
---

# Payroll

The Payroll module handles your firm's full Canadian payroll cycle. CPP/CPP2 contributions, EI premiums, provincial tax by employee, CRA remittance tracking, T4 XML, T4 amendments, T2200 batch generation, and ROE XML. Calculations use the CRA T4127 tables for the current year across all provinces and territories.

> **[Screenshot: Payroll module showing the Next Payroll hero, YTD stat cards, and payroll history]**

---

## Overview

The Payroll module is organized into three areas:

1. **Next Payroll hero** — what's coming up and how to initiate the next run
2. **YTD summary cards** — year-to-date totals
3. **Payroll history table** — full record of every past run

---

## Next Payroll section

| Field | Description |
|-------|-------------|
| **Pay period** | Date range for the upcoming run (e.g. Apr 1 to 15, 2026) |
| **Estimated employees** | Number of active staff included |
| **Estimated gross pay** | Projected total gross before deductions |

Also shown: the **CRA Remittance Due** alert — the date by which CPP, EI, and income tax from the previous period must be remitted.

---

## YTD summary cards

| Card | Description |
|------|-------------|
| **YTD Gross Payroll** | Total gross wages paid to all staff since January 1 |
| **YTD Net Paid Out** | Total net pay actually deposited (after all deductions) |
| **YTD CRA Remittance** | Total CPP, EI, and income tax remitted year-to-date |
| **Payroll Runs** | Number of runs completed in the current year |

Partners on T5013 draws do NOT appear in payroll YTD. Draws are a separate ledger — see [Partner Draws](./partner-draws.md).

---

## Running Payroll

Click **Run Payroll** in the top-right.

### Step 1 — Select pay period

Choose the pay period start and end dates. The wizard suggests the next period based on your payroll schedule.

### Step 2 — Preflight

The preflight step surfaces sanity checks before you commit:

- Employees with incomplete banking information
- Employees missing SIN on file
- **Multi-province warning** — when your active staff span multiple provinces, a warning (not a blocker) surfaces listing the provinces. Per-employee tax bracket, EHT, overtime, and vacation entitlement math is handled automatically; the warning is informational so you can confirm your setup

### Step 3 — Preview

The wizard calculates per-employee:

| Column | Description |
|--------|-------------|
| **Employee** | Name |
| **Gross Pay** | Base salary or hours x rate for the period |
| **CPP** | Canada Pension Plan employee contribution |
| **EI** | Employment Insurance premium |
| **Federal Tax** | Federal income tax withheld |
| **Provincial Tax** | Provincial income tax based on province |
| **Net Pay** | Take-home after deductions |

If a row looks wrong (wrong salary, wrong province), close the wizard, fix the employee record, and re-open.

### Step 4 — Process

Click **Process Payroll**. Once processed:

- The run appears in Payroll History with status **Processed**
- YTD CPP and EI accumulators update
- CRA remittance amount is added to remittance tracking
- The pay period is locked
- An immutable pay stub HTML is generated and stored for each employee

**Pay stubs are permanent.** Even if an employee record changes later (new address, role change), the original pay stub renders with the details as they were at the time of the run. This satisfies provincial pay-statement retention requirements.

> **Important:** Processed runs cannot be reversed in the current version. Corrections are made through an adjustment in the next pay period. For major errors, contact support@hibiscushr.ca.

---

## Payroll History table

Every completed run is listed.

### Columns

| Column | Description |
|--------|-------------|
| **Pay Period** | Date range of the run |
| **Employees** | Number included in the run |
| **Gross Pay** | Total gross for the period |
| **Net Pay** | Total net for the period |
| **CRA Remittance** | CPP + EI + income tax owing for the period |
| **Status** | Processed or Draft |
| **Processed Date** | When the run was finalized |

Click any row to open the **Run Detail** drawer with the per-employee breakdown.

Click **Export History** for a CSV of everything visible.

---

## Direct Deposit via CPA-005 EFT

After a run is processed, Hibiscus HR generates a **CPA Standard 005** Electronic Funds Transfer file — the Payments Canada standard every major Canadian business bank accepts for bulk direct deposit.

### How it works

1. Open the completed pay run in Payroll History
2. Click **Download Bank File** (CPA-005 format)
3. The file downloads with a sequential origination number (required by banks for audit)
4. Upload to your bank's EFT system (RBC Express, BMO Online Banking for Business, TD Business EFT, Scotiabank, CIBC Cash Management, National Bank)
5. The bank processes deposits on the date specified in the file

### Validation before generating

Hibiscus HR blocks generation if any employee is missing direct-deposit information. A modal lists each employee with missing institution / transit / account numbers, with **Fix ->** links that jump straight to the employee edit form.

### File numbering

CPA-005 files require a unique, sequential origination number. Hibiscus HR maintains this counter per firm — you'll never generate a duplicate. The next number is shown on screen when you download.

### Cheque fallback

For staff without direct deposit or one-off payments, mark their pay as **Cheque** and handle it manually outside the bank file.

---

## Understanding Canadian payroll deductions

Rates come from the CRA T4127 tables loaded into a centralized, year-versioned configuration file. When CRA publishes rates for a new year, the config is updated once and every calculation across the platform picks it up.

### CPP (Canada Pension Plan)

- Employee rate: **5.95%** of pensionable earnings (2026)
- Employer rate: **5.95%** (matched, 1:1)
- Year's Maximum Pensionable Earnings (YMPE): **$74,600** (2026)
- Basic exemption: **$3,500**
- Annual employee maximum: **$4,216.95** (2026)
- Hibiscus HR tracks YTD CPP and stops deducting at the annual maximum

### CPP2

A second ceiling applies to higher-income earners:

- CPP2 rate: **4.00%** on earnings between the first and second ceilings (2026)
- Year's Additional Maximum Pensionable Earnings (YAMPE): **$85,000** (2026)
- Annual employee CPP2 maximum: **$416.00** (2026)
- CPP2 calculation kicks in automatically once an employee's pensionable earnings exceed the first ceiling
- YTD tracking stops CPP2 deductions at the annual maximum

### EI (Employment Insurance)

- Employee rate: **1.64%** of insurable earnings (2026)
- Employer rate: **2.296%** (1.4x the employee rate)
- Maximum insurable earnings: **$68,900** (2026)
- Annual employee maximum: **$1,129.96** (2026)
- Annual employer maximum: **$1,581.94** (2026)

### Income tax

Federal and provincial tax use the real T4127 tables for every English-Canada province and territory. Tax is based on each employee's province of employment, annualized salary, and TD1 claim amounts. The CRA periodic method is applied.

### CRA remittance

Your total CRA remittance for each period = Employee CPP + Employer CPP + Employee EI + Employer EI + Federal tax withheld + Provincial tax withheld + CPP2 (if applicable).

The due date for most small firms is the **15th of the month following the pay period**. Check your CRA account for your assigned remittance schedule.

### Centralized rate configuration

Rates live in year-versioned files. When CRA publishes new rates:

1. Copy the current year's rate file (e.g. `2026.js` to `2027.js`)
2. Update the rates
3. Every calculation across the platform uses the new rates automatically

No code changes required.

---

## T4 Filing page

Navigate to **Payroll → T4 Filing**:

1. **Select the tax year**
2. **Preview T4 data** — per-employee annual earnings, CPP contributions, EI premiums, income tax withheld
3. **Generate T4 XML** — produces a CRA-compliant T4 XML file for upload to CRA My Business Account
4. **Download** — save the XML to your computer

Also on this page: employee PDF slips, T2200 batch generation, and the T4 Amendments panel.

### PDF Slips for Employees

Click **PDF Slips for Employees** to generate a package of per-employee T4 slips. Distribute to staff for their personal tax filing.

### Download T4 XML for CRA

Click **Download T4 XML for CRA** to generate the T4 XML for upload. Once you've submitted to CRA, use the **Mark as Filed** confirmation surface to record the submission (this locks the run against uncontrolled edits and unlocks the T4 Amendments panel).

---

## T2200 Package (batch)

Adjacent to the T4 buttons on the T4 Filing page is **T2200 Package**. It generates a T2200 (Declaration of Conditions of Employment) PDF for every active employee in a single batch.

Defaults reflect a Canadian accounting firm profile:

| Field | Default |
|-------|---------|
| **Home office required** | Yes |
| **Own supplies required** | Yes |
| **Reimbursement provided** | No |
| **Motor vehicle required** | No |

Adjust per-employee before generating if any defaults don't fit. T2200s are retained locally for the firm's records — not filed with CRA per the form spec.

---

## T4 Amendments panel

After the original T4 XML has been downloaded and marked filed with CRA, the T4 Amendments panel appears on the T4 Filing page. Amendments cover the most common corrections:

- SIN correction
- Box 14 correction (employment income)
- Box 22 correction (income tax deducted)

### Filing an amendment

1. Click **New Amendment** on the T4 Amendments panel
2. Select the employee
3. Enter the corrected values for the affected boxes
4. Add a reason for the amendment (required)
5. Click **Save Amendment**

The amendment is stored as JSONB on the slip record. It appears on the Amendments list with the date, employee, corrected fields, and reason.

### Downloading the amendment XML

Click **Download Amendment XML** to generate a T4 amendment file containing only the slips you've amended. The T619 header carries `rpt_tcd='A'` (amendment code). CRA rejects amendment submissions that include unamended slips, so the exported file only carries what changed.

### Amendments list

Every filed amendment appears in the list with:

| Column | Description |
|--------|-------------|
| **Employee** | Name |
| **Boxes corrected** | Which fields changed |
| **Reason** | The reason recorded at filing |
| **Date filed** | When you generated the amendment XML |

Amendments are audit-logged.

---

## ROE XML generation

When an employee leaves (termination, resignation, extended leave), a Record of Employment must be filed with Service Canada within specific timelines.

Hibiscus HR generates **ROE XML files** in the **Service Canada ROE Web Payroll Extract V2.0 format**:

1. Generate the ROE from the [Onboarding & Offboarding](./onboarding-offboarding.md) module during the offboarding process
2. Download the XML
3. Upload directly to Service Canada's ROE Web system

The Payroll module supplies the underlying earnings data (insurable hours and earnings by pay period).

---

## Payroll and the Reports module

For detailed analytics — deduction breakdowns, YTD remittance summaries, cost-per-head — navigate to **Reports → Payroll**. See [Reports](./reports.md).
