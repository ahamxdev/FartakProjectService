import React, { useState } from "react";

function MyClasses() {
  const [onlineStatus, setOnlineStatus] = useState("done");
  const [inpersonStatus, setInpersonStatus] = useState("done");
  const [courseStatus, setCourseStatus] = useState("done");

  return (
    <main className="p-3">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/3 px-3">
            <div className="m-3 container-effects h-full flex flex-col">
              <div className="p-4 flex flex-col flex-grow ">
                <h5 className="font-bold text-center">کلاس های خصوصی انلاین</h5>
                <p className="text-center flex-grow">
                  دروس تخصصی هنرستان رشته کامپیوتر جلسه 6 شنبه 1404/06/12 در نرم
                  افزار Google Meet ساعت 10 صبح
                </p>
                <div className="flex items-center justify-center mb-3">
                  <span className="ml-2">برگزار:</span>
                  <div className="flex gap-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-blue-600"
                        name="onlineStatus"
                        id="onlineDone"
                        checked={onlineStatus === "done"}
                        onChange={() => setOnlineStatus("done")}
                      />
                      <label className="mr-1" htmlFor="onlineDone">
                        شده
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-blue-600"
                        name="onlineStatus"
                        id="onlineNotDone"
                        checked={onlineStatus === "notDone"}
                        onChange={() => setOnlineStatus("notDone")}
                      />
                      <label className="mr-1" htmlFor="onlineNotDone">
                        نشده
                      </label>
                    </div>
                  </div>
                </div>
                <button className="bg-[#28303F] text-white w-full py-1 rounded-lg mt-auto hover:bg-[#363e4d] transition-colors duration-300">
                  چت با استاد
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-3">
            <div className="m-3 container-effects h-full flex flex-col">
              <div className="p-4 flex flex-col flex-grow ">
                <h5 className="font-bold text-center">کلاس های خصوصی حضوری</h5>
                <p className="text-center flex-grow">
                  دروس تخصصی هنرستان رشته کامپیوتر جلسه 5 استان قزوین جمعه
                  1404/06/11 در دفتر نمایندگی شرکت فرتاک ساعت 10 صبح
                </p>
                <div className="flex items-center justify-center mb-3">
                  <span className="ml-2">برگزار:</span>
                  <div className="flex gap-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-blue-600"
                        name="inpersonStatus"
                        id="inpersonDone"
                        checked={inpersonStatus === "done"}
                        onChange={() => setInpersonStatus("done")}
                      />
                      <label className="mr-1" htmlFor="inpersonDone">
                        شده
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-blue-600"
                        name="inpersonStatus"
                        id="inpersonNotDone"
                        checked={inpersonStatus === "notDone"}
                        onChange={() => setInpersonStatus("notDone")}
                      />
                      <label className="mr-1" htmlFor="inpersonNotDone">
                        نشده
                      </label>
                    </div>
                  </div>
                </div>
                <button className="bg-[#28303F] text-white w-full py-1 rounded-lg mt-auto hover:bg-[#363e4d] transition-colors duration-300">
                  ارسال
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-3">
            <div className="m-3 container-effects h-full flex flex-col">
              <div className="p-4 flex flex-col flex-grow ">
                <h5 className="font-bold text-center">دوره های کنکوری</h5>
                <p className="text-center flex-grow">
                  دوره آماده سازی برای امتحانات پایان ترم کلاس 11 تجربی
                </p>
                <div className="flex items-center justify-center mb-3">
                  <span className="ml-2">برگزار:</span>
                  <div className="flex gap-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-blue-600"
                        name="courseStatus"
                        id="courseDone"
                        checked={courseStatus === "done"}
                        onChange={() => setCourseStatus("done")}
                      />
                      <label className="mr-1" htmlFor="courseDone">
                        شده
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-blue-600"
                        name="courseStatus"
                        id="courseNotDone"
                        checked={courseStatus === "notDone"}
                        onChange={() => setCourseStatus("notDone")}
                      />
                      <label className="mr-1" htmlFor="courseNotDone">
                        نشده
                      </label>
                    </div>
                  </div>
                </div>
                <button className="bg-[#28303F] text-white w-full py-1 rounded-lg mt-auto hover:bg-[#363e4d] transition-colors duration-300">
                  چت با استاد
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3 mx-auto">
          <div
            className="py-4"
            dir="rtl"
            lang="fa"
            style={{ fontFamily: "Vazirmatn, sans-serif" }}
          >
            <h4 className="text-right text-lg mt-4">
              کلاس ها و دوره های پایان یافته
            </h4>

            <table className="rounded-table">
              <tr>
                <th>نام دوره</th>
                <th>نام استاد</th>
                <th>هزینه جلسه</th>
                <th>تاریخ برگزاری جلسه</th>
              </tr>
              <tr>
                <td>کلاس طراحی uml</td>
                <td>مهرداد طاهرخانی</td>
                <td>100 هزار تومن</td>
                <td>1404/04/25</td>
              </tr>

              <tr>
                <td>کلاس ریاضیات گسسته</td>
                <td>مهرداد طاهرخانی</td>
                <td>2 میلیون تومان</td>
                <td>1404/05/20</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyClasses;
