import { TitleUI } from "@/app/shared/ui/titleUI/titleUI";
import { Reservation } from "@/app/widgets/reservation/reservation";
import calendar from "@/app/assets/calendar__reservation.svg";
import { $api } from "@/app/entities/api";

export async function getAllHorrors() {
  try {
    const data = await fetch(`${$api}/api/horrors/`);
    const json = await data.json();

    return json;
  } catch (err) {
    console.error("Ошибка запроса: ", err);
    return null;
  }
}

const ReservationSection = async () => {
  const data = await getAllHorrors();

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
