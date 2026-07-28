import Link from "next/link";
import { contact, social } from "@/app/data/content";
import { ORANGE } from "@/app/lib/palette";
import { Moire } from "./plates";
import EmailLink from "./EmailLink";

/**
 * The correspondence section doubles as the site footer, so every page ends on
 * the same contact invitation and the header's #contact anchor always resolves.
 */
export default function Footer() {
  return (
    <footer className="contact" id="contact">
      <div className="backdrop plate-art" aria-hidden="true">
        {/* Explicit stroke: the section's text colour is bone, not orange */}
        <Moire stroke={ORANGE} density={30} />
      </div>

      <div className="contact-grid">
        <div className="contact-copy">
          <span className="label">{contact.label}</span>
          <h2>{contact.title}</h2>
          <div className="contact-acts">
            <EmailLink className="btn btn-orange" subject="Something worth building">
              Email me <span className="arrow">↗</span>
            </EmailLink>
            <Link href="/cv" className="btn btn-orange-outline">
              Curriculum vitae
            </Link>
          </div>
        </div>
        <dl className="contact-list">
          {contact.details.map((d) => (
            <div key={d.term} style={{ display: "contents" }}>
              <dt>{d.term}</dt>
              <dd>{d.detail}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="footer-strip">
        <span className="copyright">© 2013–2026 Constantin Chirila</span>
        <div className="links">
          <a href={social.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href={social.x} target="_blank" rel="noreferrer noopener">
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
