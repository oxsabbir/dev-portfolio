import {
  backendTechStack,
  frontendTechStack,
  toolsStack,
} from "../utils/constants";
import SectionWrapper from "./section-wrapper";
import { CodeXml, Monitor, Server, Wrench } from "lucide-react";
import ToolsCard from "./tools-card";

export default function SkillSection() {
  return (
    <SectionWrapper
      title="Technical Skills"
      subTitle="Technologies"
      icon={CodeXml}
      id="skills"
    >
      <ToolsCard
        title="Frontend"
        icon={Monitor}
        toolsList={frontendTechStack}
      />
      <ToolsCard title="Backend" icon={Server} toolsList={backendTechStack} />
    </SectionWrapper>
  );
}
