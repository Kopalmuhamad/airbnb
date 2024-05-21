"use client";
import React, { useState } from "react";

import { Navigation, A11y, Scrollbar, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import avatarSample from "@/assets/images/avatar.png";
import imageSample from "@/assets/images/banner1.jpg";
import Image from "next/image";

const HeaderDetail = () => {
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="w-full h-full flex items-start justify-center flex-col lg:col-span-2">
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
        initialSlide={0} // Slide pertama akan ditampilkan
        className="flex items-center justify-start overflow-hidden w-full h-full lg:max-w-[100%]"
        onReachEnd={() => setIsEnd(true)}
        allowTouchMove={!isEnd}
      >
        <SwiperSlide>
          <Image
            src={imageSample}
            alt=""
            width={200}
            height={200}
            className="w-full h-full rounded-sm mt-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imageSample}
            alt=""
            width={200}
            height={200}
            className="w-full h-full rounded-sm mt-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imageSample}
            alt=""
            width={200}
            height={200}
            className="w-full h-full rounded-sm mt-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imageSample}
            alt=""
            width={200}
            height={200}
            className="w-full h-full rounded-sm mt-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imageSample}
            alt=""
            width={200}
            height={200}
            className="w-full h-full rounded-sm mt-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imageSample}
            alt=""
            width={200}
            height={200}
            className="w-full h-full rounded-sm mt-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imageSample}
            alt=""
            width={200}
            height={200}
            className="w-full h-full rounded-sm mt-2"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderDetail;
