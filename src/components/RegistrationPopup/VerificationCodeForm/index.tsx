import React from "react";
import styles from "./VerificationCodeForm.module.scss";

type VerificationCodeFormProps = {
  phone?: string;
};

export const VerificationCodeForm: React.FC<VerificationCodeFormProps> = ({
  phone,
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

  return (
    <>
      <form action="" className={styles.form}>
        <label htmlFor="" className={styles.formField}>
          <span>Код из смс</span>
          <div className={styles.control}>
            <input
              type="text"
              inputMode="numeric"
              pattern="\d{1}"
              autoComplete="one-time-code"
              ref={input1Ref}
              value={values.input1}
              maxLength={1}
              onChange={(e) => handleChange(e, "input1", input2Ref)}
            />
            <input
              type="text"
              inputMode="numeric"
              pattern="\d{1}"
              ref={input2Ref}
              value={values.input2}
              maxLength={1}
              onChange={(e) => handleChange(e, "input2", input3Ref)}
            />
            <input
              type="text"
              inputMode="numeric"
              pattern="\d{1}"
              ref={input3Ref}
              value={values.input3}
              maxLength={1}
              onChange={(e) => handleChange(e, "input3", input4Ref)}
            />
            <input
              type="text"
              inputMode="numeric"
              pattern="\d{1}"
              ref={input4Ref}
              value={values.input4}
              maxLength={1}
              onChange={(e) => handleChange(e, "input4", { current: null })}
            />
          </div>
        </label>
      </form>
    </>
  );
};
