---
name: nth-weekly-review
description: Weekly review of the NomadTaxHelp blog. Pulls live PostHog stats, reads last week's notes, identifies 3-5 highest-leverage actions for this week, and offers to spawn focused agents to execute them. Use when Felix says "weekly review", "/nth-weekly-review", "let's check the blog", "what should we work on this week", or any explicit request to review blog performance and plan the week.
---

# NTH Blog — Weekly Review

You are running Felix's weekly blog review. The full strategic context is in `BLOG_PLAYBOOK.md` at the project root — read it first if you haven't already this session.

## Step 1: Pull the data

Run `npm run stats` from the project root and capture the output.

**Two modes:**

- **Full mode** (PostHog credentials in `.env`): the script returns visitors, pageviews, conversion rate, top posts, traffic sources, CTA placements that converted. Use this directly.

- **Light mode** (no PostHog credentials): the script lists where Felix can see data manually — Vercel Analytics dashboard, Cal.com Insights, Google Search Console, Bing Webmaster Tools. In light mode, ask Felix for the headline numbers from those dashboards (visitors this week, calls booked, top traffic source) and proceed with whatever he provides. If he doesn't have time to look, run the review based on what's in the codebase + `WEEKLY_REVIEWS/` history alone — propose distribution and content actions rather than data-driven optimisation. Be explicit that the review is operating on incomplete data.

## Step 2: Read last week's notes

Look in `WEEKLY_REVIEWS/` for the most recent file. If one exists, read it. If not, this is the first review — note that and move on.

The directory may not exist yet on first run. That's fine — you'll create it in Step 5.

## Step 3: Synthesise

In ≤200 words, summarise:

1. **What changed this week vs last** — visitors trend, conversion rate trend, any new top-source emerging.
2. **What's working** — top post, best-performing CTA placement, strongest source.
3. **What's broken or stagnating** — low-traffic posts, sources that vanished, declining conversion.
4. **One sentence on overall health** — on-track for the month 2-4 targets in the playbook, or behind?

Be honest. If we're behind, say so plainly. Don't soften.

## Step 4: Propose this week's actions

Based on the data, propose 3-5 actions for the week. Each action must:

- Fit one of the four playbook buckets: **Distribute / Improve / Create / Outreach**
- Have a concrete owner and a clear deliverable
- Be doable in a single agent run (or be Felix's manual task — flag clearly)

Example output:

> **This week's plan**
>
> 1. **[Improve]** Crypto post is stagnating at 12 visits/week. Spawn an SEO-auditor agent to find what's missing and propose specific edits.
> 2. **[Distribute]** Cost post is the conversion leader. Spawn a distributor agent to draft a LinkedIn post + a Reddit r/digitalnomad answer linking to it.
> 3. **[Create]** Spawn a content-scout agent to surface the 5 highest-volume keywords we haven't covered. Don't write yet — wait for the scout's brief.
> 4. **[Outreach]** *Felix:* Submit the blog to Perplexity (perplexity.ai/submit) and pitch one guest-post target this week.

Tag each item with the bucket in brackets. Mark Felix-manual tasks with *Felix:* prefix.

## Step 5: Save the review

Write the full review (data summary + plan) to `WEEKLY_REVIEWS/YYYY-MM-DD.md` using today's date. Create the directory if it doesn't exist. This becomes next week's "previous week's notes".

The file structure:

```markdown
# Weekly review — {date}

## Stats snapshot

{paste relevant numbers from npm run stats}

## What changed

{1 paragraph synthesis}

## This week's plan

{the numbered action list}

## Status of last week's actions

{if there was a previous review, note which actions actually shipped}
```

## Step 6: Offer to spawn agents

After saving, ask Felix which actions he wants you to execute now. For each "yes":

- Spawn the appropriate agent **in parallel** (single message, multiple Agent tool calls) so they run concurrently
- Use the agent prompts in `BLOG_PLAYBOOK.md` (the "Standard agent assignments" section) as the basis for each
- Each agent should write its output to a file under `WEEKLY_REVIEWS/{date}/{agent-name}.md` so the artefacts persist

For Felix's manual tasks, just list them clearly and remind him at the end of the conversation.

## Rules

- **Never auto-publish blog content.** Every new or edited post needs Felix's explicit approval before commit.
- **Never invent stats.** If the script returns zero traffic, say "no traffic yet — too early or PostHog isn't collecting". Don't paper over.
- **Keep it short.** This review should take 5 minutes for Felix to read and decide on. Don't write essays.
- **Trends > absolutes.** A single bad week isn't a crisis. Two consecutive bad weeks is.
- **One thing per bucket per week.** More than 5 actions and nothing actually ships.

## Done

End with a one-liner status: how many agents are running, how many tasks Felix has, and the canonical link to the saved review file.
