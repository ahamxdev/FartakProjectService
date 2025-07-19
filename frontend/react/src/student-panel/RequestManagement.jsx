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

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-800 text-white text-xs font-semibold text-center">
                  <tr>
                    <th className="p-3">شماره درخواست</th>
                    <th className="p-3">زمان ارسال درخواست</th>
                    <th className="p-3 text-center">عنوان درخواست</th>
                    <th className="p-3 text-center">
                      پاسخ درخواست
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 text-center">3a00</td>
                    <td className="p-4 text-center">1401/01/25 ساعت 14,00</td>
                    <td className="p-4 text-center">
                      درخواست برگزاری کلاس نظریه زبان ها و ماشین ها
                    </td>
                    <td className="p-4 text-center">
                      پاسخ داده شد
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-4 text-center">3a00</td>
                    <td className="p-4 text-center">1401/01/25 ساعت 14,00</td>
                    <td className="p-4 text-center">
                      سوال درباره نوع طراحی و تشخیص ماشین زبان نوع سوم
                    </td>
                    <td className="p-4 text-center"></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 text-center">3a00</td>
                    <td className="p-4 text-center">1401/01/25 ساعت 14,00</td>
                    <td className="p-4 text-center">
                      درخواست برگزاری کلاس نظریه زبان ها و ماشین ها
                    </td>
                    <td className="p-4 text-center">
                      پاسخ داده شد
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
}

export default RequestManagement;