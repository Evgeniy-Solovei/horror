"use client";

import { IHorrorsPromise } from "@/app/api/horrors/fetchHorrors";
import { fetchSlots, ISlotsFetch } from "@/app/api/slots/fetchSlots";
import { ReservationModal } from "@/app/components/reservationModal/reservationModal";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import arrow from "@/app/assets/svg/reserv_svg.svg";

interface ReservationProps {
  quest: IHorrorsPromise;
}

export const ReservationTable = ({ quest }: ReservationProps) => {
  const [availableSlots, setAvailableSlots] = useState<ISlotsFetch[]>([]);
  const [showAll, setShowAll] = useState<number>(7);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedSlot, setSelectedSlot] = useState<{
    time: string;
    price: number;
  } | null>(null);

  useEffect(() => {
    const getSlots = async () => {
      const data = await fetchSlots(quest.id.toString());
      setAvailableSlots(data);
    };

    getSlots();
  }, [quest.id]);

  return (
    <>
      <div className="table w-full pt-[30px] sm:pt-0">
        <div className="grid grid-cols-1 text-white gap-y-[22px]">
          {availableSlots.slice(0, showAll).map((element) => (
            <div
              key={element.date}
              className="flex flex-col sm:flex-row gap-[31px]"
            >
              <span className="sm:max-w-[277px] w-full md:shrink-0 border-t-1 border-solid md:text-[31px] pl-[18px] md:min-h-[65px]">
                {element.date}
              </span>
              <div className="flex flex-wrap items-center gap-[7px]">
                {element.slots.map((item) => {
                  let bgColor = "";

                  switch (item.price) {
                    case 110:
                      bgColor = "bg-[#11B3D1]";
                      break;
                    case 120:
                      bgColor = "bg-[#0A8284]";
                      break;
                    case 140:
                      bgColor = "bg-(--red)";
                      break;
                    default:
                      bgColor = "bg-[#393939]";
                  }

                  return (
                    <button
                      disabled={item.is_booked}
                      key={item.time}
                      onClick={() => {
                        setSelectedSlot({ time: item.time, price: item.price });
                        dialogRef.current?.showModal();
                      }}
                      className={`${bgColor} p-2 text-white rounded cursor-pointer md:text-[31px]`}
                    >
                      {item.time}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        {showAll < 21 && (
          <div className="flex items-end bg-[url(assets/webp/btn_big.png)] bg-no-repeat bg-center bg-size-[90%_90%] min-h-[60px] sm:bg-size-[98%_90%] sm:min-h-[98px]">
            <button
              onClick={() => setShowAll(showAll + 7)}
              className="mx-auto px-[9px] text-[12px] py-[6px] cursor-pointer flex gap-[8px] justify-center items-center bg-(--red) sm:py-4 sm:px-6 sm:text-[18px] text-white rounded-lg"
            >
              <span>Показать больше дней</span>
              <Image
                className="sm:w-[10px] sm:h-[7px]"
                src={arrow}
                alt="стрелка"
              />
            </button>
          </div>
        )}
      </div>
      <ReservationModal
        dialogRef={dialogRef}
        onClose={() => dialogRef.current?.close()}
        questDetails={{
          ...quest,
          price: selectedSlot ? selectedSlot.price : 0,
          time: selectedSlot ? selectedSlot?.time : "110",
        }}
      />
    </>
  );
};
