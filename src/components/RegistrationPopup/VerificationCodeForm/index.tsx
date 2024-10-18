import React from "react";
import styles from "./VerificationCodeForm.module.scss";

import axios from "axios";
import { ButtonM } from "../../Buttons/ButtonM";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/auth/slice";

type VerificationCodeFormProps = {
  phone?: string;
  email?: string;
};

export const VerificationCodeForm: React.FC<VerificationCodeFormProps> = ({
  phone,
  email,
}) => {
  const input1Ref = React.useRef<HTMLInputElement>(null);
  const input2Ref = React.useRef<HTMLInputElement>(null);
  const input3Ref = React.useRef<HTMLInputElement>(null);
  const input4Ref = React.useRef<HTMLInputElement>(null);

  const [values, setValues] = React.useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  const [message, setMessage] = React.useState<string>("");

  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: string,
    nextInputRef: React.RefObject<HTMLInputElement>
  ) => {
    const newValue = e.target.value;

    setValues((prevValues) => ({
      ...prevValues,
      [inputName]: newValue,
    }));

    if (newValue.length === 1 && nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };

  const collectVerificationCode = () => {
    return `${values.input1}${values.input2}${values.input3}${values.input4}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const verificationCode = collectVerificationCode();

    try {
      const response = await axios.post("http://localhost:4000/auth/verify", {
        email,
        verificationCode,
      });

      if (response.status === 200) {
        const token = response.data.token;

        localStorage.setItem("authToken", token);
        dispatch(setToken(token));

        if (email) {
          localStorage.setItem("email", email);
        }

        window.location.reload();
      }

      setMessage(response.data.message);
    } catch (error) {
      setMessage("Ошибка при подтверждении");
    }
  };

  return (
    <>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="" className={styles.formField}>
          <span>Код из сообщения</span>
          <div className={styles.control}>
            <input
              type="text"
              inputMode="text"
              autoComplete="one-time-code"
              ref={input1Ref}
              value={values.input1}
              maxLength={1}
              onChange={(e) => handleChange(e, "input1", input2Ref)}
            />
            <input
              type="text"
              inputMode="text"
              ref={input2Ref}
              value={values.input2}
              maxLength={1}
              onChange={(e) => handleChange(e, "input2", input3Ref)}
            />
            <input
              type="text"
              inputMode="text"
              ref={input3Ref}
              value={values.input3}
              maxLength={1}
              onChange={(e) => handleChange(e, "input3", input4Ref)}
            />
            <input
              type="text"
              inputMode="text"
              ref={input4Ref}
              value={values.input4}
              maxLength={1}
              onChange={(e) => handleChange(e, "input4", { current: null })}
            />
          </div>
        </label>
        <div className={styles.buttons}>
          <ButtonM type="submit" className={styles.button}>
            Подтвердить
          </ButtonM>
        </div>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};
