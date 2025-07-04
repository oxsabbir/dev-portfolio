"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Briefcase } from "lucide-react";
const arr = [1, 2];
import SectionWrapper from "./section-wrapper";
import Button from "./ui/button";
export default function Experiences() {
  return (
    <SectionWrapper
      icon={Briefcase}
      title="Experince"
      id="experience"
      subTitle="Work Experience"
    >
      <div className="mySwiper"></div>
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
        {arr.map((item) => (
          <SwiperSlide key={item}>
            <div className="mb-12 xl cursor-grab p-6 rounded-lg flex flex-col items-center justify-center">
              <p className="xp-date relative w-full text-center mb-16 font-medium text-base text-secondery ">
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
                <Button
                  size="sm"
                  variant="secondery"
                  className="w-fit mx-auto !rounded-none mt-2"
                >
                  Details
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
}
