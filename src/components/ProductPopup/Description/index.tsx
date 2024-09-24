import React from "react";
import styles from "./Description.module.scss";

type DescriptionProps = {
  productInfo: {
    productDescription: string;
  } | null;
};

export const Description: React.FC<DescriptionProps> = ({ productInfo }) => {
  return (
    <div className={styles.description}>
      <span>{productInfo?.productDescription}</span>
    </div>
  );
};
