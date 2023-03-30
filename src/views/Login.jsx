import { Navigate } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";
import NavigateButton from "../components/NavigateButton";
import ViewTitle from "../components/ViewTitle";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { isAuth } = useAuth();
  if (isAuth) return <Navigate to={"/"} replace />;

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
