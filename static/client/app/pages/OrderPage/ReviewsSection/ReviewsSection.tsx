"use client";

import { ReviewSwiper } from "@/app/features/reviewSwiper/reviewSwiper";
import style from "./ReviewsSection.module.css";
import useCustomMediaQuery from "@/app/features/useCustomMediaQuery/useCustomMediaQuery";

const ReviewsSection = () => {
  const mediaQuery = useCustomMediaQuery("(max-width: 576px)");

  return (
    <>
      {mediaQuery && (
        <section className="reviews">
          <div className="container">
            <div className={style.title__block}>
              <h2 className={style.title}>Отзывы</h2>
              <hr />
            </div>
            <ReviewSwiper />
          </div>
        </section>
      )}
    </>
  );
};

export default ReviewsSection;
