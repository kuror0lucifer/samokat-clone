import React from "react";
import styles from "./MapContainer.module.scss";

export const MapContainer = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img src="../../../assets/map.png" alt="map" className={styles.map} />
      </div>
    </div>
  );
};
