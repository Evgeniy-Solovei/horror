"use client";

import dynamic from "next/dynamic";
import { RefObject } from "react";
import style from "./reviewsModal.module.css";
import { Review } from "@/app/shared/ui/reviewUI/reviewUI";
import avatar from "@/app/assets/review__avatar.png";
import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "@/app/api/fetchReviews/fetchReviews";
import { queryClient } from "@/app/api/queryClient";

const Dialog = dynamic(() => import("../../shared/ui/dialog/dialog"));

interface IReviewProps {
  refDialog: RefObject<HTMLDialogElement>;
  onClose: () => void;
}

function getDate(date: string) {
  const dateReview = new Date(date);
  const dateDate = dateReview.getDate();
  const dateMonth = dateReview.getMonth() + 1;
  const dateYear = dateReview.getFullYear();
  return `${dateDate}.${dateMonth}.${dateYear}`;
}

const ReviewsModal = ({ refDialog, onClose }: IReviewProps) => {
  const { data: review } = useQuery(
    {
      queryKey: ["reviews"],
      queryFn: () => fetchReviews(),
    },
    queryClient
  );

  return (
    <Dialog ref={refDialog} onClose={onClose}>
      <div className={style.modal__block}>
        {review &&
          review.map((element) => (
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
    </Dialog>
  );
};

export default ReviewsModal;
