import React from "react";
import styles from "./ProductPopup.module.scss";
import { ProductItem } from "../../pages/Products";
import { DrawerHeader } from "../Popup/DrawerHeader";
import { ImgHeader } from "../Popup/ImgHeader";
import { PopupTitle } from "../Popup/PopupTitle";
import { ShareButton } from "../Popup/ShareButton";
import { Description } from "../Popup/Description";
import { Nutritions } from "../Popup/Nutritions";
import { Attributes } from "../Popup/Attributes";
import { PriceButton } from "../Popup/PriceButton";
import { Overlay } from "../Popup/Overlay";
import { Drawer } from "../Popup/Drawer";

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
  if (!isPopupVisible) return null;

  return (
    isPopupVisible && (
      <>
        <Drawer>
          <Overlay>
            <DrawerHeader />
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
          </Overlay>
        </Drawer>
      </>
    )
  );
};
