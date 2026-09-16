---
sidebar_position: 17
sidebar_label: "Integrations"
---

# Integrations

The Integrations page in Settings is your control panel for every third-party tool Hibiscus HR connects to. This page walks through each category — what the integration does, how to connect it, and where the data flows.

> **Where:** **Settings → Integrations**.

> **[Screenshot: Integrations page showing category grid and tiles per category]**

---

## Categories

Integrations are grouped into eight categories:

1. **Accounting** — QuickBooks Online, Xero, Sage 50 Canada
2. **Time Tracking** — QuickBooks Time
3. **Practice Management** — Karbon
4. **Benefits Carriers** — Manulife, Sun Life, Canada Life
5. **Identity & SSO** — Microsoft SSO, Google SSO
6. **Communication** — Slack, Microsoft Teams, Zapier via webhooks
7. **Government & Compliance** — CRA My Business Account, Service Canada ROE Web

Each tile shows its status: **Connected**, **Available**, or **Coming Soon**.

---

## Accounting

### QuickBooks Online

- **Connection:** OAuth 2.0 (live)
- **What it does:** Post payroll journal entries, deductions, and employer contributions directly into your QuickBooks chart of accounts after each pay run

**To connect:** click **Connect QuickBooks**, sign in with your QuickBooks account, authorize the connection. Hibiscus HR requests the minimum scopes needed to post manual journal entries and read your chart of accounts.

### Xero

- **Connection:** OAuth 2.0 (live)
- **What it does:** Post payroll costs and read your chart of accounts

**To connect:** click **Connect Xero**, sign in, authorize.

### Sage 50 Canada

- **Connection:** CSV export
- **What it does:** Download a GL journal CSV from the payroll completion screen and import into Sage 50

Sage 50 is a desktop product and doesn't accept API uploads. The workflow:

1. Process a pay run
2. On the completion screen, click **Download Sage 50 GL Export (CSV)**
3. In Sage 50: **File → Import/Export → Import Records → General Journal Entries**
4. Map columns to your chart of accounts (defaults use Canadian small-business account numbers)

---

## Time Tracking

### QuickBooks Time (formerly TSheets)

- **Connection:** Bearer token (not OAuth)
- **What it does:** Pulls approved timesheets from QuickBooks Time and upserts weekly Mon-Fri hours into `tenant.timesheets`. Already-approved rows in Hibiscus HR are not overwritten. Employees are matched by email

QBO Time uses a bearer-token auth flow, not OAuth 2.0. This is a leftover from the TSheets days — Intuit never migrated QBO Time onto their OAuth 2.0 platform.

**To connect:**

1. Log into QuickBooks Time as an admin
2. Navigate to **Company Settings → Feature Add-ons → Manage API Access**
3. Click **Add Token**, give it a name (e.g. "Hibiscus HR sync")
4. Copy the access token
5. Back in Hibiscus HR: **Settings → Integrations → QuickBooks Time → Connect**
6. Paste the token, click **Save**

**Sync:** click **Sync 14 Days** to pull the last 14 days of timesheets. Runs are idempotent — re-syncing the same window doesn't create duplicates and does not overwrite locked Hibiscus HR rows.

Token is per-company and non-expiring. Rotate it in QBO Time if it's compromised.

---

## Practice Management

### Karbon

- **Connection:** AccessKey (header) + Bearer AccessToken
- **What it does:** Sync users (match Karbon users to Hibiscus employees by email) and sync billable hours (pull Karbon Timesheets where Billable=true and upsert weekly `billable_hours` on `tenant.timesheets`)

**To connect:**

1. Log into Karbon
2. Navigate to **Settings → Developer → API**
3. Copy the **AccessKey** and generate/copy an **AccessToken**
4. Back in Hibiscus HR: **Settings → Integrations → Karbon → Connect**
5. Paste both credentials, click **Save**

At save time, Hibiscus HR live-tests the credentials against `GET /v3/Users?$top=1`. If the test fails, the credentials are rejected before storing.

**Sync users:** click **Sync Users**. Karbon users are matched to Hibiscus employees by email. Unmatched users show up in a review list — connect them to Hibiscus employees manually or skip.

**Sync billable hours:** click **Sync Billable Hours**. Pulls Karbon Timesheets flagged Billable=true and upserts weekly `billable_hours` on `tenant.timesheets`. Data feeds [Reports → Utilization](./reports.md).

Rotate AccessKey / AccessToken in Karbon if compromised.

---

## Benefits Carriers

Manulife, Sun Life, and Canada Life do not accept direct third-party API uploads. Their portals (Manulife GroupNet, Sun Life Connect, Canada Life GroupNet) require manual enrollment through their own admin tools, or CSV handoff via the broker or the carrier's enrollment team.

### Manulife GroupBenefits

- **Connection:** CSV export
- **What it does:** Download a Manulife-filtered universal benefits enrollment CSV

### Sun Life Connect

- **Connection:** CSV export
- **What it does:** Download a Sun Life-filtered universal benefits enrollment CSV

### Canada Life

- **Connection:** CSV export
- **What it does:** Download a Canada Life-filtered universal benefits enrollment CSV

**To download:** click the carrier tile → **Download Enrollment CSV**. The file uses the same 22-column universal enrollment structure as the [Benefits](./benefits.md) module's toolbar export, pre-filtered to that carrier's plans.

Hand the CSV to your broker or the carrier's enrollment team.

---

## Identity & SSO

### Microsoft SSO

- **Connection:** OAuth 2.0 (live)
- **What it does:** Sign in with a Microsoft work or personal account — no separate password

**To enable:** click **Enable Microsoft SSO**. Once enabled, a **Sign in with Microsoft** button appears on the Hibiscus HR login page. Authentication is entirely on Microsoft's side; Hibiscus HR receives only the verified email and basic profile.

### Google SSO

- **Connection:** OAuth 2.0 (live)
- **What it does:** Sign in with a Google account — no separate password

**To enable:** click **Enable Google SSO**. Once enabled, a **Sign in with Google** button appears on the login page.

---

## Communication

### Slack

- **Connection:** OAuth 2.0 (live)
- **What it does:** Post real-time HR alerts to a Slack channel — leave approvals, payroll completion, ROE deadlines, onboarding tasks

**To connect:** click **Connect Slack**, choose a workspace, authorize, and pick the channel messages will post to.

### Microsoft Teams

- **Connection:** Webhook URL
- **What it does:** Send HR notifications to a Teams channel via incoming webhook

**To connect:**

1. In Teams: pick a channel → **Connectors → Incoming Webhook → Create**
2. Copy the webhook URL
3. Back in Hibiscus HR: paste into the Teams tile → **Save**

### Zapier (via webhooks)

- **Connection:** Outbound webhook subscriptions
- **What it does:** Fires JSON payloads at any URL when key events occur in Hibiscus HR — employee added, leave approved, payroll processed, T4 generated, etc. Connect to Zapier's Webhooks by Zapier trigger to route events into other tools (Trello, Notion, Google Sheets, etc.)

**To subscribe:**

1. In Hibiscus HR: **Settings → Integrations → Zapier / Webhooks → + Add Subscription**
2. Enter the endpoint URL
3. Select the events you care about
4. Click **Save**

Payloads are signed with HMAC-SHA256. See the developer docs for signature verification.

---

## Government & Compliance

### CRA My Business Account

- **Connection:** XML export
- **What it does:** Generate CRA-compliant T4 (and T4 amendment) XML files from the T4 Filing page and upload via CRA Internet File Transfer

Workflow:

1. On the **T4 Filing** page, click **Download T4 XML for CRA**
2. Log into CRA My Business Account
3. Navigate to **Internet File Transfer**
4. Upload the XML

Amendments follow the same flow using **Download Amendment XML** from the T4 Amendments panel. See [Payroll → T4 Amendments](./payroll.md#t4-amendments-panel).

### Service Canada ROE Web

- **Connection:** XML export
- **What it does:** Generate Record of Employment XML files (Payroll Extract V2.0 format) from each offboarding record and upload to ROE Web

Workflow:

1. Complete the offboarding wizard on the **Offboarding** tab
2. Download the ROE XML
3. Log into Service Canada ROE Web
4. Upload the XML

See [Onboarding & Offboarding](./onboarding-offboarding.md).

---

## Data flow summary

| Integration | Direction | What moves |
|-------------|-----------|-----------|
| QuickBooks Online | Hibiscus HR → QBO | Payroll journal entries |
| Xero | Hibiscus HR → Xero | Payroll journal entries |
| Sage 50 Canada | Hibiscus HR → CSV | GL entries via file |
| QuickBooks Time | QBO Time → Hibiscus HR | Timesheet hours |
| Karbon | Karbon → Hibiscus HR | User match + billable hours |
| Manulife / Sun Life / Canada Life | Hibiscus HR → CSV | Benefits enrollment via file |
| Microsoft / Google SSO | SSO providers → Hibiscus HR | Sign-in identity only |
| Slack | Hibiscus HR → Slack | Alert messages |
| Teams | Hibiscus HR → Teams | Alert messages |
| Zapier / webhooks | Hibiscus HR → your URL | JSON events, signed |
| CRA My Business Account | Hibiscus HR → CRA (manual upload) | T4 / amendment XML |
| Service Canada ROE Web | Hibiscus HR → ROE Web (manual upload) | ROE XML |

---

## Removing an integration

Every integration has a **Disconnect** button on its tile. Disconnecting revokes tokens (for OAuth), removes stored credentials (for bearer/key auth), and stops future syncs. Historical synced data stays.
