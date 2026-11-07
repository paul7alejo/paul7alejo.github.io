---
title: Rebuilt this site as a multi-page portfolio
date: 2026-11-08
tags: [site]
seq: 4
summary: Moved from a single page to separate pages for projects, the log and case studies, written in Markdown and built with Astro.
---

## What I did

Moved the site from one hand-written page to a small static site built with Astro. Each log entry and each case study is now its own Markdown file, and GitHub Actions builds the pages on every push. The site still runs no server code and loads no trackers.

## Why

A single page could not hold case studies, and editing a data file for every update was slow. Writing a Markdown file is closer to how I take notes anyway.
