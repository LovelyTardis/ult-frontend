import { RegisterForm } from "../components/auth";
import NavigateButton from "../components/NavigateButton";
import ViewTitle from "../components/ViewTitle";

export default function Register() {
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
