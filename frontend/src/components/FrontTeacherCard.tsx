import Image from "next/image";
import { lazy, memo } from "react";
import { TeacherCardType } from "@/types/card";

const IconBookMark = lazy(
	() => import("@/icons/teacherCard/IconBookMark"),
);
const IconStar = lazy(() => import("@/icons/teacherCard/IconStar"));
const IconTeacherCardArrow = lazy(
	() => import("@/icons/teacherCard/IconTeacherCardArrow"),
);

const AboutUsCard = ({
	fullName,
	profile,
	role,
	star,
}: TeacherCardType) => {
	return (
		<div className="w-full h-[280px] rounded-[12px] flex flex-col items-center justify-center relative gap-5 p-4 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.25)]">
			<IconBookMark />
			<div className="w-fit">
				<Image
					src={profile!}
					alt=""
				/>
			</div>
			<span className="w-fit font-[600]">{fullName}</span>

			<div className="flex justify-between w-full">
				<span>{role}</span>

				<div className="flex gap-3">
					<IconStar />
					<span>{star}</span>
				</div>
			</div>
			<button className="w-[182px] md:hidden cursor-pointer hover:opacity-95 transition-opacity duration-200 py-[5px] rounded-[8px] bg-darkBlue text-white flex items-center flex-row-reverse justify-center text-[14px] font-[600] gap-3">
				<IconTeacherCardArrow className="text-white" />
				<span className="mb-1"> مشاهده رزومه استاد </span>
			</button>
		</div>
	);
};

export default memo(AboutUsCard);
