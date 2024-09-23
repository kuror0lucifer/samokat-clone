import React from "react";
import styles from "./ProductPopup.module.scss";
import { ProductItem } from "../../pages/Products";

type ProductPopupProps = {
  productInfo: ProductItem | null;
  isPopupVisible: boolean;
  setIsPopupVisible: (visible: boolean) => void;
};

export const ProductPopup: React.FC<ProductPopupProps> = ({
  productInfo,
  isPopupVisible,
  setIsPopupVisible,
}) => {
  if (!productInfo) return null;

  return (
    isPopupVisible && (
      <nav className={styles.drawer__container}>
        <div className={styles.drawer__header}>
          <button
            className={styles.navigation__button}
            onClick={() => setIsPopupVisible(false)}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M18.658 5.342a1.167 1.167 0 0 1 0 1.65l-4.1 4.1a1.284 1.284 0 0 0-.001 1.815l4.101 4.101a1.167 1.167 0 0 1-1.65 1.65l-4.1-4.1a1.283 1.283 0 0 0-1.815 0l-1.768 1.767-.001.001-2.332 2.332a1.167 1.167 0 0 1-1.65-1.65l4.1-4.1.002-.002c.5-.5.5-1.313-.001-1.814l-4.101-4.1a1.167 1.167 0 0 1 1.65-1.65l2.332 2.332 1.768 1.769a1.283 1.283 0 0 0 1.815 0l4.101-4.101a1.167 1.167 0 0 1 1.65 0"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div className={styles.root}>
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.img__root}>
                <div className={styles.img__container}>
                  <img
                    src={productInfo.productImg}
                    alt={productInfo.productName}
                  />
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                <h1 className={styles.text}>{productInfo.productName}</h1>
                <span className={styles.text}>{productInfo.productWeight}</span>
              </div>
              <div className={styles.button}>
                <button>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                    >
                      <path
                        fill="#404040"
                        d="M10.442 2.82c-.333-.327-.902-.096-.902.366v1.312c0 .527-.412.957-.927 1.067-1.383.296-2.774 1.033-3.917 2.057-1.484 1.33-2.587 3.178-2.695 5.247a.44.44 0 0 0 .337.451.45.45 0 0 0 .511-.227c.717-1.36 1.43-2.328 2.455-2.97.796-.499 1.81-.818 3.217-.94.558-.049 1.019.408 1.019.967v1.213c0 .462.569.693.902.367l4.004-3.931a.73.73 0 0 0 0-1.048z"
                      ></path>
                    </svg>
                    <span>Поделиться</span>
                  </div>
                </button>
              </div>
              <div className={styles.description}>
                <span>{productInfo?.productDescription}</span>
              </div>
              <div className={styles.nutritions}>
                <span className={styles.text}>В 100 граммах</span>
                <div className={styles.list}>
                  {productInfo.productNutritions?.map((nutritions) => (
                    <div className={styles.nutrition}>
                      <span className={styles.text}>{nutritions[0]}</span>
                      <span className={styles.text}>{nutritions[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.attributes}>
                <div className={styles.attribute}>
                  <span style={{ color: "rgb(166, 166, 166)" }}>
                    Срок хранения
                  </span>
                  <span style={{ color: "rgb(89, 89, 89)" }}>
                    {productInfo?.productAttributes[0]}
                  </span>
                </div>
                <div className={styles.attribute}>
                  <span style={{ color: "rgb(166, 166, 166)" }}>
                    Условия хранения
                  </span>
                  <span style={{ color: "rgb(89, 89, 89)" }}>
                    {productInfo?.productAttributes[1]}
                  </span>
                </div>
              </div>
              <div className={styles.priceButton__container}>
                <div className={styles.priceButton__root}>
                  <div>
                    <span>{productInfo?.productPrice} ₽</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M11.063 2.938a.937.937 0 1 1 1.874 0v6.5c0 .897.728 1.624 1.626 1.624h6.5a.937.937 0 1 1 0 1.876h-6.5c-.898 0-1.626.727-1.626 1.624v6.501a.937.937 0 1 1-1.874 0v-6.5c0-.898-.728-1.626-1.626-1.626H2.938a.937.937 0 1 1 0-1.874h6.5c.897-.001 1.624-.728 1.624-1.626V2.938"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  );
};
