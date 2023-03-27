import { LoginForm } from "../components/auth/LoginForm";
import ViewTitle from "../components/ViewTitle";

export default function Login() {
  return (
    <div>
      <ViewTitle title="Login" />
      <LoginForm />
    </div>
  );
}
