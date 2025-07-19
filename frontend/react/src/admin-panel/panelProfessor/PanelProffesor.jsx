/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "./professorStyles.css";
import logo from "../../assest/img/proffesorPanelImg/logo.svg";
import logOut from "../../assest/img/proffesorPanelImg/logout.svg";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function PanelProfessorBootstrap() {
  return (
    <div className="vh-100 d-flex iranYekan flex-column font-iran overflow-hidden">
      <div className="header d-flex px-5 align-items-center justify-content-between">
        <div className="d-flex-row align-items-center">
          <img src={logo} alt="FarTak" className="m-lg-2" />
          <span className="fs-5">داشبورد استاد</span>
        </div>
        <button className="btn-bg px-2 btn d-flex gap-2">
          <img src={logOut} alt="logOut" />
          <span>خروج از حساب کاربری</span>
        </button>
      </div>

      <div className="d-flex flex-row">
        <div className="main-content">
          <Outlet />
        </div>
        <SideBar />
      </div>
    </div>
  );
}
