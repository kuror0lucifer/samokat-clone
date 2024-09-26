import React from "react";
import styles from "./LoginForm.module.scss";
import { ButtonM } from "../../Buttons/ButtonM";
import { SberIdForm } from "../SberIdForm";
import { HelpCard } from "../HelpCard";

export const LoginForm = () => {
  return (
    <div className={styles.root}>
      <div className={styles.buttons}>
        <ButtonM className={styles.buttonM}>Войти по номеру телефона</ButtonM>
        <SberIdForm />
        <HelpCard />
      </div>
    </div>
  );
};
