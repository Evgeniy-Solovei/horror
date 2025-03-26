import rating__bg from "@/app/assets/rating__bg.svg";
import Image from "next/image";
import rating__star from "@/app/assets/rating__star.svg";
import style from "./rating.module.css";

interface IRatingProps {
  label: string | number;
}

export const Rating = ({ label }: IRatingProps) => {
  return (
    <div className={style.rating__block}>
      <Image className={style.rating__bg} src={rating__bg} alt={"rating"} />
      <span className={style.label}>
        <Image width={20} height={21} src={rating__star} alt="star" />
        <span className={style.label__text}>{label}</span>
      </span>
    </div>
  );
};
