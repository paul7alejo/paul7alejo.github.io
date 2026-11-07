# paul7alejo.github.io

My portfolio and working log. Static site built with [Astro](https://astro.build), hosted free on GitHub Pages.
Live at https://paul7alejo.github.io

## Add a log entry

Create a Markdown file in `src/content/log/`, for example `2026-11-15-iam-and-cloudtrail.md`:

```markdown
---
title: Added IAM roles and CloudTrail
date: 2026-11-15
tags: [terraform, aws, security]
summary: One sentence that shows in the list and the RSS feed.
---

## What I built
## What I tested
## What failed
## What I learned
```

Commit and push. GitHub Actions builds and deploys in about a minute. Tags create their own pages automatically.

## Add or update a project

Case studies live in `src/content/projects/`. Site-wide details (LinkedIn URL, exam date, the "Now" strip) are in `src/data/site.ts`.

## Preview locally (optional)

Needs Node.js 22.23.4 or newer.

```bash
npm install
npm run dev
```

## Before you push anything public

- No AWS account IDs, access keys, ARNs, IP addresses or email addresses in any file.
- No `*.tfstate`, `*.tfvars` or `.terraform/` in any repo you link to.
- Only list certifications you hold, and only claim results you measured.
