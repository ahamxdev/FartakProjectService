const DashboardLayout = ({ children }) => {
  return (
    <div className="container py-3">
      <div className="bg-green-100 text-green-800 text-center rounded-xl p-3 mb-4">
        <span>
          پخش زنده ی کلاس کنکور در حال برگزاری است{" "}
          <a href="/" className="no-underline text-black font-bold">
            کلیک
          </a>{" "}
          کنید
        </span>
      </div>
      <div className="flex flex-wrap" style={{ minHeight: "86vh" }}>
        <div className="w-full md:w-5/12 rounded-xl border border-gray-200 shadow-sm">
          <div className="bg-blue-50 m-3 rounded-lg">
            <div className="p-4">
              <h5 className="text-lg font-bold">دوره افتخاری مخصوص شما</h5>
              <p className="mt-2">
                یک جلسه ی رایگان از دوره ی 0 تا 100 کنکور با امید باقری جزو
                انجمن علمی دانشگاه تهران
              </p>
              <div className="bg-green-100 w-1/2 mx-auto rounded-lg mt-4">
                <div className="p-3">
                  <h6 className="text-center font-medium">کد تخفیف</h6>
                  <p className="text-center mt-1">RT583J3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-7/12">
          <div className="relative">
            <img src="/img/moneypanel.png" alt="" className="w-full h-auto" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl drop-shadow-md">
              ٢,٥٠٠,٠٠٠ تومان
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="max-w-xs mx-2 mb-4">
              <div className="bg-yellow-500 text-white text-center p-2 rounded-t-lg">
                دورخواست های تدریس
              </div>
              <div className="p-3 shadow-sm text-center border border-t-0 rounded-b-lg">
                <p>
                  کلاس خصوصی ریاضی گسسته در انتظار تایید استاد
                </p>
              </div>
            </div>
            <div className="max-w-xs mx-3 mb-4">
              <div className="bg-blue-500 text-white text-center p-2 rounded-t-lg">
                تخفیف مخصوص شما
              </div>
              <div className="p-3 shadow-sm border border-t-0 rounded-b-lg">
                <p></p>
              </div>
            </div>
            <div className="max-w-xs mx-3 mb-4">
              <div className="bg-gray-200 text-center p-2 rounded-t-lg">
                نزدیک ترین جلسه بعدی
              </div>
              <div className="p-3 shadow-sm border border-t-0 rounded-b-lg">
                <p className="text-center">
                  دوره آماده سازی برای کنکور 1405 در 3 ماه
                  <br />
                  فردا چهارشنبه 1404/12/20 ساعت 9 شب
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;