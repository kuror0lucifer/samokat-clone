import React from "react";
import styles from "./AddressConfirm.module.scss";
import { Text } from "../../Text";
import { ButtonS } from "../../Buttons/ButtonS";

export const AddressConfirm = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Text className="h4Bold">Ваш город Москва?</Text>
      </div>
      <Text className="p1SemiBold">Товары и акции зависят от адреса</Text>
      <div className={styles.buttons}>
        <ButtonS className="theme_primary">Да, верно</ButtonS>
        <ButtonS className="theme_secondary">Нет, другой</ButtonS>
      </div>
    </div>
  );
};
