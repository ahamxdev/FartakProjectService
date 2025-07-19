import React, { useState } from "react";
<<<<<<< HEAD
=======
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { Link } from "react-router-dom";
>>>>>>> a43b147191de07cffa1536aca68daa0ad6e6a0a0

const CourseTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };
  
  return (
<<<<<<< HEAD
    <main className="p-3">
      <div className="container mt-4 w-full">
        <div className="flex justify-center">
          <h5 className="mb-3 bg-green-100 border border-green-400 rounded-3xl px-4 py-2 text-green-800">
            کلاس کنکور
          </h5>
        </div>
=======
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-3">
          <div className="container mt-4 w-100" dir="rtl">
            <div className="row">
              <h5 className="mb-3 alert alert-success border border-success rounded-5">
                کلاس کنکور
              </h5>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div
                className=" py-4"
                dir="rtl"
                lang="fa"
                style={{ fontFamily: "Vazirmatn, sans-serif" }}
              >
                <h2 className="text-end fw-semibold fs-5 mb-4">
                  دوره های درحال برگزاری
                </h2>

                <div className="table-responsive text-center">
                  <table className="table table-sm text-end align-middle">
                    <thead className="table-dark text-white small fw-semibold text-center">
                      <tr>
                        <th style={{ padding: "1rem" }}>نام دوره</th>
                        <th style={{ padding: "1rem" }}>نام استاد</th>
                        <th style={{ padding: "1rem" }} className="text-center">
                          مدت دوره
                        </th>
                        <th style={{ padding: "1rem" }} className="text-center">
                          تعداد جلسات برگزار شده
                        </th>
                        <th style={{ padding: "1rem" }} className="text-center">
                          آمار کلاس ها
                        </th>
                        <th style={{ padding: "1rem" }} className="text-center">
                          لینک کلاس
                        </th>
                        <th style={{ padding: "1rem" }} className="text-center">
                          نمایش جلسات
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: "1rem" }} className="text-center">
                          ریاضیات دوره دوم دبیرستان
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          مهرداد طاهرخانی
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          100 ساعت
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          30 جلسه
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          <Link
                            to={"/"}
                            className="text-primary text-decoration-none small fw-semibold"
                            onClick={toggleDetails}
                          >
                            نمایش بیشتر آمار کلاس ها
                          </Link>
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          <Link
                            to={"/"}
                            className="text-primary text-decoration-none small fw-semibold"
                          >
                            پخش زنده فعال است
                          </Link>
                        </td>
                        <td
                          style={{
                            padding: "1rem",
                            cursor: "pointer",
                            userSelect: "none",
                          }}
                          className="text-center"
                        >
                          <i className="far fa-heart"></i> نمایش
                        </td>
                      </tr>

                      <tr className="table-secondary">
                        <td style={{ padding: "1rem" }} className="text-center">
                          ریاضیات دوره اول دبیرستان
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          مهرداد طاهرخانی
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          8 ساعت
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          4 جلسه
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          <Link
                            to={"/"}
                            className="text-primary text-decoration-none small fw-semibold"
                            onClick={toggleDetails}
                          >
                            نمایش بیشتر آمار کلاس ها
                          </Link>
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          <Link
                            to={"/"}
                            className="text-primary text-decoration-none small fw-semibold"
                          >
                            پخش زنده فعال است
                          </Link>
                        </td>
                        <td
                          style={{
                            padding: "1rem",
                            cursor: "pointer",
                            userSelect: "none",
                          }}
                          className="text-center"
                        >
                          <i className="far fa-heart"></i> نمایش
                        </td>
                      </tr>

                      {isOpen && (
                        <tr className="table-secondary">
                          <td colSpan="7" className="p-0">
                            <table className="table table-sm text-center mb-0 table-secondary w-75 mx-auto">
                              <thead className="table-dark  small fw-semibold">
                                <tr>
                                  <th
                                    style={{ padding: "1rem" }}
                                    className="w-33"
                                  >
                                    جلسه
                                  </th>
                                  <th
                                    style={{ padding: "1rem" }}
                                    className="w-33"
                                  >
                                    مدت زمان
                                  </th>
                                  <th
                                    style={{ padding: "1rem" }}
                                    className="w-33"
                                  >
                                    لینک
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="text-center">
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    جلسه شماره 1
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    1 ساعت و 20 دقیقه
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    پخش کلاس
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    جلسه شماره 2
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    1 ساعت و 20 دقیقه
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    پخش کلاس
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    جلسه شماره 3
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    1 ساعت و 20 دقیقه
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    پخش کلاس
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    جلسه شماره 4
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    1 ساعت و 20 دقیقه
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    پخش کلاس
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="text-center text-primary small my-2">
                              جلسه بعدی کلاس در تاریخ 25 اردیبهشت 1404 ساعت 8 شب
                              برگزار میشود
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
          <div className="row">
            <div className="col-12">
              <div
                className=" py-4"
                dir="rtl"
                lang="fa"
                style={{ fontFamily: "Vazirmatn, sans-serif" }}
              >
                <h2 className="text-end fw-semibold fs-5 mb-4">
                  دوره های آنلاین به اتمام رسیده
                </h2>

                <div className="table-responsive text-center">
                  <table className="table table-sm text-end align-middle">
                    <thead className="table-dark text-white small fw-semibold text-center">
                      <tr>
                        <th style={{ padding: "1rem" }}>نام دوره</th>
                        <th style={{ padding: "1rem" }}>نام استاد</th>
                        <th style={{ padding: "1rem" }} className="text-center">
                          مدت دوره
                        </th>
                        <th style={{ padding: "1rem" }} className="text-center">
                          تعداد جلسات برگزار شده
                        </th>
                        <th style={{ padding: "1rem" }} className="text-center">
                          آمار کلاس ها
                        </th>
                        <th style={{ padding: "1rem" }} className="text-center">
                          لینک کلاس
                        </th>
                        <th style={{ padding: "1rem" }} className="text-center">
                          نمایش جلسات
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: "1rem" }} className="text-center">
                          ریاضیات دوره دوم دبیرستان
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          مهرداد طاهرخانی
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          100 ساعت
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          30 جلسه
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          <Link
                            to={"/"}
                            className="text-primary text-decoration-none small fw-semibold"
                            onClick={toggleDetails}
                          >
                            نمایش بیشتر آمار کلاس ها
                          </Link>
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          <Link
                            to={"/"}
                            className="text-primary text-decoration-none small fw-semibold"
                          >
                            پخش زنده فعال است
                          </Link>
                        </td>
                        <td
                          style={{
                            padding: "1rem",
                            cursor: "pointer",
                            userSelect: "none",
                          }}
                          className="text-center"
                        >
                          <i className="far fa-heart"></i> نمایش
                        </td>
                      </tr>

                      <tr className="table-secondary">
                        <td style={{ padding: "1rem" }} className="text-center">
                          ریاضیات دوره اول دبیرستان
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          مهرداد طاهرخانی
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          8 ساعت
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          4 جلسه
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          <Link
                            to={"/"}
                            className="text-primary text-decoration-none small fw-semibold"
                            onClick={toggleDetails}
                          >
                            نمایش بیشتر آمار کلاس ها
                          </Link>
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          <Link
                            to={"/"}
                            className="text-primary text-decoration-none small fw-semibold"
                          >
                            پخش زنده فعال است
                          </Link>
                        </td>
                        <td
                          style={{
                            padding: "1rem",
                            cursor: "pointer",
                            userSelect: "none",
                          }}
                          className="text-center"
                        >
                          <i className="far fa-heart"></i> نمایش
                        </td>
                      </tr>

                      {isOpen && (
                        <tr className="table-secondary">
                          <td colSpan="7" className="p-0">
                            <table className="table table-sm text-center mb-0 table-secondary w-75 mx-auto">
                              <thead className="table-dark  small fw-semibold">
                                <tr>
                                  <th
                                    style={{ padding: "1rem" }}
                                    className="w-33"
                                  >
                                    جلسه
                                  </th>
                                  <th
                                    style={{ padding: "1rem" }}
                                    className="w-33"
                                  >
                                    مدت زمان
                                  </th>
                                  <th
                                    style={{ padding: "1rem" }}
                                    className="w-33"
                                  >
                                    لینک
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="text-center">
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    جلسه شماره 1
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    1 ساعت و 20 دقیقه
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    پخش کلاس
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    جلسه شماره 2
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    1 ساعت و 20 دقیقه
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    پخش کلاس
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    جلسه شماره 3
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    1 ساعت و 20 دقیقه
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    پخش کلاس
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    جلسه شماره 4
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    1 ساعت و 20 دقیقه
                                  </td>
                                  <td
                                    style={{ padding: "1rem" }}
                                    className="text-center"
                                  >
                                    پخش کلاس
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p className="text-center text-primary small my-2">
                              جلسه بعدی کلاس در تاریخ 25 اردیبهشت 1404 ساعت 8 شب
                              برگزار میشود
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
        </main>
>>>>>>> a43b147191de07cffa1536aca68daa0ad6e6a0a0
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