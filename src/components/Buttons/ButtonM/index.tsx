import React from "react";
import styles from "./ButtonM.module.scss";

type ButtonMProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ButtonM: React.FC<ButtonMProps> = ({
  children,
  className = "",
  onClick = () => {},
}) => {
  return (
    <button
      type="button"
      className={`${styles.button__control} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
