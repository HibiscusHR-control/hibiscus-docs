---
sidebar_position: 1
sidebar_label: "Introduction"
slug: /
---

# Hibiscus HR — User Guide

Welcome to the documentation for **Hibiscus HR**, the Canadian payroll and HR platform built for small accounting firms.

If you run a 5 to 30 person Canadian accounting firm with partners on T5013 draws and staff on T4 payroll, this is the platform. This guide covers every module and every screen in the product.

---

## Who Hibiscus HR is for

Hibiscus HR is built for a specific customer: the Canadian accounting firm.

- 5 to 30 people
- At least one partner drawing on a T5013 partnership
- Managers, seniors, staff accountants, admin, and bookkeepers on T4 payroll
- Licensed CPAs and CGAs with per-province CPD hour requirements
- English-Canada only for now (Quebec support is on the roadmap, not shipped)

The whole product is scoped to what firms in that shape actually do every month: pay staff, track partner draws, keep credentials current, log CPD hours, run payroll, file T4s and ROEs, and stay on top of ESA compliance across whichever provinces your staff work in.

---

## What Hibiscus HR does

**Fully integrated modules:**

**New to Hibiscus HR?** Start with the [Quick Start Guide](./quick-start.md).

| Module | What it does |
|--------|-------------|
| [Dashboard](./dashboard.md) | Firm health at a glance. Partner draw status, utilization, expiring credentials, compliance |
| [Employees](./employees.md) | Full staff lifecycle. Includes CSV migration from Rise, Wagepoint, Payworks, Humi, Dayforce, and ADP |
| [Payroll](./payroll.md) | 2026 CRA tax engine, CPP/CPP2/EI calculations, T4 XML + T4 amendments, T2200 batch, ROE XML |
| [Partner Draws](./partner-draws.md) | Partnership draw ledger. Records, monitors, and exports T5013-friendly totals for tax season |
| [Time & Attendance](./time-attendance.md) | Weekly timesheets, provincial overtime, billable-hours split for utilization tracking |
| [Leave Management](./leave-management.md) | ESA-compliant leave rules per province, parental top-up eligibility, continuous leave |
| [Credentials & CPD](./credentials.md) | 20 pre-loaded Canadian regulators (CPA, LSO, PEO, EGBC, and more). CPD hours per cycle, expiry alerts |
| [Professional Dues](./professional-dues.md) | Firm-paid dues register. T4 Box 40 taxable benefit handling, reimbursement flags |
| [Benefits](./benefits.md) | Configurable plans, enrollment CSVs for Manulife / Sun Life / Canada Life, RRSP formula on retirement plans |
| [Compliance](./compliance.md) | Nightly nine-rule ESA scan, provincial minimums, document expiry, ROE deadlines |
| [Onboarding & Offboarding](./onboarding-offboarding.md) | Wizards, digital TD1, employee invite, ROE Web XML export |
| [Reports](./reports.md) | Workforce, Payroll, Leave, Time & Attendance, and Utilization |
| [Integrations](./integrations.md) | QuickBooks Online, Xero, Sage 50, QuickBooks Time, Karbon, SSO, Slack, Teams, Zapier |
| [Employee Portal](./employee-portal.md) | Self-service onboarding, pay stubs, T4s, leave requests, benefits, profile |
| [Settings](./settings.md) | Firm setup, users, payroll, dues register, integrations, security, billing |

Payment card processing is handled by Helcim (PCI-DSS Level 1). Card data never touches Hibiscus HR servers.

---

## Who this guide is for

Hibiscus HR uses a role-based access system. Your role determines which modules you can access.

| Role | Access |
|------|--------|
| **Super Admin** | Full access to all modules, settings, and billing |
| **HR Admin** | All modules except system-level settings and billing |
| **Payroll Admin** | Payroll, Reports, Employees (read-only) |
| **Manager** | Leave approvals, Time & Attendance for their team, read-only Reports |
| **Employee** | Self-service portal, personal profile, leave requests, pay stubs |
| **Broker** | Read-only benefits access and enrollment CSV download |

Partner Draws is admin-only. Managers and employees don't see it.

Most instructions in this guide are written from an HR Admin or Super Admin perspective. Where a feature is role-restricted, it is noted.

---

## Founding customer program

Hibiscus HR is running a founding customer program: five firms, 50% off first year, direct line to the founder, feature requests shipped inside a quarter. See [hibiscushr.ca/founding-customer](https://hibiscushr.ca/founding-customer) for details.

---

## Getting support

- **Support email:** support@hibiscushr.ca
- **Sales:** sales@hibiscushr.ca
- **General inquiries:** info@hibiscushr.ca
- **Website:** hibiscushr.ca
- **In-app:** the help icon in the bottom-left of the admin app opens a support ticket

---

## A note on screenshots

Screenshots throughout this guide show the live platform. Navigation is on the left-hand sidebar. The main content area is on the right.
