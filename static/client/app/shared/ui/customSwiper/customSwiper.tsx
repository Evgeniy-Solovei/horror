"use client";

import { Children, useRef } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import style from "./customSwiper.module.css";
import "swiper/css";
import { A11y, Navigation } from "swiper/modules";
import Image from "next/image";
import prev from "@/app/assets/swiper__next.svg";
import next from "@/app/assets/swiper__next.svg";
import { useMediaQuery } from "react-responsive";
import React from "react";

interface ICustomSwiper {
  children: React.ReactNode;
  config: SwiperProps;
  swiperSlide?: string;
}

export const CustomSwiper = ({
  children,
  config,
  swiperSlide,
}: ICustomSwiper) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const mediaQuery = useMediaQuery({
    query: "(max-width: 576px)",
  });

  return (
    <>
      <Swiper
        modules={[A11y, Navigation]}
        className={style.swiper}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        {...config}
      >
        {Children.map(children, (child, index) => (
          <SwiperSlide className={swiperSlide} key={index}>
            <>{child}</>
          </SwiperSlide>
        ))}
        {mediaQuery && (
          <>
            <button ref={prevRef} className={style.swiperButtonPrev}>
              <Image src={prev} alt="prev" />
            </button>
            <button ref={nextRef} className={style.swiperButtonNext}>
              <Image src={next} alt="prev" />
            </button>
          </>
        )}
      </Swiper>
    </>
  );
};
