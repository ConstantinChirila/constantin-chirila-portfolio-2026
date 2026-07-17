import type { Metadata } from "next";
import PlateFrame from "@/app/components/PlateFrame";
import PlateImage from "@/app/components/PlateImage";
import Splotch from "@/app/components/Splotch";
import {
  cvMeta,
  cvProfile,
  education,
  experience,
  skillGroups,
} from "@/app/data/cv";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description:
    "The full record: a decade-plus of experience, education, and the tools Constantin Chirila works with.",
  alternates: { canonical: "/cv" },
};

export default function CvPage() {
  return (
    <>
      <section id="cv">
        <Splotch colour="periwinkle" />
        <div className="wrap">
          <PlateFrame plateNo="Curriculum Vitae">
            <div className="case-head">
              <div className="crest wide">
                <PlateImage
                  name="cv-flourish"
                  alt=""
                  priority
                  sizes="(max-width: 640px) 94vw, 600px"
                />
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
                    <PlateImage name={role.plate} alt="" sizes="100px" />
                  </div>
                  <div>
                    <h3>{role.title}</h3>
                    <p className="org">{role.org}</p>
                    <p className="when">{role.period}</p>
                    {role.body && <p className="role-body">{role.body}</p>}
                    {role.bullets && (
                      <ul className="role-bullets">
                        {role.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

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
            {skillGroups.map((group) => (
              <div className="chips-group" key={group.label}>
                <span className="caps">{group.label}</span>
                <div className="chips">
                  {group.items.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </PlateFrame>
        </div>
      </section>
    </>
  );
}
