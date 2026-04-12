---
sidebar_position: 15
sidebar_label: "FAQ"
---

# Frequently Asked Questions

---

## General

**Q: What provinces does Hibiscus HR support?**

All ten Canadian provinces — Ontario, British Columbia, Alberta, Quebec, Manitoba, Saskatchewan, Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland & Labrador. Federal jurisdiction (Canada Labour Code) is also supported. Each province's employment standards are applied based on the province set on each employee's record.

**Q: Is my data stored in Canada?**

Yes. All data is stored in Canadian data centres. Hibiscus HR is fully PIPEDA-compliant and never transfers employee data to US servers.

**Q: Can employees log in themselves?**

Yes. Employees receive an onboarding invite email and can log in to complete their onboarding through the Employee Self-Service Portal. The portal guides them through entering their personal information, SIN, banking details, TD1 forms, and document sign-offs. See [Onboarding & Offboarding](./onboarding-offboarding.md) for full details.

---

## Payroll

**Q: What happens if I make an error in a processed payroll run?**

Processed payroll runs cannot be reversed directly in the platform. To correct a payroll error, you will need to make an adjustment in the next pay run. For CRA remittance corrections, contact your accountant or the CRA directly.

**Q: Does Hibiscus HR file T4s automatically?**

Yes. Navigate to **Payroll → T4 Filing** to generate CRA-compliant T4 XML files. The system compiles each employee's annual earnings, CPP/QPP contributions, EI premiums, and income tax withheld into the CRA's prescribed XML format. Download the file and upload it to CRA's My Business Account for electronic filing.

**Q: How are CPP and EI maximums handled?**

Hibiscus HR tracks each employee's year-to-date CPP and EI contributions. Once an employee reaches the annual maximum, deductions stop automatically for that employee for the remainder of the calendar year.

**Q: My employee works in Quebec. Are QPP deductions handled?**

Quebec employees contribute to the Quebec Pension Plan (QPP) instead of CPP. QPP is included in Quebec payroll calculations. Full Quebec labour standards integration (CNESST) is being completed in Phase 2.

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

## Onboarding & Offboarding

**Q: How quickly must I file an ROE after an employee's last day?**

Service Canada requires the ROE to be filed within **5 calendar days** of the employee's last day (if issuing paper ROEs) or within **5 calendar days of the end of the pay period** in which the interruption of earnings occurs (if filing electronically via ROE Web). Hibiscus HR shows a countdown and triggers urgency alerts when an ROE is approaching its deadline.

**Q: Can I customize the onboarding checklist?**

Custom onboarding task templates are on the roadmap. In the current version, the default checklist covers the most common onboarding steps for Canadian employers. Contact support to request a custom template configuration.

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

Your data is retained for 90 days after cancellation, during which you can request a full export. After 90 days, data is permanently deleted in accordance with our data retention policy and PIPEDA requirements.

---

## Employee Self-Service & Onboarding

**Q: Can new hires fill in their own information?**

Yes. The Employee Self-Service Onboarding Portal lets new hires complete their onboarding before their first day. They enter their own personal details, SIN, banking information for direct deposit, TD1 tax forms, and sign off on company policies — all through a guided 8-step wizard. See [Onboarding & Offboarding](./onboarding-offboarding.md) for the full walkthrough.

**Q: Can employees come back and finish onboarding later?**

Yes. Each step of the employee onboarding wizard auto-saves. The employee can close their browser at any point and resume from where they left off when they return. There is no time limit — they can complete it over multiple sessions.

---

## Compensation & Reviews

**Q: How do compensation changes work?**

Managers or HR administrators request a compensation change (salary adjustment, promotion, role change, or demotion) from the employee's profile. The request includes a justification and proposed effective date. HR reviews the request on the Compensation Changes tab and approves or denies it. Approved changes automatically update the employee's salary and role in the system. See [Employees](./employees.md) for details.

**Q: What happens during probation?**

The system automatically flags employees approaching their 90-day probation end date. The Dashboard shows alerts for these employees along with a "Start Review" button. HR can create a probation review cycle to ensure all probationary employees are reviewed on time. See [Performance](./performance.md) for details on review cycles.

---

## Plans & Billing

**Q: What plans are available?**

Hibiscus HR offers three plan tiers:

- **Starter** — up to 25 employees. Includes core HR modules: Employees, Leave Management, Time & Attendance, Dashboard, and Reports.
- **Growth** — up to 150 employees. Adds Payroll, Compliance, Performance, Benefits, and Onboarding & Offboarding.
- **Scale** — unlimited employees. Full platform including Broker Portal, priority support, and advanced integrations.

Modules not included in your plan are visible in the sidebar with a lock icon. Clicking a locked module shows an upgrade prompt.

**Q: How do I upgrade my plan?**

Go to **Settings → Billing → Change Plan**. Select the new tier and confirm. Upgrades take effect immediately. Downgrades take effect at the end of the current billing cycle.

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

- **Email:** hibiscushrmain@gmail.com
- **Website:** hibiscushr.ca
- **Response time:** Within 1 business day
