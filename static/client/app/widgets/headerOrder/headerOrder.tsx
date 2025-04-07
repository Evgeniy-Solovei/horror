"use client";

import { LinkUI } from "@/app/shared/ui/linkUI/linkUI";
import style from "./headerOrder.module.css";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import burger from "@/app/assets/burger.svg";
import { useRef } from "react";
import ReviewsModal from "@/app/features/reviewsModal/reviewsModal";

interface INav {
  id: string;
  text: string;
  path?: string;
  onClick?: boolean;
  main?: boolean;
}

const NAV: INav[] = [
  {
    id: "1",
    text: "Главная",
    path: "/",
  },
  {
    id: "2",
    text: "Квесты",
    path: "#",
    main: true,
  },
  {
    id: "3",
    text: "Бронирование",
    path: "#reservation",
  },
  {
    id: "4",
    text: "Отзывы",
    onClick: true,
  },
  {
    id: "5",
    text: "Контакты",
    path: "#contacts",
  },
];

export const HeaderOrder = () => {
  const modalRef = useRef<HTMLDialogElement>(null!);

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__block}>
          <span className={style.logo}>QH</span>
          <nav className="nav">
            <ul className={style.nav__list}>
              {NAV.map((element: INav) => (
                <li key={element.id}>
                  {element.path ? (
                    <Link
                      className={classNames(
                        element.main && style.active,
                        style.nav__link
                      )}
                      href={element.path}
                    >
                      {element.text}
                    </Link>
                  ) : (
                    <button
                      className={classNames(
                        element.main && style.active,
                        style.nav__link
                      )}
                      onClick={() => modalRef.current?.showModal()}
                    >
                      {element.text}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <LinkUI href={"#reservation"}>Записаться</LinkUI>
        </div>
        <Link href={"/burger"} className={style.burger}>
          <Image src={burger} alt="burger" />
        </Link>
      </div>
      <ReviewsModal
        refDialog={modalRef}
        onClose={() => modalRef.current?.close()}
      />
    </header>
  );
};
