import { TitleUI } from "@/app/shared/ui/titleUI/titleUI";
import phone from "@/app/assets/phone__footer.svg";
import { Address } from "@/app/widgets/address/address";

const ContactsSection = () => {
  return (
    <section className="contacts section" id="contacts">
      <div className="container">
        <div className="contacts__block">
          <TitleUI
            title="Наши контакты"
            link="Позвонить"
            href="tel:+(375) 445-33-02-78"
            icon={phone}
          />
          <Address />
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
