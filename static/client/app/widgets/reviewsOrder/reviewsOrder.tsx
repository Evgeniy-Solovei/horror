"use client";

import style from "./reviewOrder.module.css";
import useCustomMediaQuery from "@/app/features/useCustomMediaQuery/useCustomMediaQuery";

export const ReviewsOrder = () => {
  const mediaQuery = useCustomMediaQuery("(max-width: 576px)");

  return (
    <>
      {!mediaQuery && (
        <div className={style.review__block}>
          <h2 className={style.review__title}>Отзывы</h2>
          <ul className={style.review__list}>
            <li className={style.quest__more__down}>
              <div className={style.quest__moreInner}>
                <blockquote className={style.quest__moreText}>
                  были почти на всех хоррор квестах. Это восторг, отыгрыш
                  актеров это уровень. Декорации , переходы, освещение,
                  взаимодействие с актерами это высший класс, планка задрана
                  огого) Ходили вчетвером. Оргам огромное спасибо!
                </blockquote>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
