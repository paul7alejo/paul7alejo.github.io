# Portfolio dashboard

A static page that shows my projects and progress. No build step, no framework, no cost.
Hosting: GitHub Pages (free for public repos).

## Edit
All content is in `site-data.js`. Change the text, save, push. The page updates in about a minute.

## Deploy (one time)
1. On GitHub, create a **public** repo named `paul7alejo.github.io`.
2. In this folder: `git init -b main && git add . && git commit -m "Portfolio dashboard" && git remote add origin https://github.com/paul7alejo/paul7alejo.github.io.git && git push -u origin main`
3. Repo **Settings > Pages > Build and deployment > Source: GitHub Actions**.
4. If the first run fails, open the **Actions** tab and re-run it. The site is at `https://paul7alejo.github.io`.

## Before you push anything public
- No AWS account IDs, access keys, ARNs, IP addresses or email addresses in any file.
- No `*.tfstate`, `*.tfvars` or `.terraform/` in any repo you link to (`git ls-files | grep -E 'tfstate|tfvars'` should print nothing).
- Only list certifications you hold, and only claim results you measured.
- When a project repo is public, paste its URL into `url` in `site-data.js`.
