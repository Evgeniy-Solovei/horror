import { CustomSwiper } from "@/app/shared/ui/customSwiper/customSwiper";
import { Review } from "@/app/shared/ui/reviewUI/reviewUI";
import style from "./reviewSwiper.module.css";
import avatar from "@/app/assets/review__avatar.png";

export const ReviewSwiper = () => {
  return (
    <CustomSwiper config={{ slidesPerView: 1 }}>
      <Review
        className={style.review}
        id={1}
        name={"Мотя Карандаш"}
        icon={avatar}
        reviewTime={"14 дней назад"}
        blockquote={
          "были почти на всех хоррор квестах. Это восторг, отыгрыш актеров это уровень. Декорации, переходы, освещение, взаимодействие с актерами это высший класс, планка задрана огого) Ходили вчетвером. Оргам огромное спасибо!"
        }
        link={""}
        stars={undefined}
      />
    </CustomSwiper>
  );
};
