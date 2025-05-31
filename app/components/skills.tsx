import SectionWrapper from "./section-wrapper";
import { CodeXml } from "lucide-react";

export default function SkillSection() {
  return (
    <SectionWrapper
      title="Technical Skills"
      subTitle="Technologies"
      icon={CodeXml}
    >
      <h3>Skill shown here</h3>
    </SectionWrapper>
  );
}
