import React from "react";
import styles from "./InlineSearch.module.scss";
import { CatalogPage } from "../CatalogPage";
import WorkingHours from "../../../components/WorkingHours";

type InlineSearchProps = {
  id: string;
  setId: (id: string) => void;
};

export const InlineSearch: React.FC<InlineSearchProps> = ({ id, setId }) => {
  const currentHours: Date = new Date();
  const offHours: number[] = [23, 0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <div className={styles.header}>
        {offHours.includes(currentHours.getHours()) ? <WorkingHours /> : null}

        <div className={styles.contentHeader}></div>
      </div>
      <div
        className={styles.content}
        style={{ minHeight: "calc(-160px + 100vh)" }}
      >
        <div style={{ opacity: "1" }}>
          <CatalogPage id={id} setId={setId} />
        </div>
      </div>
    </>
  );
};
