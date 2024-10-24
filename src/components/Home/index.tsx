import React from "react";
import Categories from "../AsideLeft/Categories";
import Main from "../../pages/Main";
import { Products } from "../../pages/Products";
import styles from "./Home.module.scss";
import { AsideRight } from "../AsideRight";

type HomeProps = {
  setId: (id: string | null) => void;
  id: string;
};

const Home: React.FC<HomeProps> = ({ id, setId }) => {
  return (
    <section className={styles.sections}>
      <Categories />
      {(id && <Products id={id} setId={setId} />) || (
        <Main id={id} setId={setId} />
      )}
      <AsideRight />
    </section>
  );
};

export default Home;
