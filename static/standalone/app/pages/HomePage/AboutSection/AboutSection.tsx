import { About } from "@/app/widgets/about/about";
import style from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={style.about}>
      <div className="container">
        <h2 className={style.title}>Как посетить нас</h2>
        <About />
        <p className={style.about__descr}>
          Не&nbsp;забудь заказать видео своей игры!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
