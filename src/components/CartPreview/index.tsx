import React from "react";
import styles from "./CartPreview.module.scss";
import { CartHeader } from "./CartHeader";
import { EmptyCart } from "./EmptyCart";
import { ButtonM } from "../Buttons/ButtonM";
import { Text } from "../Text";

export const CartPreview = () => {
  return (
    <div className={`${styles.root} ${styles.sidebarContent}`}>
      <CartHeader />
      <EmptyCart />
      <ButtonM style={{ backgroundColor: "#ff335f" }}>
        <Text className="p1SemiBold" style={{ color: "white" }}>
          Заказ от&nbsp;350&nbsp;₽
        </Text>
      </ButtonM>
    </div>
  );
};
