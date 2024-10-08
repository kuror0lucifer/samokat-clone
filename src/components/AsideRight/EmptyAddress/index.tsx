import React from "react";
import styles from "./EmptyAddress.module.scss";
import { AddressConfirm } from "../AddressConfirm";
import { MapContainer } from "../MapContainer";

export const EmptyAddress = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.badgeWrapper}>
        <AddressConfirm />
      </div>
      <div className={styles.map}>
        <MapContainer />
      </div>
    </div>
  );
};
