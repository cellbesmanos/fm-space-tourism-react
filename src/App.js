import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Outlet />
    </div>
  );
}
