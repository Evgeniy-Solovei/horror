"use client";

import { CustomSwiper } from "@/app/shared/ui/customSwiper/customSwiper";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import style from "./photoSwiper.module.css";
import { useRef } from "react";
import arrow from "@/app/assets/swiper__arrow.svg";
import { $api } from "@/app/entities/api";

interface IImage {
  image: string;
}

interface IPhotoProps {
  photos: Array<IImage>;
}

export const PhotoSwiper = ({ photos }: IPhotoProps) => {
  const mediaQuery = useMediaQuery({
    query: "(max-width: 576px)",
  });
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={style.swiper__block}>
      <h2 className={style.title}>Фотографии</h2>
      <CustomSwiper
        config={{
          spaceBetween: 37,
          slidesPerView: mediaQuery ? 1 : 4,
          className: style.swiper,
          navigation: { prevEl: prevRef.current, nextEl: nextRef.current },
        }}
      >
        {photos.map((element, index) => (
          <Image
            key={index}
            className={style.image}
            width={274}
            height={321}
            src={`${$api}${element.image}`}
            alt="photo"
          />
        ))}
        {!mediaQuery && (
          <>
            <button ref={prevRef} className={style.swiperButtonPrev}>
              <Image src={arrow} alt="prev" />
            </button>
            <button ref={nextRef} className={style.swiperButtonNext}>
              <Image src={arrow} alt="prev" />
            </button>
          </>
        )}
      </CustomSwiper>
    </div>
  );
};
