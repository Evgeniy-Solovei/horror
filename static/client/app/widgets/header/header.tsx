"use client";

import style from "./header.module.css";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import burger from "@/app/assets/burger.svg";
import { useRouter } from "next/navigation";

interface INav {
  id: string;
  text: string;
  path: string;
  main?: boolean;
}

const NAV: INav[] = [
  {
    id: "1",
    text: "Главная",
    path: "/",
    main: true,
  },
  {
    id: "2",
    text: "Квесты",
    path: "horrors/1",
  },
  {
    id: "3",
    text: "Бронирование",
    path: "#reservation",
  },
  {
    id: "4",
    text: "Отзывы",
    path: "#reviews",
  },
  {
    id: "5",
    text: "Контакты",
    path: "#contacts",
  },
];

export const Header = () => {
  const router = useRouter();

  return (
    <>
      <header className={style.header}>
        <div className="container">
          <div className={style.header__block}>
            <span className={style.logo}>QH</span>
            <nav className="nav">
              <ul className={style.nav__list}>
                {NAV.map((element: INav) => (
                  <li key={element.id}>
                    <Link
                      className={classNames(
                        element.main && style.active,
                        style.nav__link
                      )}
                      href={element.path}
                    >
                      {element.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className={style.header__button}
              onClick={() => router.push("horrors/1")}
            >
              Записаться
            </button>
          </div>
          <Link href={"/burger"} className={style.burger}>
            <Image src={burger} alt="burger" />
          </Link>
        </div>
      </header>
    </>
  );
};
