import type { Metadata } from "next";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import PlateFrame from "@/app/components/PlateFrame";
import PlateImage from "@/app/components/PlateImage";
import Splotch from "@/app/components/Splotch";
import {
  cvMeta,
  cvProfile,
  education,
  experience,
  previousRoles,
  skills,
} from "@/app/data/cv";

export const metadata: Metadata = {
  title: "Curriculum Vitae · Constantin Chirila",
  description:
    "The full record: ten years of experience, education, and the tools Constantin Chirila works with.",
};

export default function CvPage() {
  return (
    <>
      <Nav />
      <section id="cv">
        <Splotch colour="periwinkle" />
        <div className="wrap">
          <PlateFrame plateNo="Curriculum Vitae">
            <div className="case-head">
              <div className="crest wide">
                <PlateImage name="cv-flourish" alt="" priority />
              </div>
              <h1>Curriculum Vitae</h1>
              <p className="cap">{cvMeta}</p>
            </div>

            <p className="cv-intro">{cvProfile}</p>

            <div className="cv-download">
              <a
                href="/constantin-chirila-cv.pdf"
                download
                className="btn solid"
              >
                Download PDF ↓
              </a>
            </div>

            {/* Experience */}
            <h2 className="cv-h2">Experience</h2>
            <div className="cv-roles">
              {experience.map((role) => (
                <div className="cv-role" key={`${role.org}-${role.period}`}>
                  <div className="marker" aria-hidden="true">
                    <PlateImage name={role.plate} alt="" />
                  </div>
                  <div>
                    <h3>{role.title}</h3>
                    <p className="org">{role.org}</p>
                    <p className="when">{role.period}</p>
                    <p>{role.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Previous roles */}
            <h2 className="cv-h2">Earlier chapters</h2>
            <ul className="cv-prev">
              {previousRoles.map((role) => (
                <li key={`${role.org}-${role.period}`}>
                  <b>{role.title}</b> at {role.org}{" "}
                  <span className="when">{role.period}</span>
                </li>
              ))}
            </ul>

            {/* Education */}
            <h2 className="cv-h2">Education</h2>
            <div className="cv-edu">
              {education.map((ed) => (
                <div className="item" key={ed.qualification}>
                  <h3>{ed.qualification}</h3>
                  <p className="place">{ed.place}</p>
                  <p className="when">{ed.period}</p>
                  {ed.detail && <p className="detail">{ed.detail}</p>}
                </div>
              ))}
            </div>

            {/* Skills & tools */}
            <h2 className="cv-h2">Skills &amp; tools</h2>
            <div className="chips-group">
              <span className="caps">Strong</span>
              <div className="chips">
                {skills.strong.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="chips-group">
              <span className="caps">Knowledgeable</span>
              <div className="chips">
                {skills.knowledgeable.map((s) => (
                  <span className="chip soft" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </PlateFrame>
        </div>
      </section>
      <Footer />
    </>
  );
}
