import React from "react";
import styles from "./InlineSearchProducts.module.scss";
import WorkingHours from "../../../components/WorkingHours";
import { CategoryPage } from "../CategoryPage";
import axios from "axios";
import { ProductsResponse } from "@/@types/types";

type InlineSearchProductsProps = {
  id: string;
  setId: (id: string | null) => void;
};

export const InlineSearchProducts: React.FC<InlineSearchProductsProps> = ({
  id,
  setId,
}) => {
  const currentHours: Date = new Date();
  const offHours: number[] = [23, 0, 1, 2, 3, 4, 5, 6, 7];

  const [obtainedProducts, setObtainedProducts] =
    React.useState<ProductsResponse>([]);

  React.useEffect(() => {
    if (id) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4000/api/products/getProducts/${id}`
          );
          setObtainedProducts(response.data);
        } catch (err) {
          console.error("Ошибка получения продуктов: ", err);
        }
      };
      fetchProducts();
    }
  }, [id]);

  return (
    <>
      <div className={styles.header}>
        {offHours.includes(currentHours.getHours()) ? <WorkingHours /> : null}

        <div className={styles.contentHeader}></div>
      </div>
      <div
        className={styles.content}
        style={{ minHeight: "calc(-160px + 100vh)" }}
      >
        <div style={{ opacity: "1" }}>
          <CategoryPage
            id={id}
            setId={setId}
            obtainedProducts={obtainedProducts}
          />
        </div>
      </div>
    </>
  );
};
