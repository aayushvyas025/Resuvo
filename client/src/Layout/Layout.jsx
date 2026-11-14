import { Outlet } from "react-router-dom";
import NavLayout from "../components/NavLayout";

function Layout() {
  return (
        <div className="min-h-screen bg-gray-50">
      <NavLayout />
        <Outlet />
      </div>
  );
}

export default Layout;
