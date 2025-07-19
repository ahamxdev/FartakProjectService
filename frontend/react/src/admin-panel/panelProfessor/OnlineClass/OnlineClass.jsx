import { classes } from "./onFakeData";
import trashIcon from "../../../assest/img/proffesorPanelImg/trash.svg";

const OnlineClass = () => {
  return (
    <div className="mx-5 overflow-scroll">
      <div className="flex w-2/4 m-auto flex-wrap gap-2">
        <div className="rounded-2xl w-[45%] p-4 flex justify-center items-center bg-blue-300 bg-opacity-40 text-center text-lg">
          <span>آموزش استفاده از قلم نوری در ادوبی کانکت</span>
        </div>
        <div className="rounded-2xl w-[45%] p-4 flex justify-center items-center bg-red-400 bg-opacity-40 text-center text-lg">
          <span>آموزش انجام تنظیمات ادوبی کانکت</span>
        </div>
        <div className="rounded-2xl w-[45%] p-4 flex justify-center items-center bg-yellow-300 bg-opacity-40 text-center text-lg">
          <span>آموزش استفاده بدون قلم نوری در ادوبی کانکت</span>
        </div>
        <div className="rounded-2xl w-[45%] p-4 flex justify-center items-center bg-green-400 bg-opacity-40 text-center text-lg">
          <span>آموزش تهیه آزمون آنلاین در گوگل فرم</span>
        </div>
      </div>

      <div className="mt-10">
        <span className="font-bold text-lg block mb-4">ایجاد کلاس</span>
        <div className="overflow-auto">
          <table className="min-w-full border border-gray-300 text-sm text-center">
            <thead className="bg-gray-200">
              <tr>
                <td className="border p-2">نام کلاس</td>
                <td className="border p-2">افراد</td>
                <td className="border p-2">مبلغ پرداخت شده</td>
                <td className="border p-2">ایجاد کلاس</td>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-2">{cls.className}</td>
                  <td className="border p-2">{cls.members.join(" - ")}</td>
                  <td className="border p-2">
                    {cls.amountPaid?.toLocaleString()}
                  </td>
                  <td className="border p-2">
                    <button className="w-full bg-green-600 text-white py-1 rounded hover:bg-green-700 transition">
                      {cls.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10">
        <span className="font-bold text-lg block mb-4">لیست کلاس ها</span>
        <div className="overflow-auto">
          <table className="min-w-full border border-gray-300 text-sm text-center">
            <thead className="bg-gray-200">
              <tr>
                <td className="border p-2">نام کلاس</td>
                <td className="border p-2">افراد</td>
                <td className="border p-2">مبلغ پرداخت شده</td>
                <td className="border p-2">حذف کلاس</td>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-2">{cls.className}</td>
                  <td className="border p-2">{cls.members.join(" - ")}</td>
                  <td className="border p-2">
                    {cls.amountPaid?.toLocaleString()}
                  </td>
                  <td className="border p-2">
                    <div className="mx-auto block">
                      <img src={trashIcon} alt="حذف" className="w-5 h-5" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OnlineClass;
