import React from "react";
import styles from "./RegistrationPopup.module.scss";
import { Drawer } from "../Popup/Drawer";
import { Overlay } from "../Popup/Overlay";
import DrawerHeader from "../Popup/DrawerHeader";
import { LoginForm } from "./LoginForm";
import { LoginByPhone } from "./LoginByPhone";

type RegistrationPopupProps = {};

export const RegistrationPopup: React.FC<RegistrationPopupProps> = () => {
  return (
    <>
      <Drawer>
        <Overlay className={styles.drawerContainer}>
          {/* <DrawerHeader />
          <LoginForm /> */}

          <LoginByPhone />
        </Overlay>
      </Drawer>
    </>
  );
};
