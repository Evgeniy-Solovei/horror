"use client";

import { Review } from "@/app/shared/ui/reviewUI/reviewUI";
import style from "./reviews.module.css";
import { useMediaQuery } from "react-responsive";
import avatar from "@/app/assets/review__avatar.png";
import { ReviewSwiper } from "@/app/features/reviewSwiper/reviewSwiper";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/app/api/queryClient";

interface Review {
  id: number;
  datetime: string;
  name: string;
  text: string;
  rating: string;
}

export const Reviews = () => {
  const mediaQuery = useMediaQuery({
    query: "(max-width: 576px)",
  });

  const {
    data: review,
    isLoading,
    isError,
  } = useQuery(
    {
      queryFn: async () => {
        const response = await fetch(
          "https://extrareality.by/api2/reviews?quest_id=3544"
        );
        return response.json();
      },
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
