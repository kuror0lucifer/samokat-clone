import React from "react";
import styles from "./ProductItem.module.scss";
import { Text } from "@/components/Text";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "@/redux/cart/selectors";
import { addItem, minusItem, removeItem } from "@/redux/cart/slice";
import { CartItemAction } from "./CartItemActions";
import { CartItem } from "@/redux/cart/types";

export const ProductItem: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const dispatch = useDispatch();

  const onClickRemove = (productId: string) => {
    dispatch(removeItem(productId));
  };

  const onClickMinus = (productId: string) => {
    dispatch(minusItem(productId));
  };

  const onClickPlus = (item: CartItem) => {
    dispatch(addItem(item));
  };

  return (
    <>
      {items.map((item) => (
        <div className={styles.root} key={item.productId}>
          <div className={styles.imgContainer}>
            <img src={item.productImg} alt={item.productName} loading="lazy" />
          </div>
          <div className={styles.content}>
            <div>
              <Text
                className="p3SemiBold"
                style={{
                  display: "-webkit-box",
                  paddingRight: "56px",
                  marginBottom: "-1px",
                  overflow: "hidden",
                  color: "#595959",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item.productName}
              </Text>
              <Text
                className="p3SemiBold"
                style={{ color: "rgb(166,166,166)" }}
              >
                {item.productWeight}
              </Text>
            </div>
            <div className={styles.footer}>
              <CartItemAction
                count={item.productCount}
                onClickMinus={onClickMinus}
                onClickPlus={() => onClickPlus(item)}
                productId={item.productId}
              />
              <div className={styles.price}>
                <Text className="p1SemiBold" style={{ color: "rgb(64,64,64)" }}>
                  {item.productPrice * item.productCount} ₽
                </Text>
              </div>
            </div>
          </div>
          <div
            className={styles.removeButton}
            onClick={() => onClickRemove(item.productId)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M3.293 3.293a1 1 0 0 1 1.414 0l1 1L7.434 6.02a.8.8 0 0 0 1.132 0l1.727-1.727 1-1a1 1 0 1 1 1.414 1.414L9.98 7.434a.8.8 0 0 0 0 1.131l2.727 2.728a1 1 0 0 1-1.414 1.414l-1-1L8.566 9.98a.8.8 0 0 0-1.131 0l-2.728 2.727a1 1 0 0 1-1.414-1.414l1-1L6.02 8.567a.8.8 0 0 0 0-1.132L3.293 4.707a1 1 0 0 1 0-1.414"
              ></path>
            </svg>
          </div>
        </div>
      ))}
    </>
  );
};
