import React from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import styles from "./Main.module.scss";
import { InlineSearch } from "./InlineSearch";

type MainCategoriesItem = {
  _id: string;
  imageUrl: string;
  title: string;
  subcategories: {
    subcategoryImg: string;
    title: string;
    subcategoryId: string;
    products: {
      category: string;
      categoryId: string;
      items: {
        productName: string;
        productPrice: number;
        productId: string;
        productWeight: string;
        productImg: string;
      }[];
    }[];
  }[];
};

type MainProps = {
  setId: (id: string) => void;
  id: string;
};

const Main: React.FC<MainProps> = ({ id, setId }) => {
  const [mainCategories, setMainCategories] = React.useState<
    MainCategoriesItem[]
  >([]);

  React.useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        await axios
          .get("http://localhost:4000/api/categories/getCategories")
          .then((res) => setMainCategories(res.data));
      } catch (err) {
        console.error("Ошибка загрузки категорий товаров: ", err);
      }
    };
    fetchMainCategories();
  }, []);

  return (
    <>
      <main className={styles.content}>
        <InlineSearch id={id} setId={setId} />
        <Footer />
      </main>
    </>
  );
};

export default Main;
