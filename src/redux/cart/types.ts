export type CartItem = {
  productName: string;
  productWeight: string;
  productImg: string;
  productPrice: number;
  productCount: number;
  productId: string;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
