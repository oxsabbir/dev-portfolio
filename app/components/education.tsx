import { GraduationCap } from "lucide-react";
import { educationData } from "../utils/constants";

import SectionWrapper from "./section-wrapper";
export default function Education() {
  return (
    <SectionWrapper
      icon={GraduationCap}
      title="Education"
      className="my-0"
      id="education"
      subTitle="Academic Background"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((item, i) => (
          <div
            key={i}
            className="bg-background bg-cardGradient transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between hover:shadow-md p-8 rounded-lg border border-offBorder"
          >
            <div className=" flex flex-col gap-2 mb-3">
              <p className="py-1 p-2 text-gray-600 dark:text-gray-400 border border-offBorder text-sm font-poppins rounded-md w-fit">
                {item.duration}
              </p>
              <h4 className=" text-lg  font-poppins font-medium">
                {item.title}
              </h4>
              <p className=" text-gray-700 dark:text-gray-400 text-base font-normal">
                {item.institution}
              </p>
              <p className="font-normal text-base text-[#dbdbdb]">
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 ">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-[#222] rounded text-[#ccc]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
