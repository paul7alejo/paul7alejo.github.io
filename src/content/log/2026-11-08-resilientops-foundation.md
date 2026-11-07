---
title: Applied the ResilientOps foundation
date: 2026-11-08
tags: [terraform, aws, security]
seq: 1
summary: Created an encrypted, versioned Terraform state bucket and monthly budget alerts, all from code.
---

## What I built

A small bootstrap stack in Terraform that creates:

- an S3 bucket for Terraform state, with versioning, AES-256 encryption, public access blocked and a TLS-only bucket policy;
- a lifecycle rule that expires old state versions after 90 days;
- a monthly AWS budget that emails me at 50% and 80% of actual spend and at 100% of forecast.

Every later stack stores its state in this bucket and uses S3's native state locking.

## What I tested

Ran `terraform fmt`, `validate` and `plan`, read the plan before applying, then confirmed the bucket settings and the budget after `apply`.

## What failed

The saved plan file was staged for commit because `.gitignore` did not cover plan files. I caught it in `git status`, removed it before it reached history, and added `tfplan` and `*.tfplan` to `.gitignore`.

## What I learned

Plan files can contain sensitive values. Read `git status` before every commit, not just the first one.
