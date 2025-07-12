import "../styles/home.css";
import { NavLink, Outlet } from "react-router-dom";

const sideBarLinks = [
  {
    icon: "../img/لوگو/کارفرما/بستن سایدبار.svg",
    label: "بستن سایدبار",
    path: "/#",
  },
  {
    icon: "../img/لوگو/کارفرما/خانه.svg",
    label: "خانه",
    path: "/",
  },
  {
    icon: "../img/لوگو/کارفرما/ثبت سفارش.svg",
    label: "ثبت سفارش",
    path: "/create-order",
  },
  {
    icon: "../img/لوگو/کارفرما/سفارش ها.svg",
    label: "سفارش ها",
    path: "/orders",
  },
  {
    icon: "../img/لوگو/کارفرما/اتاق کار.svg",
    label: "اتاق کار",
    path: "/work-room",
  },
  {
    icon: "../img/لوگو/کارفرما/درصد پیشرفت سفارش.svg",
    label: "درصد پیشرفت سفارش",
    path: "/order-progress",
  },
  {
    icon: "../img/لوگو/کارفرما/اطلاعیه ها.svg",
    label: "اطلاعیه ها",
    path: "/notification",
  },
  {
    icon: "../img/لوگو/کارفرما/صفحه چت و پیام ها.svg",
    label: "صفحه چت و پیام ها",
    path: "/chat",
  },
  {
    icon: "../img/لوگو/کارفرما/کیف پول و امور مالی.svg",
    label: "کیف پول و امور مالیاتی",
    path: "/bag-money",
  },
  {
    icon: "../img/لوگو/کارفرما/تنظیمات پنل کارفرما.svg",
    label: "تنظیمات  کارفرما",
    path: "/money",
  },
  {
    icon: "../img/لوگو/کارفرما/جستجو.svg",
    label: "جستجو",
    path: "/search",
  },
  {
    icon: "../img/لوگو/کارفرما/مجری های سفارش.svg",
    label: "مجری های سفارش",
    path: "/workers",
  },
  {
    icon: "../img/لوگو/کارفرما/ارتباط با مدیرعامل.svg",
    label: "ارتباط با مدیرعامل",
    path: "/",
  },
];

const DashboardLayout = () => {
  return (
    <>
      <header className=" header__left container-effects">
        <div className="header--dashobord">
          <img src="../img/Link → logo.png" alt="" />
          <span className="header__right--para"></span>
          <img
            className="header__right--img"
            src="../img/img-person.jpg"
            alt="person"
          />
          <div className="header--dashbord-p-home">
            <p className="mb-0">پروفایل شخصی</p>
          </div>
        </div>

        <div className="add-project-container">
          <button className="add-project">
            <img src="../img/plus.svg" alt="add-project" />
          </button>
          <p className="add-project-para mb-0">افزودن پروژه</p>
        </div>
        <div className="search-nav-container">
          <form action="" className="header-search-form">
            <input
              type="text"
              className="search-input-home"
              placeholder="دنبال چه چیزی میگردید؟"
            />
            <button className="header-search-btn">
              <img
                src="../img/search 01.svg"
                className="search-icon-home"
                alt="search"
              />
            </button>
          </form>
          <span className="header__right--para"></span>

          <img className="header__left--img" src="../img/setting.svg" alt="" />
          <span className="header__right--para"></span>
          <img
            className="header__left--img"
            src="../img/notification 03.svg"
            alt=""
          />
          <span className="header__right--para"></span>
          <img className="header__left--img" src="../img/out.svg" alt="" />
        </div>
      </header>

      <div className="container">
        <div className="sidebar container-effects">
          <ul>
            {sideBarLinks.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path} className="sidebar--order">
                  <img src={item.icon} alt={item.label} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
