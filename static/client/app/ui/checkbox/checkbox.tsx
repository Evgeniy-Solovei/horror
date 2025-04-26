"use client";

import Image from "next/image";
import checkedIcon from "@/app/assets/svg/checked.svg";
import notCheckedIcon from "@/app/assets/svg/notChecked.svg";

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  label,
  checked,
  onChange,
  className,
  ...props
}) => {
  return (
    <label
      className={`flex items-center gap-[7px] cursor-pointer ${className}`}
    >
      <Image src={checked ? checkedIcon : notCheckedIcon} alt="checked" />
      <input
        className="appearance-none absolute opacity-0 w-0 h-0"
        checked={checked}
        onChange={onChange}
        {...props}
        type="checkbox"
      />
      <span>{label}</span>
    </label>
  );
};
