import React from "react";
import styles from "./DrawerContainer.module.scss";

type DrawerContainerProps = {
  isAnimating: boolean;
  children: React.ReactNode;
  className?: string;
};

export const DrawerContainer: React.FC<DrawerContainerProps> = ({
  children,
  isAnimating,
  className,
}) => {
  return (
    <nav
      className={`${styles.drawer__container} ${
        isAnimating ? styles.visible : styles.hidden
      } ${className}`}
    >
      {children}
    </nav>
  );
};
