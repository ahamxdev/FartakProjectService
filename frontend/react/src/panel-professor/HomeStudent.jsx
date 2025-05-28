import React from "react";
import "../styles/home.css";


import { Link } from 'react-router-dom';


const DashboardLayout = () => {
  return (
    <>
      <header>
        <div className="header--container">
          <div className="header__left">
            <div className="header--dashobord">
              <img src="../img/Link → logo.png" alt="" />
              <p className="header__right--para">|</p>
              <img className="header__right--img" src="../img/img-person.jpg" alt="person" />
              <div className="header--dashbord-p-home">
                <p>پروفایل شخصی</p>
              </div>
            </div>

            <div className="search-container">
              <button className="add-project">
                <img src="../img/plus.svg" alt="add-project" />
              </button>
              <p className="add-project-para">افزودن پروژه</p>
              <input type="text" className="search-input-home" placeholder="دنبال چه چیزی میگردید؟" />
              <img src="../img/search 01.svg" className="search-icon-home" alt="search" />
            </div>

            <p className="header__right--para">|</p>
            <img className="header__left--img" src="../img/setting.svg" alt="" />
            <p className="header__right--para">|</p>
            <img className="header__left--img" src="../img/notification 03.svg" alt="" />
            <p className="header__right--para">|</p>
            <img className="header__left--img" src="../img/out.svg" alt="" />
          </div>
        </div>
      </header>

      <div className="container">
        <div className="sidebar">
        <ul>
  {[
                   { icon: "../img/لوگو/کارفرما/بستن سایدبار.svg",  path: "/#" },
                   { icon: "../img/لوگو/کارفرما/خانه.svg",  path: "/Home" },
                   { icon: "../img/لوگو/پنل دانشجو/دوره های خریداری شده.svg",path: "/PurchasedCourses" },
                   { icon: "../img/لوگو/پنل دانشجو/دوره های آنلاین.svg", path: "/OnlineCourses"},
                   { icon: "../img/لوگو/پنل دانشجو/کلاس های من.svg", path: "/MyClasses" },
                   { icon: "../img/لوگو/پنل دانشجو/مدریت درخواست ها.svg",  path: "/RequestManagement" },
                   { icon: "../img/لوگو/پنل دانشجو/کیف پول.svg", path: "/Wallet" },
                   { icon: "../img/لوگو/پنل دانشجو/کد تخفیف.svg",  path: "/DiscountCode" },
                   { icon: "../img/لوگو/پنل دانشجو/تیکت پشتیبانی.svg",  path: "/SupportTicket"},
                   { icon: "../img/لوگو/پنل دانشجو/سوالات متداول.svg", path: "/FAQ" },
  ].map((item, index) => (
    <li key={index}>
      <Link to={item.path} className="sidebar--order">
        <img src={item.icon} alt={item.label} />
        <span>{item.label}</span>
      </Link>
    </li>
  ))}
</ul>
<div className="body--empty"></div>
</div>
      </div>
    </>
  );
};

export default DashboardLayout;


