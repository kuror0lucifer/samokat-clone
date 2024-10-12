import React from "react";
import axios from "axios";
import styles from "./Products.module.scss";
import { Link } from "react-router-dom";
import { ProductPopup } from "../../components/ProductPopup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { hidePopup, showProductPopup } from "../../redux/popup/slice";
import { ButtonS } from "../../components/Buttons/ButtonS";
import { NavbarBack } from "../../components/Navbar/NavbarBack";
import { InlineSearch } from "../Main/InlineSearch";
import { InlineSearchProducts } from "./InlineSearchProducts";
import Footer from "../../components/Footer";

export type ProductItem = {
  productName: string;
  productPrice: number;
  productWeight: string;
  productImg: string;
  productId: string;
  productDescription: string;
  productNutritions: string[][];
  productAttributes: string[];
};

type Category = {
  title: string;
  category: string;
  items: ProductItem[];
};

type ProductsResponse = Category[];

type productsProps = {
  setId: (id: string) => void;
  id: string;
};

export const Products: React.FC<productsProps> = ({ id, setId }) => {
  return (
    <>
      <main className={styles.content}>
        <InlineSearchProducts id={id} setId={setId} />
        {/* <div className="main__container">
          <div className="text__container">
            <Link to="../" onClick={() => handleClick()}>
              <NavbarBack />
            </Link>

            {obtainedProducts && (
              <h1 className={styles.title}>{obtainedProducts[0]?.title}</h1>
            )}
          </div>
          <div className={styles.categoryButtons__wrapper}>
            {obtainedProducts?.map((category, index) => (
              <ButtonS className={styles.category__buttons}>
                <a href="##" className={styles.button__link} key={index}>
                <span className={styles.button__text}>{category.category}</span>
                </a>
              </ButtonS>
            ))}
          </div>
          <div>
            {obtainedProducts?.map((category, index) => (
              <div className={styles.products__root} key={index}>
                <h1 className={styles.title}>{category.category}</h1>
                <a href="##">
                  <div className={styles.cards}>
                    {category.items.map((item, index) => (
                      <div
                        className={styles.productCard__root}
                        onClick={() => handleProductClick(item)}
                        key={index}
                      >
                        <div className={styles.productImg__root}>
                          <img
                            src={item.productImg}
                            alt={`${item.productName}, ${item.productWeight}`}
                            loading="lazy"
                          />
                        </div>
                        <div className={styles.productCard__content}>
                          <div className={styles.productCard__title__root}>
                            <span className={styles.productCard__title}>
                              {item.productName}
                            </span>
                          </div>
                          <div className={styles.productCard__weight__root}>
                            <span className={styles.productCard__weight}>
                              {item.productWeight}
                            </span>
                          </div>

                          <ButtonS>
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
                          </ButtonS>
                        </div>
                      </div>
                    ))}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div> */}
        <Footer />
      </main>
    </>
  );
};
