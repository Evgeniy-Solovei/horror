import { CustomSwiper } from "@/app/shared/ui/customSwiper/customSwiper";
import { Review } from "@/app/shared/ui/reviewUI/reviewUI";
import style from "./reviewSwiper.module.css";
import avatar from "@/app/assets/review__avatar.png";
import { ReviewProps } from "@/app/widgets/reviews/reviews";

interface IReviews {
  reviews: ReviewProps[];
}

function getDate(date: string) {
  const dateReview = new Date(date);
  const dateDate = dateReview.getDate();
  const dateMonth = dateReview.getMonth() + 1;
  const dateYear = dateReview.getFullYear();
  return `${dateDate}.${dateMonth}.${dateYear}`;
}

export const ReviewSwiper = ({ reviews }: IReviews) => {
  return (
    <CustomSwiper config={{ slidesPerView: 1 }}>
      {reviews
        .filter((elemen, index: number) => {
          return index < 6;
        })
        .map((element) => (
          <Review
            key={element.id}
            className={style.review}
            id={element.id}
            name={element.name}
            icon={avatar}
            reviewTime={getDate(element.datetime)}
            blockquote={element.text}
          />
        ))}
    </CustomSwiper>
  );
};
