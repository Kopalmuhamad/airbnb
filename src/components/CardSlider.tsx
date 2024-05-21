"use client";
import { useState, useEffect } from "react";
import { Navigation, A11y, Scrollbar, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import cardImage from "@/assets/images/banner1.jpg";
import Image from "next/image";
import Link from "next/link";

import pinMaps from "@/assets/icons/pin_maps.svg";
import star from "@/assets/icons/star.svg";

const CardSlider = () => {
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="w-full flex justify-center mt-[80px]">
      {" "}
      {/* Added margin to push down below Navbar */}
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
        {[...Array(11)].map((_, index) => (
          <SwiperSlide
            key={index}
            className="shadow-xl text-black p-4 border border-black rounded-lg -z-10"
          >
            <Link
              href={""}
              className="w-full flex flex-col items-start text-start justify-center"
            >
              <Image
                src={cardImage}
                width={150}
                height={150}
                alt={`Sample Image ${index + 1}`}
                className="w-full rounded-t-md"
              />
              <h1 className="text-xl lg:text-2xl mt-2">Bogor {index + 1}</h1>
              <p className="text-base mt-1">
                <span>10 Guests</span>
                <span>4 Bed Rooms</span>
                <span>4 Bath Rooms</span>
              </p>
              <div className="w-full flex items-center justify-between">
                <span className="flex items-center justify-center gap-x-2">
                  <Image src={pinMaps} alt="" width={14} height={14} />
                  <p>Bogor</p>
                </span>
                <span className="flex items-center justify-center gap-x-2">
                  <Image src={star} alt="" width={14} height={14} />
                  <p>0 (0)</p>
                </span>
              </div>
              <div>
                <h3 className="text-accent-primary font-semibold">Rp. 1.000.000</h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
