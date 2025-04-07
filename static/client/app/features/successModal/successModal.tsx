import style from "./successModal.module.css";

export const SuccessModal = () => {
  return (
    <div className={style.success__block}>
      <span>Спасибо за вашу заявку! Наш сотрудник скоро свяжется с вами.</span>
    </div>
  );
};
