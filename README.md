# Yacine Path Hungary — Project Hub

**Algeria → Budapest student pathway** · Co-founded by Yacine Mouloudi + HE Consultant  
**Last updated:** July 2026

---

## Start here (partner review)

Read in this order — each doc builds on the previous:

| # | Document | What it is | Status |
|---|----------|------------|--------|
| 1 | [docs/BUSINESS_STRATEGY.md](docs/BUSINESS_STRATEGY.md) | Master strategy, competitive analysis, phased roadmap | ✅ v1.3 — source of truth |
| 2 | [docs/BRANDING.md](docs/BRANDING.md) | Brand name, tagline, voice, colors | ✅ Name locked; logo designer TBD |
| 3 | [docs/WEBSITE_SITEMAP.md](docs/WEBSITE_SITEMAP.md) | Site structure and content plan | ✅ v1 = single-page landing |
| 4 | [docs/ORIENTATION_MODULE_1.md](docs/ORIENTATION_MODULE_1.md) | First orientation video script outline | ✅ Ready for Yacine to record |
| 5 | [docs/TODO.md](docs/TODO.md) | Live execution tracker | ✅ Updated with current progress |
| 6 | [website/](website/) | Landing page v1 (HTML/CSS) | ✅ Preview-ready; placeholders marked |

---

## View the website (no install needed)

Static site — nothing to npm install. Everything lives on **D:\studentsabroad**.

**Option A — open file directly**

```
d:\studentsabroad\website\index.html
```

Double-click or drag into Chrome/Edge/Firefox.

**Option B — local server (recommended for form testing)**

From PowerShell:

```powershell
cd d:\studentsabroad\website
py -3 -m http.server 8080
```

Then open: **http://localhost:8080**

Uses built-in Python only — no packages, no C: drive install.

---

## What is done vs. placeholder

### Confirmed (safe to share externally)

- Brand: **Yacine Path Hungary** — tagline *From Algeria to Budapest. Step by step.*
- Strategy doc with verified-facts vs. assumptions separation
- ~100 students/semester and ~1M followers — **confirmed by founders** (see strategy Section “Verified Facts”)
- Stipendium = free guidance only; self-funded = paid service path
- Landing page structure: hero, 5 steps, two paths, about, FAQ, signup form
- Orientation Module 1 script outline

### Clearly marked placeholders (not launch-ready)

| Item | Where | Action needed |
|------|-------|-----------------|
| WhatsApp number | `website/index.html` (`0000000000`) | Founders provide real number |
| Yacine photo | Hero section | Photo asset |
| Co-founder name & bio | About section | Your input |
| Legal entity name | Footer | After company registration |
| University logos | FAQ answer | After signed agreements |
| CRM / form backend | Signup form | Connect before public launch |
| FR + AR pages | — | After EN v1 approved |
| Year 1 metrics | Strategy Section 8 | Founders set targets (Phase 0.10) |

---

## Decisions needed from founders (before public launch)

1. Co-founder agreement + Yacine exit from old agency (Phase 0)
2. Pick 2–3 target universities
3. WhatsApp number for all CTAs
4. Photos + bios for About section
5. Legal company name for footer and contracts
6. Monetization model documented (commission vs. service fee)

See [docs/TODO.md](docs/TODO.md) → “What we need from founders to unblock”.

---

## Project structure

```
studentsabroad/
├── README.md                 ← you are here
├── docs/
│   ├── BUSINESS_STRATEGY.md  ← strategy source of truth
│   ├── BRANDING.md
│   ├── WEBSITE_SITEMAP.md
│   ├── ORIENTATION_MODULE_1.md
│   └── TODO.md               ← execution tracker
└── website/
    ├── index.html
    ├── css/style.css
    └── js/main.js
```

---

## Quality notes for reviewers

- **Numbers:** Only ~100/semester and ~1M followers are confirmed. All Year 1 targets are TBD until founders decide.
- **Competitors:** Section 3 in strategy doc is public-website research, not internal data.
- **Scholarship:** We never charge for Stipendium Hungaricum applications — stated on site and in strategy.
- **Visa:** Site and docs explicitly say visa is not guaranteed.
- **Old agency:** Strategy says don’t attack by name; transition messaging is “same Yacine, our company now.”

---

*Questions or corrections → update the relevant doc and bump the version/changelog in BUSINESS_STRATEGY.md if strategy changes.*
