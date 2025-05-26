import React from "react";
export default function PricingTable() {
      const tableData = [
            {
                  title: "قالب",
                  values: ["آماده", "نیمه اختصاصی", "اختصاصی", "اختصاصی (کانفینس شده)"],
            },
            {
                  title: "درگاه پرداخت",
                  values: ["ندارد (پرداخت هزینه)", "دارد", "دارد", "دارد"],
            },
            {
                  title: "پشتیبانی رایگان",
                  values: ["❌", "✅", "✅", "✅"],
            },
            {
                  title: "مدت زمان",
                  values: ["۱ تا ۳ ماه", "۳ تا ۶ ماه", "۶ ماه تا یک سال", "یک تا دو سال"],
            },
            {
                  title: "تعداد دامنه",
                  values: ["۱", "۳", "۵ یا بیشتر", "به تعداد دلخواه"],
            },
            {
                  title: "CDN",
                  values: ["ندارد", "دارد", "دارد (پیشرفته)", "دارد (پیشرفته)"],
            },
      ];

      const getStatusIcon = (val) => {
            if (val.includes("✅")) return "✅";
            if (val.includes("❌")) return "❌";
            return val;
      };

      return (
            <section className="w-[90%] mx-auto flex flex-col gap-8 md:my-10 my-5">
                  <div className="flex items-center justify-between gap-5 px-6">
                        <button className="cursor-pointer border-[1px] border-[#EEF5FF] rounded-md md:text-lg text-sm font-bold flex justify-center items-center px-6 py-5 outline-none">سایت کامل</button>
                        <button className="cursor-pointer shadow-md bg-[#EEF5FF] rounded-md flex flex-col gap-2 justify-center items-center px-4 py-2 outline-none">
                              <span className="md:text-lg text-sm font-bold">سایت کوچک</span>
                              <span className="bg-white rounded-sm flex items-center gap-2 justify-center px-1.5 py-0.5">
                                    <span className="text-sm font-bold text-[#9daaff]">4 تا 10</span>
                                    <span className="text-sm font-bold text-black">میلیون تومان</span>
                              </span>
                        </button>
                        <button className="cursor-pointer shadow-md bg-[#EEF5FF] rounded-md flex flex-col gap-2 justify-center items-center px-4 py-2 outline-none">
                              <span className="md:text-lg text-sm font-bold">سایت کوچک</span>
                              <span className="bg-white rounded-sm flex items-center gap-2 justify-center px-1.5 py-0.5">
                                    <span className="text-sm font-bold text-[#9daaff]">4 تا 10</span>
                                    <span className="text-sm font-bold text-black">میلیون تومان</span>
                              </span>
                        </button>
                        <button className="cursor-pointer shadow-md bg-[#EEF5FF] rounded-md flex flex-col gap-2 justify-center items-center px-4 py-2 outline-none">
                              <span className="md:text-lg text-sm font-bold">سایت کوچک</span>
                              <span className="bg-white rounded-sm flex items-center gap-2 justify-center px-1.5 py-0.5">
                                    <span className="text-sm font-bold text-[#9daaff]">4 تا 10</span>
                                    <span className="text-sm font-bold text-black">میلیون تومان</span>
                              </span>
                        </button>
                        <button className="cursor-pointer shadow-md relative bg-[#495AFF] rounded-md flex flex-col gap-2 justify-center items-center px-4 py-2 outline-none">
                              <span className="text-black absolute -top-4 -right-4 z-10 rounded-full bg-[#FCE638] flex justify-center items-center w-8 h-8 text-[8px] font-extrabold rotate-12">پر فروش</span>
                              <span className="md:text-lg text-sm font-bold">سایت کوچک</span>
                              <span className="bg-white rounded-sm flex items-center gap-2 justify-center px-1.5 py-0.5">
                                    <span className="text-sm font-bold text-[#9daaff]">4 تا 10</span>
                                    <span className="text-sm font-bold text-black">میلیون تومان</span>
                              </span>
                        </button>
                  </div>
                  <div className="overflow-x-auto">
                        <div className="grid grid-cols-5 bg-white rounded-md shadow border md:gap-x-5 gap-x-2 border-gray-200">
                              {tableData.map((row, rowIndex) => (
                                    <React.Fragment key={rowIndex}>
                                          <div className="font-bold md:text-base text-xs text-right px-2 py-3 border border-gray-200">{row.title}</div>
                                          {row.values.map((val, i) => (
                                                <div
                                                      key={i}
                                                      className="text-center font-bold md:text-base text-[10px] px-2 py-3 border border-gray-200"
                                                >
                                                      {getStatusIcon(val)}
                                                </div>
                                          ))}
                                    </React.Fragment>
                              ))}
                        </div>
                  </div>
            </section>
      );
}
