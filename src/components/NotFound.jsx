import { Link } from "react-router";
import { useLocalStorage } from "react-use";

export default function NotFound() {
  const [token] = useLocalStorage("token", "");
  return (
    <div className="bg-linear-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center p-4">
      <div className="animate-fade-in bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-custom border border-gray-700 backdrop-blur-sm w-full max-w-md text-center">
        <div className="inline-block p-4 bg-gradient rounded-full mb-6">
          <i className="fas fa-map-signs text-4xl text-white" />
        </div>
        <h1 className="text-8xl font-bold text-white mb-2">404</h1>
        <p className="text-2xl font-semibold text-gray-200 mb-4">Page Not Found</p>
        <p className="text-gray-400 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to={token ? "/dashboard/contacts" : "/login"}
          className="inline-block bg-gradient text-white py-3 px-6 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5"
        >
          <i className="fas fa-home mr-2" /> {token ? "Back to Home" : "Back to Login"}
        </Link>
      </div>
    </div>
  );
}
