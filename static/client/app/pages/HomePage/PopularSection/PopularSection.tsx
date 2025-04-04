import { TitleUI } from "@/app/shared/ui/titleUI/titleUI";
import style from "./PopularSection.module.css";
import Image, { StaticImageData } from "next/image";
import clock from "@/app/assets/clock__popular.svg";
import people from "@/app/assets/people__popular.svg";
import classNames from "classnames";
import newIcon from "@/app/assets/poplar__new.png";
import Link from "next/link";
import { $api } from "@/app/entities/api";
import { Rating } from "@/app/shared/ui/rating/rating";
import questionSvg from "@/app/assets/question__svg.svg";

interface IPopularProps {
  id: string;
  icon?: StaticImageData;
  text: string;
}

const POPULAR: IPopularProps[] = [
  {
    id: "1",
    icon: clock,
    text: "60 мин",
  },
  {
    id: "2",
    icon: people,
    text: "2-5",
  },
  {
    id: "3",
    text: "Смесь жанров",
  },
];

interface IFetchImage {
  image: string;
}

export interface IFetchPromise {
  complexity: number;
  count_players: string;
  description: string;
  fear: number;
  genre: string;
  id: number;
  is_active: boolean;
  location: string;
  name: string;
  novelty: boolean;
  photos: Array<IFetchImage>;
  rating: number;
  registration_date: string;
  rules: string;
  travel_time: number;
  photos_back_card: {
    image: string;
  }[];
  photos_blur: {
    image: string;
  }[];
}

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

const PopularSection = async () => {
  const quest = await getAllHorrors();

  return (
    <section id="popular" className="popular section">
      <div className="container">
        <div className="popular__block">
          <TitleUI
            title="Популярные квесты"
            link="Смотреть все"
            href="horrors/1"
          />
          <ul className={style.popular__list}>
            {quest?.map((element: IFetchPromise) => (
              <li
                key={element.id}
                style={{
                  backgroundImage: `url(${$api}${
                    element.photos_back_card.find((item) => item.image)?.image
                  })`,
                }}
                className={style.popular__item}
              >
                <Link href={`horrors/${element.id}`} className={style.card}>
                  <div className={style.card__upper}>
                    {element.novelty && (
                      <Image width={56} height={17} src={newIcon} alt="Новый" />
                    )}
                    <Rating label={element.rating} />
                  </div>
                  <div className={style.card__lower}>
                    <h3 className={style.card__title}>{element.name}</h3>
                    <span className={style.card__station}>
                      {element.location}
                    </span>
                    <div className={style.card__lower_info}>
                      <ul className={style.info__list}>
                        {POPULAR.map((element) => (
                          <li className={style.info__item} key={element.id}>
                            {element.icon && (
                              <Image src={element.icon} alt={"icon"} />
                            )}
                            <span>{element.text}</span>
                          </li>
                        ))}
                      </ul>
                      <p className={classNames(style.quest__info, style.mr)}>
                        <span className={style.blue}>{element.fear} </span>
                        Уровень страха
                      </p>
                      <p className={style.quest__info}>
                        <span className={style.blue}>
                          {element.complexity}{" "}
                        </span>
                        Сложность
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
            <li className={style.popular__item}>
              <div className={classNames(style.card, style.anons)}>
                <Image
                  width={96}
                  height={96}
                  src={questionSvg}
                  alt="question"
                />
                <span>Скоро ожидается анонс</span>
              </div>
            </li>
            <li className={style.popular__item}>
              <div className={classNames(style.card, style.anons)}>
                <Image
                  width={96}
                  height={96}
                  src={questionSvg}
                  alt="question"
                />
                <span>Скоро ожидается анонс</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
