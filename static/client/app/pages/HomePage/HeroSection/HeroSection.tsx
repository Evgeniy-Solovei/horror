import style from "./HeroSection.module.css";
import Image from "next/image";
import hero__image from "@/app/assets/heroSectionTitle.png";
import { HeroSwiper } from "@/app/widgets/heroSwiper/heroSwiper";

const HeroSection = () => {
  return (
    <section id="hero" className={style.hero}>
      <video
        className={style.hero__bg}
        preload={"auto"}
        muted
        loop
        playsInline
        autoPlay={true}
        controls={false}
      >
        <source
          src={"/hero__576.mp4"}
          media="(max-width: 576px)"
          type="video/mp4"
        />
        <source
          src={"/hero__1200.mp4"}
          media="(max-width: 1200px)"
          type="video/mp4"
        />
        <source
          src={"/hero__video.mp4"}
          media="(min-width: 1200px)"
          type="video/mp4"
        />
      </video>
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
