import React from "react";
import styles from "./Products.module.scss";
import { InlineSearchProducts } from "./InlineSearchProducts";
import Footer from "../../components/Footer";

type productsProps = {
  setId: (id: string | null) => void;
  id: string;
};

export const Products: React.FC<productsProps> = ({ id, setId }) => {
  return (
    <>
      <main className={styles.content}>
        <InlineSearchProducts id={id} setId={setId} />
        <Footer />
      </main>
    </>
  );
};
