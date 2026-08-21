import type { Metadata } from "next";
import Link from "next/link";
import ComingSoon from "./components/ComingSoon";
import EmailLink from "./components/EmailLink";
import { getAllPosts } from "./lib/almanac";
import { Lattice, Nested, Rosette, Spiral, Waves } from "./components/plates";
import { ORANGE } from "./lib/palette";
import {
  disciplines,
  hero,
  method,
  previousClients,
  testimonials,
  toolkit,
  work,
  type DisciplinePlate,
} from "./data/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Plates inherit each section's text colour (currentColor); only plates on
// dark sections need the explicit orange stroke.
const disciplinePlates: Record<DisciplinePlate, React.ReactNode> = {
  spiral: <Spiral />,
  lattice: <Lattice />,
  nested: <Nested />,
};

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ---- Hero (orange) ---- */}
      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-top">
              <p className="hero-eyebrow">{hero.eyebrow}</p>
              <h1>{hero.title}</h1>
              <div className="hero-intro">
                <p>{hero.intro}</p>
              </div>
            </div>
            <div className="hero-acts">
              <EmailLink className="btn btn-orange" subject="Working together">
                Work with me
              </EmailLink>
              <Link href="/cv" className="btn btn-ink-outline">
                Curriculum vitae
              </Link>
            </div>
          </div>

          <div className="hero-plate">
            <div className="plate-art">
              {/* 19 points matches the approved mock: chords sweep the interior
                  instead of hugging the rim as they do at higher densities. */}
              <Rosette density={19} />
            </div>
            <div className="hero-emblem">
              <span className="diamond" />
              <span className="legend">
                Design
                <br />
                ×
                <br />
                Engineering
              </span>
            </div>
            <span className="plate-caption">{hero.plateLabel}</span>
          </div>
        </div>
      </section>

      {/* ---- Toolkit (ink) ---- */}
      <section className="toolkit" aria-label="Toolkit">
        <div className="toolkit-inner">
          <div className="toolkit-head">
            <h2>The toolkit.</h2>
            <span className="caption">
              Ten years in production · React &amp; TypeScript at scale
            </span>
          </div>
          {toolkit.map((row) => (
            <div className="tk-row" key={row.index}>
              <div className="tk-cat">
                <span>{row.index}</span>
                <span className="dash" aria-hidden="true" />
                <span className="name">{row.label}</span>
              </div>
              <div className="tk-chips">
                {row.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Three disciplines (bone) ---- */}
      {/* id="about" keeps the prototype's anchor working for external
          /#about links; the About page itself lives at /about. */}
      <section className="section-light disciplines" id="about">
        <div className="section-head">
          <h2>Three disciplines. One build.</h2>
          <p className="caption">
            Frontend at the centre, design underneath it, backend within reach.
          </p>
        </div>
        <div className="disc-grid">
          {disciplines.map((d) => (
            <article key={d.title}>
              <div className="disc-art">
                <div className="plate-art">{disciplinePlates[d.plate]}</div>
                <span className="tag">{d.plateLabel}</span>
              </div>
              <div className="disc-body">
                <h3>{d.title}</h3>
                <p>{d.body}</p>
                <div className="pill-chips">
                  {d.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---- Selected work (ink) ---- */}
      <section className="section-dark work" id="work">
        <div className="section-head">
          <h2>Things I&apos;ve shipped.</h2>
          <span className="caption">Eight engagements · 2015–2026</span>
        </div>
        {/* Divs styled as a grid, with table semantics for assistive tech.
            The header row is display:none under 780px, where rows stack. */}
        <div role="table" aria-label="Selected work">
          <div className="work-cols work-thead" role="row">
            <span role="columnheader">No.</span>
            <span role="columnheader">Client</span>
            <span role="columnheader">Scope</span>
            <span role="columnheader">Type</span>
            <span role="columnheader">Stack</span>
            <span className="year" role="columnheader">
              Year
            </span>
          </div>
          {work.map((w) => (
            <div className="work-cols work-row" role="row" key={w.no}>
              <span className="no" role="cell">
                {w.no}
              </span>
              <span className="client" role="cell">
                {w.client}
              </span>
              <span className="scope" role="cell">
                {w.scope}
              </span>
              <span className="type" role="cell">
                {w.type}
              </span>
              <span className="stack" role="cell">
                {w.stack}
              </span>
              <span className="year" role="cell">
                {w.year}
              </span>
            </div>
          ))}
        </div>
        <div className="work-prev">
          <span className="label">
            Previous clients · companies I&apos;ve built for
          </span>
          <div className="chips">
            {previousClients.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Latest writing (bone) ---- */}
      <section className="section-light writing" id="writing">
        <div className="section-head">
          <h2>Notes.</h2>
          <Link href="/almanac" className="btn btn-bone-outline">
            All notes
          </Link>
        </div>
        <div className="writing-grid">
          {posts.length === 0 && (
            <ComingSoon
              className="writing-card writing-soon"
              foot={["In progress", "Check back"]}
            />
          )}
          {posts.map((p, i) => (
            <Link
              href={`/almanac/${p.slug}`}
              className="writing-card"
              key={p.slug}
            >
              <div className="card-top">
                <span>{String(i + 1).padStart(3, "0")}</span>
                <span className="ring" aria-hidden="true" />
              </div>
              <div className="card-mid">
                <span className="title">{p.title}</span>
                <span className="dek">{p.excerpt}</span>
              </div>
              <div className="card-foot">
                <span>{p.date}</span>
                <span>{p.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---- Method (ink) ---- */}
      <section className="section-dark method" id="method">
        <div className="section-head">
          <h2>The method.</h2>
          <span className="caption">Four stages · nothing is a black box</span>
        </div>
        <div className="method-grid">
          {method.map((stage) => (
            <div className="method-stage" key={stage.numeral}>
              <div className="method-node">
                <span className="dot" aria-hidden="true" />
                <span className="wire" aria-hidden="true" />
                <span className="numeral">{stage.numeral}</span>
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
            </div>
          ))}
        </div>
        <div className="method-band">
          <div className="plate-art">
            {/* Explicit stroke: the section's text colour is bone, not orange */}
            <Waves stroke={ORANGE} density={21} />
          </div>
        </div>
      </section>

      {/* ---- References (bone) ---- */}
      <section className="section-light refs" id="refs">
        <div className="section-head">
          <h2>On the record.</h2>
          <span className="caption">Words from people I&apos;ve worked with</span>
        </div>
        <div className="refs-grid">
          {testimonials.map((t) => (
            <figure className="ref-card" key={t.name}>
              <div className="ref-mark" aria-hidden="true">
                <span className="sq" />
                <span className="ci" />
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                {t.name}
                <br />
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact + footer strip render from the shared <Footer /> in layout.tsx */}
    </>
  );
}
