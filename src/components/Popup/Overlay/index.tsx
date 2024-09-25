import React from "react";
import styles from "./Overlay.module.scss";

type OverlayProps = {
  setIsPopupVisible: (visible: boolean) => void;
};

export const Overlay: React.FC<OverlayProps> = ({ setIsPopupVisible }) => {
  return (
    <div
      className={styles.overlay}
      onClick={() => setIsPopupVisible(false)}
    ></div>
  );
};
