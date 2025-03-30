import classNames from "classnames";
import style from "./HeroSection.module.css";
import Image from "next/image";
import { ReviewsOrder } from "@/app/widgets/reviewsOrder/reviewsOrder";
import { PhotoSwiper } from "@/app/widgets/photoSwiper/photoSwiper";
import { IFetchPromise } from "../../HomePage/PopularSection/PopularSection";
import Link from "next/link";
import { $api } from "@/app/entities/api";
import { Rating } from "@/app/shared/ui/rating/rating";
import clock from "@/app/assets/clock__popular.svg";
import people from "@/app/assets/people__popular.svg";

interface IImage {
  image: string;
}

export interface IHeroProps {
  data: IFetchPromise;
  quests: IFetchPromise[];
}

const HeroSection = ({ data, quests }: IHeroProps) => {
  return (
    <section
      style={{
        backgroundImage: `url(${$api}${
          data?.photos_blur.find((item) => item.image)?.image
        })`,
      }}
      className={style.hero}
    >
      <div className="container">
        <div className={style.hero__block}>
          <div className={style.hero__up}>
            <div className={style.hero__upper__up}>
              <h3 className={style.quest__more__title}>Другие квесты</h3>
              <ul className={style.quest__list}>
                {quests.map((element) => (
                  <li key={element.id} className={style.quest__more}>
                    <Link
                      href={`/horrors/${element.id}`}
                      className={style.card__slide}
                    >
                      <Image
                        width={399}
                        height={168}
                        className={style.card__image}
                        src={`${$api}${
                          element.photos_back_card.find((item) => item.image)
                            ?.image
                        }`}
                        alt={element.name}
                      />
                      <div className={style.card__inner}>
                        <span>{element.name}</span>
                        <Rating label={element.rating} />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={classNames(style.quest, style.quest__main)}>
              <Image
                className={style.quest__image}
                width={2509}
                height={1097}
                src={`${$api}${
                  data?.photos_blur.find((element: IImage) => element.image)
                    ?.image
                }`}
                alt={data?.name || "photo"}
              />
              <div className={style.quest__upper}>
                <span className={style.quest__new}>Новинка</span>
                <span className={style.quest__grade}>
                  <Rating label={data?.rating} />
                </span>
              </div>
              <div className={style.quest__people}>
                <span className={style.people__info}>
                  <Image width={19} height={19} src={clock} alt="clock" />
                  {data?.travel_time} мин
                </span>
                <span className={style.people__info}>
                  <Image width={14} height={19} src={people} alt="clock" />
                  {data?.count_players} чел.
                </span>
                <span className={style.people__info}>{data?.genre}</span>
              </div>
              <div className={style.quest__lower}>
                <div className={style.quest__inner}>
                  <h1 className={style.quest__title}>{data?.name}</h1>
                  <span className={style.quest__station}>{data?.location}</span>
                  <p className={style.quest__info}>{data?.description}</p>
                </div>
                <div className={style.fear__block}>
                  <span className={style.fear}>
                    <span>{data?.fear}</span> Уровень страха
                  </span>
                  <span className={style.fear}>
                    <span>{data?.complexity}</span> сложность
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={style.hero__up}>
            <ReviewsOrder className={style.review} />
            <PhotoSwiper photos={data?.photos} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
