import React from "react";
import styles from "./ProductPopup.module.scss";
import { ProductItem } from "../../pages/Products";
import { DrawerHeader } from "./DrawerHeader";
import { ImgHeader } from "./ImgHeader";
import { PopupTitle } from "./PopupTitle";
import { ShareButton } from "./ShareButton";
import { Description } from "./Description";
import { Nutritions } from "./Nutritions";
import { Attributes } from "./Attributes";
import { PriceButton } from "./PriceButton";

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
        <DrawerHeader setIsPopupVisible={setIsPopupVisible} />
        <div className={styles.root}>
          <div className={styles.container}>
            <ImgHeader productInfo={productInfo} />
            <div className={styles.content}>
              <PopupTitle productInfo={productInfo} />
              <ShareButton />
              <Description productInfo={productInfo} />
              <Nutritions productInfo={productInfo} />
              <Attributes productInfo={productInfo} />
              <PriceButton productInfo={productInfo} />
            </div>
          </div>
        </div>
      </nav>
    )
  );
};
