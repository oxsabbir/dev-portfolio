import Hero from "@/app/components/hero";
import SkillSection from "./components/skills";
import Experiences from "./components/experience";
import Education from "./components/education";
import Project from "./components/project";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SkillSection />
        <Experiences />
        <Education />
        <Project />
      </main>
    </>
  );
}
