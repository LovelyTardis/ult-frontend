import { LogoutForm } from "../components/auth";
import ViewTitle from "../components/ViewTitle";

export default function Logout() {
  return (
    <>
      <ViewTitle title="Log out" />
      <LogoutForm />
    </>
  );
}
