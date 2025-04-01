import { TitleUI } from "@/app/shared/ui/titleUI/titleUI";
import style from "./ContactSection.module.css";
import phone from "@/app/assets/phone__footer.svg";
import Image, { StaticImageData } from "next/image";
import phoneLocation from "@/app/assets/phone__location.svg";
import mailLocation from "@/app/assets/mail__location.svg";
import pinLocation from "@/app/assets/pin__location.svg";
import locationActive from "@/app/assets/address__location--active.svg";
import map from "@/app/assets/contacts__map.png";

interface IContacts {
  id: string;
  text: string;
  link?: string;
  icon: StaticImageData;
}

interface IContactsProps {
  station: string;
}

const CONTACTS: IContacts[] = [
  {
    id: "1",
    text: "+(375) 445-33-02-78 ",
    link: "tel:+(375) 445-33-02-78 ",
    icon: phoneLocation,
  },
  {
    id: "2",
    text: "questhouseminsk@gmail.com",
    link: "mailto:questhouseminsk@gmail.com",
    icon: mailLocation,
  },
  {
    id: "3",
    text: "Город, улица, номер дома",
    icon: pinLocation,
  },
];

const ContactsSection = ({ station }: IContactsProps) => {
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
          <address className={style.address}>
            <div className={style.map}>
              <button
                className={
                  station === "м. Могилевская"
                    ? style.map__button__mogile
                    : style.map__button
                }
              >
                <Image src={locationActive} alt="location" />
              </button>
              <Image className={style.address__map} src={map} alt="map" />
            </div>
            <div className={style.address__info}>
              <h3 className={style.address__title}>Локация</h3>
              <ul className={style.contacts__list}>
                {CONTACTS.map((element) => (
                  <li className={style.contacts__item} key={element.id}>
                    <Image
                      className={style.contacts__svg}
                      src={element.icon}
                      alt="svg"
                    />
                    {element.link ? (
                      <a href={element.link}>{element.text}</a>
                    ) : (
                      <a
                        target="_blank"
                        href={
                          station === "м. Могилевская"
                            ? "https://yandex.ru/maps/-/CHR2BC~K"
                            : "https://yandex.ru/maps/-/CHFH7Bn6"
                        }
                      >
                        {station}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
