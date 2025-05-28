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
    { icon: "../img/لوگو/کارفرما/بستن سایدبار.svg", label: "بستن سایدبار", path: "/#" },
    { icon: "../img/لوگو/کارفرما/خانه.svg", label: "خانه", path: "/Home" },
    { icon: "../img/لوگو/کارفرما/ثبت سفارش.svg", label: "ثبت سفارش", path: "/PlaceOrder" },
    { icon: "../img/لوگو/کارفرما/سفارش ها.svg", label: "سفارش ها", path: "/Orders"},
    { icon: "../img/لوگو/کارفرما/اتاق کار.svg", label: "اتاق کار", path: "/Room" },
    { icon: "../img/لوگو/کارفرما/درصد پیشرفت سفارش.svg", label: "درصد پیشرفت سفارش", path: "/OrderProgress" },
    { icon: "../img/لوگو/کارفرما/اطلاعیه ها.svg", label: "اطلاعیه ها", path: "/Notification" },
    { icon: "../img/لوگو/کارفرما/صفحه چت و پیام ها.svg", label: "صفحه چت و پیام ها", path: "/Chat" },
    { icon: "../img/لوگو/کارفرما/کیف پول و امور مالی.svg", label: "کیف پول و امور مالیاتی", path: "/BagMoney"},
    { icon: "../img/لوگو/کارفرما/تنظیمات پنل کارفرما.svg", label: "تنظیمات  کارفرما", path: "/Money" },
    { icon: "../img/لوگو/کارفرما/جستجو.svg", label: "جستجو", path: "/Search" },
    { icon: "../img/لوگو/کارفرما/مجری های سفارش.svg", label: "مجری های سفارش", path: "/Workers" },
    { icon: "../img/لوگو/کارفرما/ارتباط با مدیرعامل.svg", label: "ارتباط با مدیرعامل", path: "/" },
  ].map((item, index) => (
    <li key={index}>
      <Link to={item.path} className="sidebar--order">
        <img src={item.icon} alt={item.label} />
        <span>{item.label}</span>
      </Link>
    </li>
  ))}
</ul>

</div>
      </div>
    </>
  );
};

export default DashboardLayout;


