import { NavLink, Outlet } from "react-router-dom";

const fields = [
  {
    label: "برنامه نویسی",
    icon: "/img/admin/programing.png",
    path: "programming",
  },
  {
    label: "آمار و داده کاوی",
    icon: "/img/admin/analytics.png",
    path: "data-mining",
  },
  {
    label: "مهندسی مکانیک",
    icon: "/img/admin/nanomedicine.png",
    path: "mechanical-engineering",
  },
  {
    label: "پایتون",
    icon: "/img/admin/python.png",
    path: "python",
  },
  {
    label: "بورس و سهام",
    icon: "/img/admin/news-paper.png",
    path: "stock-exchange",
  },
  {
    label: "هنر",
    icon: "/img/admin/art.png",
    path: "arts",
  },
  {
    label: "ریاضیات",
    icon: "/img/admin/math.png",
    path: "mathematics",
  },
  {
    label: "هوش مصنوعی",
    icon: "/img/admin/AI.png",
    path: "ai",
  },
  {
    label: "اکسل",
    icon: "/img/admin/excel.png",
    path: "excel",
  },
  {
    label: "مهندسی برق",
    icon: "/img/admin/bulb.png",
    path: "electrical-engineering",
  },
  {
    label: "مهندسی نرم افزار",
    icon: "/img/admin/binary.png",
    path: "software-engineering",
  },
  {
    label: "طراحی گرافیک",
    icon: "/img/admin/graphic.png",
    path: "graphics-design",
  },
  {
    label: "مهندسی عمران",
    icon: "/img/admin/civil.png",
    path: "civil-engineering",
  },
  {
    label: "مهندسی معماری",
    icon: "/img/admin/architect.png",
    path: "architectural-engineering",
  },
  {
    label: "زبان انگلیسی",
    icon: "/img/admin/abc.png",
    path: "languages",
  },
  {
    label: "مهندسی صنایع",
    icon: "/img/admin/industry.png",
    path: "industry-engineering",
  },
];

function RecordedCourses() {
  return (
    <>
      <div className="grid grid-cols-8 gap-8 py-16">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col gap-2 items-center">
            <NavLink
              className="w-24 h-24 p-6 bg-[#4B4B4B] rounded-2xl hover:bg-[#C9BD4A] transition-colors duration-300 course-field"
              to={field.path}
            >
              <img src={field.icon} alt={field.label} />
            </NavLink>
            <span className="text-sm text-nowrap">{field.label}</span>
          </div>
        ))}
      </div>
      <div className="container-effects p-4">
        <Outlet />
      </div>
    </>
  );
}

export default RecordedCourses;
