import React from "react";
import styles from "./Card.module.scss";
import { Text } from "../Text";
import { MainCategoryLink } from "../../pages/Main/CategoriesGrid/MainCategoryLink";

type CardProps = {
  category: any;
  id: string;
  setId: (id: string) => void;
};

export const Card: React.FC<CardProps> = ({ category, id, setId }) => {
  const onClickId = (id: string): void => {
    setId(id);
  };

  return (
    <>
      {category.subcategories.map((subcategory) => (
        <MainCategoryLink
          onClick={() => {
            onClickId(subcategory.subcategoryId);
          }}
        >
          <div className={styles.root} key={subcategory.subcategoryId}>
            <div className={styles.imageContainer}>
              <img
                src={subcategory.subcategoryImg}
                alt={subcategory.title}
                loading="lazy"
                className={styles.img}
              />
            </div>
            <div className={styles.text}>
              <Text className="semiBold">{subcategory.title}</Text>
            </div>
          </div>
        </MainCategoryLink>
      ))}
    </>
  );
};
