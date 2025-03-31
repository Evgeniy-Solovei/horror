"use client";

import { CustomSwiper } from "@/app/shared/ui/customSwiper/customSwiper";
import style from "./reservationSwiper.module.css";
import Image from "next/image";
import { IFetchPromise } from "@/app/pages/HomePage/PopularSection/PopularSection";
import { $api } from "@/app/entities/api";
import classNames from "classnames";
import { Rating } from "@/app/shared/ui/rating/rating";
import useCustomMediaQuery from "@/app/features/useCustomMediaQuery/useCustomMediaQuery";

interface IReservation {
  quests: Array<IFetchPromise>;
  onQuestSelect: (quest: number) => void;
  selectedValue: number;
}

const useAdaptiveSwiper = () => {
  const isSm = useCustomMediaQuery("(max-width: 576px)");
  const isMd = useCustomMediaQuery("(max-width: 768px)");
  const isLg = useCustomMediaQuery("(max-width: 992px)");
  const isXl = useCustomMediaQuery("(max-width: 1200px)");
  const isXXl = useCustomMediaQuery("(min-width: 1400px)");

  if (isSm) return 1;
  if (isMd) return 2;
  if (isLg) return 3;
  if (isXl) return 4;
  if (isXXl) return 5;
  return 4;
};

export const ReservationSwiper = ({
  quests,
  onQuestSelect,
  selectedValue,
}: IReservation) => {
  const slidesPerView = useAdaptiveSwiper();

  return (
    <CustomSwiper
      config={{
        slidesPerView: slidesPerView,
        spaceBetween: 11,
        className: style.swiper,
        content: "center",
      }}
    >
      {quests.map((element) => (
        <div key={element.id} className={style.slide}>
          <div
            onClick={() => onQuestSelect(element.id)}
            key={element.id}
            className={classNames(
              style.card__slide,
              selectedValue === element.id && style.active
            )}
          >
            <Image
              width={499}
              height={168}
              className={style.card__image}
              src={`${$api}${
                element.photos_back_card.find((element) => element.image)?.image
              }`}
              alt={element.name}
            />
            <div className={style.card__inner}>
              <span>{element.name}</span>
              <span>
                <Rating label={element.rating} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </CustomSwiper>
  );
};
