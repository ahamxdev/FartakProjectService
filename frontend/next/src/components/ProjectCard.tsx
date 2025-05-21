import { lazy, memo } from "react";
import { useTranslations } from "next-intl";
import { ProjectCardType } from "@/types/card";

const Button = lazy(() => import("./Button"));
const IconWallet = lazy(() => import("@/icons/IconWallet"));

const ProjectCard = ({
	createDate,
	description,
	priceRange,
	title,
}: ProjectCardType) => {
	const t = useTranslations("ProjectCard");

	return (
		<div className="shadow-[0px_0px_16px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-5 w-[328px] md:w-[436px] bg-white shrink-0">
			<div className="text-[14px] text-darkBlue mb-2">{createDate}</div>
			<h3 className="text-[16px] md:text-[20px] font-bold text-blueText">
				{title}
			</h3>
			<div className="flex gap-2 items-center my-3 md:my-5">
				<IconWallet className="text-icon" />
				<span className="text-black text-[12px] md:text-[16px] font-bold">
					{priceRange}
				</span>
			</div>
			<p className="text-justify text-[11px] md:text-[14px] text-darkBlue">
				{description}
			</p>
			<div className="flex justify-between mt-6">
				<Button
					color="#00001a"
					className="text-[13px] md:text-[16px]"
					text={t("submitOffer")}
				/>
				<Button
					outline
					color="#00001a"
					className="text-[13px] md:text-[16px]"
					text={t("viewProject")}
				/>
			</div>
		</div>
	);
};

export default memo(ProjectCard);
