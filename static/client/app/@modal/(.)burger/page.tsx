"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import style from "./burger-modal.module.css";
import Image from "next/image";
import close from "@/app/assets/close__modal.svg";

interface INav {
  id: string;
  path: string;
  text: string;
}

const NAV: INav[] = [
  {
    id: "1",
    path: "/",
    text: "Главная",
  },
  {
    id: "2",
    path: "/horrors/1",
    text: "Квесты",
  },
  {
    id: "3",
    path: "#reservation",
    text: "Бронирование",
  },
  {
    id: "4",
    path: "#reviews",
    text: "Отзывы",
  },
  {
    id: "5",
    path: "#contacts",
    text: "Контакты",
  },
];

const BurgerModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current?.showModal();
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleCloseModal = (path: string) => {
    dialogRef.current?.close();

    setTimeout(() => {
      router.push(path);
    }, 150);
  };

  return (
    <dialog
      className={style.dialog}
      ref={dialogRef}
      onClose={() => router.back()}
    >
      <div className={style.dialog__header}>
        <h1 className={style.dialog__title}>Quest House</h1>
        <button
          className={style.dialog__close}
          onClick={() => dialogRef.current?.close()}
        >
          <Image src={close} alt="close modal" />
        </button>
      </div>
      <ul className={style.burger__list}>
        {NAV.map((element) => (
          <li key={element.id}>
            <button
              className={style.burger__link}
              onClick={() => handleCloseModal(element.path)}
            >
              {element.text}
            </button>
          </li>
        ))}
      </ul>

      <div className={style.dialog__info}>
        <span>Телефон:</span>
        <a className={style.dialog__phone} href="tel:+(375) 445 33 02 78 ">
          +(375) 445 33 02 78
        </a>
      </div>
    </dialog>
  );
};

export default BurgerModal;
