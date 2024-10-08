import React from "react";
import styles from "./MainCategoryLink.module.scss";
import { Link } from "react-router-dom";

type MainCategoryLinkProps = {
  children: React.ReactNode;
  onClick: any;
};

export const MainCategoryLink: React.FC<MainCategoryLinkProps> = ({
  children,
  onClick,
}) => {
  return (
    <Link to="/products" className={styles.root} onClick={onClick}>
      {children}
    </Link>
  );
};
