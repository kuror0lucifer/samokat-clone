import React from "react";
import styles from "./LoginForm.module.scss";
import { ButtonM } from "../../Buttons/ButtonM";
import { SberIdForm } from "../SberIdForm";
import { HelpCard } from "../HelpCard";

type LoginFormProps = {
  handleClickLoginByPhone?: () => void;
  handleClickLoginByEmail?: () => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({
  handleClickLoginByPhone,
  handleClickLoginByEmail,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.buttons}>
        <ButtonM className={styles.buttonM} onClick={handleClickLoginByPhone}>
          Войти по номеру телефона
        </ButtonM>
        <ButtonM className={styles.buttonM} onClick={handleClickLoginByEmail}>
          Войти по почте
        </ButtonM>
        <SberIdForm />
        <HelpCard />
      </div>
    </div>
  );
};
