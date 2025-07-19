import { aboutUsComments,  teachers } from "@/api";
import { lazy, memo } from "react";
import Image from "next/image";
import ebtedayi from "../../../../public/amozeshgahCard/ebtedayiCardBoy.png";
import motovasete from "../../../../public/amozeshgahCard/motovaseteAvalCardBoy.png";
import nahayi from "../../../../public/amozeshgahCard/nahayiCardBoy.png";
import konkur from "../../../../public/amozeshgahCard/konkurCardBoy.png";
import afterKonkur from "../../../../public/amozeshgahCard/afterKonkurCardBoy.png";

const AmozeshgahCard = lazy(() => import("@/components/AmozeshgahCard"));
const List = lazy(() => import("@/components/List"));
const FlipCard = lazy(() => import("@/components/FlipCard"));
const FrontTeacherCard = lazy(
	() => import("@/components/FrontTeacherCard"),
);
const BackTeacherCard = lazy(
	() => import("@/components/BackTeacherCard"),
);
const DropDownMenu = lazy(() => import("@/components/DropDownMenu"));
const TadrisPagePoster = lazy(
	() => import("@/components/TadrisPagePoster"),
);
const AboutUsCard = lazy(() => import("@/components/AboutUsCard"));

const page = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full">
			<TadrisPagePoster />
			<DropDownMenu  />

			<List
				gap={16}
				title="فرتاک بزرگترین فروشگاه آنلاین کشور">
				<AmozeshgahCard
					color={"#8EABE6"}
					features={[
						"اساتید کنکور مجرب و کاربلد",
						"دوره های جامع برای همه رشته ها",
						"دوره های تخصصی برای بهبود مهارت تست زنی",
					]}>
					<div className="flex justify-center relative grow px-[38px]">
						<Image
							src={ebtedayi}
							alt="ebtedayi"
							className="w-[176px] h-[126px] object-center absolute -start-2 top-2"
						/>
						<div className="flex flex-col items-center justify-end mb-7.5">
							<span className="text-white text-[16px] font-medium">
								با دوره های
							</span>
							<span className="text-[24px] font-medium text-[#FCE638] my-3">
								ابتدایی
							</span>
							<span className="text-white text-[16px] font-medium">
								فرتاک تیزهوشان برات جا نگه میداره
							</span>
						</div>
					</div>
				</AmozeshgahCard>
				<AmozeshgahCard
					color={"#4E5587"}
					features={[
						"دوره های پیشرفته IQ",
						"آزمون های شبیه ساز",
						"اساتید مجرب تیزهوشان و مدارس برتر",
					]}>
					{" "}
					<div className="flex justify-center relative grow px-[38px]">
						<div className="flex flex-col items-center justify-end mb-7.5 relative end-12">
							<span className="text-white text-[16px] font-medium">
								سه سال{" "}
							</span>
							<span className="text-[24px] font-medium text-[#FCE638] my-3">
								متوسطه اول{" "}
							</span>
							<span className="text-white text-[16px] font-medium">
								رو با فرتاک یاد بگیر{" "}
							</span>
						</div>
						<Image
							src={motovasete}
							alt="motovasete"
							className="w-[154px] h-[154px] absolute -end-1 top-7"
						/>
					</div>
				</AmozeshgahCard>
				<AmozeshgahCard
					color={"#B27D49"}
					features={[
						"اساتید کنکور مجرب و کاربلد",
						"دوره های جامع برای همه رشته ها",
						"دوره های تخصصی برای بهبود مهارت تست زنی",
					]}>
					<div className="flex justify-center relative grow px-[38px]">
						<div className="flex flex-col items-center justify-end mb-7.5 relative end-12">
							<span className="text-white text-[16px] font-medium">
								با فرتاک نگران{" "}
							</span>
							<span className="text-[24px] font-medium text-[#FCE638] my-3">
								امتحان نهاییت{" "}
							</span>
							<span className="text-white text-[16px] font-medium">
								نباش{" "}
							</span>
						</div>
						<Image
							src={nahayi}
							alt="nahayi"
							className="w-[125px] h-[238px] absolute -end-1 top-[9px]"
						/>
					</div>
				</AmozeshgahCard>
				<AmozeshgahCard
					color={"#4C6A77"}
					features={[
						"دوره های پیشرفته IQ",
						"آزمون های شبیه ساز",
						"اساتید مجرب تیزهوشان و مدارس برتر",
					]}>
					<div className="flex justify-center relative grow px-[38px]">
						<Image
							src={konkur}
							alt="konkur"
							className="w-[143px] h-[143px] absolute start-3 top-5"
						/>
						<div className="flex flex-col items-center justify-end mb-7.5 relative start-12">
							<span className="text-white text-[16px] font-medium">
								با فرتاک توی{" "}
							</span>
							<span className="text-[24px] font-medium text-[#FCE638] my-3">
								کنکور{" "}
							</span>
							<span className="text-white text-[16px] font-medium">
								بین 999 باش{" "}
							</span>
						</div>
					</div>
				</AmozeshgahCard>
				<AmozeshgahCard
					color={"#0F255B"}
					features={[
						"دوره های پیشرفته IQ",
						"آزمون های شبیه ساز",
						"اساتید مجرب تیزهوشان و مدارس برتر",
					]}>
					<div className="flex justify-center relative grow px-[38px]">
						<div className="flex flex-col items-center justify-end mb-7.5 relative end-15">
							<span className="text-white text-[16px] font-medium">
								با فرتاک نگران درسای{" "}
							</span>
							<span className="text-[24px] font-medium text-[#FCE638] my-3">
								بعد کنکورت{" "}
							</span>
							<span className="text-white text-[16px] font-medium">
								نباش{" "}
							</span>
						</div>
					</div>
					<Image
						src={afterKonkur}
						alt="afterKonkur"
						className="w-[165px] h-[165px] absolute end-0 top-5"
					/>
				</AmozeshgahCard>
			</List>

			<List title="اساتید برتر فرتاک">
				{teachers.map(
					({ description, fullName, profile, role, star }, index) => (
						<FlipCard
							key={index}
							front={
								<FrontTeacherCard
									fullName={fullName}
									profile={profile}
									role={role}
									star={star}
								/>
							}
							height={280}
							width={270}
							back={<BackTeacherCard description={description} />}
						/>
					),
				)}
			</List>

			<List title="درباره ما گفته میشه... !">
				{aboutUsComments.map(
					({ description, fullName, profile }, index) => (
						<AboutUsCard
							description={description}
							fullName={fullName}
							profile={profile}
							key={index}
						/>
					),
				)}
			</List>
		</div>
	);
};

export default memo(page);
