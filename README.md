# Constantin Chirila - Portfolio

A Swiss / engineering-editorial portfolio, built with Next.js (App Router):
heavy grotesk display type, monospaced supporting text, 1px hairlines, and
deterministic geometric line-art rendered as SVG at runtime. Three surfaces
carry the whole site: ink `#0C0B0A`, signal orange `#FF6737`, bone `#F5EDE6`.

## Stack

- **Next.js 16** (App Router, static/SSG) + **React 19**, TypeScript
- **next/font/google**: Archivo (display), IBM Plex Mono (mono)
- Bespoke token-driven CSS in `app/globals.css` (no Tailwind, by design)
- Generated SVG plates in `app/components/plates.tsx` (no bitmap artwork
  except the About portrait)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static/SSG production build
npm run start    # serve the build
```

Note: `npm run lint` is currently broken (`next lint` was removed in Next 16);
migrate the script to the ESLint CLI when convenient.

## Structure

```
app/
  layout.tsx            root layout, fonts, metadata, JSON-LD, Nav + Footer
  page.tsx              homepage: hero, toolkit, disciplines, work, notes,
                        method, references (contact comes from Footer)
  globals.css           design tokens and all section styles
  fonts.ts              next/font wiring -> --font-display / --font-mono
  lib/
    site.ts             site URL / title / description (single source)
    palette.ts          brand hexes for TS-land (SVG strokes, OG); mirror of
                        the CSS custom properties in globals.css
    almanac.ts          MDX loader for notes (drafts excluded, read time)
    og.tsx              OG image renderer (ink/orange card, Archivo + Plex)
  data/
    content.ts          nav, hero, toolkit, disciplines, work index, method,
                        testimonials, values, contact, socials
    cv.ts               CV profile, experience, education, skills (mirrors
                        the owner's CV document; facts on the site trace here)
  components/
    plates.tsx          SVG generators: Rosette, Spiral, Lattice, Nested,
                        Waves, Moire (typed, deterministic, animatable)
    Nav.tsx             sticky header: Work / Notes / About + CV + Correspond
    Footer.tsx          contact section (moire backdrop) + footer strip,
                        shared across all pages
    ComingSoon.tsx      shared "nothing published yet" card
    EmailLink.tsx       bot-resistant mailto (base64, decoded client-side)
    MobileMenu.tsx      <details> disclosure menu under 900px
  about/                /about: portrait, bio, values
  cv/                   /cv: full CV + PDF download (public/constantin-chirila-cv.pdf)
  almanac/              /almanac ("Notes"): index + [slug] MDX articles
public/
  portrait.webp         halftone About portrait
  constantin-chirila-cv.pdf
content/almanac/*.mdx   notes source (frontmatter: title, date, sort,
                        category, excerpt, draft)
```

## Design notes

- The design reference is the handoff bundle (`Portfolio.dc.html` +
  README) from `design_handoff_portfolio`; colours, type scale, spacing and
  hover inversions follow it closely.
- Deliberate deviations from the handoff, all owner-approved: no stats row,
  simplified nav (Work / Notes / About + CV pill), hero at 66vh (15% shorter),
  rosette at 19 points, no hero tick marks, static work rows, added plate
  animations, and outlined buttons shave 1px padding so their border keeps
  them the same height as solid buttons.
- All plate animation is CSS-only on SVG groups and fully disabled under
  `prefers-reduced-motion`.
- Plates default to `stroke="currentColor"`; only plates on dark sections
  (Waves, Moire) pass an explicit orange from `app/lib/palette.ts`.
- The work table is styled divs with ARIA table semantics (`role="table"` /
  `row` / `columnheader` / `cell`).
- The disciplines section keeps `id="about"` (the prototype's anchor) even
  though the About page lives at `/about`.
- `color-scheme: only light` on `:root` + `<meta>` blocks mobile webview
  auto-darkening.
- Voice rule: no em dashes anywhere; en dashes only for genuine ranges.

## Notes (MDX)

Posts live as MDX in `content/almanac/*.mdx`. `app/lib/almanac.ts` reads,
sorts, and computes read time. Drafts are currently excluded everywhere
(`includeDrafts = false`), so `/almanac` and the homepage show a
coming-soon card until a post ships. To publish: set `draft: false` in the
frontmatter, then restore the mapped cards on the homepage (commented JSX
with instructions in `app/page.tsx`).

## OG image & favicon

- `app/lib/og.tsx` renders 1200×630 cards with `next/og`: ink background,
  orange hairline frame, Archivo headline, Plex Mono eyebrow, logo mark.
  Per-route `opengraph-image.tsx` files supply the copy. Fonts are fetched
  from Google at build time with a text-free fallback card.
- `app/icon.svg` is the logo mark: orange-bordered square with a rotated
  orange diamond on ink.

Both are wired through Next's file conventions.

## Outstanding content TODOs

- [ ] Write and publish the first notes (`content/almanac/`, currently drafts).
- [ ] Confirm the David Hobbs testimonial edit ("professional" for "designer").
- [ ] Export the recoloured (orange) CV to PDF and replace
      `public/constantin-chirila-cv.pdf` (still the green version).
- [ ] Consider per-project case-study pages for the work index (rows are
      static for now).
