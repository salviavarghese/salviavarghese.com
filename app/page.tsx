import Nav from "@/components/Nav";
import { Hero, WorkList, FunList, About, Contact, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <WorkList />
        <FunList />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
