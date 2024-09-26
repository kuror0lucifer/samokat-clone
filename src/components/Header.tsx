import React from "react";
import Search from "./Search";
import logo from "../assets/header__logo.svg";
import { ButtonL } from "./Buttons/ButtonL";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { RegistrationPopup } from "./RegistrationPopup";
import { showRegistrationPopup } from "../redux/popup/slice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isPopupVisible = useSelector(
    (state: RootState) => state.popup.isRegistrationPopupVisible
  );

  return (
    <header className="header">
      {<img src={logo} alt="header_logo" className="header__logo" />}
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
