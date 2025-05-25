import { memo } from "react";

import yellowBg from "../../../../../../public/buyCourse/yellow.svg";
import charcater from "../../../../../../public/buyCourse/character.svg";
import Image from "next/image";
const page = () => {
	return (
		<>
			<div className="w-full justify-center mt-5">
				<div className="relative w-full flex justify-center items-center">
					<Image
						className="absolute rotate-180 -z-10 lg:w-[592px] lg:h-[525px] w-[95%] h-[90%]"
						src={yellowBg}
						alt=""
					/>
					<Image
						className="lg:w-[472px] lg:h-[520px] w-[213px] h-[234px] lg:mt-12 mb-5"
						src={charcater}
						alt=""
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center mb-5 items-center lg:gap-5 gap-5 mt-1">
				<div className="w-[90%] lg:h-[210px] h-[120px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-[8px] flex flex-col items-center justify-center gap-5">
					<span className="lg:text-[32px] text-[16px] font-[900] text-[#24D198] lg:[word-spacing:16px]">
						اطلاعات شما با موفقیت ثبت شد
					</span>
					<div className="flex gap-3">
						<span className="lg:text-[32px] text-[14px] font-[400] text-[#00000066] shrink-0">
							کد پیگیری :
						</span>
						<span className="lg:text-[40px] text-[14px] font-[700] text-[#000000]">
							46238530
						</span>
					</div>
				</div>
				<div className="w-[90%] h-[20%px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-[8px]">
					<div className="flex flex-col items-center justify-center gap-10">
						<div className="mt-4 lg:w-[40%] px-5">
							<ul className="list-disc pr-5 text-right leading-loose text-black text-[16px]">
								<li className="lg:text-[18px] text-[14px] font-[400]">
									کارشناسان فرتاک تا فردا ساعت 12:00 با شما تماس خواهند
									گرفت و پس از ارائه مشاوره های لازم درخواست شما را تکمیل
									می کنند.
								</li>
							</ul>
						</div>
						<div className="flex pb-6 flex-col lg:flex-row text-[18px] font-[700] text-white lg:gap-18 gap-5">
							<button className="bg-[#1D40D7] rounded-[8px] px-28 py-4">
								مشاهده پنل کاربری
							</button>
							<div className="bg-gradient-to-r from-purple-400 to-blue-500 p-[2px] rounded-[8px] inline-block">
								<button className="bg-white text-blue-600 font-semibold rounded-[8px] px-20 py-4 w-full h-full">
									<span className="shrink-0">رفتن به صفحه اصلی</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default memo(page);
