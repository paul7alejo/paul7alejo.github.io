---
title: Launched this site on GitHub Pages
date: 2026-11-08
tags: [site]
seq: 3
summary: Published the first version of this site as a static page on GitHub Pages, deployed by GitHub Actions.
---

## What I did

Created the `paul7alejo.github.io` repository and set GitHub Pages to deploy through GitHub Actions.

## What failed

My first push put every file inside a `dashboard/` folder, so the workflow and the homepage were not at the root of the repository and nothing usable was published. I moved the files up one level with `git mv` and pushed again, and the deployment succeeded.

## What I learned

Check where files will land before the first push. `ls -a` and `git status` would have shown the extra folder straight away.
