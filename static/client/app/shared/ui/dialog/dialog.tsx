import { forwardRef, ReactNode, useEffect, useState } from "react";
import styles from "./dialog.module.css";
import Image from "next/image";
import close__dialog from "@/app/assets/close__dialog.svg";
import ReactDOM from "react-dom";
import classNames from "classnames";

interface DialogModalProps {
  children: ReactNode;
  onClose: () => void;
  className?: string;
  classNameBTN?: string;
}

const Dialog = forwardRef<HTMLDialogElement, DialogModalProps>(
  ({ children, onClose, className, classNameBTN }, ref) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return ReactDOM.createPortal(
      <dialog
        ref={ref}
        className={classNames(styles.modal, className)}
        onCancel={onClose}
      >
        <div className={styles.content}>
          <button
            className={classNames(styles.close, classNameBTN)}
            onClick={onClose}
          >
            <Image src={close__dialog} alt="close dialog" />
          </button>
          {children}
        </div>
      </dialog>,
      document.body
    );
  }
);

Dialog.displayName = "Dialog";

export default Dialog;
