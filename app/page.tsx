import Hero from "@/app/components/hero";
import SkillSection from "./components/skills";
import Experiences from "./components/experience";
import Education from "./components/education";
import Project from "./components/project";
import Contacts from "./components/contacts";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40">
        <Navigation />
      </header>
      <main>
        <Hero />
        <SkillSection />
        <Experiences />
        <Education />
        <Project />
        <Contacts />
      </main>
    </>
  );
}
