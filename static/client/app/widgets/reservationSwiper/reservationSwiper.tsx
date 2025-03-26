"use client";

import { CustomSwiper } from "@/app/shared/ui/customSwiper/customSwiper";
import style from "./reservationSwiper.module.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { IFetchPromise } from "@/app/pages/HomePage/PopularSection/PopularSection";
import { $api } from "@/app/entities/api";
import classNames from "classnames";
import { Rating } from "@/app/shared/ui/rating/rating";

interface IReservation {
  quests: Array<IFetchPromise>;
  onQuestSelect: (quest: number) => void;
  selectedValue: number;
}

export const ReservationSwiper = ({
  quests,
  onQuestSelect,
  selectedValue,
}: IReservation) => {
  const mediaQuery = useMediaQuery({
    query: "(max-width: 576px)",
  });

  return (
    <CustomSwiper
      config={{
        slidesPerView: mediaQuery ? 1 : 5,
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
