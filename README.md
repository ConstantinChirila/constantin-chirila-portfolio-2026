# Constantin Chirila — Portfolio

A Victorian botanical folio, built with Next.js (App Router). Every section is a
framed "Plate" from a bound tropical-glasshouse volume. Ported from the static
prototype in `index.html` + `plates/`, which remains the visual source of truth.

## Stack

- **Next.js 16** (App Router, static/SSG) + **React 19**, TypeScript
- **next/font/google**: Cormorant Garamond (display), EB Garamond (body), IBM Plex Mono (mono)
- **next/image** for the transparent WebP plate cutouts in `public/plates/`
- Bespoke token-driven CSS in `app/globals.css` (no Tailwind, by design)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static/SSG production build
npm run start    # serve the build
```

## Structure

```
app/
  layout.tsx            root layout, fonts, metadata (title/description/OG/favicon)
  page.tsx              the folio (single page: hero + Plates I–VII + contact)
  globals.css           design tokens, paper grain, and all section styles
  fonts.ts              next/font wiring -> --font-display/body/mono
  lib/plates.ts         plate registry with intrinsic dimensions
  data/
    specimens.ts        the four projects + case-study copy (shared with routes)
    content.ts          nav, disciplines, method, tools, notes, testimonials, values
  components/           PlateFrame, PlateHead, Splotch, SpecimenRow, ValueGrid,
                        Crest, VellumPanel, PlateImage, Reveal, Nav, Footer
  specimens/[slug]/     case-study pages (SSG per project)
  almanac/              field-notes index (posts not written yet)
public/plates/          the botanical artwork (transparent WebP cutouts)
```

## Design notes carried from the prototype

- `color-scheme: only light` on `:root` + `<meta>` blocks mobile webview auto-darkening.
- Paper background is set with `!important` on `body` for the same reason.
- Splotches stay fully inside their section (section-scoped CSS) so `overflow:hidden`
  never slices the blur into a hard band.
- The plate-number tab interrupts the frame's top border (kept deliberately).
- Reveal-on-scroll uses IntersectionObserver and respects `prefers-reduced-motion`.
- Voice rule: no em dashes anywhere.

## The almanac (MDX)

Field notes live as MDX in `content/almanac/*.mdx` with frontmatter
(`title`, `date`, `sort`, `category`, `excerpt`, `draft`). `app/lib/almanac.ts`
reads and sorts them; `/almanac` lists them and `/almanac/[slug]` renders each
with `next-mdx-remote/rsc`. The homepage Plate V is driven by the same source.
The three current posts are marked `draft: true` and carry starter copy to be
replaced. Add a post by dropping a new `.mdx` file in `content/almanac/`.

## OG image & favicon

- `app/opengraph-image.tsx` renders a 1200×630 branded card with `next/og`
  (paper + ink, the Cormorant/EB Garamond serifs, watercolour splotches, and the
  monstera leaf). Fonts are fetched from Google at build time with a graceful
  fallback.
- `app/icon.svg` is a hand-drawn monstera-leaf favicon.

Both are wired through Next's file conventions (no manual `<link>`/meta needed).

## Outstanding content TODOs

- [ ] Real outcome metrics for the four specimens (currently labelled placeholders in the UI).
- [ ] Flesh out case-study copy per project (`app/data/specimens.ts`).
- [ ] Replace the three almanac draft posts with final copy (`content/almanac/`).
- [ ] Confirm the David Hobbs testimonial edit ("professional" for "designer").
- [ ] Wire the "Book a call" button to Cal.com or similar (`app/page.tsx`, contact section).
```
