import { useLocalStorage, useEffectOnce } from "react-use";
import { useNavigate } from "react-router";
import { alertError } from "../../lib/alert";
import { userLogout } from "../../lib/api/UserApi";

export default function UserLogout() {
  const [token, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();

  async function handleLogout() {
    const response = await userLogout(token);
    const responseBody = await response.json();

    console.log("handleLogout response", response);
    console.log("handleLogout responseBody", responseBody);

    if (response.status === 200) {
      setToken("");
      navigate({ pathname: "/login" });
    } else {
      await alertError(responseBody?.errors || "Failed to logout user");
    }
  }

  useEffectOnce(() => {
    handleLogout();
  });

  return <div>UserLogout</div>;
}
