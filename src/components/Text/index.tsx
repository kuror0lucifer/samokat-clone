import React from "react";
import styles from "./Text.module.scss";

type TextProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Text: React.FC<TextProps> = ({ children, className, style }) => {
  return (
    <span className={className ? styles[className] : undefined} style={style}>
      {children}
    </span>
  );
};
