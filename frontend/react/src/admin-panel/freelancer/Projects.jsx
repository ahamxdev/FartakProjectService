const projects = [
  {
    name: "سایت عرفانی",
    status: "در حال انجام",
    progress: 23,
    type: "طراحی وب سایت",
    payment: "نوع دوم 25%",
    isCanceled: false,
  },
  {
    name: "سایت امین سایت",
    status: "کنسل شده",
    progress: 45,
    type: "طراحی موبایل",
    payment: "نوع اول 100%",
    isCanceled: true,
  },
  {
    name: "سایت نمادین های ایرانی",
    status: "ثبت شده",
    progress: 2,
    type: "crms طراحی",
    payment: "نوع دوم 25%",
    isCanceled: false,
  },
  {
    name: "سایت خاک هرمز حمایت",
    status: "غیر فعال شده",
    progress: 90,
    type: "طراحی اپلیکیشن",
    payment: "نوع اول 100%",
    isCanceled: false,
  },
];
function Projects() {
  return (
    <div className="container-effects p-4 mt-0.5">
      <div className="flex justify-end">
        <select className="bg-transparent border border-black px-2 mb-2">
          <option value="10">تعداد نمایش 10 فرد</option>
          <option value="10">تعداد نمایش 10 فرد</option>
          <option value="10">تعداد نمایش 10 فرد</option>
          <option value="10">تعداد نمایش 10 فرد</option>
        </select>
      </div>
      <table className="rounded-table text-nowrap">
        <tr>
          <th>نام پروژه&darr;</th>
          <th>وضعیت پروژه&darr;</th>
          <th>درصد پیشرفت&darr;</th>
          <th>نوع پروژه&darr;</th>
          <th>نوع پرداخت&darr;</th>
          <th>حذف پروژه</th>
          <th>اطلاعات تسک ها </th>
        </tr>
        {projects.map((project, index) => (
          <tr key={index} className={project.isCanceled && "text-red-500"}>
            <td>{project.name}</td>
            <td>{project.status}</td>
            <td>{project.progress}</td>
            <td>{project.type}</td>
            <td>{project.payment}</td>
            <td>
              {project.isCanceled ? (
                "کنسل شده"
              ) : (
                <button className="text-sm py-1.5 px-2 rounded-md text-white transition-colors duration-300 bg-red-500 hover:bg-red-400">
                  حذف
                </button>
              )}
            </td>
            <td className="flex gap-2">
              <button className="text-sm py-1.5 px-2 rounded-md text-black transition-colors duration-300 bg-yellow-400 hover:bg-yellow-300">
                اطلاعات بیشتر
              </button>
            </td>
          </tr>
        ))}
      </table>
      <div className="flex justify-center gap-4 items-center">
        <button className="border border-black rounded-md px-2 py-1 hover:bg-slate-200 bg-transparent text-black">
          صفحه قبلی
        </button>
        <div className="flex gap-1">
          <span className="p-1.5 rounded-full border border-black inline-block bg-gray-400"></span>
          <span className="p-1.5 rounded-full border border-black inline-block"></span>
          <span className="p-1.5 rounded-full border border-black inline-block"></span>
          <span className="p-1.5 rounded-full border border-black inline-block"></span>
        </div>
        <button className="border border-black rounded-md px-2 py-1 hover:bg-slate-200 bg-transparent text-black">
          صفحه بعدی
        </button>
      </div>
    </div>
  );
}

export default Projects;
