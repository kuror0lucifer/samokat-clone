import React from "react";
import styles from "./NameSettings.module.scss";

import { ButtonM } from "@/components/Buttons/ButtonM";
import axios from "axios";
import { VscCheck } from "react-icons/vsc";

export const NameSettings: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [success, setSuccess] = React.useState<boolean>(false);

  const email = localStorage.getItem("email");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/settings/nameChange",
        { name, email }
      );
      if (response.status === 200) {
        setSuccess(true);
      } else {
        setMessage("Ошибка при смене имени");
      }
    } catch (error) {
      setMessage("Ошибка при смене имени");
    }
  };

  return (
    <>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label htmlFor="name-input">
            <span className={styles.nameLabel}>Имя</span>
            <input
              type="text"
              onChange={handleNameChange}
              className={styles.nameInput}
              required
            />
          </label>
          <div className={styles.button}>
            <ButtonM className={styles.buttonM} type="submit">
              {success ? <VscCheck /> : <span>Сохранить</span>}
            </ButtonM>
          </div>
        </div>
      </form>
    </>
  );
};
