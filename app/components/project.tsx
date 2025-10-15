"use client";

import SectionWrapper from "./section-wrapper";
import { ArrowUpRight, BriefcaseBusiness, Eye } from "lucide-react";
import Button from "./ui/button";
import Image from "next/image";
import { projectContent, technololgyList } from "../data/project-content";

import { useEffect, useState } from "react";

export default function Project() {
  const [category, setCategory] = useState<string>("All");
  const [projectList, setProjectList] = useState(projectContent.slice(0, 6));
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (category === "All") {
      setProjectList(projectContent.slice(0, 6));
      return;
    } else {
      const filteredProject = projectContent.filter((project) =>
        project.tech.includes(category)
      );
      setProjectList(filteredProject);
    }
  }, [category]);

  const seeMoreHandler = () => {
    // add next six to the list
    const moreProject = projectContent.slice(
      projectList.length,
      projectList.length + 2
    );
    setProjectList((prev) => [...prev, ...moreProject]);

    // check if more exist
  };

  return (
    <SectionWrapper
      subTitle="Featured Works by Technology"
      title="Projects"
      id="projects"
      icon={BriefcaseBusiness}
    >
      <div className="overflow-x-auto pb-4">
        <div className="flex items-center gap-3 ">
          {technololgyList.map((technology, i) => (
            <Button
              onClick={() => setCategory(technology)}
              key={i}
              value={technology}
              size="sm"
              variant={technology === category ? "primary" : "secondery"}
            >
              {technology}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 mt-3 md:grid-cols-2 xl:grid-cols-3  gap-6">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="bg-cardGradient rounded-md p-4 flex flex-col gap-4 border border-offBorder"
          >
            <a href={`/project/${project.slug}`}>
              <div className="transition-all duration-300 relative hover:scale-[1.01] group cursor-pointer">
                <img
                  alt={project.title}
                  width={300}
                  height={200}
                  className="min-h-[230px] object-top w-full rounded-lg shadow-md"
                  src={project.image.src}
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
                  className="text-xs px-2 py-1 bg-[#ccc] dark:bg-[#222]  rounded text-[#222] dark:text-[#ccc] "
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className=" flex items-center gap-2.5 mt-auto justify-between ">
              <div className="flex gap-1 flex-col ">
                <h4 className="text-lg font-medium line-clamp-2 mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-800 dark:text-gray-400 line-clamp-3">
                  {project.details}
                </p>
              </div>
              <a href={`/project/${project.slug}`}>
                <Button
                  variant="secondery"
                  className="!rounded-full border group !border-offBorder !bg-cardGradient !p-2 px-2"
                >
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200 transition-all dark:text-white/80 text-black/80" />
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        {hasMore ? (
          <Button onClick={seeMoreHandler} size="sm" variant="primary">
            See more
          </Button>
        ) : (
          <p className="text-sm  text-gray-600 dark:text-gray-400">
            No more left
          </p>
        )}
      </div>
    </SectionWrapper>
  );
}
