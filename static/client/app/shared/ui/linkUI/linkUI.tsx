import classNames from "classnames";
import style from "./linkUI.module.css";
import { HTMLAttributes } from "react";
import Link from "next/link";

interface ILinkProps extends HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export const LinkUI: React.FC<ILinkProps> = ({ children, className, href }) => {
  return (
    <Link href={href} className={classNames(style.button, className)}>
      {children}
    </Link>
  );
};
export { Link };
