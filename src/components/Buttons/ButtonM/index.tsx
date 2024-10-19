import React from "react";
import styles from "./ButtonM.module.scss";

type ButtonMProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  style?: React.CSSProperties;
};

export const ButtonM: React.FC<ButtonMProps> = ({
  children,
  className = "",
  onClick = () => {},
  type = "button",
  disabled,
  style,
}) => {
  return (
    <button
      className={`${styles.button__control} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};
