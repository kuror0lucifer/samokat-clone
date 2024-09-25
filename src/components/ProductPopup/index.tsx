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
import { DrawerContainer } from "../Popup/DrawerContainer";

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
  const [isMounted, setIsMounted] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    if (isPopupVisible) {
      setIsMounted(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else if (isMounted) {
      setIsAnimating(false);
      setTimeout(() => setIsMounted(false), 500);
    }
  }, [isPopupVisible, isMounted]);

  if (!isMounted) return null;

  return (
    isPopupVisible && (
      <>
        <Drawer>
          <Overlay setIsPopupVisible={setIsPopupVisible} />
          <DrawerContainer isAnimating={isAnimating}>
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
          </DrawerContainer>
        </Drawer>
      </>
    )
  );
};
