import { TitleUI } from "@/app/shared/ui/titleUI/titleUI";
import { Reservation } from "@/app/widgets/reservation/reservation";
import calendar from "@/app/assets/calendar__reservation.svg";
import { $api } from "@/app/entities/api";

const ReservationSection = async () => {
  const response = await fetch(`${$api}/api/horrors/`);

  if (!response.ok) {
    throw new Error("Ошибка запроса да");
  }

  const data = await response.json();

  return (
    <section id="reservation" className="reservation section">
      <div className="container">
        <div className="reservation__block">
          <TitleUI
            title="Онлайн бронирование"
            link="Оставить заявку на более позднюю дату"
            href="#"
            icon={calendar}
          />
          <Reservation quests={data} />
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
