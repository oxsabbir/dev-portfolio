import SectionWrapper from "./section-wrapper";
import { ArrowUpRight, BriefcaseBusiness, Eye } from "lucide-react";
import Button from "./ui/Button";
import project1 from "@/public/images/project_1.webp";
import project2 from "@/public/images/project_2.webp";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Placeholder App UI 1",
    image: project2,
  },
  {
    id: 2,
    title: "Placeholder App UI 2",
    image: project1,
  },
  {
    id: 3,
    title: "Placeholder App UI 3",
    image: project2,
  },
  {
    id: 4,
    title: "Placeholder App UI 4",
    image: project1,
  },
];

export default function Project() {
  return (
    <SectionWrapper
      subTitle="Explore porfolio by technology"
      title="Project"
      icon={BriefcaseBusiness}
    >
      <div className="overflow-x-auto pb-4">
        <div className="flex items-center gap-3 ">
          <Button size="sm" variant="primary">
            All
          </Button>
          <Button size="sm" variant="secondery">
            React
          </Button>
          <Button size="sm" variant="secondery">
            Next
          </Button>
          <Button size="sm" variant="secondery">
            Node
          </Button>
          <Button size="sm" variant="secondery">
            Express
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-3 md:grid-cols-2 xl:grid-cols-3 gap-4 0">
        {data.map((project) => (
          <div
            key={project.id}
            className=" bg-cardGradient rounded-md p-4 border border-offWhite"
          >
            <div className="transition-all duration-300 relative hover:scale-[1.01] group cursor-pointer">
              <Image
                alt={project.title}
                width={300}
                height={200}
                quality={100}
                className="h-[200px] sm:h-[230px] md:h-[240px]  object-cover w-full rounded-lg shadow-md"
                src={project.image}
              />
              <div className="bg-secondery/30 w-full transition-all duration-200 opacity-0 flex group-hover:opacity-100 absolute h-full top-0 left-0 rounded-lg items-center justify-center">
                <div className=" rounded-full p-3 bg-black/50 bg-cardGradient w-fit">
                  <ArrowUpRight className="w-6 h-6 text-[#edededed]" />
                </div>
              </div>
            </div>

            <div className=" flex items-center justify-between mt-4">
              <h4 className="text-base font-medium">{project.title}</h4>
              <Button
                variant="secondery"
                className="!rounded-full border group !border-offWhite !bg-cardGradient !p-1.5 px-1.5"
              >
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200 transition-all text-white/80" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
