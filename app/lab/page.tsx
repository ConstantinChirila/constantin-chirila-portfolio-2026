import type { Metadata } from "next";
import LabFigure from "@/app/components/LabFigure";
import LabTags from "@/app/components/LabTags";
import { getLabItems } from "@/app/lib/lab";
import { siteName } from "@/app/lib/site";

const pageTitle = "Lab · Constantin Chirila";
const pageDescription =
  "Tools, apps and experiments built and shipped by Constantin Chirila. Some free, some open source, some for sale, some built just for his own desk.";

// openGraph/twitter are set per page because Next replaces (not merges) these
// objects, so pages without them inherit the home page's values wholesale.
export const metadata: Metadata = {
  title: "Lab",
  description: pageDescription,
  alternates: { canonical: "/lab" },
  openGraph: {
    type: "website",
    url: "/lab",
    siteName,
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function LabPage() {
  const items = getLabItems();

  return (
    <>
      {/* The one signal-orange hero on the site: the lab is where the new and
          unfinished things live, so it gets the loud surface. */}
      <section className="page-hero is-signal">
        <span className="eyebrow">Workshop</span>
        <h1>Lab.</h1>
        <p className="caption">
          Tools, apps and experiments I build and ship myself. Some free, some
          open source, some for sale, some just for my own desk.
        </p>
      </section>

      <section className="page-body">
        <div className="lab-list">
          {items.map((item, i) => {
            const no = String(i + 1).padStart(2, "0");

            return (
              <article className="lab-row" id={item.id} key={item.id}>
                <span className="no" aria-hidden="true">
                  {no}
                </span>

                <LabFigure art={item.art} id={item.id} index={no} />

                <div className="main">
                  {/* Links ride with the title: the primary action belongs at
                      the top of the hierarchy, and it leaves every row ending
                      on prose rather than on whichever element comes last. */}
                  <div className="head">
                    <h2 className="title">{item.name}</h2>
                    {item.links.length > 0 && (
                      <div className="acts">
                        {item.links.map((link) => (
                          <a
                            className="btn btn-bone-outline"
                            href={link.href}
                            key={link.href}
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            {link.label}
                            <span aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="lede">{item.lede}</p>
                  <p className="blurb">{item.blurb}</p>

                  {item.note && <p className="note">{item.note}</p>}
                </div>

                <LabTags item={item} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
