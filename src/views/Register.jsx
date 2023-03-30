import { Navigate } from "react-router-dom";
import { RegisterForm } from "../components/auth";
import NavigateButton from "../components/NavigateButton";
import ViewTitle from "../components/ViewTitle";
import useAuth from "../hooks/useAuth";

export default function Register() {
  const { isAuth } = useAuth();
  if (isAuth) return <Navigate to={"/"} replace />;

  return (
    <div>
      <ViewTitle title={"Register"} />
      <RegisterForm />
      <NavigateButton
        navigateTo="/login"
        text="Already registered?"
        buttonText="Login"
      />
    </div>
  );
}
