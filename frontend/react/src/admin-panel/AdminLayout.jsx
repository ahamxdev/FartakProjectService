import "../styles/admin.css";
import { Link, Links, NavLink, Outlet } from "react-router-dom";

const sideBarLinks = [
  {
    label: "مدیر گروه ها",
    Links: [
      { label: "#", to: "#" },
      { label: "#", to: "#" },
      { label: "#", to: "#" },
      { label: "#", to: "#" },
    ],
    icon: "/img/admin/user-circle.png",
    id: 0,
  },
  {
    label: "پنل کارفرما",
    Links: [
      { label: "تایید پروژه های جدید", to: "#" },
      { label: "تسک بندی پروژه های جدید", to: "#" },
      { label: "ثبت اطلاعیه جدید به کارفرما", to: "#" },
      { label: "چت با کارفرما", to: "#" },
      { label: "هزینه ها ؟؟", to: "#" },
    ],
    icon: "/img/admin/user-circle.png",
    id: 1,
  },
  {
    label: "پنل فریلنسر ها",
    Links: [
      { label: "لیست و افزودن فریلنسر", to: "#" },
      { label: "لیست و وضعیت پروژه", to: "#" },
      { label: "فایل تسک های پروژه ها", to: "#" },
      { label: "لیست و وضعیت پروژه", to: "#" },
      { label: "فایل تسک های پروژه ها", to: "#" },
      { label: "درخواست های تسک پروژه", to: "#" },
      { label: "چت با فریلنسر ها", to: "#" },
      { label: "تایید فرایند مالی تسک ها", to: "#" },
      { label: "پروژه های انجام شده", to: "#" },
      { label: "تایید اطلاعات فریلنسر", to: "#" },
      { label: "هزینه ها ؟؟", to: "#" },
    ],
    icon: "/img/admin/user-circle.png",
    id: 2,
  },
  {
    label: "پنل اساتید",
    Links: [
      { label: "نمایش اساتید و سطح بندی", to: "professors" },
      { label: "تایید روزمه استاد", to: "" },
      { label: "تایید اطلاعات شخصی", to: "" },
      { label: "مدریت راهنما های عملکردی", to: "" },
      { label: "آموزش های ضبط شده", to: "#" },
      { label: "کلاس های ضبط شده", to: "#" },
      { label: "کلاس های خصوصی آنلاین", to: "#" },
      { label: "کلاس های خصوصی حضوری", to: "#" },
    ],
    icon: "/img/admin/user-circle.png",
    id: 3,
  },
  {
    label: "#",
    Links: [
      { label: "#", to: "#" },
      { label: "#", to: "#" },
      { label: "#", to: "#" },
      { label: "#", to: "#" },
    ],
    icon: "/img/admin/user-circle.png",
    id: 4,
  },
];

function AdminLayout() {
  return (
    <main className="container mx-auto px-5 grid grid-cols-[auto_1fr] gap-7">
      <aside className="w-[250px] h-[762px] container-effects overflow-y-scroll">
        <div className="flex items-center justify-start gap-2 border-b p-4 border-[#D1D4D7]">
          <img
            className="header__right--img"
            src="/img/img-person.jpg"
            alt="Profile"
          />
          <div>
            <p className="font-bold mb-1">شهلا ایمانی</p>
            <p className="font-light">ادمین سطح 2</p>
          </div>
        </div>
        <div className="py-2 px-4">
          {sideBarLinks.map((link, index) => (
            <div key={index} className="accordion-sidebar py-4  ">
              <input className="hidden" type="checkbox" id={link.id} />
              <label
                htmlFor={link.id}
                className="flex justify-between items-center pl-4"
              >
                <div className="flex items-center gap-1">
                  <img src={link.icon} alt="icon" />
                  <span className="font-bold">{link.label}</span>
                </div>
                <img
                  src="/img/admin/left-arrow.png"
                  alt="arrow"
                  className="link-arrow"
                />
              </label>
              <ul className="acc-sidebar-content">
                {link.Links.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.to}
                    end
                    className="text-sm hover:bg-[#B0D6FF] rounded-lg p-1.5 sidebar-link transition-colors duration-300"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>
      <div>
        <Outlet />
      </div>
    </main>
  );
}

export default AdminLayout;
