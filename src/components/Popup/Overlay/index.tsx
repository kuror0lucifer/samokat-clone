import React from "react";
import styles from "./Overlay.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { DrawerContainer } from "../DrawerContainer";
import { hidePopup } from "../../../redux/popup/slice";

type OverlayProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Overlay: React.FC<OverlayProps> = ({ children, className }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const dispatch = useDispatch();

  const isPopupVisible = useSelector(
    (state: RootState) =>
      state.popup.visibleProductId !== null ||
      state.popup.isRegistrationPopupVisible
  );

  React.useEffect(() => {
    if (isPopupVisible) {
      setIsMounted(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else if (isMounted) {
      setIsAnimating(false);
      setTimeout(() => setIsMounted(false), 500);
    }
  }, [isPopupVisible, isMounted]);

  return (
    <>
      <div
        className={styles.overlay}
        onClick={() => dispatch(hidePopup())}
      ></div>
      <DrawerContainer isAnimating={isAnimating} className={className}>
        {children}
      </DrawerContainer>
    </>
  );
};
