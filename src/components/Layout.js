import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="pt-[100px]">
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
