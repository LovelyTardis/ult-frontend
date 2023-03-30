import { useState, useRef, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import AuthForm from "./AuthForm";

export function LoginForm() {
  const usernameRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = await login(username, password);

    if (!loginData) return;

    const { data, code } = loginData;
    setError(`${data} | Error code: ${code}`);
  };

  const inputs = {
    Username: {
      type: "text",
      name: "username",
      onChange: (e) => setUsername(e.target.value),
      value: username,
      ref: usernameRef,
    },
    Password: {
      type: "password",
      name: "pass1",
      onChange: (e) => setPassword(e.target.value),
      value: password,
    },
  };

  return (
    <>
      <AuthForm
        className="form-login"
        handleSubmit={handleSubmit}
        inputs={inputs}
        submitButtonText="Login"
      />
      <p>{error}</p>
    </>
  );
}
