"use client";

import Dialog from "@/app/ui/dialogUI/dialogUI";
import { RefObject, useState } from "react";
import { IHorrorsPromise } from "@/app/api/horrors/fetchHorrors";
import { FormField } from "@/app/ui/formField/formField";
import { Checkbox } from "@/app/ui/checkbox/checkbox";
import { MoreQuests } from "@/app/widgets/moreQuests/moreQuests";

interface IModal {
  dialogRef: RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  questDetails: IHorrorsPromise;
}

export const ReservationModalLater = ({
  dialogRef,
  onClose,
  questDetails,
}: IModal) => {
  const [useCertificate, setUseCertificate] = useState(false);

  return (
    <Dialog ref={dialogRef} onClose={onClose}>
      <div className="flex flex-col sm:flex-row h-full text-white">
        <div className="bg-[#82D7DB69] h-full overflow-hidden max-w-[567px] w-full flex flex-col pt-[53px] px-[24px] md:pt-[60px]">
          <div className="flex flex-col items-center mb-auto">
            <span className="mb-[46px] text-[24px] sm:text-[28px] md:text-[36px] font-bold">
              Бронирование
            </span>
            <span>Квест - перфоманс</span>
            <h2 className="mb-[20px] font-bold text-[24px]">
              {questDetails.name}
            </h2>
          </div>
          <div className="hidden sm:block overflow-y-auto max-h-[500px] w-full max-w-[300px] mx-auto">
            <MoreQuests />
          </div>
        </div>
        <form className="flex flex-col w-full py-[50px] px-[30px] lg:py-[87px] lg:px-[117px]">
          <div className="grid grid-cols-1 gap-y-[30px] lg:gap-[52px] lg:grid-cols-2">
            <FormField label="Имя">
              <input
                className="pb-[10px] transition ease-in-out outline-none border-b-1 border-solid border-[#8D8D8D] focus:border-[#fff]"
                type="text"
                placeholder="Имя"
              />
            </FormField>
            <FormField label="Фамилия">
              <input
                className="pb-[10px] transition ease-in-out outline-none border-b-1 border-solid border-[#8D8D8D] focus:border-[#fff]"
                type="text"
                placeholder="Фамилия"
              />
            </FormField>
            <FormField label="Ваш телефон">
              <input
                className="pb-[10px] transition ease-in-out outline-none border-b-1 border-solid border-[#8D8D8D] focus:border-[#fff]"
                type="tel"
                placeholder="Ваш телефон"
              />
            </FormField>
            <FormField label="Количество участников">
              <div className="relative h-[21px] mb-[15px]">
                <span className="label left-[0] absolute">1</span>
                <span className="label left-[24%] absolute">2</span>
                <span className="label left-[48%] absolute">3</span>
                <span className="label left-[72%] absolute">4</span>
                <span className="label left-[97%] absolute">5</span>
              </div>
              <input
                className="custom-range"
                type="range"
                placeholder="Ваш телефон"
                min={1}
                max={5}
                step={1}
                defaultValue={1}
              />
            </FormField>
          </div>
          <Checkbox
            className="my-6"
            checked={useCertificate}
            onChange={(e) => setUseCertificate(e.target.checked)}
            label="Использовать сертификат"
          />
          <FormField className="mb-auto" label="Комментарий">
            <textarea
              className="pb-[10px] resize-none transition ease-in-out outline-none border-b-1 border-solid border-[#8D8D8D] focus:border-[#fff]"
              placeholder="Введите ваш комментарий"
            ></textarea>
          </FormField>
          <Checkbox className="mt-4 mb-2" label="Все игроки старше 14 лет" />
          <Checkbox label="Я согласен с Политикой обработки персональных данных и пользовательским соглашением" />
          <div className="min-h-[60px] sm:min-h-[98px] bg-[url(assets/webp/btn_bg.png)] bg-no-repeat bg-center bg-size-[100%_60%] sm:bg-size-[100%_70%] flex items-end justify-center">
            <button
              className="text-white max-w-[181px] py-[6px] px-[12px] text-[14px] sm:text-[18px] sm:py-[16px] sm:px-[24px] cursor-pointer bg-(--red) rounded-lg"
              type="submit"
            >
              Забронировать
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};
