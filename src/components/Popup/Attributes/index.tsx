import React from "react";
import styles from "./Attributes.module.scss";

type ProductAttributesProps = {
  productInfo: {
    productAttributes: string[];
  };
};

export const Attributes: React.FC<ProductAttributesProps> = ({
  productInfo,
}) => {
  return (
    <div className={styles.attributes}>
      <div className={styles.attribute}>
        <span style={{ color: "rgb(166, 166, 166)" }}>Срок хранения</span>
        <span style={{ color: "rgb(89, 89, 89)" }}>
          {productInfo?.productAttributes[0]}
        </span>
      </div>
      <div className={styles.attribute}>
        <span style={{ color: "rgb(166, 166, 166)" }}>Условия хранения</span>
        <span style={{ color: "rgb(89, 89, 89)" }}>
          {productInfo?.productAttributes[1]}
        </span>
      </div>
    </div>
  );
};
