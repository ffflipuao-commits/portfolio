# Commercial Visual Sections Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace three weak portfolio sections with original international editorial-style AIGC case studies, remove the color/material section, and publish the verified result to GitHub Pages.

**Architecture:** Keep the single-page `ai-portfolio.html` architecture and add one reusable case-study grid shared by all three redesigned sections. Store generated raster assets under `images/`; each section contains a hero image and two application images with explicit alt text and responsive behavior.

**Tech Stack:** Static HTML5, CSS Grid, PNG/WebP image assets, PowerShell verification, headless Chrome, GitHub Pages.

---

### Task 1: Record the pre-change failure state

**Files:**
- Inspect: `ai-portfolio.html`
- Create: `work/verify-commercial-sections.ps1`

- [ ] **Step 1: Create a verification script that expresses the target state**

The script must assert that the HTML contains `New Perspectives`, `Serein Atelier`, and `Atlas Notes`; does not contain `色彩与材质实验`; references nine new image files; and uses consecutive project numbers.

- [ ] **Step 2: Run the script before replacement**

Run: `powershell -ExecutionPolicy Bypass -File work/verify-commercial-sections.ps1`

Expected: FAIL because the three new project titles and image paths are absent and the deleted section still exists.

### Task 2: Generate and curate the international culture campaign assets

**Files:**
- Create: `images/graphic-new-perspectives-poster.png`
- Create: `images/graphic-new-perspectives-lightbox.png`
- Create: `images/graphic-new-perspectives-social.png`

- [ ] **Step 1: Generate the master poster**

Generate an original international cultural event poster with editorial portrait collage, coral/cream/navy palette, bold modular English typography, and no real brand marks or artist imitation.

- [ ] **Step 2: Generate the outdoor lightbox application**

Generate a realistic evening city-street mockup showing the same visual language on a backlit vertical lightbox; keep all logos fictional.

- [ ] **Step 3: Generate the social media extension**

Generate a clean presentation board containing square and vertical social formats derived from the campaign system.

- [ ] **Step 4: Copy selected outputs into `images/` and verify dimensions**

Run: `Get-Item images/graphic-new-perspectives-*.png | Select Name,Length`

Expected: three non-empty files, each larger than 100 KB.

### Task 3: Generate and curate the fragrance e-commerce assets

**Files:**
- Create: `images/ecommerce-serein-hero.png`
- Create: `images/ecommerce-serein-detail.png`
- Create: `images/ecommerce-serein-mobile.png`

- [ ] **Step 1: Generate the fragrance hero visual**

Generate a fictional premium fragrance still life using tactile glass, liquid, textured paper, pale stone, and natural window light in an international editorial campaign style.

- [ ] **Step 2: Generate the product detail presentation**

Generate an e-commerce detail board with product close-ups, ingredient/story modules, restrained serif/sans typography, and fictional copy only.

- [ ] **Step 3: Generate the mobile commerce presentation**

Generate a presentation board with three coherent mobile screens: home, product detail, and shopping bag.

- [ ] **Step 4: Copy selected outputs into `images/` and verify dimensions**

Run: `Get-Item images/ecommerce-serein-*.png | Select Name,Length`

Expected: three non-empty files, each larger than 100 KB.

### Task 4: Generate and curate the travel illustration assets

**Files:**
- Create: `images/illustration-atlas-cover.png`
- Create: `images/illustration-atlas-posters.png`
- Create: `images/illustration-atlas-products.png`

- [ ] **Step 1: Generate the editorial cover illustration**

Generate an original contemporary travel editorial illustration combining an adult traveler, architecture, plants, and map-like shapes in a coral/cobalt/sand palette without imitating a named artist.

- [ ] **Step 2: Generate the city poster series**

Generate a presentation of three coordinated city-culture posters using the same character proportions, line quality, palette, and layout system.

- [ ] **Step 3: Generate the merchandise application**

Generate realistic postcard, tote bag, and travel-journal mockups carrying the illustration system.

- [ ] **Step 4: Copy selected outputs into `images/` and verify dimensions**

Run: `Get-Item images/illustration-atlas-*.png | Select Name,Length`

Expected: three non-empty files, each larger than 100 KB.

### Task 5: Replace the three HTML sections and remove the obsolete section

**Files:**
- Modify: `ai-portfolio.html`

- [ ] **Step 1: Add reusable case-study CSS**

Add `.case-hero`, `.case-grid`, `.case-card`, and responsive rules. Desktop uses a two-column extension grid; widths at or below 480px use one column. Images use `display:block`, `width:100%`, `object-fit:cover`, rounded borders, and the existing line color.

- [ ] **Step 2: Replace AI graphic design markup**

Use title `New Perspectives · International Culture Campaign`, the three `graphic-new-perspectives-*` images, and copy covering concept development, editorial hierarchy, series consistency, and multi-format adaptation.

- [ ] **Step 3: Replace e-commerce markup**

Use title `Serein Atelier · Fragrance E-Commerce`, the three `ecommerce-serein-*` images, and copy covering generated product imagery, material checks, information hierarchy, and cross-device adaptation.

- [ ] **Step 4: Delete the complete color/material section**

Remove its section heading, description, cards, and references from `ai-portfolio.html`.

- [ ] **Step 5: Replace commercial illustration markup**

Use title `Atlas Notes · Travel Illustration Series`, the three `illustration-atlas-*` images, and copy covering style definition, palette control, consistency, detail correction, and commercial applications.

- [ ] **Step 6: Renumber all projects consecutively**

Expected number sequence: `01,02,03,04,05,06,07`.

### Task 6: Verify locally and correct layout defects

**Files:**
- Run: `work/verify-commercial-sections.ps1`
- Create: `work/commercial-sections-desktop.png`
- Create: `work/commercial-sections-mobile.png`

- [ ] **Step 1: Run static verification**

Run: `powershell -ExecutionPolicy Bypass -File work/verify-commercial-sections.ps1`

Expected: PASS with all nine assets present, deleted heading absent, and numbering `01–07`.

- [ ] **Step 2: Run whitespace verification**

Run: `git diff --check`

Expected: no errors.

- [ ] **Step 3: Capture desktop and mobile screenshots**

Use headless Chrome against the local HTML at 1440px and 390px widths. Expected: all three redesigned sections render, mobile grid is single-column, text is readable, and no image is broken.

- [ ] **Step 4: Inspect screenshots and fix any clipping or overflow**

Repeat Step 3 after any correction until both screenshots show the intended layout.

### Task 7: Commit, push, and verify GitHub Pages

**Files:**
- Commit: `ai-portfolio.html`
- Commit: nine new image assets

- [ ] **Step 1: Commit the implementation**

Run: `git add ai-portfolio.html images/graphic-new-perspectives-*.png images/ecommerce-serein-*.png images/illustration-atlas-*.png && git commit -m "Redesign commercial visual portfolio sections"`

Expected: one implementation commit containing the HTML replacement and nine assets.

- [ ] **Step 2: Push the deployment branch**

Run: `git push origin gh-pages`

Expected: remote `gh-pages` advances to the local commit.

- [ ] **Step 3: Verify the deployed HTML and assets**

Request `https://ffflipuao-commits.github.io/portfolio/ai-portfolio.html` until it contains all three project titles and excludes `色彩与材质实验`. Send HEAD requests for all nine new image URLs.

Expected: page HTTP 200, each image HTTP 200, local and remote commit hashes equal, and worktree clean.

