import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";
import NavigateButton from "../components/NavigateButton";
import ViewTitle from "../components/ViewTitle";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate("/");
  }, [isAuth]);

  return (
    <div>
      <ViewTitle title="Login" />
      <LoginForm />
      <NavigateButton
        navigateTo="/register"
        text="Don't you have an account?"
        buttonText="Register"
      />
    </div>
  );
}
