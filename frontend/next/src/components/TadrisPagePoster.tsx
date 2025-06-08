import Image from "next/image";
import { lazy, memo } from "react";
import poster from "../../public/poster.png";
import { Link } from "@/i18n/navigation";

const IconStudent = lazy(() => import("@/icons/tadrisPage/IconStudent"));
const IconTeacher = lazy(() => import("@/icons/tadrisPage/IconTeacher"));
const IconCircle = lazy(() => import("@/icons/tadrisPage/IconCircle"));
const IconYoungGirl = lazy(() => import("@/icons/tadrisPage/IconYoungGirl"));
const IconTable = lazy(() => import("@/icons/tadrisPage/IconTable"));

const TadrisPagePoster = () => {
  return (
    <div className="my-10">
      <div className="m-5 relative">
        <Image src={poster} alt="poster" className="w-full" />
        <div className="p-1 md:p-2 bg-white rounded-lg start-[5vw] xl:!-end-[6vw] xl:!start-auto gap-2 -top-8 shadow-[0px_18.360000610351562px_38.25px_0px_rgba(0,0,0,0.15)] flex w-fit md:flex-row-reverse justify-center items-center md:gap-6 absolute xl:top-[115px] scale-80 md:scale-100">
          <div className="inline-flex sm:flex-col gap-1 sm:gap-0 justify-start items-center sm:items-start">
            <div className="justify-start text-gray-900 text-[15px] font-[700]">
              +200
            </div>
            <div className="opacity-50 justify-start text-gray-900 text-base font-normal">
              دانشجو
            </div>
          </div>
          <div className="w-9 h-9 sm:w-12 sm:h-12 bg-yellow-300 overflow-hidden rounded-md flex justify-center items-center">
            <IconStudent />
          </div>
        </div>
        <div className="p-1 md:p-2 bg-white rounded-lg end-[5vw] gap-2 -top-8 shadow-[0px_18.360000610351562px_38.25px_0px_rgba(0,0,0,0.15)] flex w-fit justify-center md:gap-6 absolute xl:left-[160px] xl:-top-[30px] scale-80 md:scale-100 items-center">
          <div className="inline-flex sm:flex-col gap-1 sm:gap-0 justify-start items-center sm:items-start">
            <div className="justify-start text-gray-900 text-[15px] font-[700]">
              +250
            </div>
            <div className="opacity-50 justify-start text-gray-900 text-base font-normal">
              استاد
            </div>
          </div>
          <div className="w-9 h-9 sm:w-12 sm:h-12 bg-yellow-300 overflow-hidden rounded-md flex justify-center items-center">
            <IconTeacher className="text-black" />
          </div>
        </div>
        <div className="p-2 md:p-2 bg-white rounded-lg start-1/2 translate-x-1/2 gap-2 top-full -translate-y-1/2 shadow-[0px_18.360000610351562px_38.25px_0px_rgba(0,0,0,0.15)] flex w-fit justify-center items-center md:gap-6 absolute xl:-translate-x-[270%] xl:bottom-1/12 xl:-translate-y-2 xl:top-auto scale-80 md:scale-100">
          <div className="inline-flex md:flex-col gap-1 sm:gap-0 justify-start items-center sm:items-start">
            <div className="justify-start text-gray-900 text-[15px] font-[700]">
              +200
            </div>
            <div className="opacity-50 justify-start text-gray-900 text-base font-normal">
              دانشجو
            </div>
          </div>
          <IconCircle className="w-[30px] h-[30px] sm:w-[80px] sm:h-[80px]" />
        </div>
      </div>
      <div className="flex mt-[79px] px-5 justify-between w-full">
        <Link href={"tadris/online"} className="basis-[47%]">
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
        <Link href={"tadris/offline"} className="basis-[47%]">
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

export default memo(TadrisPagePoster);
