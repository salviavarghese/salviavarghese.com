import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import { Contact, Footer } from "@/components/Sections";
import { projects, getProject, nextProject } from "@/content/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p?.caseStudy) return {};
  return { title: p.title, description: p.caseStudy.lead };
}

export default async function CaseStudy({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p?.caseStudy) notFound();
  const c = p.caseStudy;
  const next = nextProject(slug);

  return (
    <>
      <Nav current="work" />
      <main id="main">
        <div className="case-head wrap">
          <h1>{p.title}</h1>
          <p className="lead">{c.lead}</p>
          <dl className="case-meta">
            <div><dt>Client</dt><dd>{c.client}</dd></div>
            <div><dt>Year</dt><dd>{c.year}</dd></div>
            <div><dt>Role</dt><dd>{c.role}</dd></div>
            <div><dt>Stack</dt><dd>{c.stackShort}</dd></div>
            <div><dt>Live</dt><dd>{p.live ? <a href={p.live}>{p.live.replace(/^https?:\/\//, "")}</a> : "Not yet"}</dd></div>
          </dl>
        </div>

        <div className="wrap">
          {p.image ? (
            <div className="case-hero">
              <Image src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} sizes="100vw" priority />
            </div>
          ) : (
            <div className="frame text" style={{ aspectRatio: "16 / 9", display: "grid", placeItems: "center", padding: "var(--s6)", background: "#E6DFE0", borderRadius: "var(--radius)" }}>
              <p>{p.placeholder}</p>
            </div>
          )}
        </div>

        <div className="case-body wrap">
          <h2>The brief</h2>
          <div><p>{c.brief}</p></div>
          <h2>What I did</h2>
          <div><ul>{c.whatIDid.map((t) => <li key={t.slice(0, 24)}>{t}</li>)}</ul></div>
          <h2>Outcome</h2>
          <div><p>{c.outcome}</p></div>
        </div>

        {p.phones && p.phones.length > 0 && (
          <div className="wrap">
            <div className="work-head" style={{ marginBottom: "var(--s5)" }}><p className="meta">On a phone</p></div>
            <div className="phones">
              {p.phones.map((ph) => (
                <Image key={ph.src} src={ph.src} alt={ph.alt} width={ph.width} height={ph.height} sizes="260px" />
              ))}
            </div>
          </div>
        )}

        <div className="case-next wrap" style={{ marginTop: "var(--section)" }}>
          <p className="meta" style={{ marginBottom: "var(--s3)" }}>Next project</p>
          <Link href={`/work/${next.slug}`}>{next.title}</Link>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
