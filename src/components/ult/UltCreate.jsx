import React from "react";
import { useState } from "react";
import { apiCall } from "../../helpers/apiCall";
import styles from "./UltCreate.module.css";

export default function UltCreate() {
  const [formValues, setFormValues] = useState({
    message: "",
  });

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

        console.log("Ult created correctly");
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
      {/* <input
        className={styles["button-create"]}
        type="submit"
        name="Post ult"
      /> */}
      <button className={styles["button-create"]} type="submit">
        Post ult
      </button>
    </form>
  );
}

{
  /* <script define:vars={{ apiUrl }}>

</script> */
}
