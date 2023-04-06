import { useDispatch, useSelector } from "react-redux";
import {
  endFetching,
  loginAction,
  logoutAction,
  startFeching,
} from "../redux/slices";
import { loginThunk, autoLoginThunk } from "../redux/thunk/authThunk";

export default function useAuth() {
  const dispatch = useDispatch();

  const { user, isAuth, fetching } = useSelector((state) => state.auth);

  const autoLogin = async () => {
    const token = localStorage.getItem("user-token");

    if (token === null) {
      dispatch(endFetching());
      return;
    }

    dispatch(startFeching());
    const data = await autoLoginThunk(token);

    if (data.error) {
      dispatch(endFetching());
      return data;
    }

    dispatch(loginAction(data.data));
  };

  const login = async (username, password) => {
    const data = await loginThunk(username, password);

    if (data.error) return data;
    dispatch(loginAction(data.data));
  };

  const register = (token) => {
    localStorage.setItem("user-token", token);
    autoLogin();
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  return { user, isAuth, fetching, login, autoLogin, register, logout };
}
