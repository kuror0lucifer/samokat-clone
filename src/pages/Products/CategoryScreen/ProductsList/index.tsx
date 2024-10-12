import React from "react";
import styles from "./ProductsList.module.scss";
import { ProductCard } from "../../../../components/ProductCard";

type ProductsListProps = {
  category: any;
  setId: (id: string) => void;
};

export const ProductsList: React.FC<ProductsListProps> = ({
  category,
  setId,
}) => {
  return (
    <div className={styles.productList}>
      {category.items.map((item, index) => (
        <a href="##">
          <ProductCard item={item} setId={setId} />
        </a>
      ))}
    </div>
  );
};
