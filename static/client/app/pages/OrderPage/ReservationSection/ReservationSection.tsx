import { TitleUI } from "@/app/shared/ui/titleUI/titleUI";
import { Reservation } from "@/app/widgets/reservation/reservation";
import calendar from "@/app/assets/calendar__reservation.svg";

export interface IReservationProps {
  slots: {
    date: string;
    slots: {
      time: string;
      price: number;
      is_booked: boolean;
    }[];
  }[];
  name: string;
}

const ReservationSection = ({ slots, name }: IReservationProps) => {
  return (
    <section className="reservation section" id="reservation">
      <div className="container">
        <div className="reservation__block">
          <TitleUI
            title="Онлайн бронирование"
            link="Оставить заявку на более позднюю дату"
            icon={calendar}
            href="#"
          />
          <Reservation name={name} slots={slots} />
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
