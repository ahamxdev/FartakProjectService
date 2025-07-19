const freelancers = [
  {
    id: "45AD",
    name: "امیرحسین بازیار",
    gender: "مرد",
    maritalStatus: "مجرد",
    address: "قزوین",
    level: "5 ستازه",
  },
  {
    id: "45AE",
    name: "امیرحسین بازیار",
    gender: "مرد",
    maritalStatus: "مجرد",
    address: "تاکستان",
    level: "1 ستاره",
  },
  {
    id: "45AF",
    name: "امیرحسین رحمانی",
    gender: "مرد",
    maritalStatus: "مجرد",
    address: "تاکستان",
    level: "1 ستاره",
  },
  {
    id: "45AG",
    name: "امیرحسین رحمانی",
    gender: "مرد",
    maritalStatus: "مجرد",
    address: "تاکستان",
    level: "VIP",
  },
  {
    id: "45AH",
    name: "امیرحسین رحمانی",
    gender: "مرد",
    maritalStatus: "مجرد",
    address: "تاکستان",
    level: "1 ستاره",
  },
];
function Freelancers() {
  return (
    <>
      <div className="container-effects p-4 mt-0.5 mb-7">
        <h2>افزودن فریلنسر</h2>
        <form action="#" className="p-8">
          <div className="grid grid-cols-3 gap-5 mb-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="first-name">نام</label>
              <input
                className="container-effects w-[230px] p-1"
                type="text"
                name="first-name"
                id="first-name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="gender">جنسیت</label>
              <select
                className="container-effects bg-transparent w-[230px]"
                name="gender"
                id="gender"
              >
                <option value=""></option>
                <option value="male">مذکر</option>
                <option value="female">مونث</option>
                <option value="others">موارد دیگر</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="location">استان محل سکونت</label>
              <select
                className="container-effects bg-transparent w-[230px]"
                name="location"
                id="location"
              >
                <option value=""></option>
                <option value="mazandaran">مازندران</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="last-name">نام خانوادگی</label>
              <input
                className="container-effects w-[230px] p-1"
                type="text"
                name="last-name"
                id="last-name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="marital-status">وضعیت تاهل</label>
              <select
                className="container-effects bg-transparent w-[230px]"
                name="marital-status"
                id="marital-status"
              >
                <option value=""></option>
                <option value="single">مجرد</option>
                <option value="married">متاهل</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="language">زبان مسلط</label>
              <input
                className="container-effects w-[230px] p-1"
                type="text"
                name="language"
                id="language"
              />
            </div>
            <div className="col-span-2 container-effects"></div>
            <div className="flex flex-col gap-2">
              <label htmlFor="skills">تخصص های من</label>
              <input
                className="container-effects w-[230px] p-1"
                type="text"
                name="skills"
                id="skills"
              />
            </div>
            <div className="col-span-2 container-effects"></div>
          </div>
          <div className="flex justify-end mt-8">
            <button className="bg-[#259984] text-white py-2 px-4 rounded-xl transition-colors duration-300 hover:bg-[#2EBFA5]">
              افزودن
            </button>
          </div>
        </form>
      </div>
      <div className="container-effects p-4">
        <div className="flex justify-end">
          <select className="bg-transparent border border-black px-2 mb-2">
            <option value="10">تعداد نمایش 10 فرد</option>
            <option value="10">تعداد نمایش 10 فرد</option>
            <option value="10">تعداد نمایش 10 فرد</option>
            <option value="10">تعداد نمایش 10 فرد</option>
          </select>
        </div>
        <table className="rounded-table text-sm text-nowrap">
          <tr>
            <th>کد فریلنسر&darr;</th>
            <th>نام فریلنسر&darr;</th>
            <th>جنسیت &darr;</th>
            <th>وضعیت تاهل&darr;</th>
            <th>استان محل سکونت &darr;</th>
            <th>لول فریلنسر&darr;</th>
            <th>رتبه فریلنسر</th>
            <th>حذف فریلنسر</th>
          </tr>
          {freelancers.map((professor, index) => (
            <tr key={index}>
              <td>{professor.id}</td>
              <td>{professor.name}</td>
              <td>{professor.gender}</td>
              <td>{professor.maritalStatus}</td>
              <td>{professor.address}</td>
              <td>{professor.level}</td>
              <td className="flex gap-2">
                <button className="text-sm py-1.5 px-2 rounded-md text-black transition-colors duration-300 bg-[#2EBFA5] hover:bg-[#7de3d0]">
                  افزایش
                </button>
                <button className="text-sm py-1.5 px-2 rounded-md text-black transition-colors duration-300 bg-yellow-400 hover:bg-yellow-300">
                  کاهش
                </button>
              </td>
              <td>
                <button className="text-sm py-1.5 px-2 rounded-md text-white transition-colors duration-300 bg-red-500 hover:bg-red-400">
                  حذف
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
    </>
  );
}

export default Freelancers;
