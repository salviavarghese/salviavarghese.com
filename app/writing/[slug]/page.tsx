import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import { Contact, Footer } from "@/components/Sections";
import { posts, getPost } from "@/content/writing";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  return p ? { title: p.title, description: p.summary } : {};
}

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default async function Post({ params }: Params) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  return (
    <>
      <Nav current="writing" />
      <main id="main">
        <div className="case-head wrap">
          <p className="meta" style={{ marginBottom: "var(--s3)" }}>{fmt(p.date)}</p>
          <h1>{p.title}</h1>
          <p className="lead">{p.summary}</p>
        </div>
        <article className="post wrap">
          {p.body.map((para, i) =>
            para.startsWith("## ") ? <h2 key={i}>{para.slice(3)}</h2> : <p key={i}>{para}</p>
          )}
        </article>
        <div className="case-next wrap">
          <p className="meta" style={{ marginBottom: "var(--s3)" }}>More</p>
          <Link href="/writing">All writing</Link>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
