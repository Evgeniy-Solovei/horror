import style from "./rules.module.css";

interface IRulesProps {
  title: string;
  children: React.ReactNode;
}

export const Rules: React.FC<IRulesProps> = ({ title, children }) => {
  return (
    <section className={style.rules}>
      <div className="container">
        <p className={style.rules__approved}>
          Утверждено 12.03.2025 <br /> г. Индивидуальным предпринимателем <br />
          Жуком Юрием Викторовичем
        </p>
        <h1 className={style.rules__title}>{title}</h1>
        <div className={style.rules__block}>{children}</div>
      </div>
    </section>
  );
};
