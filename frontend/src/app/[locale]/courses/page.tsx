import Courses from "@/components/Courses";
import HomeWork from "@/components/HomeWork";
import IconBigLine from "@/icons/courses/IconBigLine";
import IconSmallLine from "@/icons/courses/IconSmallLine";
import IconMagnifier from "@/icons/IconMagnifier";
import { memo } from "react";
import mosalase30 from "../../../../public/couresEndPoster/mosals30.svg";
import mosalase50 from "../../../../public/couresEndPoster/mosals50.svg";
import mosalase100 from "../../../../public/couresEndPoster/mosals100.svg";
import arrowYellow from "../../../../public/couresEndPoster/arrowyellow.svg";
import yellowLine from "../../../../public/couresEndPoster/line.png";
import circle50 from "../../../../public/couresEndPoster/circle50.svg";
import circle90 from "../../../../public/couresEndPoster/circle90.svg";
import circle100 from "../../../../public/couresEndPoster/circle100.svg";
import circleBottom100 from "../../../../public/couresEndPoster/circlebottom100.svg";
import circleBottom50 from "../../../../public/couresEndPoster/circlebottom50.svg";
import cricleBottom30 from "../../../../public/couresEndPoster/circlebottom30.svg";
import circleGooshe30 from "../../../../public/couresEndPoster/circleghooshe30.svg";
import circleGooshe50 from "../../../../public/couresEndPoster/circlegooshe50.svg";
import circleGooshe100 from "../../../../public/couresEndPoster/circlegooshe100.svg";
import redArrow from "../../../../public/couresEndPoster/arrow.svg";
import Image from "next/image";

const page = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full">
			<div className="text-2xl leading-11 md:text-[40px] mt-20 font-[700] text-black text-center px-15 lg:px-0">
				هر دوره، یک قدم به سوی بهترین نسخه از
				<div className="relative inline-flex justify-center items-center text-yellowPrimary ms-3">
					خودت
					<IconBigLine className="absolute scale-x-70 lg:scale-x-100 top-0 md:-top-1 md:-start-10" />
					<div className="absolute scale-y-70 -top-6 lg:scale-y-100 lg:top-auto -end-4">
						<IconSmallLine />
					</div>
					<IconBigLine className="absolute -bottom-1 scale-x-70 lg:scale-x-100 md:-start-10" />
					<span className="absolute scale-y-70 -top-6 lg:scale-y-100 lg:top-auto -start-4">
						<IconSmallLine />
					</span>
				</div>
			</div>

			<div className="flex mt-13 justify-between mx-auto appearance-none items-center w-[296px] lg:w-[420px] h-[56px] rounded-[16px] bg-[#D3D3D3] px-5">
				<input
					className="grow outline-none pe-3.5"
					type="search"
					placeholder="دوست داری چی یاد بگیری؟"
				/>
				<IconMagnifier />
			</div>

			<HomeWork />
			<Courses />

			<div className="flex flex-col lg:flex-row justify-center items-center my-10 gap-8">
				<div className="w-[330px] lg:w-[630px] h-[184px] bg-[#2D3E5A] rounded-[16px] overflow-hidden">
					<div className="flex justify-center items-center relative">
						<div className="absolute h-40 w-40 top-0 end-7 lg:end-[180px]">
							<Image
								className="absolute left-0 top-0"
								src={mosalase30}
								alt=""
							/>
							<Image
								className="absolute left-[10px] top-0"
								src={mosalase50}
								alt=""
							/>
							<Image
								className="absolute left-[20px] top-[5px]"
								src={mosalase100}
								alt=""
							/>
						</div>

						<Image
							className="hidden lg:block absolute left-[110px] top-[120px]"
							src={arrowYellow}
							alt=""
						/>

						<div className="absolute w-15 h-15 rotate-180 -bottom-8 end-7 scale-80 lg:start-5 lg:-bottom-12">
							<Image
								className="absolute left-[0px] z-20"
								src={mosalase30}
								alt=""
							/>
							<Image
								className="absolute left-[10px] z-10"
								src={mosalase50}
								alt=""
							/>
							<Image
								className="absolute left-[20px]"
								src={mosalase100}
								alt=""
							/>
						</div>

						<div className="flex justify-center flex-col px-4 z-20 lg:ps-8">
							<span className="py-3 lg:py-6 text-[#FFFFFF] text-[16px] font-[400]">
								فریلنسر شو !
							</span>
							<span className="lg:w-[65%] text-[18px] lg:text-[24px] font-[700] text-white">
								با مهارتی که بدست آوردی همین الان میتونی
								<div className="inline relative mx-2 text-[#FAB437]">
									درآمد
									<Image
										className="absolute start-0 w-[73px] h-[7px]"
										src={yellowLine}
										alt=""
									/>
								</div>
								کسب کنی !{" "}
							</span>
							<button className="lg:hidden mt-5 w-[120px] h-[36px] text-nowrap rounded-[8px] bg-[#1B2638] text-white text-[12px]">
								مشاهده پروژه ها
							</button>
						</div>
						<button className="hidden lg:block w-[144px] h-[36px] text-nowrap rounded-[8px] bg-[#1B2638] text-white relative left-[50px] top-[10px] px-3">
							مشاهده پروژه ها
						</button>
					</div>
				</div>
				<div className="w-[330px] lg:w-[630px] h-[184px] bg-[#2B2D42] rounded-[16px] overflow-hidden">
					<div className="flex justify-center items-center relative">
						<div className="absolute h-40 w-40 top-0 end-1/4 lg:end-[180px]">
							<Image
								className="absolute left-[15px] -top-[0.5px]"
								src={circle100}
								alt=""
							/>
							<Image
								className="absolute left-[0px] -top-[0.5px]"
								src={circle90}
								alt=""
							/>
							<Image
								className="absolute left-[30px] top-[13px]"
								src={circle50}
								alt=""
							/>
						</div>
						<Image
							className="hidden lg:block absolute left-[200px] top-[65px]"
							src={redArrow}
							alt=""
						/>
						<Image
							className="absolute left-0 top-[125px]"
							src={circleGooshe100}
							alt=""
						/>
						<Image
							className="absolute left-1 top-[140px]"
							src={circleGooshe50}
							alt=""
						/>
						<Image
							className="absolute left-[30px] top-[150px]"
							src={circleGooshe30}
							alt=""
						/>
						<Image
							className="absolute left-[520px] top-[165px] z-20"
							src={circleBottom100}
							alt=""
						/>
						<Image
							className="absolute left-[490px] top-[165px] z-10"
							src={circleBottom50}
							alt=""
						/>
						<Image
							className="absolute left-[465px] top-[165px]"
							src={cricleBottom30}
							alt=""
						/>

						<div className="flex justify-center flex-col px-4 lg:ps-8">
							<span className="py-4 lg:py-6 text-[#FFFFFF] text-[16px] font-[400]">
								پروژه داری؟
							</span>
							<span className="lg:w-[65%] text-[18px] lg:text-[24px] font-[700] text-white">
								پروژتو ثبت کن و با بهترین
								<span className="text-[#D90429]"> کیفیت </span>
								از ما تحویل بگیر !
							</span>
							<button className="lg:hidden mt-2 text-[12px] w-[120px] lg:w-[144px] h-[36px] rounded-[8px] bg-[#595E96] text-white">
								ثبت پروژه
							</button>
						</div>
						<button className="hidden lg:block w-[144px] h-[36px] rounded-[8px] bg-[#595E96] text-white relative left-[50px] top-[10px]">
							ثبت پروژه
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(page);
