import React from "react";
import Search from "../Search";
import logo from "../../assets/header__logo.svg";
import { ButtonL } from "../Buttons/ButtonL";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { RegistrationPopup } from "../RegistrationPopup";
import { showRegistrationPopup } from "../../redux/popup/slice";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isPopupVisible = useSelector(
    (state: RootState) => state.popup.isRegistrationPopupVisible
  );

  return (
    <header className={styles.header}>
      <a href="##" className={styles.logo}>
        <img
          src={logo}
          alt="header_logo"
          width={153}
          height={23}
          loading="lazy"
        />
      </a>

      <Search />
      <ButtonL
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          dispatch(showRegistrationPopup())
        }
      >
        <span>Войти</span>
      </ButtonL>
      {isPopupVisible && <RegistrationPopup />}
    </header>
  );
};

export default React.memo(Header);
