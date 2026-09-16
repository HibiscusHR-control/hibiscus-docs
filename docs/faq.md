---
sidebar_position: 15
sidebar_label: "FAQ"
---

# Frequently Asked Questions

---

## General

**Q: What provinces does Hibiscus HR support?**

English-Canada only for now: Ontario, British Columbia, Alberta, Manitoba, Saskatchewan, Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland & Labrador, plus the three territories and federal jurisdiction (Canada Labour Code). Each province's employment standards are applied based on the province set on the employee's record. Quebec is not supported yet.

**Q: Is my data stored in Canada?**

Yes. All data is stored in Microsoft Azure's Canada Central region. Hibiscus HR is fully PIPEDA-compliant and never transfers employee data to US servers. Email routing uses Cloudflare Email Routing (Canadian-hosted), error telemetry uses Azure Application Insights (Canada Central), and all backups remain in Canadian data centres.

**Q: Who owns Hibiscus HR?**

Hibiscus HR is independently Canadian-owned and operated. Built in Oakville, Ontario by a solo founder. No foreign parent company. If the platform ever expands internationally, it would be launched as a separate product under a different name — what you see at hibiscushr.ca will always be Canadian-owned, Canadian-hosted, and Canadian-answered.

**Q: Can employees log in themselves?**

Yes. Employees receive an onboarding invite email and can log in to complete their onboarding through the Employee Self-Service Portal. The portal guides them through entering their personal information, SIN, banking details, TD1 forms, and document sign-offs. See [Onboarding & Offboarding](./onboarding-offboarding.md) for full details.

---

## Payroll

**Q: What happens if I make an error in a processed payroll run?**

Processed payroll runs cannot be reversed directly in the platform. To correct a payroll error, you will need to make an adjustment in the next pay run. For CRA remittance corrections, contact your accountant or the CRA directly.

**Q: Does Hibiscus HR file T4s automatically?**

Yes. Navigate to **Payroll → T4 Filing** to generate CRA-compliant T4 XML files. The system compiles each employee's annual earnings, CPP contributions, EI premiums, and income tax withheld into the CRA's prescribed XML format. Download the file and upload it to CRA's My Business Account for electronic filing. T4 amendments (SIN, Box 14, Box 22 corrections) are supported through the T4 Amendments panel on the same page.

**Q: How are CPP and EI maximums handled?**

Hibiscus HR tracks each employee's year-to-date CPP and EI contributions. Once an employee reaches the annual maximum, deductions stop automatically for that employee for the remainder of the calendar year.

**Q: My employee works in Quebec. Are QPP deductions handled?**

Hibiscus HR is English-Canada only for now. Quebec support (QPP, QPIP, CNESST, French UI, RL-1) is not shipped. If your firm has Quebec staff, this platform isn't the right fit yet.

---

## Leave Management

**Q: Can employees carry over unused vacation days?**

Vacation carryover policies are configured in Settings → Payroll. The system supports carryover caps (e.g. max 5 days carried) or no-carryover (use it or lose it at year-end).

**Q: What if a public holiday falls during an approved leave?**

Under most provincial ESA rules, statutory holidays during an approved leave period are not counted as leave days. Hibiscus HR identifies statutory holiday dates and excludes them from the leave day count. The list of statutory holidays is maintained per province.

**Q: Can I approve a leave request retroactively?**

Yes — leave requests can be submitted and approved for dates in the past. The Status simply updates and the days are recorded in the leave history.

---

## Compliance

**Q: How is the Compliance Score calculated?**

The score is a weighted average across three categories: document currency, ROE filing status, and ESA checklist completion. Each category contributes to the overall percentage. Items flagged as Action Required have a larger negative impact than Expiring items.

**Q: What do I do when a document shows as Expired?**

Navigate to the Compliance → Documents tab, filter by Expired, and click **Renew** on each expired document to enter the new expiry date. If the employee has not renewed the certification yet, note the expected renewal date as a placeholder and update it once the actual certificate is received.

**Q: Does Hibiscus HR tell me when CRA deadlines are coming up?**

Yes — the Compliance → CRA Calendar tab lists all upcoming CRA and provincial filing deadlines. Deadlines within 14 days are highlighted. You can also set up email notifications for upcoming deadlines in Settings → Notifications.

---

## Time & Attendance

**Q: What if an employee's province changes mid-year?**

Update the employee's Province field in the Employees module. From that point forward, the new province's overtime threshold will be applied. Historical timesheet records are not retroactively recalculated.

**Q: Can I track overtime pay rates through the platform?**

The Time & Attendance module calculates overtime *hours* (hours above the provincial threshold). Overtime pay rates (typically 1.5× or 2× regular rate) are applied when running payroll. The payroll module uses the overtime hours flag from timesheets to apply the correct rate.

---

## Partner Draws

**Q: How do I flag someone as a partner?**

Set their employment type to **Partner** on the Employees module. Only partners appear in the Partner Draws ledger. See [Partner Draws](./partner-draws.md).

**Q: Our partnership is on a July to June fiscal year, not calendar year. Does the ledger handle that?**

Yes. Set **partnership_fiscal_year_start_month** to `7` under Settings → Company. Every YTD, ratio, and headroom calculation on the Partner Draws page then runs against the July to June year.

**Q: What tax-prep software does the T5013 CSV import into?**

TaxCycle, CCH iFirm, ProFile, and ProTax all accept the CSV. The CSV isn't a T5013 slip itself — it's the source data your tax-prep tool uses to build the slip.

---

## Credentials & CPD

**Q: What regulators are pre-loaded?**

20 Canadian regulators including CPA per province (Ontario, BC, Alberta, Saskatchewan, Manitoba, New Brunswick, Nova Scotia, PEI, Newfoundland & Labrador), LSO, LSBC, PEO, EGBC, APEGA, OAA, LSA, CIA Canada, PMAC, HRPA, and legacy CGA. Cycle length and hour targets pre-loaded. See [Credentials & CPD](./credentials.md).

**Q: Can I log an activity that only counts for ethics hours?**

Yes. On the CPD activity form, select **Activity Type: Ethics** and enter the hours. The credential card shows ethics hours as a sub-total against the cycle target.

**Q: My regulator isn't on the list. Can I still track it?**

Yes. Select **Other** on the regulator dropdown and enter your own cycle length and target hours.

---

## Professional Dues

**Q: The firm paid our staff's CPA Ontario dues. Does that go on Box 40?**

It depends. If holding the CPA is a requirement of the role (typical for CPA-track staff), it generally isn't a taxable benefit. If the credential is a nice-to-have (e.g. an HRPA for a staff accountant), it typically is. Get your accountant's read on the specific line and set the Box 40 flag accordingly.

**Q: The employee paid CPA dues; we reimbursed them. How do I record that?**

Set **Paid By = Employee** and toggle **Reimbursed by Employer = on**. The register captures both sides of the flow.

---

## Onboarding & Offboarding

**Q: How quickly must I file an ROE after an employee's last day?**

Service Canada requires the ROE to be filed within **5 calendar days** of the employee's last day (if issuing paper ROEs) or within **5 calendar days of the end of the pay period** in which the interruption of earnings occurs (if filing electronically via ROE Web). Hibiscus HR shows a countdown and triggers urgency alerts when an ROE is approaching its deadline.

**Q: Can I customize the onboarding checklist?**

Yes. Go to **Settings → Templates → Onboarding** to edit the default 8-step template — add tasks, remove tasks, reassign categories (Documentation, Payroll, Benefits, IT, Orientation, Compliance), and reorder. The template you define becomes the starting checklist for every new hire you add. You can still customize individual onboarding cases after they're created.

---

## Benefits

**Q: What if an employee waives all benefits?**

An employee can waive individual plans or all plans. A waived employee will not appear in the open enrollment list. Their waiver is recorded and timestamped for audit purposes.

**Q: How do I handle benefits for an employee on parental leave?**

Benefits coverage during parental leave is governed by your plan contract and the applicable provincial ESA. In most cases, benefits continue during the leave period. Update the employee's status to On Leave in the Employees module — this does not automatically suspend benefits.

---

## Data & Security

**Q: How is employee data protected?**

Hibiscus HR uses encrypted connections (TLS) for all data in transit and AES-256 encryption for data at rest. Sensitive fields such as SINs and banking information are stored with additional field-level encryption. The platform is hosted on Microsoft Azure in Canadian data centres.

**Q: Is the platform PCI compliant?**

Yes. Hibiscus HR is PCI compliant via Helcim. All payment card data is processed by Helcim's PCI-DSS Level 1 certified infrastructure. Card numbers are tokenized in the browser using HelcimPay.js and never touch Hibiscus HR servers. We do not store, process, or transmit cardholder data.

**Q: Can I export all my data?**

Yes. Each module has an Export CSV button. For a full data export across all modules, use the Export button in Reports. If you need a complete database export for migration or audit purposes, contact support.

**Q: What happens to data if I cancel my subscription?**

A three-tier retention model governs deletion:

- **Days 0–90 after cancellation:** Full read-only access; export everything via Settings → Billing → Export Data or Reports.
- **Days 91–120:** Data queued for deletion. Regulated records (payroll, T4 approvals, ROE filings, benefits, employee records, compliance documents, incidents) are extracted and archived to **Azure Blob Storage with time-based WORM (Write-Once-Read-Many) immutability** — 7-year retention, locked policy that even our own storage administrators cannot bypass.
- **Day 120+:** Non-regulated data is permanently deleted. Tenant database schema dropped, user accounts removed, Deletion Certificate generated.

Full policy details are at [hibiscushr.ca/data-retention](https://hibiscushr.ca/data-retention).

**Q: Does Hibiscus HR retain records required by Canadian regulators?**

Yes. Payroll records (7 years, CRA Income Tax Act s.230), T4/tax filings (7 years, CRA), ROE filings (6 years, Service Canada), incident/WSIB records (7 years, OHSA), benefits enrollment (7 years, CRA taxable benefit), employee records (3 years after termination, ESA), timesheets (3 years, ESA) are all retained per statutory requirement. These are preserved in immutable archive storage after tenant deletion for the full retention period.

---

## Employee Self-Service & Onboarding

**Q: Can new hires fill in their own information?**

Yes. The Employee Self-Service Onboarding Portal lets new hires complete their onboarding before their first day. They enter their own personal details, SIN, banking information for direct deposit, TD1 tax forms, and sign off on company policies — all through a guided 8-step wizard. See [Onboarding & Offboarding](./onboarding-offboarding.md) for the full walkthrough.

**Q: Can employees come back and finish onboarding later?**

Yes. Each step of the employee onboarding wizard auto-saves. The employee can close their browser at any point and resume from where they left off when they return. There is no time limit — they can complete it over multiple sessions.

---

## Compensation

**Q: How do compensation changes work?**

Managers or HR administrators request a compensation change (salary adjustment, promotion, role change, or demotion) from the employee's profile. The request includes a justification and proposed effective date. HR reviews the request on the Compensation Changes tab and approves or denies it. Approved changes automatically update the employee's salary and role in the system. See [Employees](./employees.md) for details.

---

## Plans & Billing

**Q: What plans are available?**

Hibiscus HR ships with a single tier at $18 CAD / employee / month during the founding-customer program. All modules are included. Founding customers get 50% off the first year — see [hibiscushr.ca/founding-customer](https://hibiscushr.ca/founding-customer).

**Q: How does billing work?**

Billing is monthly in arrears, based on the number of active employees during the billing period. Your charge is calculated as: per-employee rate x active employees + applicable sales tax. Sales tax is calculated using Canadian place-of-supply rules based on your company's province of registration (HST, GST+PST, GST+QST, or GST only, depending on province).

**Q: Where can I see my invoices?**

Go to **Settings → Billing → Invoice History**. All past invoices are listed with the date, period, amount, and payment status. Click **Download** on any invoice to get a branded PDF with a full tax breakdown (GST, HST, PST, or QST as applicable). Invoices are also emailed to your billing contact after each monthly charge.

**Q: How do I give my benefits broker access?**

Go to **Settings → Benefits Admin → Invite Broker**. Enter the broker's name, email, and brokerage firm. They receive an email with a secure login link that gives them read-only access to the Benefits module — plan configurations, enrollment data, and benefits enrollment CSV downloads. Brokers cannot access employee personal information, payroll, or any other module. You can revoke their access at any time from the same settings page.

**Q: How do I update payroll rates for a new year?**

All CRA payroll rates are stored in a centralized, year-versioned rate file (e.g. `2026.js`). When the CRA publishes new rates, copy the current year's file (e.g. `2026.js` to `2027.js`), update the rate values, and all payroll calculations will automatically use the new rates. No code changes are required. See [Settings → Payroll](./settings.md) for details.

---

## Compliance & Incidents

**Q: How do I report a workplace incident?**

Go to **Compliance** and click the **Incidents** tab. Click **Report Incident** to open the incident report drawer. Fill in the date, time, location, type, severity, people involved, and a description of what happened. If the incident is WSIB-reportable (Ontario), toggle the WSIB flag — the system will track the 72-hour reporting requirement. See [Compliance](./compliance.md) for full details.

---

## Getting Help

If you cannot find the answer here:

- **Support email:** support@hibiscushr.ca
- **Sales questions:** sales@hibiscushr.ca
- **General inquiries:** info@hibiscushr.ca
- **In-app:** Click the help icon in the bottom-left of the admin app to submit a ticket directly
- **Website:** hibiscushr.ca
- **Response time:** Within 1 business day
