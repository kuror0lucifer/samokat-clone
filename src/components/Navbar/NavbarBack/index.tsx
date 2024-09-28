import React from "react";
import styles from "./NavbarBack.module.scss";
import { FaArrowLeft } from "react-icons/fa6";

export const NavbarBack = () => {
  return (
    <button className={styles.return}>
      <FaArrowLeft className={styles.return__icon} />
    </button>
  );
};
