"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Briefcase } from "lucide-react";
import SectionWrapper from "./section-wrapper";
import Button from "./ui/button";

const experiences = [
  {
    date: "May 2024 – Present",
    role: "Frontend Developer",
    company: "Zippix.co",
    location: "Remote",
    description:
      "Working as a frontend developer focused on building cross-platform apps using React Native and improving UI consistency across their web platforms.",
    slug: "zippix",
    tech: ["React Native", "TypeScript", "Tailwind", "Next.js"],
  },
  {
    date: "Dec 2023 – Apr 2024",
    role: "Frontend Developer",
    company: "Smart Material Technology",
    location: "Remote",
    description:
      "Worked with React and React Native to develop UI features and helped deliver a responsive, user-friendly dashboard interface.",
    slug: "smart-material",
    tech: ["React Native", "TypeScript", "Tailwind", "Next.js"],
  },
];

export default function Experiences() {
  return (
    <SectionWrapper
      icon={Briefcase}
      title="Experience"
      id="experience"
      subTitle="Work Experience"
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
      >
        {experiences.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="mb-12 xl cursor-grab p-6 rounded-lg flex flex-col items-center justify-center">
              <p className="xp-date relative w-full text-center mb-16 font-medium text-base text-secondery">
                {item.date}
              </p>
              <div className="flex flex-col gap-3 justify-center items-center text-center">
                <h4 className="text-lg font-medium">{item.role}</h4>
                <p className="text-sm text-smGray uppercase">
                  {item.location}, {item.company}
                </p>
                <p className="text-sm font-normal text-smGray">
                  {item.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-muted text-[12px] px-2 py-1 rounded-md text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={`/experience/${item.slug}`}>
                  <Button
                    size="sm"
                    variant="secondery"
                    className="w-fit mx-auto !rounded-none mt-2"
                  >
                    Details
                  </Button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
}
