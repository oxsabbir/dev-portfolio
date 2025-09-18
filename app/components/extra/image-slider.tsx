import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function ImageSlider({ images }: { images: string[] }) {
  return (
    <div className=" py-2">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image, i) => (
          <SwiperSlide>
            <img src={image} alt={`feature-image${i + 1}`} width={"auto"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
