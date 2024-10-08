import React from "react";
import styles from "./AsideRight.module.scss";
import { EmptyAddress } from "./EmptyAddress";

export const AsideRight = () => {
  return (
    <div className={styles.right}>
      <div className={styles.sidebar}>
        <EmptyAddress />
      </div>
    </div>
  );
};
