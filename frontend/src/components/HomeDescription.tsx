import FirstInfoItem from "@/components/FirstInfoItem";
import personImg from "../../public/homePerson.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import bg from "../../public/bg.png";
import Button from "./Button";
import IconStudent from "@/icons/IconStudent";
import IconTraining from "@/icons/IconTraining";
import IconArchive from "@/icons/IconArchive";
import IconELearning from "@/icons/IconELearning";
import IconInteractive from "@/icons/IconInteractive";
import { memo } from "react";
import dorehaPng from "../../public/doreha.png";
import tadrisPng from "../../public/tadris.png";
import prozhePng from "../../public/prozhe.png";

const HomeDescription = () => {
	const t = useTranslations("HomeDescription");

	return (
		<div className="flex bg-no-repeat flex-col justify-center items-center w-full">
			<Image
				src={bg}
				alt="bg"
				className="absolute -z-10 inset-0 w-[120%] h-[80%] object-cover object-center"
			/>
			<div className="flex justify-between overflow-hidden">
				<div className="absolute flex md:!top-1/3 md:-translate-y-1/4 sm:top-1/4 sm:-translate-y-1/4 start-[10%] xl:!start-[20%] w-[245px] sm:w-[480px] flex-col justify-center items-start gap-5 grow">
					<div className="font-black text-2xl md:text-5xl leading-11 md:leading-[75px]">
						ما رویای شما را به{" "}
						<span className="text-yellowPrimary">واقعیت</span> تبدیل
						میکنیم !
					</div>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button
							text="button"
							color="#1d40d7"
						/>
						<Button
							text="button"
							color="#1d40d7"
							outline
						/>
					</div>
				</div>
				<Image
					src={personImg}
					alt="person"
					className="object-contain relative start-[25%] max-h-[449px] -z-[5]"
				/>
			</div>
			<div className="bg-darkBlue flex-wrap w-full md:w-[80%] flex justify-center items-center md:px-7 pt-5 pb-3 md:rounded-2xl md:gap-0 md:justify-around gap-[10%] space-y-4">
				<FirstInfoItem
					Icon={IconStudent}
					title={t("student")}
					amount="200+"
				/>
				<FirstInfoItem
					Icon={IconTraining}
					title={t("teacher")}
					amount="200+"
				/>
				<FirstInfoItem
					Icon={IconArchive}
					title={t("project")}
					amount="200+"
				/>
				<FirstInfoItem
					Icon={IconELearning}
					title={t("course")}
					amount="200+"
				/>

				<div className="relative bottom-1.5">
					<FirstInfoItem
						Icon={IconInteractive}
						title={t("collaboration")}
						amount="200+"
					/>
				</div>
			</div>
			<div className="w-full flex items-center justify-center flex-col lg:flex-row gap-10 mt-20 px-5">
				<div className="w-full max-w-[386px] cursor-pointer hover:shadow-xl transition-shadow duration-300 h-[121px] bg-gradient-to-r from-[#0062CC] to-[#007BFF] rounded-[20px] flex items-center justify-between">
					<div className="px-6">
						<h2 className="text-white font-extrabold text-[24px] py-2">
							دوره ها
						</h2>
						<span className="text-white text-[16px]">
							{" "}
							آکادمیک ، کسب وکار{" "}
						</span>
					</div>
					<Image
						className="w-[166px] h-[160px] relative bottom-5"
						src={dorehaPng}
						alt=""
					/>
				</div>
				<div className="w-full max-w-[386px] cursor-pointer hover:shadow-xl transition-shadow duration-300 h-[121px] bg-gradient-to-r from-[#FCE638] to-[#FCE94C] rounded-[20px] flex items-center justify-between">
					<div className="px-6">
						<h2 className="text-black font-extrabold text-[24px] py-2">
							تدریس
						</h2>
						<span className="text-black text-[16px]">آنلاین و حضوری</span>
					</div>
					<Image
						src={tadrisPng}
						alt="تدریس"
						className="h-[160px] w-auto relative bottom-5"
					/>
				</div>
				<div className="w-full max-w-[386px] cursor-pointer hover:shadow-xl transition-shadow duration-300 h-[121px] bg-gradient-to-r from-[#B02A37] to-[#DC3545] rounded-[20px] flex items-center justify-between">
					<div className="px-6">
						<h2 className="text-white font-extrabold text-[24px] py-2">
							پروژه ها
						</h2>
						<span className="text-white text-[16px]">
							فریلنسری یا کارفرما؟
						</span>
					</div>
					<Image
						src={prozhePng}
						alt="پروژه‌ها"
						className="h-[165px] w-auto relative bottom-5"
					/>
				</div>
			</div>
		</div>
	);
};
export default memo(HomeDescription);
