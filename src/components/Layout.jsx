import { useLocalStorage, useEffectOnce } from "react-use";
import { useNavigate, Outlet } from "react-router";

export default function Layout() {
  const [token] = useLocalStorage("token", "");
  const navigate = useNavigate();

  useEffectOnce(() => {
    if (token) navigate({ pathname: "/dashboard/contacts" });
    else navigate({ pathname: "/login" });
  });

  return (
    <div className="bg-linear-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center p-4">
      <Outlet />
    </div>
  );
}
