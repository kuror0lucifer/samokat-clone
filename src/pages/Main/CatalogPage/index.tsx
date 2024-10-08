import React from "react";
import styles from "./CatalogPage.module.scss";
import { Text } from "../../../components/Text";
import { CategoriesGrid } from "../CategoriesGrid";

type CatelogPageProps = {
  id: string;
  setId: (id: string) => void;
};

export const CatalogPage: React.FC<CatelogPageProps> = ({ id, setId }) => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <Text className="h1Bold" style={{ color: "rgb(166,166,166)" }}>
          Доставка
        </Text>
        &nbsp;
        <Text className="h1Bold">от 15 минут</Text>
      </div>
      <CategoriesGrid id={id} setId={setId} />
    </div>
  );
};
