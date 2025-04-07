"use client";

import style from "./about.module.css";
import classNames from "classnames";
import { CustomSwiper } from "@/app/shared/ui/customSwiper/customSwiper";
import useCustomMediaQuery from "@/app/features/useCustomMediaQuery/useCustomMediaQuery";

interface ICard {
  id: string;
  title: string;
  text: string;
}

const CARD: ICard[] = [
  {
    id: "1",
    title: "Выберите квест",
    text: "Выбор квеста и времени посещения",
  },
  {
    id: "2",
    title: "Бронирование",
    text: "Забронируйте удобное время для посещения",
  },
  {
    id: "3",
    title: "Подтверждение",
    text: "Возможна оплата по месту, онлайн картой, сертификатом",
  },
  {
    id: "4",
    title: "Готово",
    text: "Приезжайте на локацию и играйте!",
  },
];

export const About = () => {
  const mediaQuery = useCustomMediaQuery("(max-width: 576px)");

  return (
    <>
      {mediaQuery ? (
        <CustomSwiper
          isAbout
          config={{
            slidesPerView: 1,
            className: style.swiper,
            style: { marginBottom: "30px" },
          }}
        >
          {CARD.map((element) => (
            <div
              key={element.title}
              className={classNames(
                style.about__item,
                style.about__item__mobile
              )}
            >
              <span className={style.card__number}>{element.id}</span>
              <div className={style.card}>
                <h3 className={style.card__title}>{element.title}</h3>
                <p className={style.card__descr}>{element.text}</p>
              </div>
            </div>
          ))}
        </CustomSwiper>
      ) : (
        <ul className={style.about__list}>
          {CARD.map((element) => (
            <li className={classNames(style.about__item)} key={element.id}>
              <span className={style.card__number}>{element.id}</span>
              <div className={style.card}>
                <h3 className={style.card__title}>{element.title}</h3>
                <p className={style.card__descr}>{element.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
