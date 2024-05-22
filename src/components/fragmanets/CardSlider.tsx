"use client";
import { useState, useEffect } from "react";
import { Navigation, A11y, Scrollbar, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

interface CardProps {
  children: React.ReactNode;
}

const CardSlider = ({ children }: CardProps) => {
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1240: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        modules={[FreeMode, Navigation, A11y, Scrollbar]}
        navigation
        initialSlide={0}
        className="flex items-center justify-start overflow-hidden w-full h-full lg:max-w-[100%]"
        onReachEnd={() => setIsEnd(true)}
        allowTouchMove={!isEnd}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default CardSlider;
