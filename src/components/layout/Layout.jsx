import React from "react";
import FooterSection from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Chatbox from "../chat/ChatBox";
const Layout = () => {
  return (
    <div>
      <Header />
      <Chatbox />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default Layout;
