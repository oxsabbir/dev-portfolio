"use client";

import { useEffect, useState } from "react";
import Button from "./ui/button";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import SectionWrapper from "./section-wrapper";
import { useInView } from "motion/react";
import SwipeIn from "./effect/swipe-in";
import { projectContent, technololgyList } from "../data/project-content";

export default function Project() {
  const [category, setCategory] = useState<string>("All");
  const [projectList, setProjectList] = useState(projectContent.slice(0, 6));
  const [hasMore, setHasMore] = useState(
    projectList.length < projectContent.length
  );

  useEffect(() => {
    if (category === "All") {
      setProjectList(projectContent.slice(0, 6));
      return;
    } else {
      const filteredProject = projectContent.filter((project) =>
        project.tech.some(
          (tech) => tech.toLocaleLowerCase() === category.toLowerCase()
        )
      );
      setProjectList(filteredProject);
    }
  }, [category]);

  const seeMoreHandler = () => {
    const moreCount = 6;
    // adding next six to the list
    const moreProject = projectContent.slice(
      projectList.length,
      projectList.length + moreCount
    );
    setProjectList((prev) => [...prev, ...moreProject]);

    // checking if more pr exist
    if (projectContent.length > projectList.length + moreCount) {
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  };

  // inView animation

  return (
    <SectionWrapper
      subTitle="Featured Works by Technology"
      title="Projects"
      id="projects"
      icon={BriefcaseBusiness}
    >
      <div className="pb-4 overflow-x-auto">
        <div className="flex  flex-nowrap items-center  0 gap-3 ">
          {technololgyList.map((technology, i) => (
            <div key={i} className=" flex-shrink-0">
              <Button
                onClick={() => setCategory(technology)}
                value={technology}
                size="sm"
                variant={technology === category ? "primary" : "secondery"}
              >
                {technology}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 mt-3 md:grid-cols-2 xl:grid-cols-3  gap-6">
        {projectList.map((project) => (
          <SwipeIn
            className="bg-cardGradient rounded-md p-4 flex flex-col gap-4 border border-offBorder"
            key={project.id}
          >
            <a href={`/project/${project.slug}`}>
              <div className="transition-all duration-300 relative hover:scale-[1.01] group cursor-pointer">
                <img
                  alt={project.title}
                  width={300}
                  height={200}
                  className="h-full max-h-[250px] object-top w-full rounded-lg shadow-md"
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
          </SwipeIn>
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
