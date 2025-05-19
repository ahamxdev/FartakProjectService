import IconCap from "@/icons/aboutUsCard/IconCap";
import IconVirgool from "@/icons/aboutUsCard/IconVirgool";
import { AboutUsCommentType } from "@/types/card";
import Image from "next/image";
import { memo } from "react";
const AboutUsCard = ({
	description,
	fullName,
	profile,
}: AboutUsCommentType) => {
	return (
		<div className="w-[270px] mt-5 h-[260px] bg-[#FBFBFB] shrink-0 relative rounded-[16px] p-3 flex flex-col items-center shadow-[0px_0px_16px_0px_rgba(0,0,0,0.25)]">
			<div className="p-3 flex self-start gap-2">
				<IconCap />
				<Image
					className="absolute left-6 -top-5"
					src={profile}
					alt="profile"
				/>
				<span className="text-[16px] font-[400]"> {fullName}</span>
			</div>
			<div className="h-[1px] bg-[#1E25313D]/24 w-[92%]"></div>
			<span className="text-[14px] font-[400] text-justify py-2">
				{description}
			</span>
			<IconVirgool className="absolute text-bluePrimary -bottom-2" />
		</div>
	);
};

export default memo(AboutUsCard);
