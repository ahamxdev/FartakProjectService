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
              <button className="bg-green-500 text-white px-4 py-2 ml-4 rounded">
                افزایش موجودی
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                درخواست برداشت وجه
              </button>
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
              <div className="w-3/4 mx-auto">
                <h4 className="text-right text-lg mt-4">قسط های پیش رو :</h4>

                <table className="rounded-table">
                  <tr>
                    <th>تاریخ قسط</th>
                    <th>مبلغ قسط</th>
                    <th>بابت دوره </th>
                    <th>وضعیت</th>
                  </tr>
                  <tr>
                    <td>1404/02/15</td>
                    <td>1,200,000 تومان</td>
                    <td>دوره آمادگی برای امتحانات پایانی کلاس 11</td>
                    <td>در انتظار پرداخت</td>
                  </tr>

                  <tr>
                    <td>1404/01/15</td>
                    <td>1,200,000 تومان</td>
                    <td>دوره آمادگی برای امتحانات پایانی کلاس 11</td>
                    <td>پرداخت شده</td>
                  </tr>
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
              <div className="w-3/4 mx-auto">
                <h4 className="text-right text-lg mt-4">
                  تاریخچه تراکنش ها :{" "}
                </h4>

                <table className="rounded-table">
                  <tr>
                    <th>تاریخ</th>
                    <th> نوع تراکنش </th>
                    <th>مبلغ</th>
                    <th>توضیحات</th>
                    <th>وضعیت</th>
                  </tr>
                  <tr>
                    <td>1404/02/15</td>
                    <td>برداشت</td>
                    <td>1,120,000 تومان</td>
                    <td>برای دوره مهندسی نرم افزار</td>
                    <td>تایید شده</td>
                  </tr>
                  <tr>
                    <td>1404/02/15</td>
                    <td>برداشت</td>
                    <td>1,120,000 تومان</td>
                    <td>برای دوره مهندسی نرم افزار</td>
                    <td>تایید شده</td>
                  </tr>
                  <tr>
                    <td>1404/02/15</td>
                    <td>برداشت</td>
                    <td>1,120,000 تومان</td>
                    <td>برای دوره مهندسی نرم افزار</td>
                    <td>تایید شده</td>
                  </tr>
                  <tr>
                    <td>1404/02/15</td>
                    <td>برداشت</td>
                    <td>1,120,000 تومان</td>
                    <td>برای دوره مهندسی نرم افزار</td>
                    <td>تایید شده</td>
                  </tr>
                  <tr>
                    <td>1404/02/15</td>
                    <td>برداشت</td>
                    <td>1,120,000 تومان</td>
                    <td>برای دوره مهندسی نرم افزار</td>
                    <td>تایید شده</td>
                  </tr>
                  <tr>
                    <td>1404/02/15</td>
                    <td>برداشت</td>
                    <td>1,120,000 تومان</td>
                    <td>برای دوره مهندسی نرم افزار</td>
                    <td>تایید شده</td>
                  </tr>
                  <tr>
                    <td>1404/02/15</td>
                    <td>برداشت</td>
                    <td>1,120,000 تومان</td>
                    <td>برای دوره مهندسی نرم افزار</td>
                    <td>تایید شده</td>
                  </tr>
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
