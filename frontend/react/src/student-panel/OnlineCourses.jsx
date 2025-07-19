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

            <table className="rounded-table text-sm text-nowrap">
              <tr>
                <th>نام دوره</th>
                <th>نام استاد</th>
                <th>مدت دوره</th>
                <th>تعداد جلسات برگزار شده</th>
                <th>آمار کلاس ها</th>
                <th>لینک کلاس</th>
                <th>نمایش جلسات</th>
              </tr>
              <tr>
                <td>ریاضیات دوره دوم دبیرستان</td>
                <td>مهرداد طاهرخانی</td>
                <td>100 ساعت</td>
                <td>30 جلسه</td>
                <td>
                  <a
                    href="#"
                    className="text-blue-600 no-underline text-sm font-semibold"
                    onClick={toggleDetails}
                  >
                    نمایش بیشتر آمار کلاس ها
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    className="text-blue-600 no-underline text-sm font-semibold"
                  >
                    پخش زنده فعال است
                  </a>
                </td>
                <td className="p-4 text-center cursor-pointer select-none">
                  <i className="far fa-heart"></i> نمایش
                </td>
              </tr>

              <tr className="bg-gray-100 border-b">
                <td>ریاضیات دوره اول دبیرستان</td>
                <td>مهرداد طاهرخانی</td>
                <td>8 ساعت</td>
                <td>4 جلسه</td>
                <td>
                  <a
                    href="#"
                    className="text-blue-600 no-underline text-sm font-semibold"
                    onClick={toggleDetails}
                  >
                    نمایش بیشتر آمار کلاس ها
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    className="text-blue-600 no-underline text-sm font-semibold"
                  >
                    پخش زنده فعال است
                  </a>
                </td>
                <td className="p-4 text-center cursor-pointer select-none">
                  <i className="far fa-heart"></i> نمایش
                </td>
              </tr>

              {isOpen && (
                <tr className="bg-gray-100">
                  <td colSpan="7" className="p-0">
                    <table className="w-3/4 mx-auto text-center text-sm bg-gray-100 mb-0">
                      <tr>
                        <th>جلسه</th>
                        <th>مدت زمان</th>
                        <th>لینک</th>
                      </tr>
                      <tr>
                        <td>جلسه شماره 1</td>
                        <td>1 ساعت و 20 دقیقه</td>
                        <td>پخش کلاس</td>
                      </tr>
                      <tr>
                        <td>جلسه شماره 2</td>
                        <td>1 ساعت و 20 دقیقه</td>
                        <td>پخش کلاس</td>
                      </tr>
                      <tr>
                        <td>جلسه شماره 3</td>
                        <td>1 ساعت و 20 دقیقه</td>
                        <td>پخش کلاس</td>
                      </tr>
                      <tr>
                        <td>جلسه شماره 4</td>
                        <td>1 ساعت و 20 دقیقه</td>
                        <td>پخش کلاس</td>
                      </tr>
                    </table>
                    <p className="text-center text-blue-600 text-xs my-2">
                      جلسه بعدی کلاس در تاریخ 25 اردیبهشت 1404 ساعت 8 شب برگزار
                      میشود
                    </p>
                  </td>
                </tr>
              )}
            </table>
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

            <table className="rounded-table text-sm text-nowrap">
              <tr>
                <th>نام دوره</th>
                <th>نام استاد</th>
                <th>مدت دوره</th>
                <th>تعداد جلسات برگزار شده</th>
                <th>آمار کلاس ها</th>
                <th>لینک کلاس</th>
                <th>نمایش جلسات</th>
              </tr>
              <tr>
                <td>ریاضیات دوره دوم دبیرستان</td>
                <td>مهرداد طاهرخانی</td>
                <td>100 ساعت</td>
                <td>30 جلسه</td>
                <td>
                  <a
                    href="#"
                    className="text-blue-600 no-underline text-sm font-semibold"
                    onClick={toggleDetails}
                  >
                    نمایش بیشتر آمار کلاس ها
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    className="text-blue-600 no-underline text-sm font-semibold"
                  >
                    پخش زنده فعال است
                  </a>
                </td>
                <td className="p-4 text-center cursor-pointer select-none">
                  <i className="far fa-heart"></i> نمایش
                </td>
              </tr>

              <tr className="bg-gray-100 border-b">
                <td>ریاضیات دوره اول دبیرستان</td>
                <td>مهرداد طاهرخانی</td>
                <td>8 ساعت</td>
                <td>4 جلسه</td>
                <td>
                  <a
                    href="#"
                    className="text-blue-600 no-underline text-sm font-semibold"
                    onClick={toggleDetails}
                  >
                    نمایش بیشتر آمار کلاس ها
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    className="text-blue-600 no-underline font-semibold"
                  >
                    پخش زنده فعال است
                  </a>
                </td>
                <td className="p-4 text-center cursor-pointer select-none">
                  <i className="far fa-heart"></i> نمایش
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseTable;
