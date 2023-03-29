import { LoginForm } from "../components/auth/LoginForm";
import NavigateButton from "../components/NavigateButton";
import ViewTitle from "../components/ViewTitle";

export default function Login() {
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
