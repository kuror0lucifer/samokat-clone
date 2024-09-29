import React from "react";
import styles from "./NavbarBack.module.scss";
import { FaArrowLeft } from "react-icons/fa6";

type NavbarBackProps = {
  onClick?: () => void;
};
export const NavbarBack: React.FC<NavbarBackProps> = ({ onClick }) => {
  return (
    <button className={styles.return} onClick={onClick}>
      <FaArrowLeft className={styles.return__icon} />
    </button>
  );
};
