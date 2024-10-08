import React from "react";
import styles from "./CategoryLink.module.scss";
import { Text } from "../../Text";

type CategoryLinkProps = {
  children: React.ReactNode;
  className: string;
};

export const CategoryLink: React.FC<CategoryLinkProps> = ({
  children,
  className,
}) => {
  return (
    <a href="##" className={`${styles.root} ${className}`}>
      <Text className="semiBold">{children}</Text>
    </a>
  );
};
