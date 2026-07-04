# Website Sitemap — Phase 3.2

**Platform:** Static HTML/CSS in `/website` (v1)  
**Primary language v1:** English  
**Phase 2 languages:** French, Arabic (key pages)

---

## Site map

```
/                     Home
/how-it-works         Step-by-step journey
/programs             Universities & study fields (TBD until deals signed)
/orientation           Free orientation signup + Module 1
/about                Yacine + co-founder bios
/faq                  Top questions
/contact              WhatsApp + form
/stipendium            Scholarship info (official links only) — can be section on FAQ initially
```

**v1 launch:** Single-page landing with anchor sections (faster). Split to multi-page in v2.

---

## Page: Home (/)

| Section | Purpose | Content |
|---------|---------|---------|
| **Hero** | 10-second clarity | Yacine name + photo, tagline, ~100/semester stat, WhatsApp CTA |
| **Trust bar** | Quick trust signals | End-to-end support · Algeria office + Hungary · Honest pricing · Algerian community *(stats ~100/semester and ~1M followers are in hero, not trust bar in v1)* |
| **How it works** | Reduce fear | 5 steps: Orient → Consult → Apply → Visa → Arrive |
| **Why Hungary** | Motivation | Cost, EU degree, Budapest life — **deferred to v2** (brief points covered in FAQ + Module 1 script for now) |
| **Two paths** | Legal clarity | Stipendium (free, official link) vs Full support (our service) |
| **About founders** | Trust | Yacine + you — photo, 2 sentences each |
| **FAQ preview** | Objections | 5 top questions + link to full FAQ |
| **CTA** | Convert | Free orientation signup + WhatsApp |

---

## Page: How it works (/how-it-works)

Detailed timeline with checklist hints at each stage:

1. **Free online orientation** — watch Module 1, decide if Hungary fits
2. **Consultation** — program match, costs explained, document list
3. **Application** — we guide paperwork, university submission
4. **Acceptance** — offer letter, next steps
5. **Visa & arrival** — residence permit prep, Budapest orientation

Each step: what student does · what we do · typical timeline · _TBD per program_

---

## Page: Programs (/programs)

**Until university deals signed:** placeholder section

- "Partner universities coming soon"
- Study fields of interest: Business, IT, Engineering, Medicine, etc.
- CTA: book consultation to discuss options

**After deals:** logo, program name, tuition range, intake dates

---

## Page: Orientation (/orientation)

- Module 1 embed (video when recorded)
- Signup form: name, email, phone, WhatsApp, program interest, language preference
- Modules 2–7 outline (future)

---

## Page: About (/about)

- Mission (from strategy one-liner)
- Yacine full story — Budapest, why he built this, transition to own company
- Co-founder — HE consultant, university access
- Stats block (only verified numbers)
- No attack on old agency

---

## Page: FAQ (/faq)

**v1 landing:** 5 starter questions implemented. Full FAQ (15+) planned for v2 / Phase 1.9.

Minimum 15 questions — see ORIENTATION + Phase 1.9. Starters:

1. How much does it cost to study in Hungary?
2. Do I need to speak Hungarian?
3. Can I work while studying?
4. What is Stipendium Hungaricum — do you charge for it?
5. How long does the visa take?
6. Which universities can you apply to?
7. What documents do I need?
8. Is Budapest safe for Algerian students?
9. Can I get a dorm?
10. What if I don't get accepted?

---

## Page: Contact (/contact)

- WhatsApp button (primary)
- Email _TBD_
- Office Algeria _TBD_
- Hungary contact _TBD_
- Form backup: name, message, preferred language

---

## Technical notes

- Mobile-first (most traffic from Instagram/TikTok)
- WhatsApp deep link: `https://wa.me/[NUMBER]?text=...`
- Fast load — no heavy frameworks v1
- Meta tags for sharing (OG image = Yacine photo when available)
- Analytics: add GA/Plausible before public launch

---

## v1 vs v2

| v1 (now) | v2 (after founders input) |
|----------|---------------------------|
| Single-page landing | Multi-page site |
| EN only | FR + AR |
| Placeholder WhatsApp | Real number |
| Placeholder photos | Yacine + team photos |
| No university logos | Signed partner logos |
| Orientation signup form | CRM integration |
