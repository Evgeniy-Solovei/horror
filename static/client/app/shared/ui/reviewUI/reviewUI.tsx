"use client";

import style from "./reviewUI.module.css";
import Image, { StaticImageData } from "next/image";
import quoteSvg from "@/app/assets/review__quote.svg";
import { useState } from "react";

interface IReviewProps {
  id: number;
  name: string;
  icon: StaticImageData;
  reviewTime: string;
  blockquote: string;
  stars: React.ReactNode;
  className?: string;
}

export const Review = ({
  id,
  name,
  icon,
  blockquote,
  stars,
  reviewTime,
  className,
}: IReviewProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

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
      <div className={style.review__info__block}>
        <blockquote className={style.review__blockquote}>
          {isExpanded || blockquote.length <= 307
            ? blockquote
            : `${blockquote.slice(0, 307)}...`}
        </blockquote>
        <div className={style.review__lower}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={style.review__link}
          >
            Читать отзыв полностью
          </button>
          <span>{stars}</span>
        </div>
      </div>
    </div>
  );
};
