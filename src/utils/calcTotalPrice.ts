import { CartItem } from "../redux/cart/types";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce(
    (sum, obj) => obj.productPrice * obj.productCount + sum,
    0
  );
};
