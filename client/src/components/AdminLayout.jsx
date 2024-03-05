import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AdminLayout = () => {
  return (
    <div className="w-full xl:flex xl:gap-[30px]">
      <SideBar isAdmin />
      <main className="pt-[121px] xl:w-screen xl:ps-[350px] xl:pt-[50px]">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
