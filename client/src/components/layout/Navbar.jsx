import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-white px-4 md:px-8 py-5 flex items-center justify-between shadow-sm sticky top-0 z-50">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Welcome Back 👋
        </h2>

        <p className="text-gray-500 mt-1">
          Let’s achieve your study goals today.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-700 font-bold text-lg">
          C
        </div>

        <button
          onClick={handleLogout}
          className="bg-purple-600 hover:bg-purple-700 transition text-white px-5 py-3 rounded-2xl cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;