import React from "react";
import styles from "./AsideRight.module.scss";
import { EmptyAddress } from "./EmptyAddress";
import { CartPreview } from "../AsideRight/CartPreview";

export const AsideRight: React.FC = () => {
  return (
    <aside className={styles.right}>
      <div className={styles.sidebar}>
        {localStorage.getItem("email") ? <CartPreview /> : <EmptyAddress />}
      </div>
    </aside>
  );
};
