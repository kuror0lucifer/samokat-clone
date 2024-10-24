import React from "react";
import styles from "./CartPreview.module.scss";
import { CartHeader } from "./CartHeader";
import { EmptyCart } from "./EmptyCart";
import { ButtonM } from "../Buttons/ButtonM";
import { Text } from "../Text";
import { useSelector } from "react-redux";
import { selectCart } from "@/redux/cart/selectors";
import { CartItems } from "./CartItems";

export const CartPreview = () => {
  const { items, totalPrice } = useSelector(selectCart);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.productCount,
    0
  );

  return (
    <div className={`${styles.root} ${styles.sidebarContent}`}>
      <CartHeader />
      {!totalCount ? <EmptyCart /> : <CartItems />}
      <div className={styles.footer}>
        <div className={styles.content}>
          <Text
            className="p3SemiBold"
            style={{ color: "#a6a6a6", marginBottom: "4px" }}
          >
            Итого
          </Text>
          <Text className="h1Bold">{totalPrice} ₽</Text>
        </div>
        <ButtonM style={{ backgroundColor: "#ff335f" }}>
          <Text className="p1SemiBold" style={{ color: "white" }}>
            {totalPrice < 350 ? "Заказ от 350 ₽" : "Продолжить"}
          </Text>
        </ButtonM>
      </div>
    </div>
  );
};
