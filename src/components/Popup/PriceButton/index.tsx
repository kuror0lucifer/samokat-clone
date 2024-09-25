import React from "react";
import styles from "./PriceButton.module.scss";

type PriceButtonProps = {
  productInfo: {
    productPrice: number;
  };
};

export const PriceButton: React.FC<PriceButtonProps> = ({ productInfo }) => {
  return (
    <div className={styles.priceButton__container}>
      <div className={styles.priceButton__root}>
        <div>
          <span>{productInfo?.productPrice} ₽</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M11.063 2.938a.937.937 0 1 1 1.874 0v6.5c0 .897.728 1.624 1.626 1.624h6.5a.937.937 0 1 1 0 1.876h-6.5c-.898 0-1.626.727-1.626 1.624v6.501a.937.937 0 1 1-1.874 0v-6.5c0-.898-.728-1.626-1.626-1.626H2.938a.937.937 0 1 1 0-1.874h6.5c.897-.001 1.624-.728 1.624-1.626V2.938"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
