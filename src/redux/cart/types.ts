export type CartItem = {
  productName: string;
  productWeight: string;
  productImg: string;
  productPrice: number;
  productCount: number;
  productId: string;
  productDescription: string;
  productNutritions: string[][];
  productAttributes: string[];
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
