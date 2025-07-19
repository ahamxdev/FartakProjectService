/* eslint-disable jsx-a11y/anchor-is-valid */
import "../../index.css";
import logo from "../../assest/img/proffesorPanelImg/logo.svg";
import logOut from "../../assest/img/proffesorPanelImg/logout.svg";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function PanelProfessorBootstrap() {
  return (
    <div className="h-screen flex flex-col font-iran overflow-y-hidden">
      
      <div className="bg-slate-300 py-2 flex px-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="FarTak" className="h-8 w-auto" />
          <span className="text-lg">داشبورد استاد</span>
        </div>
        <button className="bg-yellow-600 hover:bg-yellow-600 hover:text-white transition-all duration-300 text-white px-3 py-1 rounded flex items-center gap-2">
          <img src={logOut} alt="logOut" />
          <span>خروج از حساب کاربری</span>
        </button>
      </div>

      <div className="flex flex-row h-screen">
        <div className="flex-grow mt-10 mr-[350px] overflow-hidden">
          <Outlet />
        </div>
        <SideBar />
      </div>
    </div>
  );
}
