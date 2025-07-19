import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";

const sidebarLinks = [
  {
    icon: "/img/لوگو/پنل دانشجو/خانه.svg",
    label: "خانه",
    path: "",
  },
  {
    icon: "/img/لوگو/پنل دانشجو/دوره های خریداری شده.svg",
    label: "دوره‌های خریده‌شده",
    path: "purchased-courses",
  },
  {
    icon: "/img/لوگو/پنل دانشجو/دوره های آنلاین.svg",
    label: "دوره‌های آنلاین",
    path: "online-courses",
  },
  {
    icon: "/img/لوگو/پنل دانشجو/کلاس های من.svg",
    label: "کلاس‌های من",
    path: "my-classes",
  },
  {
    icon: "/img/لوگو/پنل دانشجو/مدریت درخواست ها.svg",
    label: "مدیریت درخواست‌ها",
    path: "request-management",
  },
  {
    icon: "/img/لوگو/پنل دانشجو/کیف پول.svg",
    label: "کیف پول",
    path: "wallet",
  },
  {
    icon: "/img/لوگو/پنل دانشجو/کد تخفیف.svg",
    label: "کد تخفیف",
    path: "discount-code",
  },
  {
    icon: "/img/لوگو/پنل دانشجو/تیکت پشتیبانی.svg",
    label: "تیکت پشتیبانی",
    path: "support-ticket",
  },
  {
    icon: "/img/لوگو/پنل دانشجو/سوالات متداول.svg",
    label: "سوالات متداول",
    path: "faq",
  },
];

function StudentLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-2.5 gap-4 grid grid-cols-[auto_1fr] mt-5 h-[666px]">
        <SideBar links={sidebarLinks} />
        <div className="outlet-container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default StudentLayout;
