import React from "react";
import styles from "./CategoriesGrid.module.scss";
import { Card } from "../../../components/Card";
import axios from "axios";
import { Text } from "../../../components/Text";

type MainCategoriesItem = {
  _id: string;
  imageUrl: string;
  title: string;
  subcategories: {
    subcategoryImg: string;
    title: string;
    subcategoryId: string;
  }[];
};

type CategoriesGridProps = {
  id: string;
  setId: (id: string) => void;
};

export const CategoriesGrid: React.FC<CategoriesGridProps> = ({
  id,
  setId,
}) => {
  const [mainCategories, setMainCategories] = React.useState<
    MainCategoriesItem[]
  >([]);

  React.useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        await axios
          .get("http://localhost:4000/getCategories")
          .then((res) => setMainCategories(res.data));
      } catch (err) {
        console.error("Ошибка при загрузке категорий товаров: ", err);
      }
    };
    fetchMainCategories();
  }, []);

  return (
    <>
      {mainCategories.map((category, index) => (
        <div className={styles.root} key={category._id}>
          {index > 0 ? (
            <Text
              key={category._id}
              className="h2Bold"
              style={{ marginBottom: "20px" }}
            >
              {category.title}
            </Text>
          ) : null}
          <div className={styles.grid}>
            <Card category={category} id={id} setId={setId} />
          </div>
        </div>
      ))}
    </>
  );
};
