import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components";

export default function App() {
  return (
    <div>
      <main>
        <Header />

        <Outlet />
      </main>
    </div>
  );
}
