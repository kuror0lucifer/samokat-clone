import React from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa6";
import styles from "./Products.module.scss";

type ProductItem = {
  productName: string;
  productPrice: number;
  productWeight: string;
  productImg: string;
  productId: string;
};

type Category = {
  title: string;
  category: string;
  items: ProductItem[];
};

type ProductsResponse = Category[];

type productsProps = {
  id: string;
};

export const Products: React.FC<productsProps> = ({ id }) => {
  const [obtainedProducts, setObtainedProducts] =
    React.useState<ProductsResponse | null>(null);

  React.useEffect(() => {
    if (id) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4000/getProducts/${id}`
          );
          setObtainedProducts(response.data);
        } catch (err) {
          console.error("Ошибка получения продуктов: ", err);
        }
      };
      fetchProducts();
    }
  }, [id]);

  const handleGoBack = () => {
    window.history.back();
    console.log(obtainedProducts);
  };

  return (
    <>
      <main className="main">
        <div className="main__container">
          <div className="text__container">
            <button className={styles.return} onClick={handleGoBack}>
              <FaArrowLeft className={styles.return__icon} />
            </button>
            {obtainedProducts && (
              <h1 className={styles.title}>{obtainedProducts[0]?.title}</h1>
            )}
          </div>
          <div className={styles.category__buttons}>
            {obtainedProducts?.map((category) => (
              <a href="##" className={styles.button}>
                {category.category}
              </a>
            ))}
          </div>
          <div>
            {obtainedProducts?.map((category) => (
              <>
                <h1 className={styles.title}>{category.category}</h1>
                <div className={styles.cards}>
                  {category.items.map((item) => (
                    <div className={styles.productCard__root}>
                      <img
                        src={item.productImg}
                        alt={`${item.productName}, ${item.productWeight}`}
                        loading="lazy"
                      />
                      <div className={styles.productCard__content}>
                        <span className={styles.productCard__title}>
                          {item.productName}
                        </span>
                        <span className={styles.productCard__weight}>
                          {item.productWeight}
                        </span>
                        <div className={styles.button__wrapper}>
                          <div className={styles.button}>
                            <span>{`${item.productPrice} ₽ `}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              className={styles.button__icon}
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M11.063 2.938a.937.937 0 1 1 1.874 0v6.5c0 .897.728 1.624 1.626 1.624h6.5a.937.937 0 1 1 0 1.876h-6.5c-.898 0-1.626.727-1.626 1.624v6.501a.937.937 0 1 1-1.874 0v-6.5c0-.898-.728-1.626-1.626-1.626H2.938a.937.937 0 1 1 0-1.874h6.5c.897-.001 1.624-.728 1.624-1.626V2.938"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
