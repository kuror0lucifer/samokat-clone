import { CartItem } from "./../redux/cart/types";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartItemsFromLS = () => {
  const data = localStorage.getItem("cart");
  const parsedData = data ? JSON.parse(data) : { items: [], totalPrice: 0 };
  const items = Array.isArray(parsedData.items) ? parsedData.items : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as CartItem[],
    totalPrice,
  };
};
