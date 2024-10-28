import React from "react";
import styles from "./CartItems.module.scss";
import { ProductItem } from "../ProductItem";

export const CartItems: React.FC = () => {
  return (
    <div className={styles.root}>
      <a href="##" className={styles.cartItem}>
        <ProductItem />
      </a>
    </div>
  );
};
