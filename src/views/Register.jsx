import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../components/auth";
import NavigateButton from "../components/NavigateButton";
import ViewTitle from "../components/ViewTitle";
import useAuth from "../hooks/useAuth";

export default function Register() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate("/");
  }, [isAuth]);

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
