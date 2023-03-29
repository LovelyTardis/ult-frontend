import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../redux/slices";
import { loginThunk, autoLoginThunk } from "../redux/thunk/authThunk";

export default function useAuth() {
  const dispatch = useDispatch();

  const { user, isAuth } = useSelector(({ auth }) => auth);

  const autoLogin = async () => {
    const token = localStorage.getItem("user-token");

    if (token === null) return;

    const data = await autoLoginThunk(token);

    if (data.error) return data;
    dispatch(loginAction(data.data));
  };

  const login = async (username, password) => {
    const data = await loginThunk(username, password);

    if (data.error) return data;
    dispatch(loginAction(data.data));
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  return { user, isAuth, login, autoLogin, logout };
}
