import React from "react";
import styles from "./CartHeader.module.scss";
import { Text } from "@/components/Text";

export const CartHeader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.address}>
        <Text className="h3Bold">Ваш адрес</Text>
      </div>
      <Text className="h3Bold" style={{ color: "rgb(166,166,166)" }}>
        15 минут
      </Text>
    </div>
  );
};
