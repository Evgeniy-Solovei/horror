"use client";

import { CustomSwiper } from "@/app/shared/ui/customSwiper/customSwiper";
import style from "./heroSwiper.module.css";
import useCustomMediaQuery from "@/app/features/useCustomMediaQuery/useCustomMediaQuery";

interface ICard {
  id: string;
  title: string;
  text: string;
}

const CARD: ICard[] = [
  {
    id: "1",
    title: "Уровень страха",
    text: "По-настоящему страшные \n и уникальные квесты",
  },
  {
    id: "2",
    title: "Сервис",
    text: "Высокий уровень сервиса, направленный на получение положительных эмоций",
  },
  {
    id: "3",
    title: "Атмосфера",
    text: "Вы поверите в то, \n что вы находитесь в другой реальности",
  },
];

export const HeroSwiper = () => {
  const mediaQuery = useCustomMediaQuery("(max-width: 576px)");

  return mediaQuery ? (
    <CustomSwiper config={{ slidesPerView: 1, className: style.swiper }}>
      {CARD.map((element) => (
        <div key={element.id} className={style.card}>
          <strong className={style.card__title}>{element.title}</strong>
          <hr className={style.card__line} />
          <p className={style.card__descr}>{element.text}</p>
        </div>
      ))}
    </CustomSwiper>
  ) : (
    <ul className={style.hero__list}>
      {CARD.map((element) => (
        <li className={style.hero__item} key={element.id}>
          <div className={style.card}>
            <strong className={style.card__title}>{element.title}</strong>
            <hr className={style.card__line} />
            <p className={style.card__descr}>{element.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
