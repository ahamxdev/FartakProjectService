const professors = [
  {
    id: "45AD",
    name: "امیرحسین بازیار",
    gender: "مرد",
    address: "قزوین",
    level: "5 ستازه",
  },
  {
    id: "45AE",
    name: "امیرحسین بازیار",
    gender: "مرد",
    address: "تاکستان",
    level: "1 ستاره",
  },
  {
    id: "45AF",
    name: "امیرحسین رحمانی",
    gender: "مرد",
    address: "تاکستان",
    level: "1 ستاره",
  },
  {
    id: "45AG",
    name: "امیرحسین رحمانی",
    gender: "مرد",
    address: "تاکستان",
    level: "VIP",
  },
  {
    id: "45AH",
    name: "امیرحسین رحمانی",
    gender: "مرد",
    address: "تاکستان",
    level: "1 ستاره",
  },
];

const ProfessorsTable = () => {
  return (
    <div className="container-effects p-4">
      <div className="flex justify-end">
        <select className="bg-transparent border border-black px-2 mb-2">
          <option value="10">تعداد نمایش 10 فرد</option>
          <option value="10">تعداد نمایش 10 فرد</option>
          <option value="10">تعداد نمایش 10 فرد</option>
          <option value="10">تعداد نمایش 10 فرد</option>
        </select>
      </div>
      <table className="rounded-table">
        <tr>
          <th>کد استاد &darr;</th>
          <th>نام استاد &darr;</th>
          <th>جنسیت &darr;</th>
          <th>استان محل سکونت &darr;</th>
          <th>لول استاد &darr;</th>
          <th>رتبه استاد</th>
          <th>حذف استاد</th>
        </tr>
        {professors.map((professor, index) => (
          <tr key={index}>
            <td>{professor.id}</td>
            <td>{professor.name}</td>
            <td>{professor.gender}</td>
            <td>{professor.address}</td>
            <td>{professor.level}</td>
            <td className="flex gap-2">
              <button className="text-sm py-1.5 px-2 rounded-md text-black transition-colors duration-300 bg-[#2EBFA5] hover:bg-[#7de3d0]">
                افزایش رتبه
              </button>
              <button className="text-sm py-1.5 px-2 rounded-md text-black transition-colors duration-300 bg-yellow-400 hover:bg-yellow-300">
                کاهش رتبه
              </button>
            </td>
            <td>
              <button className="text-sm py-1.5 px-2 rounded-md text-white transition-colors duration-300 bg-red-500 hover:bg-red-400">
                حذف استاد
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
};

export default ProfessorsTable;
