import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: "./img/لوگو/پنل دانشجو/خانه.svg", text: "خانه", link: "/HomeStudent" },
    {
      icon: "./img/لوگو/پنل دانشجو/دوره های خریداری شده.svg",
      text: "دوره‌های خریده‌شده",
      link: "/PurchasedCourses",
    },
    {
      icon: "./img/لوگو/پنل دانشجو/دوره های آنلاین.svg",
      text: "دوره‌های آنلاین",
      link: "/OnlineCourses",
    },
    {
      icon: "./img/لوگو/پنل دانشجو/کلاس های من.svg",
      text: "کلاس‌های من",
      link: "/MyClasses",
    },
    {
      icon: "./img/لوگو/پنل دانشجو/مدریت درخواست ها.svg",
      text: "مدیریت درخواست‌ها",
      link: "/RequestManagement",
    },
    {
      icon: "./img/لوگو/پنل دانشجو/کیف پول.svg",
      text: "کیف پول",
      link: "/Wallet",
    },
    {
      icon: "./img/لوگو/پنل دانشجو/کد تخفیف.svg",
      text: "کد تخفیف",
      link: "/DiscountCode",
    },
    {
      icon: "./img/لوگو/پنل دانشجو/تیکت پشتیبانی.svg",
      text: "تیکت پشتیبانی",
      link: "/SupportTicket",
    },
    {
      icon: "./img/لوگو/پنل دانشجو/سوالات متداول.svg",
      text: "سوالات متداول",
      link: "/FAQ",
    },
  ];

  return (
    <div
      className={`d-flex flex-column rounded-3 shadow sidebar mx-3 mt-2 ${
        isOpen ? "sidebar-open" : "sidebar-closed"
      }`}
    >
      <div className="toggle-icon mx-3 mt-3 mb-4" onClick={toggleSidebar}>
        <img
          src="./img/لوگو/پنل دانشجو/بستن ساید بار.svg"
          alt="تغییر وضعیت"
          style={{ cursor: "pointer" }}
        />
      </div>

      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          className={({ isActive }) =>
            `d-flex align-items-center px-3 py-3 sidebar-item ${
              isActive ? "active" : ""
            }`
          }
        >
          <img src={item.icon} alt={item.text} className="sidebar-icon" />
          {isOpen && <span className="mx-2">{item.text}</span>}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
