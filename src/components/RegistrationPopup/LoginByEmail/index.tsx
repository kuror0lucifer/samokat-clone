import React from "react";
import { DrawerNavbar } from "../../Navbar/DrawerNavbar";
import { VerificationCodeForm } from "../VerificationCodeForm";

import styles from "./LoginByEmail.module.scss";
import { ButtonM } from "../../Buttons/ButtonM";

import axios from "axios";

type LoginByEmailProps = {
  handleNavbarBackClick: () => void;
};

export const LoginByEmail: React.FC<LoginByEmailProps> = ({
  handleNavbarBackClick,
}) => {
  const [email, setEmail] = React.useState<string>("");
  const [isClick, setIsClick] = React.useState<boolean>(false);

  const [message, setMessage] = React.useState<string>("");

  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleClickButton = () => {
    if (!validateEmail(email)) {
      setErrorMessage("Введите корректный email");
    } else {
      setErrorMessage("");
      setIsClick(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Введите корректный email");
      return;
    }

    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:4000/auth/authentication",
        {
          email,
        }
      );

      setMessage(response.data.message);
      setIsClick(true);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.message || "Ошибка при регистрации");
      } else {
        setMessage("Ошибка при регистрации");
      }
    }
  };
  return (
    <>
      <DrawerNavbar
        handleNavbarBackClick={handleNavbarBackClick}
        isClick={isClick}
        email={email}
      />
      {isClick ? (
        <VerificationCodeForm email={email} />
      ) : (
        <>
          <form action="" className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formField}>
              <label htmlFor="email-input">
                <span className={styles.emailLabel}>Email</span>
                <input
                  type="email"
                  onChange={handleEmailChange}
                  className={styles.emailInput}
                  required
                />
              </label>
              {errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}
              <div className={styles.button}>
                <ButtonM className={styles.buttonM} onClick={handleClickButton}>
                  <span>Получить код</span>
                </ButtonM>
              </div>
            </div>
          </form>
          {message && <p>{message}</p>}
        </>
      )}
    </>
  );
};
