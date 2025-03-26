import style from "./PoliceSection.module.css";

interface IPolice {
  id: string;
  text: string;
}

const POLICE: IPolice[] = [
  {
    id: "1",
    text: "Возрастное ограничение 14+",
  },

  {
    id: "2",
    text: "В квест не допускаются лица, находящиеся в алкогольном и наркотическом опьянении, а так же под воздействием психотропных веществ.",
  },
  {
    id: "3",
    text: "Квест запрещен к прохождению лицам, страдающим сердечно-сосудистыми заболеваниями, а так же лицам, имеющим любые виды травм",
  },
  {
    id: "4",
    text: "Не рекомендуется к прохождению лицам, имеющим травму или болезнь глаз, так как в квесте присутствуют яркие вспышки стробоскопа",
  },
];

const PoliceSection = () => {
  return (
    <section className="police section">
      <div className="container">
        <div className="police__block">
          <div className={style.title__block}>
            <h2 className={style.title}>Правила посещения</h2>
            <hr className={style.hr} />
          </div>
          <ul className={style.police__list}>
            {POLICE.map((element) => (
              <li className={style.police__item} key={element.id}>
                {element.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PoliceSection;
