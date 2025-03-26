import Link from "next/link";
import style from "./footer.module.css";
import Image from "next/image";
import arrow from "@/app/assets/footer__arrow.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__block}>
          <div className={style.footer__left}>
            <p>
              ИП&nbsp;Жук Юрий Викторович
              <br />
              УНП 592001333
              <br />
              Гродненская область, г. Ивье, ул. Социалистическая&nbsp;55
            </p>
          </div>
          <Link className={style.footer__link} href={"#hero"}>
            <Image src={arrow} alt="arrow" />
            Наверх страницы
          </Link>
          <div className={style.footer__right}>
            <Link href="agreement">Пользовательское соглашение</Link>
            <Link href="policy">Политика обработки пресональных данных</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
