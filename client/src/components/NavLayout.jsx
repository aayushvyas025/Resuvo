import { Link, useNavigate } from "react-router-dom";
import appLogo from "../assets/app-logo.png";
import { LogOut } from "lucide-react";

function NavLayout() {
  const user = { name: "Aayush Vyas" };
  const navigate = useNavigate();

  function handleLogoutUser() {
    navigate("/");
  }

  return (
    <div className="shadow bg-white">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2.5 text-slate-800 transition-all">
        <Link to="/">
          <img
            src={appLogo}
            className="size-8 min-w-0 object-contain lg:size-10"
            alt="Resuvo logo"
          />
        </Link>
        <div className="flex gap-2 justify-between items-center text-base">
          <p className="max-sm:hidden">Hi, {user?.name} </p>
          <button
            type="button"
            onClick={handleLogoutUser}
            className="text-indigo-500 transition-all ease-in-out duration-500 hover:text-indigo-800 px-2 py-2 rounded-full active:scale-95 hover:bg-indigo-200/60"
          >
            <LogOut className="size-5" />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavLayout;
