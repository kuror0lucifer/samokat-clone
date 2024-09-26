import React from "react";
import styles from "./ButtonM.module.scss";

type ButtonMProps = {
  children: React.ReactNode;
  className?: string;
};

export const ButtonM: React.FC<ButtonMProps> = ({ children, className }) => {
  return (
    <button className={`${styles.button__control} ${className}`}>
      {children}
    </button>
  );
};
