"use client";

import { Children } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import style from "./customSwiper.module.css";
import "swiper/css";
import { A11y, Navigation } from "swiper/modules";
import Image from "next/image";
import prev from "@/app/assets/swiper__next.svg";
import next from "@/app/assets/swiper__next.svg";
import prevWhite from "@/app/assets/swiper__nextWhite.svg";
import nextWhite from "@/app/assets/swiper__nextWhite.svg";
import nextPC from "@/app/assets/swiper__arrow.svg";
import React from "react";
import classNames from "classnames";
import useCSSMediaQuery from "css-mediaquery";

interface ICustomSwiper {
  children: React.ReactNode;
  config: SwiperProps;
  swiperSlide?: string;
  isAbout?: boolean;
  isQuest?: boolean;
}

export const CustomSwiper = ({
  children,
  config,
  swiperSlide,
  isAbout,
  isQuest,
}: ICustomSwiper) => {
  const mediaQuery = useCSSMediaQuery.match("screen and (max-width: 576px)", {
    width: "576px",
  });
  const mediaPhoneQuery = useCSSMediaQuery.match("(max-width: 576px)", {
    width: "576px",
  });

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        modules={[A11y, Navigation]}
        className={style.swiper}
        navigation={{ prevEl: ".prev", nextEl: ".next" }}
        {...config}
      >
        {Children.map(children, (child, index) => (
          <SwiperSlide className={swiperSlide} key={index}>
            <>{child}</>
          </SwiperSlide>
        ))}
        {mediaPhoneQuery && (
          <>
            <button className={classNames(style.swiperButtonPrev, "prev")}>
              <Image
                width={20}
                height={20}
                src={isAbout ? prevWhite : prev}
                alt="prev"
              />
            </button>
            <button
              onClick={() => {
                console.log("работает");
              }}
              className={classNames(style.swiperButtonNext, "next")}
            >
              <Image
                width={20}
                height={20}
                src={isAbout ? nextWhite : next}
                alt="next"
              />
            </button>
          </>
        )}
      </Swiper>
      {!mediaQuery && isQuest && (
        <>
          <button className={classNames(style.swiperButtonPCPrev, "prev")}>
            <Image width={8.5} height={14} src={nextPC} alt="prev" />
          </button>
          <button
            onClick={() => {
              console.log("работает");
            }}
            className={classNames(style.swiperButtonPCNext, "next")}
          >
            <Image width={8.5} height={14} src={nextPC} alt="next" />
          </button>
        </>
      )}
    </div>
  );
};
