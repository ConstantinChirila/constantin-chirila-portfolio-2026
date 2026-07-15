import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import PlateFrame from "@/app/components/PlateFrame";
import PlateImage from "@/app/components/PlateImage";
import Splotch from "@/app/components/Splotch";
import { getSpecimen, specimens } from "@/app/data/specimens";
import { social } from "@/app/data/content";

export function generateStaticParams() {
  return specimens.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const specimen = getSpecimen(slug);
  if (!specimen) return { title: "Specimen not found · Constantin Chirila" };

  const title = `${specimen.name} · ${specimen.habitat} · Constantin Chirila`;
  const description = specimen.caseStudy.problem;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: `/plates/${specimen.plate}.webp` }],
    },
  };
}

export default async function SpecimenPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specimen = getSpecimen(slug);
  if (!specimen) notFound();

  const { caseStudy } = specimen;

  return (
    <>
      <Nav />
      <section id="specimen">
        <Splotch colour="rose" />
        <div className="wrap">
          <PlateFrame plateNo={`Fig. ${specimen.fig}`}>
            <Link href="/#work" className="case-back">
              ← Back to specimens
            </Link>

            <div className="case-head">
              <div className="crest">
                <PlateImage name={specimen.plate} alt={specimen.alt} />
              </div>
              <h1>{specimen.name}</h1>
              <p className="cap">
                {specimen.binomial} · {specimen.habitat}
              </p>
            </div>

            <div className="case-body">
              <h2>The problem</h2>
              <p>{caseStudy.problem}</p>

              <h2>My role</h2>
              <p>{caseStudy.role}</p>

              <h2>Decisions</h2>
              <p>{caseStudy.decisions}</p>

              <h2>The outcome</h2>
              <p>{caseStudy.outcome}</p>

              <div className="case-outcome">
                <span className="ph">Placeholder metric</span>
                <span className="metric">{specimen.metric}</span>
              </div>
            </div>
          </PlateFrame>
        </div>
      </section>
      <Footer />
    </>
  );
}
