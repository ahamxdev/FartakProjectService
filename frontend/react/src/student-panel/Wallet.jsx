function Wallet() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img src="/img/wallet.png" alt="" className="w-full h-auto" />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
              >
                <h2 className="text-2xl">٢,٥٠٠,٠٠٠ تومان</h2>
              </div>
            </div>
            <div className="flex justify-end pe-5">
              <button className="bg-green-500 text-white px-4 py-2 ml-4 rounded">افزایش موجودی</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">درخواست برداشت وجه</button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img src="/img/cashout.png" alt="" className="w-full h-auto" />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
              >
                <h2 className="text-2xl">٢,٥٠٠,٠٠٠ تومان</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-wrap mt-3">
          <div className="w-full">
            <div
              className=""
              dir="rtl"
              lang="fa"
              style={{ fontFamily: "Vazirmatn, sans-serif" }}
            >
              <div className="overflow-x-auto w-3/4 mx-auto">
                <h4 className="text-right text-lg mt-4">قسط های پیش رو :</h4>

                <table className="w-full text-sm">
                  <thead className="bg-gray-800 text-white text-xs font-semibold text-center">
                    <tr>
                      <th className="p-3">تاریخ قسط</th>
                      <th className="p-3">مبلغ قسط</th>
                      <th className="p-3 text-center">بابت دوره </th>
                      <th className="p-3 text-center">
                        وضعیت
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 text-center">1404/02/15</td>
                      <td className="p-4 text-center">1,200,000 تومان</td>
                      <td className="p-4 text-center">
                        دوره آمادگی برای امتحانات پایانی کلاس 11
                      </td>
                      <td className="p-4 text-center">
                        در انتظار پرداخت
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-4 text-center">1404/01/15</td>
                      <td className="p-4 text-center">1,200,000 تومان</td>
                      <td className="p-4 text-center">
                        دوره آمادگی برای امتحانات پایانی کلاس 11
                      </td>
                      <td className="p-4 text-center">
                        پرداخت شده
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-2">
          <div className="w-full">
            <div
              className=""
              dir="rtl"
              lang="fa"
              style={{ fontFamily: "Vazirmatn, sans-serif" }}
            >
              <div className="overflow-x-auto w-3/4 mx-auto">
                <h4 className="text-right text-lg mt-4">تاریخچه تراکنش ها : </h4>

                <table className="w-full text-sm">
                  <thead className="bg-gray-800 text-white text-xs font-semibold text-center">
                    <tr>
                      <th className="p-3">تاریخ</th>
                      <th className="p-3"> نوع تراکنش </th>
                      <th className="p-3 text-center">مبلغ</th>
                      <th className="p-3 text-center">
                        توضیحات
                      </th>
                      <th className="p-3 text-center">
                        وضعیت
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 text-center">1404/02/15</td>
                      <td className="p-4 text-center">برداشت</td>
                      <td className="p-4 text-center">1,120,000 تومان</td>
                      <td className="p-4 text-center">
                        برای دوره مهندسی نرم افزار
                      </td>
                      <td className="p-4 text-center">
                        تایید شده
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-center">1404/02/15</td>
                      <td className="p-4 text-center">برداشت</td>
                      <td className="p-4 text-center">1,120,000 تومان</td>
                      <td className="p-4 text-center">
                        برای دوره مهندسی نرم افزار
                      </td>
                      <td className="p-4 text-center">
                        تایید شده
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-center">1404/02/15</td>
                      <td className="p-4 text-center">برداشت</td>
                      <td className="p-4 text-center">1,120,000 تومان</td>
                      <td className="p-4 text-center">
                        برای دوره مهندسی نرم افزار
                      </td>
                      <td className="p-4 text-center">
                        تایید شده
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-center">1404/02/15</td>
                      <td className="p-4 text-center">برداشت</td>
                      <td className="p-4 text-center">1,120,000 تومان</td>
                      <td className="p-4 text-center">
                        برای دوره مهندسی نرم افزار
                      </td>
                      <td className="p-4 text-center">
                        تایید شده
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-center">1404/02/15</td>
                      <td className="p-4 text-center">برداشت</td>
                      <td className="p-4 text-center">1,120,000 تومان</td>
                      <td className="p-4 text-center">
                        برای دوره مهندسی نرم افزار
                      </td>
                      <td className="p-4 text-center">
                        تایید شده
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-center">1404/02/15</td>
                      <td className="p-4 text-center">برداشت</td>
                      <td className="p-4 text-center">1,120,000 تومان</td>
                      <td className="p-4 text-center">
                        برای دوره مهندسی نرم افزار
                      </td>
                      <td className="p-4 text-center">
                        تایید شده
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-center">1404/02/15</td>
                      <td className="p-4 text-center">برداشت</td>
                      <td className="p-4 text-center">1,120,000 تومان</td>
                      <td className="p-4 text-center">
                        برای دوره مهندسی نرم افزار
                      </td>
                      <td className="p-4 text-center">
                        تایید شده
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wallet;