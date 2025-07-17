import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "./components/sidebar";

const CourseTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };
  return (
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
                          <a
                            href="#"
                            className="text-primary text-decoration-none small fw-semibold"
                            onClick={toggleDetails}
                          >
                            نمایش بیشتر آمار کلاس ها
                          </a>
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          <a
                            href="#"
                            className="text-primary text-decoration-none small fw-semibold"
                          >
                            پخش زنده فعال است
                          </a>
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
                          <a
                            href="#"
                            className="text-primary text-decoration-none small fw-semibold"
                            onClick={toggleDetails}
                          >
                            نمایش بیشتر آمار کلاس ها
                          </a>
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          <a
                            href="#"
                            className="text-primary text-decoration-none small fw-semibold"
                          >
                            پخش زنده فعال است
                          </a>
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
                          <a
                            href="#"
                            className="text-primary text-decoration-none small fw-semibold"
                            onClick={toggleDetails}
                          >
                            نمایش بیشتر آمار کلاس ها
                          </a>
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          <a
                            href="#"
                            className="text-primary text-decoration-none small fw-semibold"
                          >
                            پخش زنده فعال است
                          </a>
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
                          <a
                            href="#"
                            className="text-primary text-decoration-none small fw-semibold"
                            onClick={toggleDetails}
                          >
                            نمایش بیشتر آمار کلاس ها
                          </a>
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          <a
                            href="#"
                            className="text-primary text-decoration-none small fw-semibold"
                          >
                            پخش زنده فعال است
                          </a>
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
      </div>
    </div>
  );
};

export default CourseTable;
