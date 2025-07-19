import "../styles/employer.css";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const sideBarLinks = [
  {
    icon: "../img/لوگو/کارفرما/خانه.svg",
    label: "خانه",
    path: "",
  },
  {
    icon: "../img/لوگو/کارفرما/ثبت سفارش.svg",
    label: "ثبت سفارش",
    path: "create-order",
  },
  {
    icon: "../img/لوگو/کارفرما/سفارش ها.svg",
    label: "سفارش ها",
    path: "orders",
  },
  {
    icon: "../img/لوگو/کارفرما/اتاق کار.svg",
    label: "اتاق کار",
    path: "work-room",
  },
  {
    icon: "../img/لوگو/کارفرما/درصد پیشرفت سفارش.svg",
    label: "درصد پیشرفت سفارش",
    path: "order-progress",
  },
  {
    icon: "../img/لوگو/کارفرما/اطلاعیه ها.svg",
    label: "اطلاعیه ها",
    path: "notification",
  },
  {
    icon: "../img/لوگو/کارفرما/صفحه چت و پیام ها.svg",
    label: "صفحه چت و پیام ها",
    path: "chat",
  },
  {
    icon: "../img/لوگو/کارفرما/کیف پول و امور مالی.svg",
    label: "کیف پول و امور مالیاتی",
    path: "payment",
  },
  {
    icon: "../img/لوگو/کارفرما/تنظیمات پنل کارفرما.svg",
    label: "تنظیمات پنل کارفرما",
    path: "settings",
  },
  {
    icon: "../img/لوگو/کارفرما/جستجو.svg",
    label: "جستجو",
    path: "search",
  },
  {
    icon: "../img/لوگو/کارفرما/مجری های سفارش.svg",
    label: "مجری های سفارش",
    path: "executors",
  },
  {
    icon: "../img/لوگو/کارفرما/ارتباط با مدیرعامل.svg",
    label: "ارتباط با مدیرعامل",
    path: "contact-ceo",
  },
];
function EmployerLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-2.5 gap-4 grid grid-cols-[auto_1fr] mt-5 h-[666px]">
        <SideBar links={sideBarLinks} />
        <div className="outlet-container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default EmployerLayout;
