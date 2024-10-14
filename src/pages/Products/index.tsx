import React from "react";
import styles from "./Products.module.scss";
import { InlineSearchProducts } from "./InlineSearchProducts";
import Footer from "../../components/Footer";

export type ProductItem = {
  productName: string;
  productPrice: number;
  productWeight: string;
  productImg: string;
  productId: string;
  productDescription: string;
  productNutritions: string[][];
  productAttributes: string[];
};

type Category = {
  title: string;
  category: string;
  items: ProductItem[];
};

type productsProps = {
  setId: (id: string) => void;
  id: string;
};

export const Products: React.FC<productsProps> = ({ id, setId }) => {
  return (
    <>
      <main className={styles.content}>
        <InlineSearchProducts id={id} setId={setId} />
        <Footer />
      </main>
    </>
  );
};
