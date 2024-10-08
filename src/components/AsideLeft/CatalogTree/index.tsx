import React from "react";
import styles from "./CatelogTree.module.scss";
import { CatalogTreeSectionCard } from "./CatalogTreeSectionCard";

export const CatalogTree: React.FC = () => {
  return (
    <div className={styles.root}>
      <CatalogTreeSectionCard />
    </div>
  );
};
