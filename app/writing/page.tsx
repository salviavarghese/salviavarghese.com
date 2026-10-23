import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import { Contact, Footer } from "@/components/Sections";
import { posts } from "@/content/writing";

export const metadata: Metadata = { title: "Writing", description: "Notes on how I build and design websites." };

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function Writing() {
  return (
    <>
      <Nav current="writing" />
      <main id="main">
        <div className="case-head wrap">
          <h1>Writing</h1>
          <p className="lead">Notes on how I build and design websites. Short, and only when there is something worth saying.</p>
        </div>
        <div className="wrap">
          <ul className="posts">
            {posts.map((p) => (
              <li key={p.slug}>
                <p className="meta">{fmt(p.date)}</p>
                <h2><Link href={`/writing/${p.slug}`}>{p.title}</Link></h2>
                <p>{p.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
