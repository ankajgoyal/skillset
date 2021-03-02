import React, { useEffect, useState } from "react";
import Input from "../common/Input/Input";
import TextArea from "../common/TextArea/TextArea";
import styles from "./userDetailsForm.module.css";
const emailPattern = new RegExp(
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
);

const UserDetailsForm = ({ addItemToList }) => {
  const [formData, setFormData] = useState({});
  const [emailError, setEmailError] = useState(false);
  const [textError, setTextError] = useState(false);

  const setFormProperty = (value, property) => {
    setFormData({ ...formData, [property]: value });
  };

  const onSubmit = () => {
    if (formData.email && formData.comment) {
      if (!emailPattern.test(formData["email"])) {
        setEmailError(true);
      } else {
        addItemToList(formData);
        setFormData({});
      }
    } else {
      if (!formData.email) {
        setEmailError(true);
      }
      if (!formData.comment) {
        setTextError(true);
      }
    }
  };

  useEffect(() => {
    if (formData.comment) {
      setTextError(false);
    }
    if (formData.email) {
      if (emailPattern.test(formData["email"])) {
        setEmailError(false);
      }
    }
  }, [formData]);

  debugger
  return (
    <div className={styles.formContainer}>
      <Input
        placeholder="Email"
        value={formData.email || ''}
        onChange={(e) => setFormProperty(e.target.value, "email")}
        validationError={emailError}
        error={emailError}
      />
      <TextArea
        error={textError}
        placeholder="Message"
        value={formData.comment || ''}
        onChange={(e) => {
          setFormProperty(e.target.value, "comment");
        }}
      />
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={onSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default UserDetailsForm;
