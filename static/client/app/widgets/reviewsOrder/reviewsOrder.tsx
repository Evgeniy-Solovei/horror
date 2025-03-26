"use client";

import { ReviewSwiper } from "@/app/features/reviewSwiper/reviewSwiper";
import { useMediaQuery } from "react-responsive";
import style from "./reviewOrder.module.css";

interface IReviewOrderProps {
  className?: string;
}

export const ReviewsOrder = ({ className }: IReviewOrderProps) => {
  const mediaQuery = useMediaQuery({
    query: "(max-width: 576px)",
  });

  return (
    <>
      {mediaQuery ? (
        <div className={className}>
          <div className={style.title__block}>
            <h2 className={style.title}>Отзывы</h2>
            <hr />
          </div>
          <ReviewSwiper />
        </div>
      ) : (
        <div className={style.review__block}>
          <h3 className={style.review__title}>Отзывы</h3>
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
