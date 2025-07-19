const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="bg-green-100 text-green-800 text-center rounded-xl p-3 mb-4">
        <span>
          پخش زنده ی کلاس کنکور در حال برگزاری است{" "}
          <a href="/" className="no-underline text-black font-bold">
            کلیک
          </a>{" "}
          کنید
        </span>
      </div>
      <div className="flex gap-10">
        <div className="w-full container-effects">
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
        <div className="w-full">
          <div className="relative">
            <img src="/img/moneypanel.png" alt="" className="w-full h-auto" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl drop-shadow-md">
              ٢,٥٠٠,٠٠٠ تومان
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr_1fr] mt-4 gap-3 text-sm">
            <div className="container-effects">
              <div className="bg-[#FBEC5D] text-center p-2 rounded-lg">
                درخواست های تدریس
              </div>
              <div className="p-3 text-center">
                <p>کلاس خصوصی ریاضی گسسته در انتظار تایید استاد</p>
              </div>
            </div>
            <div className="container-effects">
              <div className="bg-blue-500 text-white text-center p-2 rounded-lg">
                تخفیف مخصوص شما
              </div>
              <div className="p-3  ">
                <img src="/img/Layer 1 2.png" alt="No discount" />
              </div>
            </div>
            <div className="container-effects">
              <div className="bg-gray-200 text-center p-2 rounded-lg text-nowrap">
                نزدیک ترین جلسه بعدی
              </div>
              <div className="p-3  rounded-b-lg">
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
