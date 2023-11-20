import { Outlet } from "react-router-dom";
import Header from "./Header";
import ShoppingCart from "./ShoppingCart";
const Layout = () => {
  return (
    <>
      <div className="bg-white">
        <Header />
        <Outlet />
        <ShoppingCart />
      </div>
    </>
  );
};

export default Layout;
