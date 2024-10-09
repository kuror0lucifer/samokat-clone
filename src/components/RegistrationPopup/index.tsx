import React from "react";
import ReactDOM from "react-dom";
import styles from "./RegistrationPopup.module.scss";
import { Drawer } from "../Popup/Drawer";
import { Overlay } from "../Popup/Overlay";
import DrawerHeader from "../Popup/DrawerHeader";
import { LoginForm } from "./LoginForm";
import { LoginByPhone } from "./LoginByPhone";
import { LoginByEmail } from "./LoginByEmail";

type RegistrationPopupProps = {};

export const RegistrationPopup: React.FC<RegistrationPopupProps> = () => {
  const [isPhoneLogin, setPhoneLogin] = React.useState<boolean>(false);
  const [isEmailLogin, setEmailLogin] = React.useState<boolean>(false);

  const portalRoot = document.getElementById("portal-root");

  const handleClickLoginByPhone = () => {
    setPhoneLogin(true);
  };

  const handleClickLoginByEmail = () => {
    setEmailLogin(true);
  };

  const handleNavbarBackClick = () => {
    setPhoneLogin(false);
    setEmailLogin(false);
  };

  return ReactDOM.createPortal(
    <>
      <Drawer>
        <Overlay className={styles.drawerContainer}>
          {isPhoneLogin ? (
            <LoginByPhone handleNavbarBackClick={handleNavbarBackClick} />
          ) : isEmailLogin ? (
            <LoginByEmail handleNavbarBackClick={handleNavbarBackClick} />
          ) : (
            <>
              <DrawerHeader />
              <LoginForm
                handleClickLoginByPhone={handleClickLoginByPhone}
                handleClickLoginByEmail={handleClickLoginByEmail}
              />
            </>
          )}
        </Overlay>
      </Drawer>
    </>,
    portalRoot
  );
};
