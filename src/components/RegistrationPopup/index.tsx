import React from "react";
import styles from "./RegistrationPopup.module.scss";
import { Drawer } from "../Popup/Drawer";
import { Overlay } from "../Popup/Overlay";
import DrawerHeader from "../Popup/DrawerHeader";
import { LoginForm } from "./LoginForm";

type RegistrationPopupProps = {};

export const RegistrationPopup: React.FC<RegistrationPopupProps> = () => {
  return (
    <>
      <Drawer>
        <Overlay className={styles.drawerContainer}>
          <DrawerHeader />
          <LoginForm />
        </Overlay>
      </Drawer>
    </>
  );
};
