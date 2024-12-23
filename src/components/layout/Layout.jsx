import React from "react";
import FooterSection from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default Layout;
