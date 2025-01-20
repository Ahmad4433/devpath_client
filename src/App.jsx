import React from "react";
import CreateClient from "./components/client-account/CreateClient";
import CreateInventory from "./components/inventory/CreateInventory";
import { Routes, Route } from "react-router-dom";
import AddFLoor from "./components/floors/AddFLoor";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AddFLoor />} />
    </Routes>
  );
};

export default App;
