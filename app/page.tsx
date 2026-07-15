import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PlateFrame from "./components/PlateFrame";
import PlateHead from "./components/PlateHead";
import PlateImage from "./components/PlateImage";
import Splotch from "./components/Splotch";
import VellumPanel from "./components/VellumPanel";
import Reveal from "./components/Reveal";
import EmailLink from "./components/EmailLink";
// Restore alongside the hidden sections:
//   import SpecimenRow from "./components/SpecimenRow";
//   import { specimens } from "./data/specimens";
//   import { getAllPosts } from "./lib/almanac";  (for the almanac)
//   (and add `tools` back to the content import below for the conservatory)
import { clients, disciplines, seasons, testimonials } from "./data/content";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ---- Hero: the title page ---- */}
      <header className="hero" id="top">
        <Splotch colour="rose" className="s1" />
        <Splotch colour="ochre" className="s2" />
        <div className="plate-slot hero-flora">
          <PlateImage
            name="hero-flora-right"
            alt=""
            className="plate-img"
            priority
            sizes="(max-width: 760px) 46vw, 560px"
          />
        </div>
        <div className="plate-slot hero-flora-l">
          <PlateImage
            name="hero-flora-left"
            alt=""
            className="plate-img"
            priority
            sizes="(max-width: 760px) 38vw, 440px"
          />
        </div>
        <div className="wrap">
          <VellumPanel>
            <p className="caps est">
              Front-end engineer · Design &amp; UX · Est. 2013
            </p>
            <div className="flourish">
              <span className="line" />
              <svg
                width="26"
                height="18"
                viewBox="0 0 26 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M13 16 C13 10, 9 6, 3 5 C8 3, 12 6, 13 10 C14 6, 18 3, 23 5 C17 6, 13 10, 13 16 Z"
                  stroke="#2E4229"
                  strokeWidth="1.1"
                />
              </svg>
              <span className="line" />
            </div>
            <h1>
              Software, carefully <em>cultivated.</em>
            </h1>
            <p className="sub">
              <b>I&apos;m a front-end engineer with a designer&apos;s eye.</b> I
              build fast, accessible interfaces in React and TypeScript, and the
              backend to run them when a project needs it. Design is where I
              started, so I care how the whole thing feels, not just how it
              works.
            </p>
            <p className="latin binomial">
              Faber interfaciorum · fam. Frontendaceae · habitat: United
              Kingdom, remote
            </p>
            <div className="acts">
              <EmailLink className="btn solid" subject="Starting a project">
                Start a project
              </EmailLink>
              <Link href="/cv" className="btn ghost">
                Curriculum Vitae
              </Link>
            </div>
          </VellumPanel>
        </div>
      </header>

      {/* ---- Plate I: disciplines ---- */}
      <section id="bearings">
        <Splotch colour="periwinkle" />
        <div className="wrap">
          <PlateFrame plateNo="Plate I">
            <PlateHead
              crest="flourish-disciplines"
              title="Three disciplines, one gardener"
              latin="front-end at the centre, design in the roots, backend within reach"
            />
            <div className="bearings">
              {disciplines.map((d) => (
                <div className="bearing" key={d.title}>
                  <div className="emblem plate-slot">
                    <PlateImage name={d.emblem} alt="" />
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                  <span className="latin">{d.latin}</span>
                </div>
              ))}
            </div>
          </PlateFrame>
        </div>
      </section>

      {/* ---- Plate II: selected specimens ---- */}
      <section id="work">
        <Splotch colour="rose" />
        <div className="wrap">
          <PlateFrame plateNo="Plate II">
            {/* Selected specimens: hidden until real case studies are ready.
                Uncomment the PlateHead + SpecimenRow list below to bring them
                back (and restore the `specimens` / `SpecimenRow` imports).
            <PlateHead
              crest="flourish-specimens"
              title="Selected specimens"
              latin="collected in the field, 2013 to present"
            />
            {specimens.map((s) => (
              <SpecimenRow key={s.slug} specimen={s} />
            ))}
            */}
            <PlateHead
              crest="flourish-specimens"
              title="Gardens I've tended along the way"
              latin="the beds I've kept, 2013 to present"
            />
            <div className="clients bare">
              <ul>
                {clients.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </PlateFrame>
        </div>
      </section>

      {/* ---- Plate III: the method ---- */}
      <section id="process">
        <Splotch colour="ochre" />
        <div className="wrap">
          <PlateFrame plateNo="Plate III">
            <PlateHead
              crest="flourish-method"
              title="The method"
              latin="how I work, in four seasons"
            />
            <div className="seasons">
              {seasons.map((s) => (
                <div className="season" key={s.title}>
                  <span className="n">{s.n}</span>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </PlateFrame>
        </div>
      </section>

      {/* ---- Plate IV: the conservatory — hidden until the tools are ready to show. Uncomment to restore. ----
      <section id="tools">
        <Splotch colour="coral" />
        <div className="wrap">
          <PlateFrame plateNo="Plate IV">
            <PlateHead
              crest="flourish-conservatory"
              title="The conservatory"
              latin="small instruments, built for my own work & freely shared"
            />
            <div className="kit">
              {tools.map((t) => (
                <div className="tool" key={t.title}>
                  <div className="insect plate-slot">
                    <PlateImage name={t.insect} alt="" />
                  </div>
                  <span className={`st ${t.status}`}>{t.statusLabel}</span>
                  <h4>{t.title}</h4>
                  <p>{t.body}</p>
                </div>
              ))}
            </div>
          </PlateFrame>
        </div>
      </section>
      */}

      {/* ---- Plate V: the almanac — hidden until there are articles ready. Uncomment to restore (and re-add the getAllPosts import + notes const above). ----
      <section id="notes">
        <div className="wrap">
          <PlateFrame plateNo="Plate V">
            <PlateHead
              crest="flourish-almanac"
              title="From the almanac"
              latin="a few recent field notes"
            />
            {notes.slice(0, 3).map((n) => (
              <Link className="entry" href={`/almanac/${n.slug}`} key={n.slug}>
                <span className="d">{n.date}</span>
                <h4>{n.title}</h4>
                <span className="c">{n.draft ? "Draft" : n.category}</span>
              </Link>
            ))}
            <div className="almanac-more">
              <Link href="/almanac" className="btn ghost">
                Read the full almanac →
              </Link>
            </div>
          </PlateFrame>
        </div>
      </section>
      */}

      {/* ---- Plate VI: pressed & kept ---- */}
      <section id="voices">
        <Splotch colour="periwinkle" />
        <div className="wrap">
          <PlateFrame plateNo="Plate VI">
            <PlateHead
              crest="flourish-voices"
              title="Pressed & kept"
              latin="kind words from people I've worked with"
            />
            <div className="quotes">
              {testimonials.map((t) => (
                <div className="q" key={t.name}>
                  <p>{t.quote}</p>
                  <div className="by">
                    <b>{t.name}</b>
                    {t.role}
                  </div>
                </div>
              ))}
            </div>
          </PlateFrame>
        </div>
      </section>

      {/* ---- Contact: the calling card (before About, by client's choice) ---- */}
      <section className="contact" id="contact">
        <Splotch colour="rose" className="c1" />
        <Splotch colour="ochre" className="c2" />
        <Reveal className="wrap">
          <div className="plate-slot contact-flora">
            <PlateImage name="contact-garland" alt="" className="plate-img" />
          </div>
          <h2>
            Something worth <em>growing?</em>
          </h2>
          <div className="plate-slot contact-letter">
            <PlateImage name="flourish-contact" alt="" />
          </div>
          <div className="acts">
            <EmailLink className="btn solid" showAddress />
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
