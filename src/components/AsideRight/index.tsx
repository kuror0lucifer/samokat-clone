import React from "react";
import styles from "./AsideRight.module.scss";
import { EmptyAddress } from "./EmptyAddress";
import { CartPreview } from "../CartPreview";

export const AsideRight: React.FC = () => {
  return (
    <aside className={styles.right}>
      <div className={styles.sidebar}>
        {/* <EmptyAddress /> */}
        <CartPreview />
      </div>
    </aside>
  );
};
