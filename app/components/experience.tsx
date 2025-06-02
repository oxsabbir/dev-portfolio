import { Briefcase } from "lucide-react";

import SectionWrapper from "./section-wrapper";
export default function Experiences() {
  return (
    <SectionWrapper
      icon={Briefcase}
      title="Experince"
      subTitle="Work Experience"
    >
      <div className="grid grid-cols-2 gap-4">
        {new Array(5).fill(1).map((item) => (
          <div
            key={item}
            className="bg-cardGradient p-6 md:p-8 rounded-lg flex flex-col items-center justify-center border-offWhite border"
          >
            <p className="xp-date relative mb-12 font-normal text-base text-secondery ">
              2022 - Present
            </p>
            <div className=" flex flex-col gap-3 justify-center items-cente text-center">
              <h4 className="text-lg font-medium">Big Data Engineer</h4>
              <p className="text-sm text-smGray uppercase">
                Los Angeles, Google
              </p>
              <p className="text-sm font-normal text-smGray">
                3+ years of experience with big data/Hadoop and Cloud
                technologies – Spark, Hive, Flink, Presto, Snowflake, Map
                Reduce, YARN, Amazon AWS.
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
