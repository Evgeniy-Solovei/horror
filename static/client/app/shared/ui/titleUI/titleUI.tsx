import classNames from "classnames";
import { LinkUI } from "../linkUI/linkUI";
import style from "./titleUI.module.css";
import Image, { StaticImageData } from "next/image";

interface ITitleProps {
  title: string;
  link: string;
  href: string;
  icon?: StaticImageData;
  isReservation?: boolean;
  openFunction?: () => void;
}

export const TitleUI: React.FC<ITitleProps> = ({
  title,
  link,
  href,
  icon,
  isReservation,
  openFunction,
}) => {
  return (
    <div className={style.title__block}>
      <h2 className={classNames(style.shrink, style.title)}>{title}</h2>
      <hr className={style.hr} />
      {isReservation ? (
        <button
          className={classNames(
            style.link,
            style.shrink,
            isReservation && style.none
          )}
          onClick={openFunction}
        >
          {icon && <Image src={icon} alt="title" />}
          {link}
        </button>
      ) : (
        <LinkUI
          className={classNames(
            style.link,
            style.shrink,
            isReservation && style.none
          )}
          href={href}
        >
          {icon && <Image src={icon} alt="title" />}
          {link}
        </LinkUI>
      )}
    </div>
  );
};
