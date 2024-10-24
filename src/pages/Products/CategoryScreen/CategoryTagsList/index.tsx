import React from "react";
import styles from "./CategoryTagsList.module.scss";
import { ButtonS } from "../../../../components/Buttons/ButtonS";
import { ProductsResponse } from "@/@types/types";

type CategoryTagsListProps = {
  obtainedProducts: ProductsResponse;
};

export const CategoryTagsList: React.FC<CategoryTagsListProps> = ({
  obtainedProducts,
}) => {
  return (
    <div className={styles.root}>
      {obtainedProducts?.map((category, index) => (
        <ButtonS className={styles.buttons} key={index}>
          <a href="##" className={styles.link}>
            <span className={styles.category}>{category.category}</span>
          </a>
        </ButtonS>
      ))}
    </div>
  );
};
