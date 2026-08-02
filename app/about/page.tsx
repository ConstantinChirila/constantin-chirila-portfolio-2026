import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { values } from "@/app/data/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Constantin Chirila is a Romanian-born British frontend engineer with a designer's background, building interfaces for the web in React and TypeScript, and the backend when a project needs it.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Profile · British / Romanian</span>
        <h1>Engineer, by way of design.</h1>
      </section>

      <section className="page-body">
        <div className="about-grid">
          <figure className="about-portrait">
            <Image
              src="/portrait.webp"
              alt="Halftone portrait of Constantin Chirila in ink and orange"
              width={1122}
              height={1402}
              sizes="(max-width: 900px) 320px, 320px"
              priority
            />
            <figcaption className="cap">
              Constantin Chirila · United Kingdom, remote
            </figcaption>
          </figure>

          <div className="about-text">
            <p>
              <b>
                I&apos;m Constantin, a Romanian-born British frontend engineer
                with a designer&apos;s background.
              </b>{" "}
              I started in design and illustration over a decade ago, moved into
              engineering, and have spent 10+ years building interfaces for the
              web: mostly in React and TypeScript, always with an eye for how
              the thing feels to use.
            </p>
            <p>
              Design is still where I think from, so I care about the details
              most people only notice when they&apos;re missing. When a project
              needs more than the frontend, I build the backend and APIs to run
              it too, which means I can take an app from first sketch to
              something running. What I leave behind is clean, documented code a
              team can own without me in the room.
            </p>

            <div className="values-grid">
              {values.map((v) => (
                <div className="value" key={v.title}>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              ))}
            </div>

            <div className="about-cta">
              <Link href="/cv" className="btn btn-bone-outline">
                Read the full CV
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
