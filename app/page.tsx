import Hero from "@/app/components/hero";
import SkillSection from "./components/skills";
import Experiences from "./components/experience";
import Education from "./components/education";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SkillSection />
        <Experiences />
        <Education />
      </main>
    </>
  );
}
