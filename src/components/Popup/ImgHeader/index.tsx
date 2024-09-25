import React from "react";
import styles from "./ImgHeader.module.scss";

type ImgHeaderProps = {
  productInfo: {
    productImg: string;
    productName: string;
  };
};

export const ImgHeader: React.FC<ImgHeaderProps> = ({ productInfo }) => {
  return (
    <div className={styles.header}>
      <div className={styles.img__root}>
        <div className={styles.img__container}>
          <img src={productInfo.productImg} alt={productInfo.productName} />
        </div>
      </div>
    </div>
  );
};
