import React from "react";
import styles from "./SberIdForm.module.scss";
import { ButtonM } from "../../Buttons/ButtonM";

export const SberIdForm = () => {
  return (
    <ButtonM className={styles.sberId__button}>
      <a href="##">
        <svg
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.sberId__icon}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 0C16.0927 0 18.9337 1.08103 21.1657 2.88421L18.6371 4.74793C17.0315 3.64848 15.0899 3.00354 13 3.00354C7.48924 3.00354 3.00587 7.48999 3.00587 13.0013C3.00587 18.5126 7.48924 22.9965 13 22.9965C18.5134 22.9965 22.9968 18.5126 22.9968 13.0013C22.9968 12.9118 22.9941 12.8223 22.9924 12.7328L25.7912 10.6699C25.9289 11.4245 26 12.2055 26 13.0013C26 20.1807 20.1795 26 13 26C5.82135 26 0 20.1807 0 13.0013C0 5.81931 5.82135 0 13 0ZM23.2856 5.05241C23.9006 5.84651 24.4262 6.71169 24.8456 7.63565L13.0002 16.3673L8.05093 13.2628V9.52921L13.0002 12.6337L23.2856 5.05241Z"
            fill=":logoFill:"
          ></path>
        </svg>
        <span>Войти по Сбер ID</span>
      </a>
    </ButtonM>
  );
};
