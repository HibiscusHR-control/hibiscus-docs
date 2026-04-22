---
sidebar_position: 15
sidebar_label: "FAQ"
---

# Frequently Asked Questions

---

## General

**Q: What provinces does Hibiscus HR support?**

All ten Canadian provinces — Ontario, British Columbia, Alberta, Quebec, Manitoba, Saskatchewan, Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland & Labrador — plus the three territories and federal jurisdiction (Canada Labour Code). Each province's employment standards are applied based on the province set on each employee's record.

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

## AI Handbook & Policies

**Q: How does the AI Handbook Generator work?**

You pick from 15 standard Canadian HR policy templates (vacation, sick leave, parental leave, harassment, overtime, right-to-disconnect, termination, and more). Hibiscus HR drafts the policy using Claude, grounded in the statutory minimums for every province your employees actually work in — pulled automatically from your Employees module. You edit the draft, certify it has been reviewed by counsel, and publish. Generation typically takes 15–30 seconds per policy.

**Q: What does "customer-certified" mean?**

Before a policy can move from draft to published, the admin clicks through a certification modal attesting that qualified Canadian employment counsel has reviewed the policy. This is how the AI handbook feature shifts final content-accuracy liability to the customer's organization — you certify the draft is appropriate for your business before distributing it to employees. The EULA details this allocation.

**Q: What if the AI generates something incorrect?**

The certification step exists specifically for this. Hibiscus HR drafts with AI assistance; you review with counsel before publishing. The prompts are grounded in structured ESA data we maintain for all 10 provinces + federal (refreshed annually every December before the new year), so provincial minimums are accurate. But you should always have your counsel review the specific language, especially for harassment, termination, and accommodation policies.

**Q: Can I edit a generated policy?**

Yes — every policy opens in a split-pane editor with markdown source on the left and rendered preview on the right. Edit freely. Every save preserves the previous version in history, so nothing is lost. If you edit a currently-published policy, it automatically reverts to draft status and you need to re-certify before republishing (the certification applied to the old content, not your edits).

**Q: How do employees acknowledge the handbook?**

Employees see the current compiled handbook in the Employee Portal → Handbook. They read all policy sections inline, then type their full legal name in the signature form at the bottom and click **I Acknowledge**. The acknowledgement is timestamped with their IP and browser, and the record is permanent for that specific handbook version. Admins can view per-version acknowledgement lists from the Handbook Archive tab.

**Q: What happens when I compile a new handbook version after employees have signed the old one?**

The old acknowledgements stay on the record for audit purposes. Employees visiting the Handbook page after a new version is compiled will see the new content and be prompted to acknowledge the new version. Previous-version acknowledgements are never erased.

**Q: What's in the handbook PDF?**

Cover page (company name, title, version number, date, counsel firm if identified), table of contents, each selected policy rendered as a section, and an employee acknowledgement signature page at the end. Letter-size, PDF. Downloads to your computer and is simultaneously archived in the Handbook Archive tab.

**Q: Do I need to regenerate policies when ESA rules change?**

Hibiscus HR maintains the underlying ESA data for all 10 provinces. When provincial minimums change (usually in January for a new year), regenerate affected policies and compile a fresh handbook version. This takes minutes, not weeks. See the [AI Handbook & Policies](./handbook-policies.md) page for full details.

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
- **Days 91–120:** Data queued for deletion. Regulated records (payroll, T4 approvals, ROE filings, benefits, employee records, compliance documents, incidents, performance reviews) are extracted and archived to **Azure Blob Storage with time-based WORM (Write-Once-Read-Many) immutability** — 7-year retention, locked policy that even our own storage administrators cannot bypass.
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

## Compensation & Reviews

**Q: How do compensation changes work?**

Managers or HR administrators request a compensation change (salary adjustment, promotion, role change, or demotion) from the employee's profile. The request includes a justification and proposed effective date. HR reviews the request on the Compensation Changes tab and approves or denies it. Approved changes automatically update the employee's salary and role in the system. See [Employees](./employees.md) for details.

**Q: What happens during probation?**

The system automatically flags employees approaching their 90-day probation end date. The Dashboard shows alerts for these employees along with a "Start Review" button. HR can create a probation review cycle to ensure all probationary employees are reviewed on time. See [Performance](./performance.md) for details on review cycles.

---

## Plans & Billing

**Q: What plans are available?**

Hibiscus HR offers three plan tiers:

- **Starter** — $8/employee/month, up to 25 employees, 1 GB storage. Includes Dashboard, Employees, Leave Management, Time & Attendance, Onboarding & Offboarding, and Compliance.
- **Growth** — $12/employee/month, up to 150 employees, 5 GB storage. Adds Payroll, Performance, Benefits, Reports, Integrations, T4 Filing, ROE generation, and the AI Handbook Generator.
- **Scale** — Custom pricing, unlimited employees, 25 GB storage. For established businesses with complex needs — multi-location support, dedicated onboarding specialist, quarterly compliance reviews. Contact sales@hibiscushr.ca for a quote.

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

- **Support email:** support@hibiscushr.ca
- **Sales questions:** sales@hibiscushr.ca
- **General inquiries:** info@hibiscushr.ca
- **In-app:** Click the help icon in the bottom-left of the admin app to submit a ticket directly
- **Website:** hibiscushr.ca
- **Response time:** Within 1 business day
