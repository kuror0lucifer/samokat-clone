import React from "react";
import styles from "./Drawer.module.scss";

type DrawerProps = {
  children: React.ReactNode;
};

export const Drawer: React.FC<DrawerProps> = ({ children }) => {
  return <div className={styles.drawer}>{children}</div>;
};
