import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import Services from "./components/services/Services";
import Portfolio from "./components/portfoli/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
