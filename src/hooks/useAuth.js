import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../redux/slices";
import { loginThunk } from "../redux/thunk/authThunk";

export default function useAuth() {
  const dispatch = useDispatch();

  const { user, isAuth } = useSelector(({ auth }) => auth);

  const login = async (username, password) => {
    const data = await loginThunk(username, password);
    dispatch(loginAction(data));
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  return { user, isAuth, login, logout };
}
