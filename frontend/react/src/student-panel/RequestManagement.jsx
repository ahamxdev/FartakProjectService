import React from "react";

function RequestManagement() {
  return (
    <main className="p-3">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div
            className=""
            dir="rtl"
            lang="fa"
            style={{ fontFamily: "Vazirmatn, sans-serif" }}
          >
            <h4 className="text-right text-lg mt-4">درخواست های من</h4>

            <table className="rounded-table ">
              <tr>
                <th>شماره درخواست</th>
                <th>زمان ارسال درخواست</th>
                <th>عنوان درخواست</th>
                <th>پاسخ درخواست</th>
              </tr>
              <tr>
                <td>3a00</td>
                <td>1401/01/25 ساعت 14,00</td>
                <td>درخواست برگزاری کلاس نظریه زبان ها و ماشین ها</td>
                <td>پاسخ داده شد</td>
              </tr>

              <tr>
                <td>3a00</td>
                <td>1401/01/25 ساعت 14,00</td>
                <td>سوال درباره نوع طراحی و تشخیص ماشین زبان نوع سوم</td>
                <td></td>
              </tr>
              <tr>
                <td>3a00</td>
                <td>1401/01/25 ساعت 14,00</td>
                <td>درخواست برگزاری کلاس نظریه زبان ها و ماشین ها</td>
                <td>پاسخ داده شد</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RequestManagement;
