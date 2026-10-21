import Nav from "@/components/Nav";
import { Hero, WorkList, About, Contact, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <WorkList />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
