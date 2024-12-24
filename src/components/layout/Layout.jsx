import React from "react";
import FooterSection from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Chatbox from "../chat/ChatBox";
import WhatsAppButton from "../whatsapp/Whatsapp";
const Layout = () => {
  return (
    <div>
      <Header />
      <Chatbox />
      <WhatsAppButton />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default Layout;
