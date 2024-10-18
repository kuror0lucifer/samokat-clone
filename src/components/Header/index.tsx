import React from "react";
import Search from "../Search";
import logo from "../../assets/header__logo.svg";
import { ButtonL } from "../Buttons/ButtonL";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { RegistrationPopup } from "../RegistrationPopup";
import { showRegistrationPopup } from "../../redux/popup/slice";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { setToken } from "@/redux/auth/slice";
import { ProfilePopup } from "../ProfilePopup";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isPopupVisible = useSelector(
    (state: RootState) => state.popup.isRegistrationPopupVisible
  );

  React.useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      dispatch(setToken(token));
    }
  }, [dispatch]);

  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <header className={styles.header}>
      <Link to="../" className={styles.logo}>
        <img
          src={logo}
          alt="header_logo"
          width={153}
          height={23}
          loading="lazy"
        />
      </Link>

      <Search />
      <ButtonL
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          dispatch(showRegistrationPopup())
        }
      >
        <span>{token ? "Профиль" : "Войти"}</span>
      </ButtonL>
      {isPopupVisible && !token && <RegistrationPopup />}
      {isPopupVisible && token && <ProfilePopup />}
    </header>
  );
};

export default Header;
