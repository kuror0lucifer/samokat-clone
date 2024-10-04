import React from "react";
import styles from "./ButtonM.module.scss";

type ButtonMProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
};

export const ButtonM: React.FC<ButtonMProps> = ({
  children,
  className = "",
  onClick = () => {},
  type = "button",
}) => {
  return (
    <button
      className={`${styles.button__control} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
