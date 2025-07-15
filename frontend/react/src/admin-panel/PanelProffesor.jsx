const professors = [
  {
    id: "45AD",
    name: "امیرحسین بازیار",
    gender: "مرد",
    address: "قزوین",
    level: "",
  },
  {
    id: "45AE",
    name: "امیرحسین بازیار",
    gender: "مرد",
    address: "تاکستان",
    level: "1 ستاره",
  },
  {
    id: "",
    name: "امیرحسین رحمانی",
    gender: "مرد",
    address: "تاکستان",
    level: "1 ستاره",
  },
  {
    id: "",
    name: "امیرحسین رحمانی",
    gender: "مرد",
    address: "تاکستان",
    level: "vip",
  },
  {
    id: "",
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
      </table>
    </div>
  );
};

export default ProfessorsTable;
