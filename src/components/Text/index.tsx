import React from "react";
import styles from "./Text.module.scss";

type TextProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  key?: string;
};

export const Text: React.FC<TextProps> = ({
  children,
  className,
  style,
  key,
}) => {
  return (
    <span className={styles[className]} key={key} style={style}>
      {children}
    </span>
  );
};
