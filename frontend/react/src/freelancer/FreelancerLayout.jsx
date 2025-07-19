import "../styles/freelancer.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const sideBarLinks = [
  {
    icon: "/img/لوگو/کارفرما/خانه.svg",
    label: "خانه",
    path: "",
  },
  {
    icon: "/img/لوگو/کارفرما/سفارش ها.svg",
    label: "سهم کاری و دستمزد",
    path: "cuts",
  },
  {
    icon: "/img/لوگو/کارفرما/کیف پول و امور مالی.svg",
    label: "کیف پول و امور مالی",
    path: "payment",
  },

  {
    icon: "/img/لوگو/کارفرما/اتاق کار.svg",
    label: "سفارش های انجام شده",
    path: "orders",
  },
  {
    icon: "/img/لوگو/کارفرما/سفارش ها.svg",
    label: "سفارش محمد ایمانی",
    path: "orders/432",
  },
];
function FreelancerLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-2.5 gap-4 grid grid-cols-[auto_1fr] mt-5">
        <SideBar links={sideBarLinks} />
        <div className="outlet-container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default FreelancerLayout;
