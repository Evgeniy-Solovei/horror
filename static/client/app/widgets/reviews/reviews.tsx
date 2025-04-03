"use client";

import { Review } from "@/app/shared/ui/reviewUI/reviewUI";
import style from "./reviews.module.css";
import avatar from "@/app/assets/review__avatar.png";
import { ReviewSwiper } from "@/app/features/reviewSwiper/reviewSwiper";
import useCustomMediaQuery from "@/app/features/useCustomMediaQuery/useCustomMediaQuery";
import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "@/app/api/fetchReviews/fetchReviews";
import { queryClient } from "@/app/api/queryClient";

interface Review {
  id: number;
  datetime: string;
  name: string;
  text: string;
  rating: string;
}

export const Reviews = () => {
  const mediaQuery = useCustomMediaQuery("(max-width: 576px)");

  const {
    data: review,
    isLoading,
    isError,
  } = useQuery(
    {
      queryFn: () => fetchReviews(),
      retry: 1,
      queryKey: ["review"],
    },
    queryClient
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading reviews</div>;
  }

  return (
    <>
      {mediaQuery ? (
        <ReviewSwiper />
      ) : (
        <div className={style.reviews__block}>
          {review.map((element: Review) => (
            <Review
              key={element.id}
              id={element.id}
              name={element.name}
              icon={avatar}
              reviewTime={"14 дней назад"}
              blockquote={element.text}
              link={""}
              stars={undefined}
            />
          ))}
        </div>
      )}
    </>
  );
};
