import React from "react";
import styles from "./HelpCard.module.scss";

export const HelpCard = () => {
  return (
    <div className={styles.root}>
      <div className={styles.arrow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="10"
          fill="none"
        >
          <path
            fill="#fff"
            d="M13 0c-1.444 0-2.483 1.593-5.056 4.375C5.056 7.5 4.334 9 0 9v1h26V9c-4.333 0-5.056-1.5-7.944-4.625C15.483 1.593 14.444 0 13 0"
          ></path>
        </svg>
      </div>
      <div className={styles.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="url(#sber_spasibo_colored_svg__a)"
            d="M12 2C6.5 2 2 6.5 2 12v10h10c5.5 0 10-4.5 10-10S17.5 2 12 2m.083 15.333c-2.916 0-5.333-2.417-5.333-5.333s2.417-5.333 5.333-5.333c1.667 0 3.166.75 4.167 2l-2.167 1.75a2.54 2.54 0 0 0-2-.917c-1.417 0-2.5 1.166-2.5 2.5 0 1.416 1.166 2.5 2.5 2.5.75 0 1.5-.333 2-1l2.25 1.75c-1 1.333-2.583 2.083-4.25 2.083"
          ></path>
          <defs>
            <linearGradient
              id="sber_spasibo_colored_svg__a"
              x1="21.866"
              x2="-0.818"
              y1="2"
              y2="5.995"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0BADBF"></stop>
              <stop offset="0.51" stop-color="#34C61A"></stop>
              <stop offset="1" stop-color="#E1EE05"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div>
        <p className={styles.title}>СберСпасибо</p>
        <p className={styles.description}>
          Войдите по Сбер ID, чтобы получать и списывать бонусы
        </p>
      </div>
    </div>
  );
};
