import Link from "next/link";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Sections";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="case-head wrap" style={{ minHeight: "60dvh" }}>
        <h1>Page not found</h1>
        <p className="lead">There is nothing at this address. The work is on the home page.</p>
        <p style={{ marginTop: "var(--s6)" }}><Link className="btn" href="/">Back to the home page</Link></p>
      </main>
      <Footer />
    </>
  );
}
