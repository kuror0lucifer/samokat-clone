import React from "react";
import styles from "./ButtonS.module.scss";

type ButtonSProps = {
  children: React.ReactNode;
  className?: string;
};

export const ButtonS: React.FC<ButtonSProps> = ({ children, className }) => {
  return (
    <div
      className={`${styles.button__wrapper} ${
        className ? styles[className] : ""
      }`}
    >
      <div className={styles.button}>{children}</div>
    </div>
  );
};
