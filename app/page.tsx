import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { MaintixCaseStudy } from "@/components/sections/maintix-case-study";
import { EngineeringApproach } from "@/components/sections/engineering-approach";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <MaintixCaseStudy />
      <Projects />
      <EngineeringApproach />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
