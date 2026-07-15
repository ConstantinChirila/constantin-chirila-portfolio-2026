import { social } from "@/app/data/content";
import EmailLink from "./EmailLink";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fl">
          <a href={social.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href={social.x} target="_blank" rel="noreferrer noopener">
            X
          </a>
          <EmailLink>Email</EmailLink>
        </div>
        <div className="fc">
          © 2013–2026 Constantin Chirila · rooted in Romania, grown in Britain
        </div>
      </div>
    </footer>
  );
}
