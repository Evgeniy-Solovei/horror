import Dialog from "@/app/shared/ui/dialog/dialog";
import { RefObject, useState } from "react";
import style from "./reservationModal.module.css";
import { FormField } from "@/app/shared/ui/form-field/form-field";
import { Checkbox } from "@headlessui/react";
import Image from "next/image";
import checkbox from "@/app/assets/checkbox.svg";
import checkboxActive from "@/app/assets/checkbox__active.svg";
import Link from "next/link";
import classNames from "classnames";
import { $api } from "@/app/entities/api";
import { useForm } from "react-hook-form";
import { queryClient } from "@/app/api/queryClient";
import { fetchBookings } from "@/app/api/fetchBookings/fetchBookings";
import { useMutation } from "@tanstack/react-query";

export interface IRezerv {
  id: number;
  name: string;
  date: string;
}

interface Image {
  image: string;
}

interface Photos {
  id: string;
  name: string;
  photos: Array<Image>;
  rating: number;
}

interface IReservationProps {
  refDialog: RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  rezerv: IRezerv | undefined;
  questList?: Array<Photos>;
}

export const ReservationModalLater = ({
  refDialog,
  onClose,
  rezerv,
  questList,
}: IReservationProps) => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [player, setPlayer] = useState<boolean>(false);
  const [policy, setPolicy] = useState<boolean>(false);

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
      }) =>
        fetchBookings(
          Number(rezerv?.id),
          rezerv?.date ?? "",
          data.slot,
          data.first_name,
          data.last_name,
          data.phone,
          data.certificate,
          data.comment
        ),
      mutationKey: ["horrors"],
    },
    queryClient
  );

  const { register, handleSubmit } = useForm();

  if (!rezerv || !questList) {
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
          <div>
            <span className={style.more__quests}>Другие квесты</span>
            <ul className={style.quest__list} style={{ width: "100%" }}>
              {questList.map((element: Photos) => (
                <li
                  style={{
                    backgroundImage: `url(${$api}${
                      element.photos.find((item) => {
                        return item.image;
                      })?.image
                    })`,
                  }}
                  key={element.id}
                  className={style.quest__item}
                >
                  <div className={style.card}>
                    <Link
                      className={style.card__link}
                      href={`horrors/${element.id}`}
                    >
                      <div className={style.card__info}>
                        <span>{element.name}</span>
                        <span>{element.rating}</span>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
            <div className={style.form__upper}>
              <FormField title="Дата">
                <input
                  {...register("date")}
                  className={style.input}
                  placeholder="1 марта"
                  type="text"
                />
              </FormField>
              <FormField title="Время">
                <input
                  {...register("time")}
                  className={style.input}
                  placeholder="18:00"
                  type="time"
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
                {...register("certificate", { value: enabled })}
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
