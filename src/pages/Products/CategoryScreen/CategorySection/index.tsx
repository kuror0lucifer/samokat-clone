import React from "react";
import styles from "./CategorySection.module.scss";
import { Text } from "../../../../components/Text";
import { ProductsList } from "../ProductsList";
import { ProductsResponse } from "@/@types/types";

type CategorySectionProps = {
  obtainedProducts: ProductsResponse;
  setId: (id: string) => void;
};

export const CategorySection: React.FC<CategorySectionProps> = ({
  obtainedProducts,
  setId,
}) => {
  return (
    <>
      {obtainedProducts?.map((category, index) => (
        <>
          <div className={styles.root} key={index}>
            <div className={styles.header}>
              <Text className="h2Bold">{category.category}</Text>
            </div>
            <ProductsList category={category} setId={setId} />
          </div>
        </>
      ))}
    </>
  );
};
