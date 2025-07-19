"use client";
import { lazy, memo } from "react";
import { Link } from "@/i18n/navigation";
const IconYoungGirl = lazy(() => import("@/icons/tadrisPage/IconYoungGirl"));
const IconTable = lazy(() => import("@/icons/tadrisPage/IconTable"));
const page = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#000]"
    //   style={{ backdropFilter: "blur(12px)" }}
    style={{opacity: ".92"}}
    >
      <div className="flex mt-[79px] rounded-lg md:w-[80%] w-[98%] justify-between  bg-white z-100 md:p-12 p-4">
        <Link href={"tadris/online?step=2"} className="basis-[47%]">
          <div className="bg-[#FFE401] rounded-[4px] sm:gap-5 sm:p-5 md:max-h-[148px] sm:rounded-[20px] sm:flex sm:items-center sm:flex-row-reverse">
            <div className="flex flex-col">
              <IconYoungGirl className="hidden sm:block sm:relative sm:bottom-5" />
              <button className="hidden sm:block bg-black text-white sm:w-[123px] sm:h-[29px] sm:px-3 sm:py-1.5 sm:rounded-[8px] sm:text-[14px] sm:font-[700] sm:mb-[19px]">
                <span className="relative bottom-1"> مشاهده اطلاعات</span>
              </button>
            </div>
            <div className="flex flex-col sm:gap-3.5 items-center gap-1.5 p-[3px]">
              <span className="sm:text-[22px] sm:font-[700] text-[14px] font-[400]">
                تدریس خصوصی آنلاین
              </span>
              <span className="sm:text-[16px] sm:font-[400] sm:w-[90%] text-[8px] px-5 text-justify">
                نگران هیچی نباش با فرتاک همیشه و همه جا آموزش ببین.
              </span>
              <button className="sm:hidden block w-[92px] h-[22px] bg-black text-[10px] font-[400] rounded-[4px] text-white p-1">
                مشاهده اطلاعات
              </button>
            </div>
          </div>
        </Link>
        <Link href={"tadris/offline?step=2"} className="basis-[47%]">
          <div className="bg-[#FDF39A] md:max-h-[148px] rounded-[4px] sm:gap-5 sm:p-5 sm:rounded-[20px] sm:flex sm:items-center sm:flex-row-reverse">
            <div className="flex flex-col sm:relative sm:bottom-3.5">
              <IconTable className="hidden sm:block sm:w-[99px] sm:h-[139px]" />
              <button className="hidden sm:block bg-black text-white sm:w-[123px] sm:h-[29px] sm:px-3 sm:py-1.5 sm:rounded-[8px] sm:text-[14px] sm:font-[700] sm:mb-[19px]">
                <span className="relative bottom-1"> مشاهده اطلاعات</span>
              </button>
            </div>
            <div className="flex flex-col sm:gap-3.5 items-center gap-1.5 p-[3px]">
              <span className="sm:text-[22px] sm:font-[700] text-[14px] font-[400]">
                تدریس حضوری در منزل
              </span>
              <span className="sm:text-[16px] sm:font-[400] sm:w-[90%] text-[8px] px-5 text-justify w-[90%]">
                میدونی که با فرتاک میتونی معلم خصوصی بگیری !
              </span>
              <button className="sm:hidden block w-[92px] h-[22px] bg-black text-[10px] font-[400] rounded-[4px] text-white p-1">
                مشاهده اطلاعات
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default memo(page);
