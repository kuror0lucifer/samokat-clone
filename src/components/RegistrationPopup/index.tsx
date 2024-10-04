import React from "react";
import styles from "./RegistrationPopup.module.scss";
import { Drawer } from "../Popup/Drawer";
import { Overlay } from "../Popup/Overlay";
import DrawerHeader from "../Popup/DrawerHeader";
import { LoginForm } from "./LoginForm";
import { LoginByPhone } from "./LoginByPhone";
import { VerificationCodeForm } from "./VerificationCodeForm";
import { LoginByEmail } from "./LoginByEmail";

type RegistrationPopupProps = {};

export const RegistrationPopup: React.FC<RegistrationPopupProps> = () => {
  const [isPhoneLogin, setPhoneLogin] = React.useState<boolean>(false);
  const [isEmailLogin, setEmailLogin] = React.useState<boolean>(false);

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

  return (
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
    </>
  );
};
