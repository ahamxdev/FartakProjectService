import { TeacherCardType } from "@/types/card";
import { lazy, memo } from "react";

const IconTeacherCardArrow = lazy(
	() => import("@/icons/teacherCard/IconTeacherCardArrow"),
);

const BackTeacherCard = ({ description }: TeacherCardType) => {
	return (
		<div className="w-full relative h-full bg-[#2669B0] text-white rounded-[12px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.25)] text-justify p-5 flex flex-col items-center">
			<span className="text-[14px] font-[400]">{description}</span>

			<button className="w-[182px] cursor-pointer hover:opacity-85 transition-opacity duration-200 absolute -bottom-3.5 py-[5px] rounded-[8px] bg-darkBlue text-white flex items-center flex-row-reverse justify-center text-[14px] font-[600] gap-3">
				<IconTeacherCardArrow className="text-white" />
				<span className="mb-1"> مشاهده رزومه استاد </span>
			</button>
		</div>
	);
};

export default memo(BackTeacherCard);
