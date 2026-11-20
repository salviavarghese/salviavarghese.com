import Image from "next/image";
import Link from "next/link";
import { site, projects, funProjects, type Project } from "@/content/site";

export function Hero() {
  const { first, last, lead, photo } = site.hero;
  return (
    <section className="hero wrap">
      <h1 className="hero-name" aria-label={site.name}>
        <span><i>{first}</i></span>
        <span><i>{last}</i></span>
      </h1>
      <div className="hero-foot">
        <p className="lead">{lead}</p>
        {photo ? (
          <Image className="photo-slot" src={photo.src} alt={photo.alt} width={120} height={120} style={{ objectFit: "cover" }} />
        ) : (
          <div className="photo-slot" aria-hidden="true" />
        )}
      </div>
    </section>
  );
}

function Frame({ p }: { p: Project }) {
  if (!p.image) {
    return (
      <div className="frame text">
        <p>{p.placeholder}</p>
      </div>
    );
  }
  return (
    <div className="frame">
      <Image src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} sizes="(min-width: 1024px) 70vw, 100vw" />
    </div>
  );
}

function ProjectList({ id, heading, note, items }: { id: string; heading: string; note: string; items: Project[] }) {
  return (
    <section className="section" id={id}>
      <div className="wrap">
        <div className="section-head">
          <h2>{heading}</h2>
          <p className="meta">{note}</p>
        </div>
        <ul className="work">
          {items.map((p) => {
            const href = p.external ?? (p.caseStudy ? `/work/${p.slug}` : p.live ?? "#");
            const ext = !!p.external;
            return (
              <li key={p.slug}>
                <div className="work-head">
                  <h3>{ext ? <a href={href}>{p.title}</a> : <Link href={href}>{p.title}</Link>}</h3>
                  <p className="meta">{p.when}</p>
                </div>
                <figure>
                  <Frame p={p} />
                  <figcaption>
                    <p className="meta">{p.summary}</p>
                    <p className="meta muted">{p.stack}</p>
                    {p.live && (
                      <p className="meta"><a href={p.live}>{p.live.replace(/^https?:\/\//, "")}</a></p>
                    )}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function WorkList() {
  return <ProjectList id="work" heading="Selected work" note="2026" items={projects} />;
}

export function FunList() {
  return <ProjectList id="fun" heading="For fun" note="Things I build for myself" items={funProjects} />;
}

export function About() {
  const a = site.about;
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head"><h2>About</h2></div>
        <div className="about-grid">
          <div>
            <p className="lead">{a.lead}</p>
            {a.paragraphs.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}
          </div>
          <ul className="facts">
            {a.facts.map(([k, v]) => (
              <li key={k}>
                <span>{k}</span>
                <span>{k === "Code" ? <a href={site.github}>{v}</a> : v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="table-scroll" style={{ marginTop: "var(--s8)" }}>
          <table>
            <thead><tr><th>Role</th><th>Where</th><th>When</th></tr></thead>
            <tbody>
              {a.experience.map(([r, w, d]) => (
                <tr key={r}><td>{r}</td><td>{w}</td><td>{d}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="caps">
          {a.capabilities.map((c) => (
            <div key={c.title}>
              <h3>{c.title}</h3>
              <ul>{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>

        <div className="how">
          <h3>{a.howIWork.heading}</h3>
          <div>{a.howIWork.paragraphs.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}</div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <h2>{site.contact.heading}</h2>
        <a className="mail" href={`mailto:${site.email}`}>{site.email}</a>
        <div className="links">
          <a href={site.linkedin}>LinkedIn</a>
          <a href={site.github}>GitHub</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>{site.name}, {new Date().getFullYear()}</span>
        <span>{site.location}</span>
      </div>
    </footer>
  );
}
