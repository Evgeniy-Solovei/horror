"use client";

import classNames from "classnames";
import style from "./reservationTable.module.css";
import { useRef, useState } from "react";
import Image from "next/image";
import arrow from "@/app/assets/reservation__arrow.svg";
import { ReservationModal } from "@/app/features/reservationModal/reservationModal";
import { ReservationModalLater } from "@/app/features/reservationModalLater/reservationModalLater";
import { useQuery } from "@tanstack/react-query";
import { fetchHorrors } from "@/app/api/fetchHorrors/fetchHorrors";
import { queryClient } from "@/app/api/queryClient";

interface ISlots {
  slots: {
    date: string;
    slots: {
      time: string;
      price: number;
      is_booked: boolean;
    }[];
  }[];
  name?: string;
}

export interface IModalProps {
  date: string;
  time: string;
  price: number;
  name: string;
}

export const ReservationTable = ({ slots, name }: ISlots) => {
  const [visibleSlots, setVisibleSlots] = useState<number>(7);
  const [selectedSlot, setSelectedSlot] = useState<IModalProps | undefined>(
    undefined
  );
  const [selectedSlotLater, setSelectedSlotLater] = useState<{
    name: string;
  }>();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogLaterRef = useRef<HTMLDialogElement>(null);

  const handleSlotClick = (
    date: string,
    time: string,
    price: number,
    name: string
  ) => {
    setSelectedSlot({ date, time, price, name });
    dialogRef.current?.showModal();
  };

  const handleSlotLaterClick = (name: string) => {
    setSelectedSlotLater({ name });
    dialogLaterRef.current?.showModal();
  };

  const showMoreSlots = () => {
    setVisibleSlots((prev) => prev + 7);
  };

  const { data: quest__list } = useQuery(
    {
      queryFn: () => fetchHorrors(),
      queryKey: ["quest"],
    },
    queryClient
  );

  return (
    <>
      <div className={style.table}>
        {slots &&
          slots.slice(0, visibleSlots).map((element) => {
            const [date, day, weekend] = element.date.split(" ");
            return (
              <div key={element.date} className={style.table__row}>
                <p className={style.table__number}>
                  {date} {day}
                  <span className={style.table__number_color}> {weekend}</span>
                </p>
                <ul className={style.table__info}>
                  {element.slots.map((elementInner, index) => (
                    <li
                      key={index}
                      style={{
                        backgroundColor:
                          elementInner.price === 120
                            ? "#0a8284"
                            : elementInner.price === 140
                            ? "#a40000"
                            : "#11b3d1",
                      }}
                      className={classNames(
                        style.table__time,
                        elementInner.is_booked && style.table__time__disable
                      )}
                      onClick={() =>
                        handleSlotClick(
                          element.date,
                          elementInner.time,
                          elementInner.price,
                          name!
                        )
                      }
                    >
                      {elementInner.time}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
      </div>
      {visibleSlots < 21 ? (
        <div className={style.reservation__more__block}>
          <button onClick={showMoreSlots} className={style.reservation__button}>
            Показать больше дней
            <Image src={arrow} alt="arrow" />
          </button>
        </div>
      ) : (
        <div className={style.reservation__more__block}>
          <button
            onClick={() => handleSlotLaterClick(name!)}
            className={style.reservation__button}
          >
            Оставить заявку на более позднюю дату
          </button>
        </div>
      )}
      <ReservationModal
        rezerv={selectedSlot}
        refDialog={dialogRef}
        onClose={() => dialogRef.current?.close()}
      />
      <ReservationModalLater
        questList={quest__list}
        refDialog={dialogLaterRef}
        onClose={() => dialogLaterRef.current?.close()}
        rezerv={selectedSlotLater}
      />
    </>
  );
};
