import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
