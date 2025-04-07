import dynamic from "next/dynamic";
import { RefObject } from "react";
import style from "./reviewsModal.module.css";
import { Review } from "@/app/shared/ui/reviewUI/reviewUI";
import avatar from "@/app/assets/review__avatar.png";

const Dialog = dynamic(() => import("../../shared/ui/dialog/dialog"));

interface IReviewProps {
  refDialog: RefObject<HTMLDialogElement>;
  onClose: () => void;
}

const ReviewsModal = ({ refDialog, onClose }: IReviewProps) => {
  return (
    <Dialog ref={refDialog} onClose={onClose}>
      <div className={style.modal__block}>
        <Review
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
      </div>
    </Dialog>
  );
};

export default ReviewsModal;
