---
sidebar_position: 10
sidebar_label: "Credentials & CPD"
---

# Credentials & CPD

The Credentials module tracks each staff member's professional credentials and their CPD (continuing professional development) hours against the regulator's cycle. Twenty Canadian regulators are pre-loaded with cycle length and hour target so most firms don't have to configure anything up-front.

> **[Screenshot: Credentials tab on an employee profile with cycle hours badge and CPD activity log]**

---

## What Credentials tracks

For each credential on an employee:

| Field | What it holds |
|-------|--------------|
| **Regulator** | CPA Ontario, CPA BC, LSO, PEO, EGBC, etc. |
| **Credential Number** | The license or member number |
| **Status** | Active, Provisional, Suspended, Retired |
| **Issue Date** | When first granted |
| **Expiry Date** | Renewal date — feeds Partner Health widget and expiry alerts |
| **Cycle Hours Target** | Hours required per CPD cycle (from the regulator registry) |
| **Cycle Length** | Length of the CPD cycle in years (from the registry) |
| **Hours Logged (cycle)** | Hours logged in the current cycle |

The registry pre-loads target hours and cycle length so you don't have to look them up.

---

## The 20 pre-loaded regulators

| Regulator | Scope |
|-----------|-------|
| **CPA Ontario** | Chartered Professional Accountants of Ontario |
| **CPA British Columbia** | CPA BC |
| **CPA Alberta** | CPA AB |
| **CPA Saskatchewan** | CPA SK |
| **CPA Manitoba** | CPA MB |
| **CPA New Brunswick** | CPA NB |
| **CPA Nova Scotia** | CPA NS |
| **CPA PEI** | CPA PE |
| **CPA Newfoundland & Labrador** | CPA NL |
| **CGA-Canada** | Legacy CGA designation holders |
| **LSO** | Law Society of Ontario |
| **LSBC** | Law Society of British Columbia |
| **PEO** | Professional Engineers Ontario |
| **EGBC** | Engineers and Geoscientists British Columbia |
| **APEGA** | Association of Professional Engineers and Geoscientists of Alberta |
| **OAA** | Ontario Association of Architects |
| **LSA** | Law Society of Alberta |
| **CIA Canada** | Canadian Institute of Actuaries |
| **PMAC** | Purchasing Management Association of Canada |
| **HRPA** | Human Resources Professionals Association (Ontario) |

Each regulator ships with cycle length and CPD hour target. Firms whose regulator isn't on the list can add a custom credential with cycle metadata entered manually.

---

## Adding a credential

Open the employee's profile and select the **Credentials** tab. Click **+ Add Credential**.

| Field | Notes |
|-------|-------|
| **Regulator** | Pick from the registry, or select "Other" to define your own |
| **Credential Number** | The license / member number |
| **Status** | Active, Provisional, Suspended, or Retired |
| **Issue Date** | Date first granted |
| **Expiry Date** | Renewal date (drives expiry alerts) |
| **Cycle Length** | Auto-populated from the registry — editable |
| **Cycle Hours Target** | Auto-populated from the registry — editable |
| **Cycle Start Date** | When the current CPD cycle began for this credential |

Click **Save**. The credential appears on the employee's card and is factored into the Dashboard's Partner Health widget.

---

## Logging a CPD activity

From the employee's Credentials tab, click **+ Log CPD Activity** on any credential.

| Field | Notes |
|-------|-------|
| **Date** | Date of the activity |
| **Description** | What the activity was |
| **Hours** | Hours of CPD credit |
| **Activity Type** | Verifiable, Unverifiable, Ethics, or Other |
| **Ethics Hours** | Ethics-specific hours (many regulators require a minimum) |
| **Notes** | Optional — provider, certificate number, etc. |
| **Attachment** | Optional — certificate of completion, receipt, etc. |

The hours-in-cycle badge on the credential updates as soon as you save. When the employee crosses cycle target, the badge flips from amber to green.

---

## Cycle tracking

The cycle-hours badge shows:

| Colour | Meaning |
|--------|---------|
| **Green** | At or above target hours for the cycle |
| **Amber** | Below target, on-pace for cycle end |
| **Red** | Behind pace and at risk of missing cycle target |

Cycle math is straightforward: hours logged in the cycle vs. hours required. Regulators generally require balanced distribution (verifiable, ethics, etc.), and Hibiscus HR surfaces per-category subtotals on the credential card so you can see how the mix is tracking.

---

## Expiring credentials on the Dashboard

Credentials with an expiry date within 60 days feed the **Credentials Expiring** column on the [Dashboard](./dashboard.md) Partner Health widget. Urgency bands:

- **14 days** — red
- **30 days** — amber
- **60 days** — grey

Clicking any expiring credential opens the employee's Credentials tab directly.

### The endpoint

The Dashboard widget consumes `GET /api/credentials/expiring`. The endpoint returns credentials expiring within 60 days across the firm, grouped by employee.

Admins also receive expiring credentials on the weekly Partner Health email digest — see [Partner Draws](./partner-draws.md#partner-draws-and-the-dashboard).

---

## Common regulator setups

### CPA Ontario

- Cycle: 3 years, 120 hours required
- Ethics: minimum 4 hours per cycle
- Verifiable: minimum 60 hours per cycle
- Renewal fee: annual (see [Professional Dues](./professional-dues.md) for firm-paid dues handling)

### CPA British Columbia

- Cycle: 3 years, 120 hours required
- Ethics: minimum 4 hours per cycle
- Similar structure to CPA Ontario

### LSO (Law Society of Ontario)

- Annual, 12 hours required
- Ethics/professionalism content: minimum 3 hours annually

### PEO (Professional Engineers Ontario)

- Annual, points-based (PEO does not use hours directly)

Full regulator details ship with the registry — treat this section as orientation, not the source of truth.

---

## What Credentials does NOT do

- **Not a CPD content library.** Hibiscus HR does not host or sell CPD content. It's a system of record.
- **Not a regulator API.** Hibiscus HR does not sync automatically with regulator systems (e.g. CPA Ontario's PERT). You enter cycle progress here; you enter it there. That will change if regulators publish APIs.
- **Not a licensing verifier.** The regulator is the source of truth for whether a credential is in good standing. Hibiscus HR tracks what you enter.

---

## Cross-links

- Firm-paid professional body dues: [Professional Dues](./professional-dues.md)
- Expiring credentials on the Dashboard: [Dashboard](./dashboard.md#partner-health-widget)
- Employees setup: [Employees](./employees.md)
