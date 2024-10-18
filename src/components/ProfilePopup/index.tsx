import React from "react";
import ReactDOM from "react-dom";
import styles from "./ProfilePopup.module.scss";
import { Drawer } from "../Popup/Drawer";
import { Overlay } from "../Popup/Overlay";
import DrawerHeader from "../Popup/DrawerHeader";
import { ProfileDetails } from "./ProfileDetails";

export const ProfilePopup: React.FC = () => {
  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) {
    console.error("Элемент с ID 'portal-root' не найден в DOM.");
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <Drawer>
        <Overlay className={styles.drawerContainer}>
          <DrawerHeader />
          <ProfileDetails />
        </Overlay>
      </Drawer>
    </>,
    portalRoot
  );
};
