import Image from "next/image";
import { memo } from "react";

import profile from "../../../../../public/teacherResume/Rectangle 4725.png";
import commentProfile from "../../../../../public/teacherResume/profile.png";
import IconStarPoint from "@/icons/teacherResume/IconStarPoint";
import IconPlayVideo from "@/icons/teacherResume/IconPlayVideo";
import IconRectangleCheck from "@/icons/teacherResume/IconRectangleCheck";
import IconBooksColumn from "@/icons/teacherResume/IconBooksColumn";
import IconMiniComment from "@/icons/teacherResume/IconMiniComment";

const page = () => {
	return (
		<div className="flex flex-col justify-center gap-[13.5px] my-10 w-full">
			<div className="w-[95%] rounded-[4px] lg:rounded-[16px] mx-auto lg:flex lg:p-10 p-4 bg-[#C8E4D4]">
				<div className="hidden lg:flex lg:flex-col lg:gap-10 lg:w-full">
					<div className="flex gap-10">
						<Image
							className="lg:w-[264px] lg:h-[264px]"
							src={profile}
							alt=""
						/>
						<div className="flex flex-col gap-10 grow">
							<div className="lg:flex lg:items-center justify-between">
								<span className="lg:text-[24px] lg:font-[800] lg:text-[#404040]">
									سارا غلامیان
								</span>
								<div className="lg:flex lg:items-center lg:justify-center lg:gap-5">
									<span>استاد تایید شده</span>
									<span>سطح استاد</span>
									<div className="flex items-center gap-1">
										<IconStarPoint />
										<IconStarPoint />
										<IconStarPoint />
										<IconStarPoint />
										<IconStarPoint />
									</div>
								</div>
							</div>
							<ul className="lg:list-disc lg:list-inside lg:space-y-2 lg:text-right lg:text-gray-800 lg:leading-loose">
								<li>
									کارشناسی زبان و ادبیات فرانسه از دانشگاه شهید چمران
									اهواز
								</li>
								<li>
									افتخار تحصیلی: تدریس دوره‌های آمادگی جهت آزمون‌های
									بین‌المللی TCF, TEF, DELF, DALF
								</li>
								<li>بیش از یک سال همکاری با مجموعه فرتاک</li>
								<li>دارای مدرک دوره اخلاق حرفه‌ای تدریس فرتاک</li>
							</ul>
							<div className="flex gap-10">
								<button className="basis-1/2 h-[56px] lg:rounded-[8px] lg:bg-[#236C44] lg:flex lg:items-center lg:justify-center lg:gap-3 lg:text-white lg:text-[14px] lg:font-[400]">
									<IconPlayVideo />
									<span className="lg:pb-1.5">مشاهده ویدیو معرفی</span>
								</button>
								<button className="basis-1/2 h-[56px] lg:rounded-[8px] lg:border-[#236C44] lg:border-2 lg:flex items-center lg:justify-center lg:gap-3 text-white text-[14px] font-[400]">
									<span className="lg:pb-1.5 lg:text-[#404040]">
										مشاهده مشاهده قیمت و انتخاب استاد
									</span>
								</button>
							</div>
						</div>
					</div>

					<div className="lg:flex lg:items-center lg:justify-center">
						<div className="lg:h-[210px] lg:rounded-[8px] lg:border-2 lg:border-[#236C44] lg:mx-auto lg:p-5 lg:leading-9">
							هفده سال سابقه تدریس زبان فرانسه(در تمامی مقاطع)با ارائه
							متدهای آموزشی مختلف را دارم. در کنار آموزش ، اشعار ، ضرب
							المثل ، ترجمه کتب داستانی ، ترانه های فرانسوی در طی جلسات
							مختلف در طول ترم ارائه میشود . مکالمه ، املای کلمات و صرف
							فعل در خلال آموزش گنجانده می شود هفده سال سابقه تدریس زبان
							فرانسه(در تمامی مقاطع)با ارائه متدهای آموزشی مختلف را دارم.
							در کنار آموزش ، اشعار ، ضرب المثل ، ترجمه کتب داستانی ،
							ترانه های فرانسوی در طی جلسات مختلف در طول ترم ارائه میشود .
							مکالمه ، املای کلمات و صرف فعل در خلال آموزش گنجانده می شود
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-5 lg:hidden">
					<div className="flex items-center gap-4">
						<Image
							className="w-[70px] h-[70px]"
							src={profile}
							alt=""
						/>
						<div className="flex flex-col gap-3">
							<span className="text-[14px] font-[700] text-[#404040]">
								سارا غلامیان
							</span>
							<div className="flex items-center gap-4 text-[10px] font-[400]">
								<span>استاد تایید شده</span>
								<span>سطح استاد</span>
								<div className="flex items-center gap-1">
									<IconStarPoint />
									<IconStarPoint />
									<IconStarPoint />
									<IconStarPoint />
									<IconStarPoint />
								</div>
							</div>
						</div>
					</div>
					<ul className="list-disc list-inside space-y-2 text-right text-gray-800 leading-loose text-[10px] font-[400]">
						<li>
							کارشناسی زبان و ادبیات فرانسه از دانشگاه شهید چمران اهواز
						</li>
						<li>
							افتخار تحصیلی: تدریس دوره‌های آمادگی جهت آزمون‌های
							بین‌المللی TCF, TEF, DELF, DALF
						</li>
						<li>بیش از یک سال همکاری با مجموعه فرتاک</li>
						<li>دارای مدرک دوره اخلاق حرفه‌ای تدریس فرتاک</li>
					</ul>

					<button className="bg-[#236C44] rounded-[4px] flex items-center justify-center gap-2.5 text-[14px] font-[400] text-white py-[13px]">
						<IconPlayVideo />
						<span className="pb-0.5">مشاهده ویدیو معرفی</span>
					</button>
					<button className="border-[#236C44] border-2 rounded-[4px] flex items-center justify-center gap-2.5 text-[14px] font-[400] text-[#404040] py-[13px]">
						<span>مشاهده مشاهده قیمت و انتخاب استاد</span>
					</button>
					<div className="border-2 border-[#236C44] rounded-[8px] p-3 text-justify">
						هفده سال سابقه تدریس زبان فرانسه(در تمامی مقاطع)با ارائه
						متدهای آموزشی مختلف را دارم. در کنار آموزش ، اشعار ، ضرب المثل
						، ترجمه کتب داستانی ، ترانه های فرانسوی در طی جلسات مختلف در
						طول ترم ارائه میشود . مکالمه ، املای کلمات و صرف فعل در خلال
						آموزش گنجانده می شود هفده سال سابقه تدریس زبان فرانسه(در تمامی
						مقاطع)با ارائه متدهای آموزشی مختلف را دارم. در کنار آموزش ،
						اشعار ، ضرب المثل ، ترجمه کتب داستانی ، ترانه های فرانسوی در
						طی جلسات مختلف در طول ترم ارائه میشود . مکالمه ، املای کلمات و
						صرف فعل در خلال آموزش گنجانده می شود
					</div>
				</div>
			</div>

			<div className="flex flex-col w-full">
				<div className="w-[95%] min-h-[330px] rounded-[8px] mx-auto border-2 flex justify-center p-5">
					<div className="w-full flex flex-col gap-5">
						<div className="w-full h-[55px] border-2 rounded-[8px] flex items-center justify-center lg:gap-80 gap-11">
							<span className="lg:text-[18px] text-[14px] font-[400]">
								تجارب تدریس
							</span>
							<span className="lg:text-[18px] text-[14px] font-[400] text-[#00000080]">
								مدارک تحصیلی
							</span>
							<span className="lg:text-[18px] text-[14px] font-[400] text-[#00000080]">
								افتخارات
							</span>
						</div>
						<ul className="space-y-4 list-none lg:pr-5 pr-2 leading-7">
							<li className="flex items-start gap-2">
								<IconRectangleCheck className="w-5 h-5 mt-1" />
								<span className="text-[12px]">
									دارای ۱۷ سال تجربه تدریس زبان فرانسه به صورت خصوصی و
									گروهی در سطوح مبتدی و پیشرفته در تمامی مقاطع سنی (تدریس
									آموزشی، حضوری و آنلاین)
								</span>
							</li>
							<li className="flex items-start gap-2">
								<IconRectangleCheck className="w-5 h-5 mt-1" />

								<span className="text-[12px]">
									تدریس دوره‌های آمادگی آزمون‌های بین‌المللی TCF، TEFAQ،
									DELF
								</span>
							</li>
							<li className="flex items-start gap-2">
								<IconRectangleCheck className="w-5 h-5 mt-1" />
								<span className="text-[12px]">
									آموزش زبان فرانسه ویژه کودکان
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-2 lg:pr-12 pr-4">
				<IconBooksColumn />
				<span className="lg:text-[24px] text-[18px] font-[400]">
					دروس تدریس شده توسط سارا غلامیان
				</span>
			</div>

			<div className="w-[95%] rounded-[8px] mx-auto border-2 flex items-center justify-center p-5">
				<div className="w-full lg:h-[330px] flex flex-col lg:gap-10">
					<div className="w-full h-[55px] lg:rounded-[8px] flex items-center justify-center lg:gap-80 gap-14">
						<span className="lg:text-[18px] text-[14px] font-[400]">
							تجارب تدریس
						</span>
						<span className="lg:text-[18px] text-[14px] font-[400] text-[#00000080]">
							مدارک تحصیلی
						</span>
						<span className="lg:text-[18px] text-[14px] font-[400] text-[#00000080]">
							افتخارات
						</span>
					</div>
					<div className="flex lg:flex-row flex-col lg:gap-10 gap-5 lg:justify-center">
						<div className="flex flex-col gap-5 grow">
							<div className="h-[62px] rounded-[8px] border-2 px-3 flex justify-between items-center">
								<span>زبان فرانسه عمومی</span>
								<button className="bg-[#1D40D7] py-2.5 px-6 rounded-[8px] text-white">
									مشاهده قیمت
								</button>
							</div>
							<div className="h-[62px] rounded-[8px] border-2 px-3 flex justify-between items-center">
								<span>زبان فرانسه عمومی</span>
								<button className="bg-[#1D40D7] py-2.5 px-6 rounded-[8px] text-white">
									مشاهده قیمت
								</button>
							</div>
							<div className="h-[62px] rounded-[8px] border-2 px-3 flex justify-between items-center">
								<span>زبان فرانسه عمومی</span>
								<button className="bg-[#1D40D7] py-2.5 px-6 rounded-[8px] text-white">
									مشاهده قیمت
								</button>
							</div>
						</div>

						<div className="flex flex-col gap-5 grow">
							<div className="h-[62px] rounded-[8px] border-2 px-3 flex justify-between items-center">
								<span>زبان فرانسه عمومی</span>
								<button className="bg-[#1D40D7] py-2.5 px-6 rounded-[8px] text-white">
									مشاهده قیمت
								</button>
							</div>
							<div className="h-[62px] rounded-[8px] border-2 px-3 flex justify-between items-center">
								<span>زبان فرانسه عمومی</span>
								<button className="bg-[#1D40D7] py-2.5 px-6 rounded-[8px] text-white">
									مشاهده قیمت
								</button>
							</div>
							<div className="h-[62px] rounded-[8px] border-2 px-3 flex justify-between items-center">
								<span>زبان فرانسه عمومی</span>
								<button className="bg-[#1D40D7] py-2.5 px-6 rounded-[8px] text-white">
									مشاهده قیمت
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-2 lg:pr-12 pr-4">
				<IconMiniComment />
				<span className="lg:text-[24px] text-[18px] font-[400]">
					دروس تدریس شده توسط سارا غلامیان
				</span>
			</div>

			<div className="w-[95%] rounded-[8px] mx-auto border-2 flex gap-8 p-5">
				<div className="flex flex-col gap-5 w-full">
					<div className="flex lg:gap-8 gap-4">
						<Image
							src={commentProfile}
							alt=""
						/>
						<div className="flex lg:gap-20 gap-8 items-center">
							<span className="text-[18px] font-[400]">
								مهدی حنیفه از ایران
								<span className="text-gray-500"> (تبریز) </span>
							</span>
							<span className="text-[12px] font-[400] text-gray-500">
								امتیاز
								<span className="text-blue-500">5</span>
								از 5
							</span>
						</div>
					</div>
					<span className="lg:text-[18px] text-[14px] font-[400] lg:pr-20">
						سلام استاد عزیز جلسه پیش خیلی لذت بردم عالی بود و حتما جلسات
						بیشتری را شرکت می کنم
					</span>
					<div className="border-2 flex flex-col px-5 py-2 gap-2 lg:mx-20 rounded-[8px]">
						<span className="text-[14px] font-[400] text-[#00000099]">
							پاسخ استاد:
						</span>
						<span className="lg:text-[14px] text-[13px] font-[400]">
							درود بر شما،من هم متقابلاً از اینکه در کنار شما هستم
							خوشحالم،باعث افتخار بنده ست...با آرزوی موفقیت برای شما
						</span>
					</div>
					<div className="flex items-center justify-between lg:px-28 text-[#00000099]">
						<span className="text-[14px] font-[400] pr-3">
							مکالمه زبان فرانسه
						</span>
						<span className="text-[14px] font-[400] pr-3">2 ماه پیش</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(page);
