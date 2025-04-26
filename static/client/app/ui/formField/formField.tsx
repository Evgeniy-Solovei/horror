import classNames from "classnames";

interface IFormFieldProps extends React.HTMLAttributes<HTMLLabelElement> {
  label: string;
  errors?: string;
}

export const FormField: React.FC<IFormFieldProps> = ({
  label,
  errors,
  children,
  className,
}) => {
  return (
    <label className={classNames(className, "flex flex-col")}>
      <span className="mb-[12px]">{label}</span>
      {children}
      {errors && <span>{errors}</span>}
    </label>
  );
};
