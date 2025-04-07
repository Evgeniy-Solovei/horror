"use client";

import Image, { StaticImageData } from "next/image";
import phoneLocation from "@/app/assets/phone__location.svg";
import mailLocation from "@/app/assets/mail__location.svg";
import pinLocation from "@/app/assets/pin__location.svg";
import map from "@/app/assets/contacts__map.png";
import style from "./address.module.css";
import { useState } from "react";
import location from "@/app/assets/address__location.svg";
import locationActive from "@/app/assets/address__location--active.svg";

interface IContacts {
  id: string;
  text?: string;
  link?: string;
  icon: StaticImageData;
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
    icon: pinLocation,
  },
];

export const Address = () => {
  const [selectedLocation, setSelectedLocation] = useState<boolean>(false);

  return (
    <address className={style.address}>
      <div className={style.map}>
        <button
          className={style.map__button}
          onClick={() => setSelectedLocation(true)}
        >
          <Image
            src={selectedLocation ? locationActive : location}
            alt="location"
          />
        </button>
        <button
          className={style.map__button}
          onClick={() => setSelectedLocation(false)}
        >
          <Image
            src={!selectedLocation ? locationActive : location}
            alt="location"
          />
        </button>
        <Image className={style.address__map} src={map} alt="map" />
      </div>
      <div className={style.address__info}>
        <h3 className={style.address__title}>
          Локация {selectedLocation ? "1" : "2"}
        </h3>
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
                    selectedLocation
                      ? "https://yandex.ru/maps/-/CHFH7Bn6"
                      : "https://yandex.ru/maps/-/CHFLA43d"
                  }
                >
                  {selectedLocation ? "ул. К. Маркса, 8" : "ул. Ангарская, 7"}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </address>
  );
};
