import { useDispatch } from "react-redux";
import { logoutUser } from "../services/features/userSlice";
function useLogout() {
  const localStore = localStorage.removeItem("user");
  const dispatch = useDispatch(logoutUser);
  return [localStore, dispatch];
}

export default useLogout;
