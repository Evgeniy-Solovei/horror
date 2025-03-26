import classNames from "classnames";
import { LinkUI } from "../linkUI/linkUI";
import style from "./titleUI.module.css";
import Image, { StaticImageData } from "next/image";

interface ITitleProps {
  title: string;
  link: string;
  href: string;
  icon?: StaticImageData;
  onClick?: () => void;
}

export const TitleUI: React.FC<ITitleProps> = ({
  title,
  link,
  href,
  icon,
  onClick,
}) => {
  return (
    <div className={style.title__block}>
      <h2 className={classNames(style.shrink, style.title)}>{title}</h2>
      <hr className={style.hr} />
      <LinkUI
        onClick={onClick}
        className={classNames(style.link, style.shrink)}
        href={href}
      >
        {icon && <Image src={icon} alt="title" />}
        {link}
      </LinkUI>
    </div>
  );
};
