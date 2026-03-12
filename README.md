<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
# author-site-dev

You are building the sandbox/dev version of a simple author portfolio website. This repo is temporary and will later be migrated into the official production repo

Your job in this phase is to create a clean, portable, static first version of the site that the owner can review live in the browser through GitHub Pages.

Working rules:

  -Build this version with plain HTML and CSS, with only very light JavaScript if absolutely needed.
  
  -Do not add a framework, CMS, database, or backend in this phase.
  
  -Keep the code portable so it can be copied later into the official repo with minimal changes.
  
  -Use relative links and relative asset paths only. Because the GitHub Pages preview URL will be a project site under /<repositoryname>/, root-relative paths like /assets/css/styles.css can break there. Use paths like assets/css/styles.css instead.
  
  -Do not add a custom domain, CNAME file, production canonical tags, or a production sitemap in this repo.
  
  -Do not commit unpublished manuscripts, private addresses, credentials, or secrets.
  
  -Use placeholder content where needed rather than blocking on missing copy or images. (Important for asynchronous working)

Temporary preview behavior:

This sandbox site should be reviewable through GitHub Pages, not the final custom domain. GitHub Pages can publish from a chosen branch and folder, and updates publish when changes are pushed to that source. For this repo, assume main is the live preview branch unless told otherwise.

Prevent indexing on the sandbox site:

Because the GitHub Pages preview is public, add a temporary noindex tag to every page in this sandbox repo, and remove it before final production launch. Google says the robots meta tag is the supported way to block indexing, while robots.txt alone is not a reliable way to keep pages out of Google.
Example: Add this to the <head> of every page in the sandbox repo:
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
*Do not add final SEO/canonical settings yet, since the final production domain is not attached to this repo.*


Local development setup (in-progress but generally accurate. pending setting up github pages from T)

Clone the repo and run it locally with a simple static server.

git clone <repo-url>
cd author-site-dev
python3 -m http.server 8000

Then open:

http://localhost:8000

Test locally before pushing.

Recommended file structure

Use this structure unless there is a strong reason to change it:

/
  index.html
  about.html
  writing.html
  contact.html
  assets/
    css/
      styles.css
    img/
    js/
      main.js
  README.md
  WORKLOG.md

Keep all main pages at the repo root for now. That keeps links simple and reduces path errors.

Site scope for this phase

Build only these pages:

Home

Include:

  author name / identity
  
  one-sentence positioning statement
  
  short introduction
  
  featured work area
  
  link to About / Writing / Contact

About

Include:

  200–300 word bio
  
  headshot placeholder if real image is not yet available
  
  short note on writing interests / areas
  
Writing

Include:

  list of books, projects, essays, or placeholders
  
  simple grouping if needed
  
  no complex filters or CMS

Contact

Include:

  email placeholder or contact method
  
  social/profile placeholders if available
  
  no form backend yet
  
Optional placeholder only:
  
  newsletter/signup section stub
  
  featured press / publications stub

This content direction is consistent with Jane Friedman’s recommendation to focus early author sites on bio, contact, public work, and sustainable incremental growth.

Visual direction

Use a clean literary/professional feel:

simple header and footer

straightforward navigation

one calm accent color at most

readable serif or system body font

simple sans-serif for nav if needed

generous whitespace

no carousels, no sliders, no fancy motion effects

Default to a single-column content layout with a readable max width.
