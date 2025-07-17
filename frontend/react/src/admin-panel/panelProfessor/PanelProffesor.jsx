/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "./professorStyles.css";
import logo from "../../assest/img/proffesorPanelImg/logo.svg";
import logOut from "../../assest/img/proffesorPanelImg/logout.svg";
import { NavLink, Outlet } from "react-router-dom";
// import personalInformation from "./personalInformation/personalInformation";

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

      <div className="d-flex flex-row" style={{ height: "calc(100vh - 60px)" }}>
        <div className="main-content">
          <Outlet />
        </div>
        <div className="sidebar py-2 px-3 sideShadow rounded-4 d-flex flex-column">
          <div className="h-1 d-flex gap-3 py-2">
            <div className="bg-primary rounded-circle profImg text-center"></div>
            <div className="h-50 w-50">
              <h5>محمد ایمانی</h5>
              <span className="profInfo ms-1 ps-1 infoBorder">استاد</span>
              <span className="profInfo">25 امتیاز</span>
            </div>
          </div>
          <div className="h-75 d-flex flex-column gap-2">
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? "active-link" : "custom-link"
              }
            >
              رزومه
            </NavLink>
            <NavLink
              to="personalInformation"
              className={({ isActive }) =>
                isActive ? "active-link" : "custom-link"
              }
            >
              اطلاعات شخصی
            </NavLink>
            <div>تقویم کاری</div>
            <div>کلاس آنلاین</div>
            <div>کنکور</div>
            <div>مدریت درخواست ها</div>
            <div>آپلود برنامه کلاسی و کاری</div>
            <div>راهنمای موجود در بخش کلاس آنلاین</div>
            <div>درسنامه‌های مربوط به تکنیک‌های برگزاری کلاس آنلاین</div>
            <div>کیف پول</div>
            <div>تیکت پشتیبانی</div>
            <div>سوالات متداول</div>
            <div>ویرایش اطلاعات</div>
            <div className="text-primary mt-4">تنظیمات</div>
          </div>
        </div>
      </div>
    </div>
  );
}
