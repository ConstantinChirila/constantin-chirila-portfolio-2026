import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="notfound">
      <span className="code">Error 404 · Page not found</span>
      <h1>Nothing at this address.</h1>
      <p>
        The page you were looking for isn&apos;t here. It may have been moved,
        renamed, or never built at all. Let&apos;s get you back on track.
      </p>
      <div className="acts">
        <Link href="/" className="btn btn-orange">
          Back to the front page
        </Link>
      </div>
    </section>
  );
}
