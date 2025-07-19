import { useState } from "react";
import { NavLink } from "react-router-dom";

function SideBar({ links }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <aside
      className={`sidebar container-effects  h-[666px] transition-all duration-300 ${
        isOpen ? "w-[220px]" : "w-[50px]"
      }`}
    >
      <ul>
        <li className="sidebar--order cursor-pointer" onClick={toggleSidebar}>
          <img src="/img/لوگو/پنل فریلنسر/بستن سایدبار.svg" alt="Close" />
          <span
            className={`text-nowrap transition-all duration-300 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            بستن سایدبار
          </span>
        </li>
        {links.map((item, index) => (
          <li key={index}>
            <NavLink end to={item.path} className="sidebar--order">
              <img src={item.icon} alt={item.label} />
              <span
                className={`text-nowrap transition-opacity duration-300 ${
                  isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
