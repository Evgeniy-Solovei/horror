import style from "./HeroSection.module.css";
import Image from "next/image";
import hero__image from "@/app/assets/heroSectionTitle.png";
import { HeroSwiper } from "@/app/widgets/heroSwiper/heroSwiper";

const HeroSection = () => {
  return (
    <section id="hero" className={style.hero}>
      <div className="container">
        <div className={style.hero__block}>
          <div className={style.hero__info}>
            <h1 className={style.title}>
              Quest <br /> House
            </h1>
            <Image
              className={style.hero__image}
              width={174}
              height={66}
              src={hero__image}
              alt="14+"
            />
          </div>
          <HeroSwiper />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
