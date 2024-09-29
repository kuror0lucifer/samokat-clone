import React from "react";
import styles from "./RegistrationPopup.module.scss";
import { Drawer } from "../Popup/Drawer";
import { Overlay } from "../Popup/Overlay";
import DrawerHeader from "../Popup/DrawerHeader";
import { LoginForm } from "./LoginForm";
import { LoginByPhone } from "./LoginByPhone";
import { VerificationCodeForm } from "./VerificationCodeForm";

type RegistrationPopupProps = {};

export const RegistrationPopup: React.FC<RegistrationPopupProps> = () => {
  const [isPhoneLogin, setPhoneLogin] = React.useState<boolean>(false);

  const handleClickLogin = () => {
    setPhoneLogin(true);
  };

  const handleNavbarBackClick = () => {
    setPhoneLogin(false);
  };

  return (
    <>
      <Drawer>
        <Overlay className={styles.drawerContainer}>
          {isPhoneLogin ? (
            <LoginByPhone handleNavbarBackClick={handleNavbarBackClick} />
          ) : (
            <>
              <DrawerHeader />
              <LoginForm
                handleClickLogin={handleClickLogin}
                isPhoneLogin={isPhoneLogin}
              />
            </>
          )}

          {/* <VerificationCodeForm /> */}
        </Overlay>
      </Drawer>
    </>
  );
};
