import React from "react";
import axios from "axios";
import styles from "./CatalogTreeSectionCard.module.scss";
import { Text } from "../../../Text";
import { CategoryLink } from "../../CategoryLink";

type CategoriesItem = {
  _id: string;
  imageUrl: string;
  title: string;
  subcategories: {
    subcategoryImg: string;
    title: string;
  }[];
};

export const CatalogTreeSectionCard = () => {
  const [categories, setCategories] = React.useState<CategoriesItem[]>([]);
  const [showSubcategories, setShowSubcategories] = React.useState({});

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        await axios
          .get("http://localhost:4000/getCategories")
          .then((res) => setCategories(res.data))
          .catch((err) => console.error(err));
      } catch (err) {
        console.error("Ошибка загрузки категорий товаров: ", err);
      }
    };
    fetchCategories();
  }, []);

  const onClickCategory = (categoryId: string): void => {
    setShowSubcategories((prevState) => ({
      ...prevState,
      [categoryId]: !prevState[categoryId],
    }));
  };
  return (
    <>
      {categories.map((category) => (
        <React.Fragment key={category._id}>
          <div
            className={styles.details}
            onClick={() => onClickCategory(category._id)}
          >
            <div className={styles.icon}>
              <div className={styles.chevron}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m4 7 4 4 4-4"
                    opacity="0.8"
                  ></path>
                </svg>
              </div>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${category.imageUrl})` }}
              ></div>
            </div>
            <Text className="p2SemiBold">{category.title}</Text>
          </div>

          {showSubcategories[category._id] && (
            <div className={styles.categories} key={category._id}>
              {category.subcategories.map((subcategory, index) => (
                <CategoryLink className={styles.category}>
                  {subcategory.title}
                </CategoryLink>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );
};
