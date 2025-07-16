import React, { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

function MyClasses() {
  const [onlineStatus, setOnlineStatus] = useState("done");
  const [inpersonStatus, setInpersonStatus] = useState("done");
  const [courseStatus, setCourseStatus] = useState("done");

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-3">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="card m-3 rounded-4 shadow h-100">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title font-bold text-center">
                      کلاس های خصوصی انلاین
                    </h5>
                    <p className="card-text text-center flex-grow-1">
                      دروس تخصصی هنرستان رشته کامپیوتر جلسه 6 شنبه 1404/06/12 در
                      نرم افزار Google Meet ساعت 10 صبح
                    </p>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                      <span className="me-2">برگزار:</span>
                      <div className="d-flex gap-3">
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="onlineStatus"
                            id="onlineDone"
                            checked={onlineStatus === "done"}
                            onChange={() => setOnlineStatus("done")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="onlineDone"
                          >
                            شده
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="onlineStatus"
                            id="onlineNotDone"
                            checked={onlineStatus === "notDone"}
                            onChange={() => setOnlineStatus("notDone")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="onlineNotDone"
                          >
                            نشده
                          </label>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-dark w-100 mt-auto">
                      چت با استاد
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card m-3 rounded-4 shadow h-100">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title font-bold text-center">
                      کلاس های خصوصی حضوری
                    </h5>
                    <p className="card-text text-center flex-grow-1">
                      دروس تخصصی هنرستان رشته کامپیوتر جلسه 5 استان قزوین جمعه
                      1404/06/11 در دفتر نمایندگی شرکت فرتاک ساعت 10 صبح
                    </p>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                      <span className="me-2">برگزار:</span>
                      <div className="d-flex gap-3">
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="inpersonStatus"
                            id="inpersonDone"
                            checked={inpersonStatus === "done"}
                            onChange={() => setInpersonStatus("done")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inpersonDone"
                          >
                            شده
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="inpersonStatus"
                            id="inpersonNotDone"
                            checked={inpersonStatus === "notDone"}
                            onChange={() => setInpersonStatus("notDone")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inpersonNotDone"
                          >
                            نشده
                          </label>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-dark w-100 mt-auto">
                      چت با استاد
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card m-3 rounded-4 shadow h-100">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title font-bold text-center">
                      دوره های کنکوری
                    </h5>
                    <p className="card-text text-center flex-grow-1">
                      دوره آماده سازی برای امتحانات پایان ترم کلاس 11 تجربی
                    </p>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                      <span className="me-2">برگزار:</span>
                      <div className="d-flex gap-3">
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="courseStatus"
                            id="courseDone"
                            checked={courseStatus === "done"}
                            onChange={() => setCourseStatus("done")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="courseDone"
                          >
                            شده
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="courseStatus"
                            id="courseNotDone"
                            checked={courseStatus === "notDone"}
                            onChange={() => setCourseStatus("notDone")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="courseNotDone"
                          >
                            نشده
                          </label>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-dark w-100 mt-auto">
                      چت با استاد
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8 mx-auto">
              <div
                className="py-4"
                dir="rtl"
                lang="fa"
                style={{ fontFamily: "Vazirmatn, sans-serif" }}
              >
                <h4 className="text-end fs-5 mt-4">
                  کلاس ها و دوره های پایان یافته
                </h4>

                <div className="table-responsive text-center">
                  <table className="table table-sm text-end align-middle">
                    <thead className="table-dark text-white small fw-semibold text-center">
                      <tr>
                        <th>نام دوره</th>
                        <th>نام استاد</th>
                        <th className="text-center">هزینه جلسه</th>
                        <th
                          style={{ padding: "0.6rem" }}
                          className="text-center"
                        >
                          تاریخ برگزاری جلسه
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: "1rem" }} className="text-center">
                          کلاس طراحی uml{" "}
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          مهرداد طاهرخانی
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          100 هزار تومن{" "}
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          1404/04/25{" "}
                        </td>
                      </tr>

                      <tr>
                        <td style={{ padding: "1rem" }} className="text-center">
                          کلاس ریاضیات گسسته{" "}
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          مهرداد طاهرخانی
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          2 میلیون تومان{" "}
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          1404/05/20{" "}
                        </td>
                      </tr>
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
}

export default MyClasses;
