import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import PlateFrame from "@/app/components/PlateFrame";
import PlateHead from "@/app/components/PlateHead";
import PlateImage from "@/app/components/PlateImage";
import Splotch from "@/app/components/Splotch";
import ValueGrid from "@/app/components/ValueGrid";
import { values } from "@/app/data/content";

export const metadata: Metadata = {
  title: "About · Constantin Chirila",
  description:
    "Constantin Chirila is a Romanian-born British full-stack engineer with a product mindset, building software for founders and product managers from idea to launch.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <section id="about">
        <Splotch colour="ochre" />
        <div className="wrap">
          <PlateFrame plateNo="Plate VII">
            <PlateHead
              title="The gardener"
              latin="Constantin Chirila · perennial, hardy · british/romanian"
            />
            <div className="about-grid">
              <div className="portrait plate-slot">
                <PlateImage
                  name="portrait"
                  alt="Engraved portrait of Constantin Chirila"
                  className="plate-img"
                  sizes="(max-width: 860px) 300px, 320px"
                />
                <p className="cap">The author, observed from life</p>
              </div>
              <div className="about-text">
                <p>
                  <b>
                    I&apos;m Constantin, a Romanian-born British front-end
                    engineer with a designer&apos;s background.
                  </b>{" "}
                  I started in design and illustration over a decade ago, moved
                  into engineering, and have spent 10+ years building interfaces
                  for the web: mostly in React and TypeScript, always with an
                  eye for how the thing feels to use.
                </p>
                <p>
                  Design is still where I think from, so I care about the
                  details most people only notice when they&apos;re missing.
                  When a project needs more than the front-end, I build the
                  backend and APIs to run it too, which means I can take an app
                  from first sketch to something running. What I leave behind is
                  clean, documented code a team can own without me in the room.
                </p>
                <ValueGrid values={values} />
                <div className="about-cta">
                  <Link href="/cv" className="btn solid">
                    Read the full CV →
                  </Link>
                </div>
              </div>
            </div>
          </PlateFrame>
        </div>
      </section>
      <Footer />
    </>
  );
}
