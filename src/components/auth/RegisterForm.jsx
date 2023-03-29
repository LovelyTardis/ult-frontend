import { useEffect, useRef, useState } from "react";
import AuthForm from "./AuthForm";

export function RegisterForm() {
  const nameRef = useRef();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, username, email, password, password2 });
    // TODO: CREATE REGISTER THUNK
  };

  const inputs = {
    Name: {
      type: "text",
      name: "name",
      onChange: (e) => setName(e.target.value),
      value: name,
      ref: nameRef,
    },
    Username: {
      type: "text",
      name: "username",
      onChange: (e) => setUsername(e.target.value),
      value: username,
    },
    Email: {
      type: "email",
      name: "email",
      onChange: (e) => setEmail(e.target.value),
      value: email,
    },
    Password: {
      type: "password",
      name: "pass1",
      onChange: (e) => setPassword(e.target.value),
      value: password,
    },
    Password2: {
      type: "password",
      name: "pass2",
      onChange: (e) => setPassword2(e.target.value),
      value: password2,
    },
  };

  return (
    <>
      <AuthForm
        className="form-register"
        handleSubmit={handleSubmit}
        inputs={inputs}
        submitButtonText="Register"
      />
      <p>{error}</p>
    </>
  );
}
