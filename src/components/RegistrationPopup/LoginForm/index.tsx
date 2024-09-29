import React from "react";
import styles from "./LoginForm.module.scss";
import { ButtonM } from "../../Buttons/ButtonM";
import { SberIdForm } from "../SberIdForm";
import { HelpCard } from "../HelpCard";

type LoginFormProps = {
  handleClickLogin: () => void;
  isPhoneLogin: boolean;
};

export const LoginForm: React.FC<LoginFormProps> = ({
  handleClickLogin,
  isPhoneLogin,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.buttons}>
        <ButtonM className={styles.buttonM} onClick={handleClickLogin}>
          Войти по номеру телефона
        </ButtonM>
        <SberIdForm />
        <HelpCard />
      </div>
    </div>
  );
};
