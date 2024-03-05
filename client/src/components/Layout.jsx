import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-28 font-roboto">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
