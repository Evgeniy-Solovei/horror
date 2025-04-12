"use client";

import { Review } from "@/app/shared/ui/reviewUI/reviewUI";
import style from "./reviews.module.css";
import avatar from "@/app/assets/review__avatar.png";
import { ReviewSwiper } from "@/app/features/reviewSwiper/reviewSwiper";
import useCustomMediaQuery from "@/app/features/useCustomMediaQuery/useCustomMediaQuery";
import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "@/app/api/fetchReviews/fetchReviews";
import { queryClient } from "@/app/api/queryClient";

export interface ReviewProps {
  id: number;
  datetime: string;
  name: string;
  text: string;
}

function getDate(date: string) {
  const dateReview = new Date(date);
  const dateDate = dateReview.getDate();
  const dateMonth = dateReview.getMonth() + 1;
  const dateYear = dateReview.getFullYear();
  return `${dateDate}.${dateMonth}.${dateYear}`;
}

export const Reviews = () => {
  const mediaQuery = useCustomMediaQuery("(max-width: 576px)");

  const {
    data: review,
    isError,
    isLoading,
  } = useQuery(
    {
      queryFn: () => fetchReviews(),
      retry: 1,
      queryKey: ["review"],
    },
    queryClient
  );

  if (isError) {
    return "Отызвы не найдены";
  }

  if (isLoading) {
    return "Загрузка отзывов";
  }

  return (
    <>
      {mediaQuery ? (
        <ReviewSwiper reviews={!review ? [] : review} />
      ) : (
        <div className={style.reviews__block}>
          {review &&
            review
              .filter((elemen, index: number) => {
                return index < 8;
              })
              .map((element) => (
                <Review
                  key={element.id}
                  id={element.id}
                  name={element.name}
                  icon={avatar}
                  reviewTime={getDate(element.datetime)}
                  blockquote={element.text}
                />
              ))}
        </div>
      )}
    </>
  );
};
