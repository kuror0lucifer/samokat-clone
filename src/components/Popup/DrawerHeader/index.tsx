import React from "react";
import styles from "./DrawerHeader.module.scss";
import { hidePopup } from "../../../redux/popup/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type DrawerHeaderProps = {};

export const DrawerHeader: React.FC<DrawerHeaderProps> = () => {
  const dispatch = useDispatch();
  const isPopupVisible = useSelector(
    (state: RootState) => state.popup.isPopupVisible
  );

  return (
    <div className={styles.drawer__header}>
      <button
        className={styles.navigation__button}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          dispatch(hidePopup())
        }
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fill="currentColor"
              d="M18.658 5.342a1.167 1.167 0 0 1 0 1.65l-4.1 4.1a1.284 1.284 0 0 0-.001 1.815l4.101 4.101a1.167 1.167 0 0 1-1.65 1.65l-4.1-4.1a1.283 1.283 0 0 0-1.815 0l-1.768 1.767-.001.001-2.332 2.332a1.167 1.167 0 0 1-1.65-1.65l4.1-4.1.002-.002c.5-.5.5-1.313-.001-1.814l-4.101-4.1a1.167 1.167 0 0 1 1.65-1.65l2.332 2.332 1.768 1.769a1.283 1.283 0 0 0 1.815 0l4.101-4.101a1.167 1.167 0 0 1 1.65 0"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default React.memo(DrawerHeader);
