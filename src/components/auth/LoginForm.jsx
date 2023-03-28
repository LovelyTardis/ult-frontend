import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export function LoginForm() {
  const usernameRef = useRef();
  const errorRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = await login(username, password);

    if (!loginData) return navigate("/");

    const { data, code } = loginData;
    setError(`${data} | Error code: ${code}`);
  };

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          ref={usernameRef}
          onChange={handleUserInput}
          value={username}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={handlePasswordInput}
          value={password}
          required
        />
        <button type="submit">Log in</button>
      </form>
      <p ref={errorRef}>{error}</p>
    </>
  );
}
