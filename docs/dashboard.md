---
sidebar_position: 4
sidebar_label: "Dashboard"
---

# Dashboard

The Dashboard is what you see after logging in. It gives you firm health at a glance without needing to navigate anywhere: partner draws, utilization, expiring credentials, ESA compliance, upcoming CRA deadlines, and a live activity feed.

> **[Screenshot: Full Dashboard view showing the Partner Health hero, Compliance Health widget, stat cards, and activity feed]**

---

## Partner Health widget

The **Partner Health** hero at the top of the Dashboard is a three-column snapshot of the three things that keep an accounting firm honest: partner draws, utilization, and credentials.

> **[Screenshot: Partner Health widget across three columns]**

| Column | What it shows |
|--------|--------------|
| **Partner Draws** | Counts of partners flagged as over-drawn and over-policy. Clicks through to [Partner Draws](./partner-draws.md) |
| **Utilization** | Rolling firm-average utilization %. Clicks through to [Reports → Utilization](./reports.md) |
| **Credentials Expiring** | Credentials expiring within 60 days, broken into 14 / 30 / 60 day urgency bands. Clicks through to [Credentials](./credentials.md) |

The widget auto-hides on tenants with zero partners on file.

Admins also receive a **weekly Partner Health email digest** covering flagged draws and expiring credentials. When there is nothing to report, the digest is skipped entirely. A manual trigger endpoint (POST `/api/partner-draws/scan-alerts`) is available for testing.

---

## Compliance Health widget

Sitting below Partner Health, the **Compliance Health widget** is a live view of your firm's ESA compliance posture. It runs the same nine checks as the [Compliance module](./compliance.md) and surfaces the result as a score plus your top action items.

> **[Screenshot: Compliance Health widget with score ring, top 3 findings, and 30-day sparkline]**

### What it shows

| Element | Meaning |
|---------|---------|
| **Score ring (0 to 100)** | ESA compliance score. Green >= 85, amber 60 to 84, red below 60. Each action-required item deducts 15 points, each watch item deducts 5 |
| **Checks passing** | How many of the 9 automated ESA checks passed today |
| **Top 3 findings** | The most urgent action / watch items. Clicking a card jumps you to the Compliance module with the full detail |
| **30-day trend sparkline** | Line chart of your last 30 daily scores. Appears once you have at least 2 days of history |
| **"N new this week" pill** | Red badge on the header when the daily scan finds checks failing now that weren't 7 days ago. Each new finding also gets its own **New** badge |

### How it updates

The widget runs the compliance checks live every time you load the Dashboard. It also pings the backend daily-snapshot job to populate the trend line and week-over-week deltas. If snapshots fail for any reason, the core score and findings still render (only the sparkline and pill disappear).

See [Compliance → Compliance-as-Monitoring](./compliance.md#compliance-as-monitoring) for the full scan / digest / alert system.

---

## Stat cards

The stat cards below Compliance Health show your most important workforce numbers.

| Card | What it shows |
|------|--------------|
| **Total Employees** | Active staff (partners plus T4 employees) |
| **On Leave Today** | Employees with an approved leave request covering today |
| **Utilization (rolling)** | Rolling firm-average utilization percentage |
| **Last Payroll** | Gross total of your most recent completed payroll run |

Each card is updated in real time from the underlying module data.

> **[Screenshot: Stat cards]**

---

## Recent Activity feed

The activity feed on the left of the Dashboard is a live log of events across every module, newest first.

Activity types include:

| Event type | Example |
|-----------|---------|
| Payroll processed | "Payroll for Apr 1 to 15 processed — $84,200 gross" |
| Draw recorded | "Partner draw recorded — J. Ng, $6,500 (April)" |
| Onboarding started | "New hire onboarding started for Jordan Kim" |
| ROE urgency | "ROE required — Alex Dupont's last day was 5 days ago" |
| Credential expiring | "CPA Ontario permit for Priya Nair expires in 12 days" |
| Document expired | "First Aid Certificate for Carlos Rivera expired 3 days ago" |
| Leave pending | "3 leave requests are awaiting approval" |
| CPD gap | "N Reyes is behind cycle target by 8 hours" |

> **[Screenshot: Activity feed]**

---

## Quick Actions

Below the stat cards are **Quick Action** buttons. Shortcuts to the most common tasks:

| Button | What it does |
|--------|-------------|
| **Add Employee** | Opens the Add Employee drawer |
| **Approve Leave** | Takes you to Leave Management filtered to pending |
| **Run Payroll** | Opens the Run Payroll wizard drawer |
| **Record Draw** | Opens the Partner Draws entry drawer |

> **[Screenshot: Quick action buttons]**

---

## Upcoming Starts

**Upcoming Starts** lists employees whose start date falls in the next 7 days.

For each upcoming start:
- Employee name and avatar initials
- Their start date
- Their department and job title

If there are no upcoming starts, the section shows a confirmation message.

---

## Upcoming CRA Deadlines

**Upcoming CRA Deadlines** lists regulatory filing deadlines in the next 60 days. This keeps payroll and admin staff aware of upcoming obligations without navigating into Compliance.

Each deadline shows:
- The deadline date
- A description of the filing (e.g. "T4 filing deadline", "CPP/EI remittance due")
- How many days remain

Deadlines within 14 days are highlighted in amber. Deadlines that have passed appear in red.

---

## Tips

- The Dashboard is read-only. Use Quick Actions or navigate into the module to change anything.
- **On Leave Today** only counts **Approved** leave. Pending requests are not counted.
- **Last Payroll** shows the most recently *processed* run, not a draft.
- The **Partner Health** widget only appears when at least one active employee has employment type = Partner.
