import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Volunteer from "@/components/social-activity";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <About />
      <Education />
      {/* <Experience /> */}
      <Projects />
      <Volunteer />
    </div>
  );
}
