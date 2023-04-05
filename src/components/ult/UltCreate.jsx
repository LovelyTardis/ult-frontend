import { useEffect, useState } from "react";
import { apiCall } from "../../helpers/apiCall";
import useAuth from "../../hooks/useAuth";
import "./UltCreate.css";
import { CardHeader } from "./card";

export default function UltCreate({ refreshUlts = null }) {
  const maxChars = 100;
  const { user } = useAuth();
  const [charCounter, setCharCounter] = useState(maxChars);

  useEffect(() => {
    setCharCounter(maxChars);
  }, [maxChars]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textAreaValue = e.target[0].value;

    try {
      const { error, code, data } = await apiCall("/ult/create", "POST", {
        message: textAreaValue,
      });

      if (error) {
        console.error(code, data);
        return;
      }

      if (refreshUlts) refreshUlts();

      setCharCounter(maxChars);
      e.target[0].value = "";
      // TODO: PUSH A NOTIFICATION OR SOMETHING
    } catch (err) {
      console.error(err);
    }
  };

  const handleOnChange = (e) => {
    setCharCounter(maxChars - e.target.value.length);
  };

  return (
    <div className="ult-create">
      <CardHeader user={user} />
      <form className="form-ult-create" onSubmit={handleSubmit}>
        <textarea
          name="ult-text"
          className="form-textarea"
          placeholder="Write your feelings..."
          autoComplete="off"
          autoCapitalize="sentences"
          minLength={1}
          maxLength={maxChars}
          onChange={handleOnChange}
        ></textarea>
        <div className="form-right">
          <span>
            {charCounter}/{maxChars}
          </span>
          <button className="form-button" type="submit">
            <span className="material-icons">insert_comment</span>Publish
          </button>
        </div>
      </form>
    </div>
  );
}
