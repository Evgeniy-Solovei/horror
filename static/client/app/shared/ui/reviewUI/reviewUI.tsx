import Link from "next/link";
import style from "./reviewUI.module.css";
import Image, { StaticImageData } from "next/image";
import quoteSvg from "@/app/assets/review__quote.svg";

interface IReviewProps {
  id: number;
  name: string;
  icon: StaticImageData;
  reviewTime: string;
  blockquote: string;
  link: string;
  stars: React.ReactNode;
  className?: string;
}

export const Review = ({
  id,
  name,
  icon,
  blockquote,
  link,
  stars,
  reviewTime,
  className,
}: IReviewProps) => {
  return (
    <div className={`${style.review} ${className}`} key={id}>
      <div className={style.review__upper}>
        <Image src={icon} alt="avatar" />
        <div className={style.review__info}>
          <span className={style.review__name}>{name}</span>
          <span className={style.review__time}>{reviewTime}</span>
        </div>
      </div>
      <div className={style.review__middle}>
        <span className={style.review__perfomance}>Перфоманс</span>
        <h3 className={style.review__film}>Квест</h3>
      </div>
      <Image
        className={style.quote__svg}
        style={{ marginBottom: "8px" }}
        src={quoteSvg}
        alt="quoteSvg"
      />
      <blockquote className={style.review__blockquote}>{blockquote}</blockquote>
      <div className={style.review__lower}>
        <Link className={style.review__link} href={link}>
          Читать отзыв полностью
        </Link>
        <span>{stars}</span>
      </div>
    </div>
  );
};
