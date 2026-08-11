# Assessly — homepage clone

A Next.js (App Router) + Tailwind CSS recreation of the Testportal.com homepage layout,
reworked under an original name/copy ("Assessly") with its own visual identity:

- **Palette**: deep ink/teal (`#0B2320`, `#0E4D47`) on a warm paper background, with a
  mint "correct answer" accent (`#3FE0A5`) and amber secondary accent.
- **Type**: Space Grotesk (display), Inter (body), IBM Plex Mono (stats/labels).
- **Signature motif**: a scantron / answer-sheet bubble grid, used as a background
  texture and as the actual bullet markers in the hero's mock question card — ties the
  visual language directly to the product (assessments/scoring).

Sections mirror the source page's structure: nav → hero → "enter access code" panel →
client logo strip → use-case grid → AI feature problem/solution → integration & security
banners → paperless impact stats → testimonial → blog grid → closing CTA → footer.

Note: client logos and photography from the original site are trademarked/licensed
assets and are not included — placeholder wordmarks and an illustrated mock UI card are
used instead. All copy has been rewritten.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
app/
  layout.tsx      – fonts + metadata
  page.tsx        – composes all sections
  globals.css     – tokens, bubble-grid motif, marquee animation
components/
  Navbar.tsx
  Hero.tsx
  LogoMarquee.tsx
  UseCases.tsx
  FeatureShowcase.tsx
  BannerPair.tsx
  ImpactStats.tsx
  Testimonial.tsx
  BlogGrid.tsx
  CTA.tsx
  Footer.tsx
```
