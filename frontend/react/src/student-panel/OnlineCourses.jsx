import React, { useState } from "react";

const CourseTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <main className="p-3">
      <div className="container mt-4 w-full">
        <div className="flex justify-center">
          <h5 className="mb-3 bg-green-100 border border-green-400 rounded-3xl px-4 py-2 text-green-800">
            کلاس کنکور
          </h5>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-full">
          <div 
            className="py-4"
            dir="rtl"
            lang="fa"
            style={{ fontFamily: "Vazirmatn, sans-serif" }}
          >
            <h2 className="text-right font-semibold text-lg mb-4">
              دوره های درحال برگزاری
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm align-middle">
                <thead className="bg-gray-800 text-white text-sm font-semibold text-center">
                  <tr>
                    <th className="p-4">نام دوره</th>
                    <th className="p-4">نام استاد</th>
                    <th className="p-4 text-center">مدت دوره</th>
                    <th className="p-4 text-center">تعداد جلسات برگزار شده</th>
                    <th className="p-4 text-center">آمار کلاس ها</th>
                    <th className="p-4 text-center">لینک کلاس</th>
                    <th className="p-4 text-center">نمایش جلسات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 text-center">ریاضیات دوره دوم دبیرستان</td>
                    <td className="p-4 text-center">مهرداد طاهرخانی</td>
                    <td className="p-4 text-center">100 ساعت</td>
                    <td className="p-4 text-center">30 جلسه</td>
                    <td className="p-4 text-center">
                      <a
                        href="#"
                        className="text-blue-600 no-underline text-sm font-semibold"
                        onClick={toggleDetails}
                      >
                        نمایش بیشتر آمار کلاس ها
                      </a>
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href="#"
                        className="text-blue-600 no-underline text-sm font-semibold"
                      >
                        پخش زنده فعال است
                      </a>
                    </td>
                    <td
                      className="p-4 text-center cursor-pointer select-none"
                    >
                      <i className="far fa-heart"></i> نمایش
                    </td>
                  </tr>

                  <tr className="bg-gray-100 border-b">
                    <td className="p-4 text-center">ریاضیات دوره اول دبیرستان</td>
                    <td className="p-4 text-center">مهرداد طاهرخانی</td>
                    <td className="p-4 text-center">8 ساعت</td>
                    <td className="p-4 text-center">4 جلسه</td>
                    <td className="p-4 text-center">
                      <a
                        href="#"
                        className="text-blue-600 no-underline text-sm font-semibold"
                        onClick={toggleDetails}
                      >
                        نمایش بیشتر آمار کلاس ها
                      </a>
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href="#"
                        className="text-blue-600 no-underline text-sm font-semibold"
                      >
                        پخش زنده فعال است
                      </a>
                    </td>
                    <td
                      className="p-4 text-center cursor-pointer select-none"
                    >
                      <i className="far fa-heart"></i> نمایش
                    </td>
                  </tr>

                  {isOpen && (
                    <tr className="bg-gray-100">
                      <td colSpan="7" className="p-0">
                        <table className="w-3/4 mx-auto text-center text-sm bg-gray-100 mb-0">
                          <thead className="bg-gray-800 text-white text-sm font-semibold">
                            <tr>
                              <th className="p-4 w-1/3">جلسه</th>
                              <th className="p-4 w-1/3">مدت زمان</th>
                              <th className="p-4 w-1/3">لینک</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="text-center border-b">
                              <td className="p-4">جلسه شماره 1</td>
                              <td className="p-4">1 ساعت و 20 دقیقه</td>
                              <td className="p-4">پخش کلاس</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-4">جلسه شماره 2</td>
                              <td className="p-4">1 ساعت و 20 دقیقه</td>
                              <td className="p-4">پخش کلاس</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-4">جلسه شماره 3</td>
                              <td className="p-4">1 ساعت و 20 دقیقه</td>
                              <td className="p-4">پخش کلاس</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-4">جلسه شماره 4</td>
                              <td className="p-4">1 ساعت و 20 دقیقه</td>
                              <td className="p-4">پخش کلاس</td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="text-center text-blue-600 text-xs my-2">
                          جلسه بعدی کلاس در تاریخ 25 اردیبهشت 1404 ساعت 8 شب برگزار میشود
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="w-full">
          <div 
            className="py-4"
            dir="rtl"
            lang="fa"
            style={{ fontFamily: "Vazirmatn, sans-serif" }}
          >
            <h2 className="text-right font-semibold text-lg mb-4">
              دوره های آنلاین به اتمام رسیده
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm align-middle">
                <thead className="bg-gray-800 text-white text-sm font-semibold text-center">
                  <tr>
                    <th className="p-4">نام دوره</th>
                    <th className="p-4">نام استاد</th>
                    <th className="p-4 text-center">مدت دوره</th>
                    <th className="p-4 text-center">تعداد جلسات برگزار شده</th>
                    <th className="p-4 text-center">آمار کلاس ها</th>
                    <th className="p-4 text-center">لینک کلاس</th>
                    <th className="p-4 text-center">نمایش جلسات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 text-center">ریاضیات دوره دوم دبیرستان</td>
                    <td className="p-4 text-center">مهرداد طاهرخانی</td>
                    <td className="p-4 text-center">100 ساعت</td>
                    <td className="p-4 text-center">30 جلسه</td>
                    <td className="p-4 text-center">
                      <a
                        href="#"
                        className="text-blue-600 no-underline text-sm font-semibold"
                        onClick={toggleDetails}
                      >
                        نمایش بیشتر آمار کلاس ها
                      </a>
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href="#"
                        className="text-blue-600 no-underline text-sm font-semibold"
                      >
                        پخش زنده فعال است
                      </a>
                    </td>
                    <td
                      className="p-4 text-center cursor-pointer select-none"
                    >
                      <i className="far fa-heart"></i> نمایش
                    </td>
                  </tr>

                  <tr className="bg-gray-100 border-b">
                    <td className="p-4 text-center">ریاضیات دوره اول دبیرستان</td>
                    <td className="p-4 text-center">مهرداد طاهرخانی</td>
                    <td className="p-4 text-center">8 ساعت</td>
                    <td className="p-4 text-center">4 جلسه</td>
                    <td className="p-4 text-center">
                      <a
                        href="#"
                        className="text-blue-600 no-underline text-sm font-semibold"
                        onClick={toggleDetails}
                      >
                        نمایش بیشتر آمار کلاس ها
                      </a>
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href="#"
                        className="text-blue-600 no-underline text-sm font-semibold"
                      >
                        پخش زنده فعال است
                      </a>
                    </td>
                    <td
                      className="p-4 text-center cursor-pointer select-none"
                    >
                      <i className="far fa-heart"></i> نمایش
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseTable;