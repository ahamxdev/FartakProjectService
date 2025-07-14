import "../styles/home.css";
import "../styles/freelancer.css";
import Header from "../components/Header";
import { NavLink, Outlet } from "react-router-dom";

const sideBarLinks = [
  {
    icon: "/img/لوگو/کارفرما/بستن سایدبار.svg",
    label: "بستن سایدبار",
    path: "",
  },
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
      <main className="container">
        <div className="sidebar container-effects">
          <ul>
            {sideBarLinks.map((item, index) => (
              <li key={index}>
                <NavLink end to={item.path} className="sidebar--order">
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
      </main>
    </>
  );
}

export default FreelancerLayout;
