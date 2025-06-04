import SectionWrapper from "./section-wrapper";
import { ArrowUpRight, BriefcaseBusiness, Eye } from "lucide-react";
import Button from "./ui/button";
import project1 from "@/public/images/project_1.webp";
import project2 from "@/public/images/project_2.webp";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "ChatterSpace - Real-Time Messaging App",
    image: project2,
    details:
      "A real-time chat app with private & group messaging, read receipts, and user presence tracking.",
    tech: ["Next.js", "Socket.io", "TypeScript", "Tailwind CSS", "MongoDB"],
  },
  {
    id: 2,
    title: "TourNest - Travel Booking Platform",
    image: project1,
    details:
      "A full-featured tour booking platform with dynamic maps, filters, and booking flow.",
    tech: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Mapbox",
      "Tailwind CSS",
    ],
  },
  {
    id: 3,
    title: "FlowSuite ERP - Business Management System",
    image: project2,
    details:
      "An internal ERP system for managing inventory, accounts, HR, and sales pipeline efficiently.",
    tech: ["React.js", "Laravel", "MySQL", "Tailwind CSS", "Redux"],
  },
  {
    id: 4,
    title: "WaveBlast - WhatsApp Bulk Messaging Tool",
    image: project1,
    details:
      "A WhatsApp automation and bulk messaging app with CSV import and delivery reporting.",
    tech: ["Electron", "React.js", "Node.js", "Puppeteer", "Tailwind CSS"],
  },
];

export default function Project() {
  return (
    <SectionWrapper
      subTitle="Explore Porfolio by Technology"
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
            className=" bg-cardGradient rounded-md p-4 flex flex-col gap-4 border border-offWhite"
          >
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
              <Button
                variant="secondery"
                className="!rounded-full border group !border-offWhite !bg-cardGradient !p-2 px-2"
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
