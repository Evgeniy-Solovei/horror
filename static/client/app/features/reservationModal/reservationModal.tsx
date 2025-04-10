"use client";

import Dialog from "@/app/shared/ui/dialog/dialog";
import { FormField } from "@/app/shared/ui/form-field/form-field";
import { RefObject, useState } from "react";
import style from "./reservationModal.module.css";
import classNames from "classnames";
import { IModalProps } from "@/app/widgets/reservationTable/reservationTable";
import Image from "next/image";
import calendar from "@/app/assets/calendar__reservation.svg";
import clock from "@/app/assets/clock__popular.svg";
import money from "@/app/assets/money.svg";
import { Checkbox } from "@headlessui/react";
import checkbox from "@/app/assets/checkbox.svg";
import checkboxActive from "@/app/assets/checkbox__active.svg";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/api/queryClient";
import { fetchBookings } from "@/app/api/fetchBookings/fetchBookings";
import { useForm } from "react-hook-form";
import { SuccessModal } from "../successModal/successModal";

interface IReservationProps {
  refDialog: RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  rezerv: IModalProps;
}

export const ReservationModal = ({
  refDialog,
  onClose,
  rezerv,
}: IReservationProps) => {
  const [enabled, setEnabled] = useState(false);
  const [player, setPlayer] = useState(false);
  const [policy, setPolicy] = useState(false);

  const mutateReservation = useMutation(
    {
      mutationFn: (data: {
        horror: number;
        data: string;
        slot: number;
        first_name: string;
        last_name: string;
        phone: string;
        certificate: boolean;
        comment: string;
        price: string;
      }) =>
        fetchBookings(
          Number(rezerv.id),
          rezerv.date,
          data.slot,
          data.first_name,
          data.last_name,
          data.phone,
          data.certificate,
          data.comment,
          rezerv.price
        ),
      mutationKey: ["horrors"],
      onSuccess() {
        return <SuccessModal />;
      },
    },
    queryClient
  );

  const { register, handleSubmit } = useForm();

  if (!rezerv || !rezerv.date || !rezerv.time || !rezerv.price) {
    return null;
  }

  return (
    <Dialog
      classNameBTN={style.modal__close}
      className={style.modal}
      ref={refDialog}
      onClose={onClose}
    >
      <div className={style.modal__block}>
        <div className={style.modal__aside}>
          <h2 className={style.modal__title}>Бронирование</h2>
          <div className={style.modal__aside__info}>
            <span className={style.modal__perfomance}>Квест - перфоманс</span>
            <h3 className={style.quest__title}>{rezerv.name}</h3>
          </div>
          <ul className={style.quest__list} style={{ width: "100%" }}>
            <li className={style.quest__item}>
              <Image width={54} height={54} src={calendar} alt="calendar" />
              {rezerv.date}
            </li>
            <li className={style.quest__item}>
              <Image width={54} height={54} src={clock} alt="calendar" />
              {rezerv.time}
            </li>
            <li className={style.quest__item}>
              <Image width={54} height={54} src={money} alt="calendar" />
              {rezerv.price} Br
            </li>
          </ul>
          <span>*Цена для команды 1-4 человек</span>
        </div>
        <div className={style.modal__form}>
          <form
            onSubmit={handleSubmit(
              ({
                horror,
                data,
                slot,
                first_name,
                last_name,
                phone,
                certificate,
                comment,
                price,
              }) => {
                mutateReservation.mutate({
                  horror,
                  data,
                  slot,
                  first_name,
                  last_name,
                  phone,
                  certificate,
                  comment,
                  price,
                });
              }
            )}
            className={style.form}
          >
            <div className={style.form__upper}>
              <FormField title="Имя">
                <input
                  {...register("first_name")}
                  className={style.input}
                  placeholder="Иван"
                  type="text"
                />
              </FormField>
              <FormField title="Фамилия">
                <input
                  {...register("last_name")}
                  className={style.input}
                  placeholder="Иванов"
                  type="text"
                />
              </FormField>
            </div>
            <FormField title="Ваш телефон">
              <input
                {...register("phone")}
                placeholder="+(375) 333-33-33-33"
                className={style.input}
                type="tel"
              />
            </FormField>
            <label className={style.label} htmlFor="sertificate">
              <Checkbox
                {...register("certificate")}
                className={style.check}
                id="sertificate"
                checked={enabled}
                onChange={setEnabled}
              >
                <Image
                  src={enabled ? checkboxActive : checkbox}
                  alt="checkbox"
                />
              </Checkbox>
              <span
                onClick={() => setEnabled(!enabled)}
                id="sertificate"
                className={style.sertificate__text}
              >
                Использовать сертификат
              </span>
            </label>
            <FormField title="Комментарий">
              <textarea
                {...register("comment")}
                className={classNames(style.input, style.textarea)}
                placeholder="Введите ваш комментарий"
              ></textarea>
            </FormField>
            <div className={style.checkbox__block}>
              <label className={style.label} htmlFor="players">
                <Checkbox
                  className={style.check}
                  id="players"
                  checked={player}
                  onChange={setPlayer}
                >
                  <Image
                    src={player ? checkboxActive : checkbox}
                    alt="checkbox"
                  />
                </Checkbox>
                <span
                  onClick={() => setPlayer(!player)}
                  id="players"
                  className={style.sertificate__text}
                >
                  Все игроки старше 14 лет
                </span>
              </label>
              <label className={style.label} htmlFor="policy">
                <Checkbox
                  className={style.check}
                  id="policy"
                  checked={policy}
                  onChange={setPolicy}
                >
                  <Image
                    src={policy ? checkboxActive : checkbox}
                    alt="checkbox"
                  />
                </Checkbox>
                <span
                  onClick={() => setPolicy(!policy)}
                  id="policy"
                  className={style.sertificate__text}
                >
                  Я согласен с{" "}
                  <Link style={{ textDecoration: "underline" }} href={"policy"}>
                    Политикой обработки персональных данных
                  </Link>{" "}
                  и{" "}
                  <Link
                    style={{ textDecoration: "underline" }}
                    href={"agreement"}
                  >
                    пользовательским соглашением
                  </Link>
                </span>
              </label>
            </div>

            <div className={style.reservation__more__block}>
              <button className={style.reservation__button}>
                Забронировать
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};
