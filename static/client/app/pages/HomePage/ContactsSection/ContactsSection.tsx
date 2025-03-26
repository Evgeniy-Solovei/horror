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
            link="Запросить звонок"
            href="#"
            icon={phone}
          />
          <Address />
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
