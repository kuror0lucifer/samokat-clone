import React from "react";
import styles from "./Categories.module.scss";
import { CatalogTree } from "../CatalogTree";

const Categories = () => {
  return (
    <aside className={styles.aside__left}>
      <div className={styles.sidebar}>
        <CatalogTree />
      </div>
    </aside>
  );
};

export default React.memo(Categories);
