import type { Metadata } from "next";
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
      <section className="page-hero">
        <span className="eyebrow">Curriculum vitae</span>
        <h1>The full record.</h1>
        <p className="caption">{cvMeta}</p>
      </section>

      <section className="page-body">
        <p className="cv-intro">{cvProfile}</p>

        <div className="cv-download">
          <a
            href="/constantin-chirila-cv.pdf"
            download
            className="btn btn-bone-outline"
          >
            Download PDF <span className="arrow">↓</span>
          </a>
        </div>

        {/* Experience */}
        <div className="cv-section">
          <div className="cv-section-head">
            <span className="idx">A</span>
            <span className="dash" aria-hidden="true" />
            <span>Experience</span>
          </div>
          {experience.map((role) => (
            <div className="cv-role" key={`${role.org}-${role.period}`}>
              <span className="when">{role.period}</span>
              <div>
                <h3>{role.title}</h3>
                <p className="org">{role.org}</p>
                {role.body && <p className="role-body">{role.body}</p>}
                {role.bullets && (
                  <ul>
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
        <div className="cv-section">
          <div className="cv-section-head">
            <span className="idx">B</span>
            <span className="dash" aria-hidden="true" />
            <span>Education</span>
          </div>
          {education.map((ed) => (
            <div className="cv-edu" key={ed.qualification}>
              <span className="when">{ed.period}</span>
              <div>
                <h3>{ed.qualification}</h3>
                <p className="place">{ed.place}</p>
                {ed.detail && <p className="detail">{ed.detail}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Skills & tools */}
        <div className="cv-section cv-skills">
          <div className="cv-section-head">
            <span className="idx">C</span>
            <span className="dash" aria-hidden="true" />
            <span>Skills &amp; tools</span>
          </div>
          {skillGroups.map((group) => (
            <div className="tk-row" key={group.label}>
              <div className="tk-cat">
                <span className="name">{group.label}</span>
              </div>
              <div className="tk-chips">
                {group.items.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
