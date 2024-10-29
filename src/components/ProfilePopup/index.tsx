import React from "react";
import ReactDOM from "react-dom";
import styles from "./ProfilePopup.module.scss";
import { Drawer } from "../Popup/Drawer";
import { Overlay } from "../Popup/Overlay";
import DrawerHeader from "../Popup/DrawerHeader";
import { ProfileDetails } from "./ProfileDetails";
import { ProfileSettings } from "./ProfileSettings";
import { DrawerNavbar } from "../Navbar/DrawerNavbar";
import { NameSettings } from "./ProfileSettings/NameSettings";

export const ProfilePopup: React.FC = () => {
  const [showSettings, setShowSettings] = React.useState<boolean>(false);

  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) {
    console.error("Элемент с ID 'portal-root' не найден в DOM.");
    return null;
  }

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleNavbarBackClick = () => {
    setShowSettings(false);
  };

  return ReactDOM.createPortal(
    <>
      <Drawer>
        <Overlay className={styles.drawerContainer}>
          <DrawerHeader />
          {showSettings ? (
            <>
              <DrawerNavbar handleNavbarBackClick={handleNavbarBackClick} />
              <ProfileSettings />
            </>
          ) : (
            <ProfileDetails onSettingsClick={handleSettingsClick} />
          )}
        </Overlay>
      </Drawer>
    </>,
    portalRoot
  );
};
