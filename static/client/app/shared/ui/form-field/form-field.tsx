import style from "./form-field.module.css";

interface IFormProps {
  title: string;
  children: React.ReactNode;
}

export const FormField = ({ title, children }: IFormProps) => {
  return (
    <label className={style.label}>
      <span className={style.form__field__title}>{title}</span>
      {children}
    </label>
  );
};
