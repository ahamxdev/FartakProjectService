import React from "react";
import { Link } from 'react-router-dom';

const SidebarOffer = () => {
  return (
    <>
      <header>
        <div className="header--container">
          <div className="header__left">
            <div className="header--dashobord">
              <img src="img/Link → logo.png" alt="" />
              <div className="header--dashbord-p">
                <p>امیر حسین شادمان</p>
                <img src="img/setting.svg" alt="" />
              </div>
            </div>

            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="دنبال چه چیزی میگردید؟"
              />
              <img src="img/search 01.svg" className="search-icon" alt="" />
            </div>
            <p className="header__right--para"> |</p>
            <img className="header__left--img" src="img/setting.svg" alt="" />
            <p className="header__right--para"> |</p>
            <img
              className="header__left--img"
              src="img/notification 03.svg"
              alt=""
            />
            <p className="header__right--para">|</p>
            <img className="header__left--img" src="img/out.svg" alt="" />
          </div>
        </div>
      </header>

      <div className="container">
        <div className="sidebar-offer">
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

          <div className="body--empty-offer">
            <div className="menu-left">
              <Link href="#" className="menu-left-items">
                ابتدایی
              </Link>
              <Link href="#" className="menu-left-items">
                دوره اول متوسطه
              </Link>
              <Link href="#" className="menu-left-items">
                دوره دوم متوسطه
              </Link>
              <Link href="#" className="menu-left-konkor">
                کنکور
              </Link>
              <Link href="#" className="menu-left-us">
                دانشگاه
              </Link>
              <Link href="#" className="menu-left-items-last">
                کسب و کار
              </Link>
            </div>

            <div className="sidebar-offer--container">
              <div className="container--offer">
                <div className="container--offer-right">
                  <p>80%</p>
                </div>
                <div className="container--offer-left">
                  <p>
                    کد تخفیف برای درس مهندسی نرم افزار استاد <br /> امیرحسین
                    بازیار
                  </p>
                  <p className="container--offer-left-p1">مهلت استفاده : 5 روز</p>
                  <p className="container--offer-left-p2">دانشگاهی</p>
                  <div className="container--offer-left-p3">
                    <p>کپی کردن کد</p>
                    <p>A44SD8YY</p>
                  </div>
                </div>
              </div>

              <div className="container--offer">
                <div className="container--offer-right">
                  <p>80%</p>
                </div>
                <div className="container--offer-left">
                  <p>
                    کد تخفیف برای درس مهندسی نرم افزار استاد <br /> امیرحسین
                    بازیار
                  </p>
                  <p className="container--offer-left-p1">مهلت استفاده : 5 روز</p>
                  <p className="container--offer-left-p2">دانشگاهی</p>
                  <div className="container--offer-left-p3">
                    <p>کپی کردن کد</p>
                    <p>A44SD8YY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-offer--container">
              <div className="container--offer">
                <div className="container--offer-right">
                  <p>80%</p>
                </div>
                <div className="container--offer-left">
                  <p>
                    کد تخفیف برای درس مهندسی نرم افزار استاد <br /> امیرحسین
                    بازیار
                  </p>
                  <p className="container--offer-left-p1">مهلت استفاده : 5 روز</p>
                  <p className="container--offer-left-p2">دانشگاهی</p>
                  <div className="container--offer-left-p3">
                    <p>کپی کردن کد</p>
                    <p>A44SD8YY</p>
                  </div>
                </div>
              </div>

              <div className="container--offer">
                <div className="container--offer-right">
                  <p>80%</p>
                </div>
                <div className="container--offer-left">
                  <p>
                    کد تخفیف برای درس مهندسی نرم افزار استاد <br /> امیرحسین
                    بازیار
                  </p>
                  <p className="container--offer-left-p1">مهلت استفاده : 5 روز</p>
                  <p className="container--offer-left-p2">دانشگاهی</p>
                  <div className="container--offer-left-p3">
                    <p>کپی کردن کد</p>
                    <p>A44SD8YY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarOffer;
