import React from "react";
import styles from "./CartItemAction.module.scss";
import { Text } from "@/components/Text";

type CartItemActionProps = {
  count: number;
  onClickMinus: (productId: string) => void;
  onClickPlus: () => void;
  productId: string;
};

export const CartItemAction: React.FC<CartItemActionProps> = ({
  count,
  onClickMinus,
  onClickPlus,
  productId,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.action} onClick={() => onClickMinus(productId)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
        >
          <rect
            width="1.5"
            height="16"
            y="8.75"
            fill="currentColor"
            rx="0.75"
            transform="rotate(-90 0 8.75)"
          ></rect>
        </svg>
      </div>
      <Text className="p2SemiBold">{count}</Text>
      <div className={styles.action} onClick={onClickPlus}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.25.75a.75.75 0 0 1 1.5 0v5.2a1.3 1.3 0 0 0 1.3 1.3h5.2a.75.75 0 0 1 0 1.5h-5.2a1.3 1.3 0 0 0-1.3 1.3v5.2a.75.75 0 0 1-1.5 0v-5.2a1.3 1.3 0 0 0-1.3-1.3H.75a.75.75 0 0 1 0-1.5h5.2a1.3 1.3 0 0 0 1.3-1.3V.75"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};
