import React from "react";
import styles from "./Nutritions.module.scss";

type NutritionsProps = {
  productInfo: {
    productNutritions: string[][];
  };
};

export const Nutritions: React.FC<NutritionsProps> = ({ productInfo }) => {
  return (
    <div className={styles.nutritions}>
      <span className={styles.text}>В 100 граммах</span>
      <div className={styles.list}>
        {productInfo.productNutritions?.map((nutritions: string[], index) => (
          <div className={styles.nutrition} key={index}>
            <span className={styles.text}>{nutritions[0]}</span>
            <span className={styles.text}>{nutritions[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
