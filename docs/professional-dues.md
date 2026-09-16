---
sidebar_position: 11
sidebar_label: "Professional Dues"
---

# Professional Dues

Most Canadian accounting firms pay their staff's professional-body dues on the firm's dime. The Professional Dues register records those payments, tags each one with the right T4 Box 40 taxable-benefit flag, and feeds the T4 slip generator so year-end tax slips are correct without extra bookkeeping.

> **[Screenshot: Professional Dues register showing rows per employee with amounts, paid-by, and Box 40 flags]**

---

## Where it lives

**Settings → Professional Dues** (in the **Pay & Comp** group).

---

## What Professional Dues tracks

Each row records one dues payment.

| Field | Notes |
|-------|-------|
| **Employee** | Who the dues are for |
| **Regulator / Body** | CPA Ontario, CPA BC, LSO, PEO, HRPA, etc. (pulls from the credentials registry) |
| **Amount** | Dollar amount |
| **Tax Year** | The tax year this counts toward |
| **Paid Date** | When the firm paid |
| **Paid By** | Firm, Employee, or Split |
| **Reimbursed by Employer** | Toggle when the firm reimbursed the employee after they paid personally |
| **T4 Box 40 taxable benefit** | Flag whether this counts as a taxable benefit |
| **Notes** | Optional context (payment reference, invoice number) |

---

## How the T4 Box 40 flag works

Box 40 on the T4 slip reports taxable benefits. CRA's guidance says that when the firm pays professional dues on behalf of an employee AND the primary beneficiary is the firm (not the employee's personal career), the payment is generally not a taxable benefit. When the primary beneficiary is the employee (typically the case for someone in a role that doesn't strictly require the credential), the payment is a taxable benefit that goes on Box 40.

Two common patterns:

**Pattern A — required credential.** A staff accountant's CPA Ontario dues, paid by the firm. Firm is the primary beneficiary. **Box 40 = off.**

**Pattern B — nice-to-have credential.** A manager's HRPA dues paid because they want to keep the certification current, but the role doesn't require it. **Box 40 = on.**

The flag is deliberately manual. Get your accountant's read on the specific line and set it accordingly.

---

## Paid-by options

The **Paid By** field records who wrote the cheque:

| Option | Meaning |
|--------|---------|
| **Firm** | The firm paid the regulator directly (typical) |
| **Employee** | The employee paid; used with the reimbursement flag |
| **Split** | The firm and employee split the dues (typically 50/50) |

Combine **Paid By = Employee** with **Reimbursed by Employer = on** to record the flow where the employee paid the regulator up-front and the firm reimbursed them.

---

## Recording a dues payment

Click **+ Add Dues Entry** at the top of the register.

Fill the fields above and click **Save Entry**. The row appears in the register immediately.

---

## Editing or deleting an entry

Click any row for the edit drawer, or use the three-dot menu → **Delete**. Both are audit-logged.

---

## How dues feed the T4 slip

At year-end, when you generate the T4 XML (see [Payroll → T4 Filing](./payroll.md#t4-filing-page)), rows marked **T4 Box 40 taxable benefit** for that tax year are aggregated per employee and populated into Box 40 on the slip.

Rows NOT marked Box 40 are recorded for the firm's own bookkeeping but do not affect the T4.

---

## The dues register as a ledger

The register is also the firm's paper trail for the year:

- Which staff have their dues paid
- Which regulator each payment went to
- Which payments count as taxable benefits
- Which payments were reimbursements

The register exports as CSV for handoff to your bookkeeper or tax preparer.

---

## Cross-links

- Track the credential itself (cycle hours, expiry, CPD activities): [Credentials & CPD](./credentials.md)
- Where Box 40 lands on the slip: [Payroll → T4 Filing](./payroll.md#t4-filing-page)
