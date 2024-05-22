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
import CardSlider from "@/components/fragmanets/CardSlider";

const HeaderDetail = () => {
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="w-full h-full flex items-start justify-center flex-col lg:col-span-2">
      <CardSlider>
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
      </CardSlider>
    </div>
  );
};

export default HeaderDetail;
