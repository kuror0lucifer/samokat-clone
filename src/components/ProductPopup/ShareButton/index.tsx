import React from "react";
import styles from "./ShareButton.module.scss";

export const ShareButton = () => {
  return (
    <div className={styles.button}>
      <button>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
          >
            <path
              fill="#404040"
              d="M10.442 2.82c-.333-.327-.902-.096-.902.366v1.312c0 .527-.412.957-.927 1.067-1.383.296-2.774 1.033-3.917 2.057-1.484 1.33-2.587 3.178-2.695 5.247a.44.44 0 0 0 .337.451.45.45 0 0 0 .511-.227c.717-1.36 1.43-2.328 2.455-2.97.796-.499 1.81-.818 3.217-.94.558-.049 1.019.408 1.019.967v1.213c0 .462.569.693.902.367l4.004-3.931a.73.73 0 0 0 0-1.048z"
            ></path>
          </svg>
          <span>Поделиться</span>
        </div>
      </button>
    </div>
  );
};
