import React from "react";
import styles from "./LoginByPhone.module.scss";
import { ButtonM } from "../../Buttons/ButtonM";
import { NavbarBack } from "../../Navbar/NavbarBack";
import DrawerHeader from "../../Popup/DrawerHeader";
import InputMask from "react-input-mask";

export const LoginByPhone: React.FC = () => {
  const [phone, setPhone] = React.useState<string>("+7");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPhone(e.target.value);
  };

  return (
    <>
      <div className={styles.drawerNavbar}>
        <div className={styles.root}>
          <div className={styles.navbar}>
            <div className={styles.navbar__back}>
              <NavbarBack />
            </div>
            <div className={styles.navbar__cancel}>
              <DrawerHeader />
            </div>
          </div>
        </div>
      </div>
      <form action="" className={styles.form}>
        <div className={styles.formField}>
          <label htmlFor="">
            <span className={styles.phoneLabel}>Телефон</span>
            <InputMask
              mask="+7 999 999 99 99"
              value={phone}
              onChange={handlePhoneChange}
              maskChar={null}
            >
              {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
                <input
                  {...inputProps}
                  type="tel"
                  className={styles.phoneInput}
                />
              )}
            </InputMask>
          </label>
          <div className={styles.button}>
            <ButtonM className={styles.buttonM}>
              <span>Получить код</span>
            </ButtonM>
          </div>
        </div>
      </form>
    </>
  );
};
