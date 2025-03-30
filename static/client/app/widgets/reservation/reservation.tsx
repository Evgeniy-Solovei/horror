"use client";

import style from "./reservation.module.css";
import { ReservationSwiper } from "../reservationSwiper/reservationSwiper";
import { ReservationTable } from "../reservationTable/reservationTable";
import { IFetchPromise } from "@/app/pages/HomePage/PopularSection/PopularSection";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSlots } from "@/app/api/fetchSlots/fetchSlots";
import { queryClient } from "@/app/api/queryClient";
import { TitleUI } from "@/app/shared/ui/titleUI/titleUI";
import calendar from "@/app/assets/calendar__reservation.svg";

interface IReservationProps {
  quests?: Array<IFetchPromise>;
  slots?: {
    date: string;
    slots: {
      time: string;
      price: string;
      is_booked: boolean;
    }[];
  }[];
  name?: string;
}

interface IPrice {
  id: string;
  text: string;
}

const PRICE: IPrice[] = [
  {
    id: "1",
    text: "110 Br",
  },
  {
    id: "2",
    text: "120 Br",
  },
  {
    id: "3",
    text: "140 Br",
  },
];

export const Reservation: React.FC<IReservationProps> = ({
  quests,
  slots,
  name,
}) => {
  const [questSelected, setValueSelected] = useState<number>(1);
  const [openLaterModal, setOpenLaterModal] = useState<boolean>(false);
  const id = questSelected;

  const { data: avalibleSlot } = useQuery(
    {
      queryKey: ["slots", id],
      queryFn: () => fetchSlots(id!),
    },
    queryClient
  );

  const selectedQuest = quests?.find((quest) => quest.id === id);

  return (
    <>
      <TitleUI
        title="Онлайн бронирование"
        link="Оставить заявку на более позднюю дату"
        icon={calendar}
        isReservation
        href="#"
        openFunction={() => setOpenLaterModal(true)}
      />
      {quests && (
        <ReservationSwiper
          selectedValue={questSelected}
          quests={quests}
          onQuestSelect={setValueSelected}
        />
      )}
      <div className={style.reservation__info}>
        <span className={style.reservation__price}>Стоимость игры:</span>
        <ul className={style.price__list}>
          {PRICE.map((element) => (
            <li className={style.price__item} key={element.id}>
              {element.text}
            </li>
          ))}
        </ul>
        <p className={style.reservation__descr}>
          (Цена игры для одного участника. Точная стоимость – в форме
          бронирования)
        </p>
      </div>
      {quests && questSelected ? (
        <ReservationTable
          id={selectedQuest?.id}
          name={selectedQuest?.name || ""}
          slots={avalibleSlot}
          isOpen={openLaterModal}
        />
      ) : (
        <ReservationTable
          id={selectedQuest?.id}
          name={name || ""}
          slots={slots!}
        />
      )}
    </>
  );
};
