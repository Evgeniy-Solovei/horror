import { Reservation } from "@/app/widgets/reservation/reservation";

export interface IReservationProps {
  slots: {
    date: string;
    slots: {
      time: string;
      price: string;
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
          <Reservation name={name} slots={slots} />
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
