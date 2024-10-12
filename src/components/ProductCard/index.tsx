import React from "react";
import styles from "./ProductCard.module.scss";
import { Text } from "../Text";
import { ButtonS } from "../Buttons/ButtonS";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { hidePopup, showProductPopup } from "../../redux/popup/slice";
import { ProductPopup } from "../ProductPopup";
import ReactDOM from "react-dom";

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

type ProductCardProps = {
  item: any;
  setId: (id: string) => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({ item, setId }) => {
  const [selectedProduct, setSelectedProduct] =
    React.useState<ProductItem | null>(null);

  const dispatch = useDispatch();
  const isPopupVisible = useSelector(
    (state: RootState) => state.popup.visibleProductId === item.productId
  );

  const handleProductClick = (product: ProductItem) => {
    console.log(selectedProduct);
    setSelectedProduct(item);
    dispatch(showProductPopup(product.productId));
    console.log(selectedProduct);
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.imgContainer}>
          <img
            src={item.productImg}
            alt={item.productTitle}
            onClick={() => {
              handleProductClick(item);
            }}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.details}>
            <div className={styles.name}>
              <Text className="p3SemiBold" style={{ color: "rgb(89,89,89)" }}>
                {item.productName}
              </Text>
            </div>
            <div className={styles.specification}>
              <Text
                className="p3SemiBold"
                style={{ color: "rgb(166,166,166)" }}
              >
                {item.productWeight}
              </Text>
            </div>
          </div>
          <div className={styles.actions}>
            <ButtonS>
              <Text
                className="p2SemiBold"
                style={{ color: "rgb(255,51,91)" }}
              >{`${item.productPrice} ₽ `}</Text>
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
        {selectedProduct && (
          <ProductPopup
            productInfo={selectedProduct}
            isProductPopupVisible={isPopupVisible}
            setIsPopupVisible={() => dispatch(hidePopup())}
          />
        )}
      </div>
    </>
  );
};
