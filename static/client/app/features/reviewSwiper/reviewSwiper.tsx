import { CustomSwiper } from "@/app/shared/ui/customSwiper/customSwiper";
import { Review } from "@/app/shared/ui/reviewUI/reviewUI";
import style from "./reviewSwiper.module.css";
import avatar from "@/app/assets/review__avatar.png";
import { ReviewProps } from "@/app/widgets/reviews/reviews";

interface IReviews {
  reviews: ReviewProps[];
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
            reviewTime={"14 дней назад"}
            blockquote={element.text}
            stars={undefined}
          />
        ))}
    </CustomSwiper>
  );
};
