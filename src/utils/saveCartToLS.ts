import { CartItem } from "@/redux/cart/types";

export const saveCartToLS = (items: CartItem[], totalPrice: number) => {
  const cartData = {
    items,
    totalPrice,
  };
  localStorage.setItem("cart", JSON.stringify(cartData));
};
