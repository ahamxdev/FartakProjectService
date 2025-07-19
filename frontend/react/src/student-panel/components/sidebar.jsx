// import { useState } from "react";
// import "./Sidebar.css";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   // const [activeIndex, setActiveIndex] = useState(null);

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   return (
//     <div
//       className={`flex flex-col rounded-xl container-effects sidebar mx-3 mt-2 w-[666px] transition-all duration-300 ${
//         isOpen ? "sidebar-open" : "sidebar-closed"
//       }`}
//     >
//       <div className="mx-3 mt-3 mb-4" onClick={toggleSidebar}>
//         <img
//           src="/img/لوگو/پنل دانشجو/بستن ساید بار.svg"
//           alt="تغییر وضعیت"
//           className="cursor-pointer"
//         />
//       </div>

//       {menuItems.map((item, index) => (
//         <NavLink
//           end
//           key={index}
//           to={item.link}
//           className="flex items-center px-3 py-3 sidebar-item hover:bg-[#B0D6FF] transition-colors duration-300"
//         >
//           <img src={item.icon} alt={item.text} className="w-5 h-5" />
//           {isOpen && <span className="ml-2">{item.text}</span>}
//         </NavLink>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;
