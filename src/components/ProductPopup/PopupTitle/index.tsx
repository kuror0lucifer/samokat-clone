import React from "react";
import styles from "./PopupTitle.module.scss";

type PopupTitleProps = {
  productInfo: {
    productName: string;
    productWeight: string;
  };
};

export const PopupTitle: React.FC<PopupTitleProps> = ({ productInfo }) => {
  return (
    <div className={styles.title}>
      <h1 className={styles.text}>{productInfo.productName}</h1>
      <span className={styles.text}>{productInfo.productWeight}</span>
    </div>
  );
};
