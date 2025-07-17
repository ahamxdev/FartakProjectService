import React from "react";
import Header from "../../components/Header";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

function StudentLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default StudentLayout;