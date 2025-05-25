import { Dispatch, Fragment, lazy, memo, SetStateAction } from "react";
import { Divider, Radio } from "@mui/material";
import { IFirstBuyCourseForm } from "@/types/zod";
import {
	UseFormGetValues,
	UseFormRegister,
	UseFormSetValue,
} from "react-hook-form";

const IconInfoNotif = lazy(() => import("@/icons/IconInfoNotif"));
const IconArrow = lazy(() => import("@/icons/IconArrow"));

const dasteBandi = [
	"دبستان",
	"متوسطه اول",
	"متوسطه دوم",
	"کنکور",
	"دانشگاه",
];

const FirstForm = ({
	completeForm,
	getValues,
	register,
	setFormState,
	setValue,
	setBussinesBreadCrumbs,
	setEducationBreadCrumbs,
}: {
	completeForm: Dispatch<SetStateAction<true[]>>;
	setBussinesBreadCrumbs: Dispatch<SetStateAction<string[]>>;
	setEducationBreadCrumbs: Dispatch<SetStateAction<string[]>>;
	setValue: UseFormSetValue<IFirstBuyCourseForm>;
	setFormState: Dispatch<SetStateAction<number>>;
	register: UseFormRegister<IFirstBuyCourseForm>;
	getValues: UseFormGetValues<IFirstBuyCourseForm>;
}) => {
	return (
		<>
			{/* mobile */}
			<form className="w-full hidden md:block">
				<div className="mt-10 w-full flex flex-col gap-3 items-center">
					<div className="flex items-center w-full h-[68px] gap-3">
						<div className="w-full h-[68px] border-2 rounded-[8px] grow flex items-center justify-between px-5">
							<span className="md:text-[20px] lg:text-[24px] font-[700] shrink-0">
								مکان خود را انتخاب کنید
							</span>
							<div className="flex justify-between w-1/2 items-center">
								<label
									htmlFor="iran"
									className="flex items-center gap-3">
									<input
										type="radio"
										className="w-4 h-4"
										value="iran"
										id="iran"
										{...register("region")}
									/>
									ایران
								</label>
								<label
									htmlFor="outOfIran"
									className="flex items-center gap-3">
									<input
										type="radio"
										className="w-4 h-4"
										value="outOfIran"
										id="outOfIran"
										{...register("region")}
									/>
									خارج از ایران
								</label>
							</div>
						</div>
						<div className="w-full h-[68px] border-2 rounded-[8px] grow flex items-center gap-4 px-5">
							<span className="md:text-[20px] lg:text-[24px] font-[700] shrink-0">
								زبان تدریس خود را انتخاب کنید
							</span>
							<div className="flex justify-between items-center w-1/2">
								<label
									htmlFor="persion"
									className="flex items-center gap-3">
									<input
										id="persion"
										value="persion"
										type="radio"
										className="w-4 h-4"
										{...register("language")}
									/>
									فارسی
								</label>
								<label
									htmlFor="english"
									className="flex items-center gap-3">
									<input
										id="english"
										value="english"
										type="radio"
										className="w-4 h-4"
										{...register("language")}
									/>
									انگلیسی
								</label>
							</div>
						</div>
					</div>

					<div className="flex items-center w-full h-[68px] gap-3">
						<div className="w-[60%] h-[68px] flex items-center gap-8 px-5 border-2 rounded-[8px]">
							<span className="md:text-[20px] lg:text-[24px] font-[700] shrink-0">
								کلاس را برای چه کسی میخواهید ؟
							</span>
							<div className="!flex w-1/2 !items-center !justify-between">
								<label
									htmlFor="mySelf"
									className="flex gap-2 items-center">
									<Radio
										id="mySelf"
										value="mySelf"
										{...register("forWho")}
									/>
									خودم
								</label>
								<label
									htmlFor="mySon"
									className="flex gap-2 items-center">
									<Radio
										id="mySon"
										value="mySon"
										{...register("forWho")}
									/>
									فرزندم
								</label>
								<label
									htmlFor="other"
									className="flex gap-2 items-center">
									<Radio
										id="other"
										value="other"
										{...register("forWho")}
									/>
									دیگران
								</label>
							</div>
						</div>

						<div className="w-[40%] relative h-[68px] border-2 rounded-[8px] flex items-center justify-between px-5">
							<span className="md:text-[20px] lg:text-[24px] font-[700] shrink-0">
								تعداد شرکت کنندگان
							</span>
							<div className="flex items-center gap-1.5">
								<button
									onClick={() => {
										if (+getValues("countOfCustomers") + 1 <= 999)
											setValue(
												"countOfCustomers",
												+getValues("countOfCustomers") + 1,
											);
									}}
									type="button"
									className="rounded-full hover:bg-gray-200 cursor-pointer transition-colors duration-200 border-[1px] w-[20px] h-[20px] flex items-center justify-center pb-0.5">
									+
								</button>
								<input
									{...register("countOfCustomers")}
									className="w-[32px] text-center h-[32px] border-[1px] rounded-[4px]"
									type="text"
								/>
								<button
									onClick={() => {
										if (+getValues("countOfCustomers") - 1 >= 0)
											setValue(
												"countOfCustomers",
												+getValues("countOfCustomers") - 1,
											);
									}}
									type="button"
									className="rounded-full hover:bg-gray-200 cursor-pointer transition-colors duration-200 border-[1px] w-[20px] h-[20px] flex items-center justify-center pb-0.5">
									-
								</button>
							</div>
							<ul className="absolute list-disc text-[16px] list-inside -bottom-7 start-1 text-[#EA0017]">
								<li className="marker:relative marker:top-1">
									به ازای هر نفر 20 درصد به قیمت اضافه می شود
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="mt-10 w-full flex flex-col gap-3 items-center">
					<div className="w-full text-right">
						<span className="md:text-[20px] lg:text-[24px] font-[700]">
							نام و نام خانوادگی را وارد کنید
						</span>
					</div>

					<div className="w-full h-[47px] flex gap-5">
						<input
							className="grow border-2 rounded-[8px] px-5"
							type="text"
							placeholder="نام"
						/>
						<input
							className="grow border-2 rounded-[8px] px-5"
							type="text"
							placeholder="نام خانوادگی"
						/>
					</div>

					<div className="w-full h-[68px] border-2 rounded-[8px] flex justify-between px-5 items-center">
						<span className="md:text-[20px] lg:text-[24px] font-[700]">
							سطح شاگرد را انتخاب کنید
						</span>
						<div className="flex items-center justify-center gap-10">
							<div className="flex items-center gap-3">
								<input
									type="radio"
									className="w-4 h-4"
									id="level1"
									name="level"
								/>
								<label htmlFor="level1">ضعیف</label>
							</div>
							<div className="flex items-center gap-3">
								<input
									type="radio"
									className="w-4 h-4"
									id="level2"
									name="level"
								/>
								<label htmlFor="level2">متوسط</label>
							</div>
							<div className="flex items-center gap-3">
								<input
									type="radio"
									className="w-4 h-4"
									id="level3"
									name="level"
								/>
								<label htmlFor="level3">خوب</label>
							</div>
							<div className="flex items-center gap-3">
								<input
									type="radio"
									className="w-4 h-4"
									id="level4"
									name="level"
								/>
								<label htmlFor="level4">عالی</label>
							</div>
						</div>
					</div>

					<div className="w-full h-[68px] border-2 rounded-[8px] flex flex-col lg:flex-row lg:items-center px-5 justify-between">
						<span className="md:text-[20px] lg:text-[24px] font-[700]">
							هدف شما از گرفتن معلم در این درس چیست ؟
						</span>
						<div className="flex items-center lg:justify-center gap-10">
							<div className="flex items-center gap-3">
								<input
									type="radio"
									className="w-4 h-4"
									id="baseLearning"
									name="goal"
								/>
								<label htmlFor="baseLearning">آموزش از پایه</label>
							</div>
							<div className="flex items-center gap-3">
								<input
									type="radio"
									className="w-4 h-4"
									id="resolveProblem"
									name="goal"
								/>
								<label htmlFor="resolveProblem">
									رفع اشکال و آمادگی برای امتحان
								</label>
							</div>
							<div className="flex items-center gap-3">
								<input
									type="radio"
									className="w-4 h-4"
									id="practice"
									name="goal"
								/>
								<label htmlFor="practice">حل سوال</label>
							</div>
						</div>
					</div>
				</div>

				<div className="flex mt-3 flex-col">
					<div className="text-[13px] cursor-pointer hover:opacity-80 transition-opacity duration-200 w-fit lg:text-[16px] py-[10px] px-4 bg-[#000] rounded-sm text-[#fff]">
						تحصیلی
					</div>
					<div className="flex flex-col px-6 py-4">
						{dasteBandi.map((item, index) => (
							<Fragment key={index}>
								<div
									onClick={() => {
										setFormState((prev) => ++prev);
										completeForm((prev) => {
											if (prev.length < 2) return [...prev, true];
											return prev;
										});
										setEducationBreadCrumbs((prev) => [...prev, item]);
									}}
									className="w-full p-4 cursor-pointer transition-colors duration-200 rounded-sm hover:bg-gray-200 flex justify-between items-center">
									{item}
									<IconArrow />
								</div>
								{index !== dasteBandi.length - 1 && (
									<Divider color="#B1BFFA" />
								)}
							</Fragment>
						))}
					</div>
					<div className="text-[13px] cursor-pointer hover:opacity-80 transition-opacity duration-200 w-fit lg:text-[16px] py-[10px] px-4 bg-[#000] rounded-sm text-[#fff]">
						کسب و کار
					</div>
					<div className="flex flex-col px-6 py-4">
						{dasteBandi.map((item, index) => (
							<Fragment key={index}>
								<div
									onClick={() => {
										setFormState((prev) => ++prev);
										completeForm((prev) => {
											if (prev.length < 2) return [...prev, true];
											return prev;
										});
										setBussinesBreadCrumbs((prev) => [...prev, item]);
									}}
									className="w-full p-4 cursor-pointer transition-colors duration-200 rounded-sm hover:bg-gray-200 flex justify-between items-center">
									{item}
									<IconArrow />
								</div>
								{index !== dasteBandi.length - 1 && (
									<Divider color="#B1BFFA" />
								)}
							</Fragment>
						))}
					</div>
				</div>
			</form>

			{/* mobile  */}
			<form className="md:hidden">
				<div className="border flex flex-col gap-3 p-3 rounded-lg">
					<div className="w-full h-[68px] grow flex flex-col justify-between">
						<div className="md:text-[20px] flex gap-3 items-center lg:text-[24px] font-[700] shrink-0">
							<span>مکان خود را انتخاب کنید</span>
							<IconInfoNotif className="text-[#000] scale-130" />
						</div>
						<div className="flex gap-15 items-center">
							<div className="flex items-center gap-3">
								<input
									id="mobileRegion1"
									type="radio"
									className="w-4 h-4"
									name="mobileRegion"
								/>
								<label htmlFor="mobileRegion1">ایران</label>
							</div>
							<div className="flex items-center gap-3">
								<input
									id="mobileRegion2"
									type="radio"
									className="w-4 h-4"
									name="mobileRegion"
								/>
								<label htmlFor="mobileRegion2">خارج از ایران</label>
							</div>
						</div>
					</div>
					<div className="bg-[#B1BFFA] h-[1px] w-full" />
					<div className="w-full h-[68px] grow flex flex-col justify-between">
						<div className="md:text-[20px] flex gap-3 items-center lg:text-[24px] font-[700] shrink-0">
							<span>زبان تدریس خود را انتخاب کنید</span>
							<IconInfoNotif className="text-[#000] scale-130" />
						</div>
						<div className="flex gap-15 items-center">
							<div className="flex items-center gap-3">
								<input
									id="mobileLang1"
									type="radio"
									className="w-4 h-4"
									name="mobileLanguage"
								/>
								<label htmlFor="mobileLang1">فارسی</label>
							</div>
							<div className="flex items-center gap-3">
								<input
									id="mobileLang2"
									type="radio"
									className="w-4 h-4"
									name="mobileLanguage"
								/>
								<label htmlFor="mobileLang2">انگلیسی</label>
							</div>
						</div>
					</div>
					<div className="bg-[#B1BFFA] h-[1px] w-full" />
					<div className="w-full h-[68px] grow flex flex-col justify-between">
						<div className="md:text-[20px] flex gap-3 items-center lg:text-[24px] font-[700] shrink-0">
							<span>کلاس را برای چه کسی میخواهید ؟</span>
							<IconInfoNotif className="text-[#000] scale-130" />
						</div>
						<div className="flex gap-15 items-center">
							<div className="flex items-center gap-3">
								<input
									id="mobileForWho1"
									type="radio"
									className="w-4 h-4"
									name="mobileForWho"
								/>
								<label htmlFor="mobileForWho1">خودم</label>
							</div>
							<div className="flex items-center gap-3">
								<input
									id="mobileForWho2"
									type="radio"
									className="w-4 h-4"
									name="mobileForWho"
								/>
								<label htmlFor="mobileForWho2">فرزندم</label>
							</div>
							<div className="flex items-center gap-3">
								<input
									id="mobileForWho3"
									type="radio"
									className="w-4 h-4"
									name="mobileForWho"
								/>
								<label htmlFor="mobileForWho3">دیگران</label>
							</div>
						</div>
					</div>
					<div className="bg-[#B1BFFA] h-[1px] w-full" />
					<div className="w-full grow flex flex-col gap-2">
						<div className="md:text-[20px] flex gap-3 items-center justify-between lg:text-[24px] font-[700] shrink-0">
							<span>تعداد شرکت کنندگان</span>
							<div className="flex items-center gap-1.5">
								<button className="rounded-full border-[1px] w-[20px] h-[20px] flex items-center justify-center pb-0.5">
									+
								</button>
								<input
									className="w-[28px] text-[14px] text-center outline-none h-[28px] border p-1 rounded-[4px]"
									type="text"
								/>
								<button className="rounded-full border-[1px] w-[20px] h-[20px] flex items-center justify-center pb-0.5">
									-
								</button>
							</div>
						</div>
						<ul className="list-disc text-[13px] list-inside text-[#EA0017]">
							<li className="marker:relative marker:top-1">
								به ازای هر نفر 20 درصد به قیمت اضافه می شود
							</li>
						</ul>
					</div>
					<div className="bg-[#B1BFFA] h-[1px] w-full" />
					<div className="w-full gap-2 grow flex flex-col">
						<div className="md:text-[20px] flex gap-3 items-center lg:text-[24px] font-[700] shrink-0">
							<span>نام و نام خانوادگی را وارد کنید </span>
							<IconInfoNotif className="text-[#000] scale-130" />
						</div>
						<div className="w-full h-[47px] flex gap-5">
							<input
								className="w-1/3 outline-none border rounded-[8px] px-5"
								type="text"
								placeholder="نام"
							/>
							<input
								className="border outline-none rounded-[8px] px-5"
								type="text"
								placeholder="نام خانوادگی"
							/>
						</div>
					</div>
					<div className="bg-[#B1BFFA] h-[1px] w-full" />
					<div className="w-full h-[68px] grow flex flex-col justify-between">
						<div className="md:text-[20px] flex gap-3 items-center lg:text-[24px] font-[700] shrink-0">
							<span>سطح شاگرد را انتخاب کنید</span>
							<IconInfoNotif className="text-[#000] scale-130" />
						</div>
						<div className="flex justify-between mx-1 items-center">
							<div className="flex items-center gap-3">
								<input
									id="mobileLevel1"
									type="radio"
									className="w-4 h-4"
									name="levmobileLevelel"
								/>
								<label htmlFor="mobileLevel1">ضعیف</label>
							</div>
							<div className="flex items-center gap-3">
								<input
									id="mobileLevel2"
									type="radio"
									className="w-4 h-4"
									name="mobileLevel"
								/>
								<label htmlFor="mobileLevel2">متوسط</label>
							</div>
							<div className="flex items-center gap-3">
								<input
									id="mobileLevel3"
									type="radio"
									className="w-4 h-4"
									name="mobileLevel"
								/>
								<label htmlFor="mobileLevel3">خوب</label>
							</div>
							<div className="flex items-center gap-3">
								<input
									id="mobileLevel4"
									type="radio"
									className="w-4 h-4"
									name="mobileLevel"
								/>
								<label htmlFor="mobileLevel4">عالی</label>
							</div>
						</div>
					</div>
					<div className="bg-[#B1BFFA] h-[1px] w-full" />
					<div className="w-full grow flex flex-col gap-2 justify-between">
						<div className="md:text-[20px] flex gap-3 items-center lg:text-[24px] font-[700] shrink-0">
							<span>هدف شما از گرفتن معلم در این درس چیست</span>
							<IconInfoNotif className="text-[#000] scale-130" />
						</div>
						<div className="flex justify-between space-y-2 flex-wrap mx-1 items-center">
							<div className="flex items-center gap-3">
								<input
									id="mobileGoal1"
									type="radio"
									className="w-4 h-4"
									name="mobileGoal"
								/>
								<label
									htmlFor="mobileGoal1"
									className="text-[16px]">
									آموزش پایه
								</label>
							</div>
							<div className="flex items-center gap-3">
								<input
									id="mobileGoal2"
									type="radio"
									className="w-4 h-4"
									name="mobileGoal"
								/>
								<label
									htmlFor="mobileGoal2"
									className="text-[16px]">
									رفع اشکال و آمادگی برای امتحان
								</label>
							</div>
							<div className="flex items-center gap-3">
								<input
									id="mobileGoal3"
									type="radio"
									className="w-4 h-4"
									name="mobileGoal"
								/>
								<label
									htmlFor="mobileGoal3"
									className="text-[16px]">
									خوب
								</label>
							</div>
						</div>
					</div>
				</div>

				<div className="flex mt-3 flex-col">
					<div className="text-[13px] cursor-pointer hover:opacity-80 transition-opacity duration-200 w-fit lg:text-[16px] py-[10px] px-4 bg-[#000] rounded-sm text-[#fff]">
						تحصیلی
					</div>
					<div className="flex flex-col px-6 py-4">
						{dasteBandi.map((item, index) => (
							<Fragment key={index}>
								<div
									onClick={() => {
										setFormState((prev) => ++prev);
										completeForm((prev) => {
											if (prev.length < 2) return [...prev, true];
											return prev;
										});
										setEducationBreadCrumbs((prev) => [...prev, item]);
									}}
									className="w-full p-4 cursor-pointer transition-colors duration-200 rounded-sm hover:bg-gray-200 flex justify-between items-center">
									{item}
									<IconArrow />
								</div>
								{index !== dasteBandi.length - 1 && (
									<Divider color="#B1BFFA" />
								)}
							</Fragment>
						))}
					</div>
					<div className="text-[13px] cursor-pointer hover:opacity-80 transition-opacity duration-200 w-fit lg:text-[16px] py-[10px] px-4 bg-[#000] rounded-sm text-[#fff]">
						کسب و کار
					</div>
					<div className="flex flex-col px-6 py-4">
						{dasteBandi.map((item, index) => (
							<Fragment key={index}>
								<div
									onClick={() => {
										setFormState((prev) => ++prev);
										completeForm((prev) => {
											if (prev.length < 2) return [...prev, true];
											return prev;
										});
										setBussinesBreadCrumbs((prev) => [...prev, item]);
									}}
									className="w-full p-4 cursor-pointer transition-colors duration-200 rounded-sm hover:bg-gray-200 flex justify-between items-center">
									{item}
									<IconArrow />
								</div>
								{index !== dasteBandi.length - 1 && (
									<Divider color="#B1BFFA" />
								)}
							</Fragment>
						))}
					</div>
				</div>
			</form>
		</>
	);
};

export default memo(FirstForm);
