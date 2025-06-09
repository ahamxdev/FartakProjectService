import manPng from "../../../public/mard.png";
import Image from "next/image";
import { lazy, memo } from "react";
import { CourseCardType } from "@/types/card";
import { toPersianDigits } from "@/utils/string";
import { useRouter } from "next/navigation";

const Icon3Students = lazy(
	() => import("@/icons/courseCar/Icon3Students"),
);
const IconClock = lazy(() => import("@/icons/courseCar/IconClock"));
const IconStar = lazy(() => import("@/icons/teacherCard/IconStar"));

const CourseCard = ({
	courseDuration,
	price,
	profile,
	reshte,
	star,
	studentCount,
	teacherName,
	title,
	id,
	locale,
}: CourseCardType) => {
	const router = useRouter();

	return (
		<div className="bg-[#FFFFFF] shrink-0 p-3 rounded-[16px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.25)] mt-2">
			<div className="flex justify-center w-full">
				<Image
					src={manPng}
					alt="mard"
				/>
			</div>
			<div className="flex items-center w-full justify-between">
				<div className="flex items-center gap-2">
					<Image
						className="my-2 size-10"
						src={profile}
						alt="profile"
					/>
					<span className="text-[14px] font-[600]">{teacherName}</span>
				</div>

				<button className="w-[84px] h-[30px] bg-[#1D40D7] text-white rounded-[8px]">
					{reshte}
				</button>
			</div>
			<div className="text-justify flex w-full">
				<span className="text-[20px] font-[400px] mx-4">{title}</span>
			</div>
			<div className="flex items-center w-full justify-center">
				<div className="flex items-center">
					<Icon3Students className="text-darkBlue ml-2 my-4" />
					<span className="text-[14px] font-[400px]">
						{studentCount} دانشجو
					</span>
				</div>
				<div className="flex items-center">
					<IconClock className="text-darkBlue mr-4 ml-2 my-4" />
					<span className="text-[14px] font-[400px]">
						{courseDuration} ساعت
					</span>
				</div>
				<div className="flex items-center shrink-0">
					<IconStar className="text-darkBlue mr-4 ml-2 my-4" />
					<span className="text-[14px] font-[400px]">{star} امتیاز</span>
				</div>
			</div>
			<div className="flex justify-between w-full items-center">
				<button
					className="hover:opacity-85 cursor-pointer transition-opacity duration-200 py-1.5 px-3 bg-darkBlue rounded-[8px] mr-3 text-[14px] font-[800] text-[#FFFFFF]"
					onClick={() => router.push(`/${locale}/${id}`)}
				>
					مشاهده اطلاعات دوره
				</button>
				<div>
					<span className="font-[600]">
						<span className="text-[#1D40D7] font-[800]">
							{toPersianDigits(price) + " "}
						</span>
						تومان
					</span>
				</div>
			</div>
		</div>
	);
};

export default memo(CourseCard);
