import React from "react";
import styles from "./CategoryPage.module.scss";
import { Link } from "react-router-dom";
import { NavbarBack } from "../../../components/Navbar/NavbarBack";
import { Text } from "../../../components/Text";
import { CategoryScreen } from "../CategoryScreen";

type CategoryPageProps = {
  id: string;
  setId: (id: string) => void;
  obtainedProducts: any;
};

export const CategoryPage: React.FC<CategoryPageProps> = ({
  id,
  setId,
  obtainedProducts,
}) => {
  const handleClick = () => {
    setId(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.categoryNameContainer}>
        <div className={styles.backButton}>
          <Link to="../" onClick={() => handleClick()}>
            <NavbarBack />
          </Link>
        </div>
        {obtainedProducts && (
          <Text className="h2Bold">{obtainedProducts[0]?.title}</Text>
        )}
      </div>
      <CategoryScreen obtainedProducts={obtainedProducts} setId={setId} />
    </div>
  );
};
