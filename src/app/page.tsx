import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="h-screen relative">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
