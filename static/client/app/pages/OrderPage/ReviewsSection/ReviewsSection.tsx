"use client";

import { ReviewSwiper } from "@/app/features/reviewSwiper/reviewSwiper";
import style from "./ReviewsSection.module.css";
import useCustomMediaQuery from "@/app/features/useCustomMediaQuery/useCustomMediaQuery";
import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "@/app/api/fetchReviews/fetchReviews";
import { queryClient } from "@/app/api/queryClient";

const ReviewsSection = () => {
  const mediaQuery = useCustomMediaQuery("(max-width: 576px)");
  const { data: review } = useQuery(
    {
      queryKey: ["reviews"],
      queryFn: () => fetchReviews(),
    },
    queryClient
  );

  return (
    <>
      {mediaQuery && (
        <section className="reviews">
          <div className="container">
            <div className={style.title__block}>
              <h2 className={style.title}>Отзывы</h2>
              <hr />
            </div>
            <ReviewSwiper reviews={review!} />
          </div>
        </section>
      )}
    </>
  );
};

export default ReviewsSection;
