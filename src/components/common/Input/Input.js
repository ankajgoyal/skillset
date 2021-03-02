import React from "react";
import styles from "./input.module.css";

const Input = ({ placeholder, value, onChange, error }) => {
  return (
    <>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {(error && !value) && <div className={styles.validationMessage}>* Please Provide  Email</div>}
      {(error && value) && <div className={styles.validationMessage}>* Please Provide valid Email</div>}

    </>
  );
};

export default Input;
