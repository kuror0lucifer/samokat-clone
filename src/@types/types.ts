export type ProductItem = {
  productName: string;
  productPrice: number;
  productWeight: string;
  productImg: string;
  productId: string;
  productDescription: string;
  productNutritions: string[][];
  productAttributes: string[];
  productCount: number;
};

export type Category = {
  title: string;
  category: string;
  items: ProductItem[];
};

export type ProductsResponse = Category[] | [];
