import { Outlet } from "react-router";
import { Sidebar } from "./components/Sidebar";

export const Layout = () => {
  return (
    <div className="flex flex-row h-screen w-screen">
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}