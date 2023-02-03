import React from "react";
import { apiCall } from "../../helpers/apiCall";
import styles from "./UltCreate.module.css";

export default function UltCreate({ refreshUlts }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const textAreaValue = e.target[0].value;

    (async () => {
      try {
        const { error, code, data } = await apiCall("/ult", "POST", {
          message: textAreaValue,
        });

        if (error) {
          console.error(code, data);
          return;
        }
        refreshUlts();
        e.target[0].value = "";

        // TODO: PUSH A NOTIFICATION OR SOMETHING
      } catch (err) {
        console.error(err);
      }
    })();
  };

  return (
    <form className={styles["create-ult"]} onSubmit={handleSubmit}>
      <textarea
        name="ult-text"
        placeholder="Write your feelings..."
        autoCapitalize="sentences"
        minLength={1}
        maxLength={100}
        className={styles["ult-text"]}
      ></textarea>
      <button className={styles["button-create"]} type="submit">
        Post ult
      </button>
    </form>
  );
}
