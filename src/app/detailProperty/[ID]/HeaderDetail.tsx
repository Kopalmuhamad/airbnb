"use client";
import React, { useState } from "react";

import { Navigation, A11y, Scrollbar, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import imageSample from "@/assets/images/banner1.jpg";
import Image from "next/image";
import CardSlider from "@/components/fragmanets/CardSlider";

interface IProps {
  image1: string | undefined;
  image2: string | undefined;
  image3: string | undefined;
}

const HeaderDetail = ({ image1, image2, image3 }: IProps) => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full md:hidden">
        <CardSlider>
          <SwiperSlide>
            <img src={image1} alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
        </CardSlider>
      </div>
      <div className="hidden md:grid grid-cols-3 gap-x-2">
        <img
          src={image1}
          alt=""
          className="w-full h-full object-cover rounded-lg border-2 border-black"
        />
        <img
          src={image2}
          alt=""
          className="w-full h-full object-cover rounded-lg border-2 border-black"
        />
        <img
          src={image3}
          alt=""
          className="w-full h-full object-cover rounded-lg border-2 border-black"
        />
      </div>
    </div>
  );
};

export default HeaderDetail;
