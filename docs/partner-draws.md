---
sidebar_position: 7
sidebar_label: "Partner Draws"
---

# Partner Draws

The Partner Draws ledger is a first-class module for partnership principals on T5013. It records each partner's monthly (or ad-hoc) draw, computes YTD totals against a per-partner annual target, and hands you a T5013-friendly CSV for tax-season handoff to your tax-prep software.

> **Access:** Admin only. Managers and employees don't see this page.

> **[Screenshot: Partner Draws ledger showing per-partner cards with YTD totals, headroom, and policy badges]**

---

## Who this is for

Firms with at least one partner drawing on a T5013 partnership. Draws are not T4 payroll. They are equity distributions on a partnership return, and the accounting treatment is completely different.

Hibiscus HR keeps draws in a separate ledger from payroll for exactly that reason: they don't flow into T4 XML, they don't accumulate CPP or EI, and they don't touch CRA remittance.

---

## Setting up a partner

Every partner is an employee record with employment type set to **Partner** in [Employees](./employees.md).

Two fields drive the ledger:

| Field | Notes |
|-------|-------|
| **annualDrawTarget** | The partner's target draw for the fiscal year. Used to compute ratio-against-target and remaining headroom |
| **SIN** | Stored encrypted. Masked to `***-***-###` on the T5013 CSV export |

Set the annual target once at the start of the fiscal year. Adjust mid-year if the partners agree to change the target.

Employees without employment type = Partner do not appear in the Partner Draws ledger.

---

## Fiscal year

By default the ledger totals draws by calendar year. Firms on a non-calendar fiscal year (July, April, October, etc.) can override via **Settings → Company → partnership_fiscal_year_start_month**.

| Setting | Meaning |
|---------|---------|
| `1` | Calendar year (Jan to Dec) — default |
| `4` | April to March fiscal year |
| `7` | July to June fiscal year |
| `10` | October to September fiscal year |

Every YTD total, ratio, and headroom calculation on this page is computed against the partnership fiscal year, not the calendar year.

---

## Recording a draw

Click **+ Record Draw** in the toolbar.

| Field | Notes |
|-------|-------|
| **Partner** | Select from partners on file |
| **Draw Date** | The date the draw was paid |
| **Amount** | Draw amount |
| **Payment Method** | Direct deposit, cheque, wire transfer, or other |
| **Reference / Notes** | Optional — cheque number, wire reference, etc. |

Click **Save Draw**. The ledger updates immediately. Every mutation (add, edit, delete) is audit-logged.

---

## The per-partner card

Each partner has a card showing:

| Element | Description |
|---------|-------------|
| **Partner** | Name and avatar |
| **YTD Draws** | Total draws in the current fiscal year |
| **Annual Target** | Their annualDrawTarget for the year |
| **Ratio** | YTD / target as a percentage |
| **Remaining Headroom** | Target minus YTD (dollar amount) |
| **Draw Count** | Number of draws recorded this fiscal year |
| **First / Last Draw** | Date of the first and most recent draw |
| **Policy Status** | Over-drawn / On-track / Under-drawn / No-target |

Click the card to open the full draw history for that partner.

---

## Policy math

Two firm-level settings drive the policy status (from **Settings → Payroll**):

| Setting | Default | What it does |
|---------|---------|--------------|
| **drawPolicyPct** | 75 | Target-draw threshold |
| **drawTolerancePct** | 10 | Wiggle room around the policy line |

Status bands:

| Ratio (YTD / target) | Status | Meaning |
|----------------------|--------|---------|
| >= drawPolicyPct + drawTolerancePct | **Over-drawn** | Above policy — over the target for this point in the year |
| drawPolicyPct to drawPolicyPct + drawTolerancePct | **On-track** | At or above policy, within tolerance |
| drawPolicyPct - drawTolerancePct to drawPolicyPct | **Under-drawn (watch)** | Below policy, within tolerance |
| < drawPolicyPct - drawTolerancePct | **Under-drawn** | Materially below policy |
| No annualDrawTarget set | **No-target** | Set an annualDrawTarget on the partner profile |

With defaults, that means:
- Under 65% -> Under-drawn
- 65% to 75% -> Under-drawn (watch)
- 75% to 85% -> On-track
- Above 85% -> Over-drawn

Adjust the two settings to fit how your partnership actually thinks about draws.

Over-drawn partners feed the **Partner Health** widget on the [Dashboard](./dashboard.md) and the weekly Partner Health email digest.

---

## Editing or deleting a draw

Open the partner's card, click any draw row, and choose **Edit** or **Delete**. Both are audit-logged with actor, timestamp, and reason.

Deletion is a soft delete — the row is retained for audit and can be recovered by support. This is deliberate: partner draw records are financial records, not casual data.

---

## T5013-friendly CSV export

Click **Export T5013 CSV** in the toolbar. The file contains, per partner:

| Column | Description |
|--------|-------------|
| **Partner name** | Full legal name |
| **SIN** | Masked to `***-***-###` |
| **Total Draws (fiscal year)** | Sum of draws in the fiscal year |
| **Draw Count** | Number of draws |
| **First Draw Date** | Earliest draw in the year |
| **Last Draw Date** | Most recent draw in the year |
| **Fiscal Year Start** | Start date of the current fiscal year |
| **Fiscal Year End** | End date of the current fiscal year |

Hand this file to your tax-prep software (or your accountant) for T5013 slip preparation. The file imports cleanly into:

- TaxCycle
- CCH iFirm
- ProFile
- ProTax

The CSV is not a T5013 slip itself — it's the source data your tax-prep tool uses to build the slip. Hibiscus HR doesn't generate T5013 XML.

> **Tip:** Export the CSV at fiscal year-end, then again if partners make adjustments before slips are filed. The CSV is regenerable at any point in the year.

---

## Audit log

Every add, edit, and delete on the partner-draw ledger is captured in an audit log. Access from **Compliance → Audit** (admin only). Each entry records actor (which admin), timestamp, old value, new value, and reason if one was entered.

---

## What Partner Draws does NOT do

To keep the data model clean:

- **Not T4 payroll.** Draws don't run through payroll. They don't accumulate CPP, EI, or income tax. They don't appear in Payroll YTD or on T4 XML.
- **Not a bank file generator.** The CPA-005 EFT flow is for T4 payroll only. Draws are paid outside Hibiscus HR (through your bank's business online banking).
- **Not a general ledger.** Draws are recorded here; posting them to your firm's QuickBooks / Xero / Sage GL is your accountant's move.
- **Not T5013 filing.** Hibiscus HR exports the source data; the slip and the return are prepared in your tax-prep software.

---

## Partner Draws and the Dashboard

Partners over policy surface on the **Partner Health** widget on the [Dashboard](./dashboard.md). Admins also receive the weekly **Partner Health email digest** surfacing over-drawn partners. The digest is skipped entirely when nothing is off-policy. Manual trigger endpoint: `POST /api/partner-draws/scan-alerts`.
