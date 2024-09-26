import React from "react";
import Search from "./Search";
import logo from "../assets/header__logo.svg";
import { ButtonL } from "./Buttons/ButtonL";

const Header: React.FC = () => {
  return (
    <header className="header">
      {<img src={logo} alt="header_logo" className="header__logo" />}
      <Search />
      <ButtonL>
        <span>Войти</span>
      </ButtonL>
    </header>
  );
};

export default React.memo(Header);
