import SectionWrapper from "./section-wrapper";
import { ArrowUpRight, BriefcaseBusiness, Eye } from "lucide-react";
import Button from "./ui/button";
import Image from "next/image";
import { projectContent } from "../data/project-content";

export default function Project() {
  return (
    <SectionWrapper
      subTitle="Featured Works by Technology"
      title="Projects"
      id="projects"
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
        {projectContent.map((project) => (
          <div
            key={project.id}
            className=" bg-cardGradient rounded-md p-4 flex flex-col gap-4 border border-offWhite"
          >
            <a href={`/project/${project.slug}`}>
              <div className="transition-all duration-300 relative hover:scale-[1.01] group cursor-pointer">
                <Image
                  alt={project.title}
                  width={300}
                  height={200}
                  quality={100}
                  className="h-[240px]  object-cover w-full rounded-lg shadow-md"
                  src={project.image}
                />
                <div className="bg-secondery/30 w-full transition-all duration-200 opacity-0 flex group-hover:opacity-100 absolute h-full top-0 left-0 rounded-lg items-center justify-center">
                  <div className=" rounded-full p-3 bg-black/50 bg-cardGradient w-fit">
                    <ArrowUpRight className="w-6 h-6 text-[#edededed]" />
                  </div>
                </div>
              </div>
            </a>

            <div className="flex flex-wrap gap-2 ">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-[#222] rounded text-[#ccc]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className=" flex items-center gap-2.5 mt-auto justify-between ">
              <div className="flex gap-1 flex-col ">
                <h4 className="text-lg font-medium line-clamp-1">
                  {project.title}
                </h4>
                <p className="text-sm text-[#EAEAEA] line-clamp-2">
                  {project.details}
                </p>
              </div>
              <a href={`/project/${project.slug}`}>
                <Button
                  variant="secondery"
                  className="!rounded-full border group !border-offWhite !bg-cardGradient !p-2 px-2"
                >
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200 transition-all text-white/80" />
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
