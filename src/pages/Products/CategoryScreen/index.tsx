import React from "react";
import styles from "./CategoryScreen.module.scss";
import { CategoryTagsList } from "./CategoryTagsList";
import { CategorySection } from "./CategorySection";

type CategoryScreenProps = {
  obtainedProducts: any;
  setId: (id: string) => void;
};

export const CategoryScreen: React.FC<CategoryScreenProps> = ({
  obtainedProducts,
  setId,
}) => {
  return (
    <div className={styles.main}>
      <CategoryTagsList obtainedProducts={obtainedProducts} />
      <CategorySection obtainedProducts={obtainedProducts} setId={setId} />
    </div>
  );
};
