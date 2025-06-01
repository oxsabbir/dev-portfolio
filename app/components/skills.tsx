import {
  backendTechStack,
  frontendTechStack,
  toolsStack,
} from "../utils/constants";
import SectionWrapper from "./section-wrapper";
import { CodeXml, Monitor, Server } from "lucide-react";

export default function SkillSection() {
  return (
    <SectionWrapper
      title="Technical Skills"
      subTitle="Technologies"
      icon={CodeXml}
    >
      <div>
        <div className="flex flex-col gap-3 mb-6">
          <div className="px-4 py-2 rounded-3xl border flex items-center w-fit border-offWhite  gap-2">
            <Monitor strokeWidth={1.3} className="w-5 h-5" />
            <h5 className="font-poppins font-light  text-sm">Frontend</h5>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {frontendTechStack.map((item, i) => (
              <div
                key={i}
                className="bg-background bg-heroBgGradient rounded-lg border border-offWhite p-5"
              >
                <div className=" flex flex-row items-center gap-4">
                  <item.icon style={{ color: item.color }} size={45} />
                  <div>
                    <h3 className="text-base font-poppins">{item.name}</h3>
                    <p className="mt-0.5 text-[#EAEAEA] text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-6">
        <div className="px-4 py-2 rounded-3xl border flex items-center w-fit border-offWhite  gap-2">
          <Server strokeWidth={1.3} className="w-5 h-5" />
          <h5 className="font-poppins font-light  text-sm">Backend</h5>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          {backendTechStack.map((item, i) => (
            <div
              key={i}
              className="bg-background bg-heroBgGradient rounded-lg border border-offWhite p-5"
            >
              <div className=" flex flex-row items-center gap-4">
                <item.icon style={{ color: item.color }} size={45} />
                <div>
                  <h3 className="text-base font-poppins">{item.name}</h3>
                  <p className="mt-0.5 text-[#EAEAEA] text-sm">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-6">
        <div className="px-4 py-2 rounded-3xl border flex items-center w-fit border-offWhite  gap-2">
          <Server strokeWidth={1.3} className="w-5 h-5" />
          <h5 className="font-poppins font-light  text-sm">Tools</h5>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          {toolsStack.map((item, i) => (
            <div
              key={i}
              className="bg-background bg-heroBgGradient rounded-lg border border-offWhite p-5"
            >
              <div className=" flex flex-row items-center gap-4">
                <item.icon style={{ color: item.color }} size={45} />
                <div>
                  <h3 className="text-base font-poppins">{item.name}</h3>
                  <p className="mt-0.5 text-[#EAEAEA] text-sm">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
