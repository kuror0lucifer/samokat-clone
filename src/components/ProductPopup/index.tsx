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
  const [isMounted, setIsMounted] = React.useState(false); // Контроль DOM
  const [isAnimating, setIsAnimating] = React.useState(false); // Контроль анимации

  // Управляем состоянием анимации и монтированием
  React.useEffect(() => {
    if (isPopupVisible) {
      setIsMounted(true); // Вставляем в DOM
      setTimeout(() => setIsAnimating(true), 10); // Небольшая задержка перед началом анимации открытия
    } else if (isMounted) {
      setIsAnimating(false);
      setTimeout(() => setIsMounted(false), 500);
    }
  }, [isPopupVisible, isMounted]);

  if (!isMounted) return null;

  return (
    isPopupVisible && (
      <div className={styles.drawer}>
        <div
          className={styles.overlay}
          onClick={() => setIsPopupVisible(false)}
        ></div>
        <nav
          className={`${styles.drawer__container} ${
            isAnimating ? styles.visible : styles.hidden // Добавляем класс hidden для закрытия
          }`}
        >
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
      </div>
    )
  );
};
