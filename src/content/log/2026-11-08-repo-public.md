---
title: Made the ResilientOps repository public
date: 2026-11-08
tags: [security, git]
seq: 2
summary: Checked the repository and its full history for secrets and account identifiers before making it public.
---

## What I did

Before anyone else could see the repository, I checked the tracked files and searched the full git history for credentials, Terraform state and account identifiers. Every search came back empty. I also published the requirements, network design, traffic matrix and decision records.

## What failed

An unauthenticated check against the GitHub API returned "not found", which looked like the repository was still private. The repository settings and a normal web request both showed it was public.

## What I learned

Confirm visibility from a second source. An anonymous API call is not a reliable test on its own.
