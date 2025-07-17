import React from "react";
import Header from "../components/Header";
import Sidebar from "./components/sidebar";

function RequestManagement() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-3">
          <div className="row">
            <div className="col-12">
              <div
                className=""
                dir="rtl"
                lang="fa"
                style={{ fontFamily: "Vazirmatn, sans-serif" }}
              >
                <h4 className="text-end fs-5 mt-4">درخواست های من</h4>

                <div className="table-responsive">
                  <table className="table table-sm">
                    <thead className="table-dark text-white small fw-semibold text-center">
                      <tr>
                        <th>شماره درخواست</th>
                        <th>زمان ارسال درخواست</th>
                        <th className="text-center">عنوان درخواست</th>
                        <th
                          style={{ padding: "0.6rem" }}
                          className="text-center"
                        >
                          پاسخ درخواست
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: "1rem" }} className="text-center">
                          3a00{" "}
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          1401/01/25 ساعت 14,00{" "}
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          درخواست برگزاری کلاس نظریه زبان ها و ماشین ها{" "}
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          پاسخ داده شد{" "}
                        </td>
                      </tr>

                      <tr>
                        <td style={{ padding: "1rem" }} className="text-center">
                          3a00{" "}
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          1401/01/25 ساعت 14,00{" "}
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          سوال درباره نوع طراحی و تشخیص ماشین زبان نوع سوم{" "}
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          {" "}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "1rem" }} className="text-center">
                          3a00{" "}
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          1401/01/25 ساعت 14,00{" "}
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          درخواست برگزاری کلاس نظریه زبان ها و ماشین ها{" "}
                        </td>
                        <td style={{ padding: "1rem" }} className="text-center">
                          پاسخ داده شد{" "}
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

export default RequestManagement;
