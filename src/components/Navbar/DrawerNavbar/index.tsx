import React from "react";
import { NavbarBack } from "../NavbarBack";
import DrawerHeader from "../../Popup/DrawerHeader";
import styles from "./DrawerNavbar.module.scss";

type DrawerNavbarProps = {
  handleNavbarBackClick?: () => void;
  phone?: string;
  isClick?: boolean;
};

export const DrawerNavbar: React.FC<DrawerNavbarProps> = ({
  handleNavbarBackClick,
  phone,
  isClick,
}) => {
  return (
    <div className={styles.drawerNavbar}>
      <div className={styles.root}>
        <div className={styles.navbar}>
          <div className={styles.back}>
            <NavbarBack onClick={handleNavbarBackClick} />
          </div>
          <div className={styles.title}>
            {isClick ? <span>{phone}</span> : null}
          </div>
          <div className={styles.cancel}>
            <DrawerHeader />
          </div>
        </div>
      </div>
    </div>
  );
};