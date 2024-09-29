import React from "react";
import styles from "./LoginByPhone.module.scss";
import { ButtonM } from "../../Buttons/ButtonM";
import { NavbarBack } from "../../Navbar/NavbarBack";
import DrawerHeader from "../../Popup/DrawerHeader";
import InputMask from "react-input-mask";
import { DrawerNavbar } from "../../Navbar/DrawerNavbar";
import { VerificationCodeForm } from "../VerificationCodeForm";

type LoginByPhoneProps = {
  handleNavbarBackClick: () => void;
};

export const LoginByPhone: React.FC<LoginByPhoneProps> = ({
  handleNavbarBackClick,
}) => {
  const [phone, setPhone] = React.useState<string>("+7");

  const [isClick, setIsClick] = React.useState<boolean>(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPhone(e.target.value);
  };

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClick(true);
  };

  return (
    <>
      <DrawerNavbar
        handleNavbarBackClick={handleNavbarBackClick}
        isClick={isClick}
        phone={phone}
      />
      {isClick ? (
        <VerificationCodeForm />
      ) : (
        <>
          <form action="" className={styles.form}>
            <div className={styles.formField}>
              <label htmlFor="phone-input">
                <span className={styles.phoneLabel}>Телефон</span>
                <InputMask
                  id="phone-input"
                  mask="+7 999 999 99 99"
                  value={phone}
                  onChange={handlePhoneChange}
                  maskChar={null}
                >
                  {(
                    inputProps: React.InputHTMLAttributes<HTMLInputElement>
                  ) => (
                    <input
                      {...inputProps}
                      type="tel"
                      className={styles.phoneInput}
                    />
                  )}
                </InputMask>
              </label>
              <div className={styles.button}>
                <ButtonM className={styles.buttonM} onClick={handleClickButton}>
                  <span>Получить код</span>
                </ButtonM>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
};
