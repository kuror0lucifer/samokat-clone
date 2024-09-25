import React from "react";
import styles from "./DrawerContainer.module.scss";

type DrawerContainerProps = {
  isAnimating: boolean;
  children: React.ReactNode;
};

export const DrawerContainer: React.FC<DrawerContainerProps> = ({
  children,
  isAnimating,
}) => {
  return (
    <nav
      className={`${styles.drawer__container} ${
        isAnimating ? styles.visible : styles.hidden
      }`}
    >
      {children}
    </nav>
  );
};
