"use client";

import { CustomSwiper } from "@/app/shared/ui/customSwiper/customSwiper";
import Image from "next/image";
import style from "./photoSwiper.module.css";
import { $api } from "@/app/entities/api";
import useCustomMediaQuery from "@/app/features/useCustomMediaQuery/useCustomMediaQuery";

interface IImage {
  image: string;
}

interface IPhotoProps {
  photos: Array<IImage>;
}

export const PhotoSwiper = ({ photos }: IPhotoProps) => {
  const mediaQuery = useCustomMediaQuery("(max-width: 576px)");

  return (
    <div className={style.swiper__block}>
      <h2 className={style.title}>Фотографии</h2>
      <CustomSwiper
        isQuest
        config={{
          spaceBetween: 37,
          slidesPerView: mediaQuery ? 1 : 4,
          className: style.swiper,
        }}
      >
        {photos.map((element, index) => (
          <Image
            key={index}
            className={style.image}
            width={474}
            height={321}
            src={`${$api}${element.image}`}
            alt="photo"
          />
        ))}
      </CustomSwiper>
    </div>
  );
};
