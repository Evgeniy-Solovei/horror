import Image from "next/image";
import hands from "@/app/assets/hands__bg.png";
import style from "./HandsSection.module.css";

const HandsSection = () => {
  return (
    <section className={style.hands}>
      <Image src={hands} alt="hands" />
    </section>
  );
};

export default HandsSection;
