# WORKLOG

## 2026-03-12

- **What changed**: Set up base homepage structure and styling for Jane Friedman, including header navigation, hero bio section, featured articles block, simple JS loop to duplicate the featured article card, and initial footer.
- **Current preview URL**: `http://localhost:8000` (GitHub Pages URL to be added when configured).
- **Next step**: Build About and Writing pages; add contact page.
- **Blockers**: None.

## 2026-03-13

- **What changed**: Added Contact page (`contact.html`) with email placeholder, contact-method copy, social/profile placeholders (LinkedIn, Twitter/X, Goodreads), newsletter signup stub, and featured press & publications stub; no form or backend. Styled contact page (blue underlined links, bold headings, spacing, bullet list, narrow content column). Removed all responsive (480px) media-query code from `style.css`. Various earlier tweaks: hero image centering, footer “Find Jane elsewhere” column removed, footer columns centered, nav brand “Author-Dev-Site” and links layout.
- **Current preview URL**: `http://localhost:8000` — Contact at `http://localhost:8000/contact.html`.
- **Next step**: Build About and Writing pages; replace placeholders with real copy/links when ready.
- **Blockers**: None.

## 2026-03-14

- **What changed**: Navbar: added “Author-Dev” brand link on the left, nav links on the right (desktop and hamburger); removed Publications and Experience links, added single “Writing” link (Home, About, Writing, Contact). Homepage mobile/tablet: hero and featured articles stack with minimal side padding (8px), hero text left-aligned; hero given warm beige background (`#f5f2ee`) and dark brown text (`#3d3229`) on mobile/tablet; tagline (“Writer, Editor…”) emphasized (bolder, slightly larger); `.author-details` set to `width: 100%` on mobile (override base 50%). Horizontal scroll fixes and fuller layout applied at 1024px, 768px, and 480px. No HTML structure changes except nav links.
- **Current preview URL**: `http://localhost:8000` — Contact at `http://localhost:8000/contact.html`, About at `http://localhost:8000/about.html`.
- **Next step**: Build or flesh out Writing page (`writing.html`); replace placeholders with real copy/links when ready.
- **Blockers**: None.

