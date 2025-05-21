import Image from "next/image";
import { lazy, memo } from "react";
import poster from "../../public/poster.png";

const IconStudent = lazy(() => import("@/icons/tadrisPage/IconStudent"));
const IconTeacher = lazy(() => import("@/icons/tadrisPage/IconTeacher"));
const IconCircle = lazy(() => import("@/icons/tadrisPage/IconCircle"));
const IconYoungGirl = lazy(
	() => import("@/icons/tadrisPage/IconYoungGirl"),
);
const IconTable = lazy(() => import("@/icons/tadrisPage/IconTable"));

const TadrisPagePoster = () => {
	return (
		<div className="my-10">
			<div className="m-5 relative w-fit">
				<Image
					src={poster}
					alt="poster"
				/>
				<div className="p-1 md:p-2 bg-white rounded-lg left-[50vw] gap-2 -top-8 shadow-[0px_18.360000610351562px_38.25px_0px_rgba(0,0,0,0.15)] flex w-fit md:flex-row-reverse justify-center items-center md:gap-6 absolute md:-left-[95px] md:top-[115px] scale-80 md:scale-100">
					<div className="inline-flex md:flex-col gap-1 md:gap-0 justify-start items-center md:items-start">
						<div className="justify-start text-gray-900 text-[15px] font-[700]">
							+200
						</div>
						<div className="opacity-50 justify-start text-gray-900 text-base font-normal">
							دانشجو
						</div>
					</div>
					<div className="w-9 h-9 md:w-12 md:h-12 bg-yellow-300 overflow-hidden rounded-md flex justify-center items-center">
						<IconStudent />
					</div>
				</div>
				<div className="p-1 md:p-2 bg-white rounded-lg left-[5vw] gap-2 -top-8 shadow-[0px_18.360000610351562px_38.25px_0px_rgba(0,0,0,0.15)] flex w-fit justify-center md:gap-6 absolute md:left-[160px] md:-top-[30px] scale-80 md:scale-100 items-center">
					<div className="inline-flex md:flex-col gap-1 md:gap-0 justify-start items-center md:items-start">
						<div className="justify-start text-gray-900 text-[15px] font-[700]">
							+250
						</div>
						<div className="opacity-50 justify-start text-gray-900 text-base font-normal">
							استاد
						</div>
					</div>
					<div className="w-9 h-9 md:w-12 md:h-12 bg-yellow-300 overflow-hidden rounded-md flex justify-center items-center">
						<IconTeacher className="text-black" />
					</div>
				</div>
				<div className="p-2 md:p-2 bg-white rounded-lg left-[25vw] gap-2 top-[13vh] shadow-[0px_18.360000610351562px_38.25px_0px_rgba(0,0,0,0.15)] flex w-fit justify-center items-center md:gap-6 absolute md:-left-[95px] md:top-[250px] scale-80 md:scale-100">
					<div className="inline-flex md:flex-col gap-1 md:gap-0 justify-start items-center md:items-start">
						<div className="justify-start text-gray-900 text-[15px] font-[700]">
							+200
						</div>
						<div className="opacity-50 justify-start text-gray-900 text-base font-normal">
							دانشجو
						</div>
					</div>
					<IconCircle className="w-[30px] h-[30px] md:w-[80px] md:h-[80px]" />
				</div>
			</div>
			<div className="flex mt-[79px] md:w-full md:justify-between w-full gap-10 justify-center">
				<div className="bg-[#FFE401] w-[156px] h-[88px] rounded-[4px] md:gap-5 md:p-5 md:w-[450px] md:h-[148px] md:rounded-[20px] md:flex md:items-center md:flex-row-reverse">
					<div className="flex flex-col">
						<IconYoungGirl className="hidden md:block md:relative md:bottom-5" />
						<button className="hidden md:block bg-black text-white md:w-[123px] md:h-[29px] md:px-3 md:py-1.5 md:rounded-[8px] md:text-[14px] md:font-[700] md:mb-[19px]">
							<span className="relative bottom-1"> مشاهده اطلاعات</span>
						</button>
					</div>
					<div className="flex flex-col md:gap-3.5 items-center gap-1.5 p-[3px]">
						<span className="md:text-[22px] md:font-[700] text-[14px] font-[400]">
							تدریس خصوصی آنلاین
						</span>
						<span className="md:text-[16px] md:font-[400] md:w-[90%] text-[8px] px-5 text-justify">
							نگران هیچی نباش با فرتاک همیشه و همه جا آموزش ببین.
						</span>
						<button className="md:hidden block w-[92px] h-[22px] bg-black text-[10px] font-[400] rounded-[4px] text-white p-1">
							مشاهده اطلاعات
						</button>
					</div>
				</div>
				<div className="bg-[#FDF39A] w-[156px] h-[88px] rounded-[4px] md:gap-5 md:p-5 md:w-[450px] md:h-[148px] md:rounded-[20px] md:flex md:items-center md:flex-row-reverse">
					<div className="flex flex-col md:relative md:bottom-3.5">
						<IconTable className="hidden md:block md:w-[99px] md:h-[139px]" />
						<button className="hidden md:block bg-black text-white md:w-[123px] md:h-[29px] md:px-3 md:py-1.5 md:rounded-[8px] md:text-[14px] md:font-[700] md:mb-[19px]">
							<span className="relative bottom-1"> مشاهده اطلاعات</span>
						</button>
					</div>
					<div className="flex flex-col md:gap-3.5 items-center gap-1.5 p-[3px]">
						<span className="md:text-[22px] md:font-[700] text-[14px] font-[400]">
							تدریس حضوری در منزل
						</span>
						<span className="md:text-[16px] md:font-[400] md:w-[90%] text-[8px] px-5 text-justify w-[90%]">
							میدونی که با فرتاک میتونی معلم خصوصی بگیری !
						</span>
						<button className="md:hidden block w-[92px] h-[22px] bg-black text-[10px] font-[400] rounded-[4px] text-white p-1">
							مشاهده اطلاعات
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(TadrisPagePoster);
