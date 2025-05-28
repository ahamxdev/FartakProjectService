import Image from "next/image";
import { lazy, memo } from "react";
import profile from "../../../../public/buyCourse/selectTeacherCardProfile.png";
import { useRouter } from "next/navigation";

const IconFilter = lazy(() => import("@/icons/courses/IconFilter"));
const IconStar = lazy(() => import("@/icons/teacherCard/IconStar"));
const List = lazy(() => import("@/components/List"));

const Button = lazy(() => import("@/components/Button"));

const ThirdForm = () => {
	const router = useRouter();

	return (
		<div className="flex w-full flex-col mt-10">
			<div className="w-full py-3 border-2 rounded-[8px] px-2 lg:px-5 flex lg:items-center justify-between sm:justify-start sm:gap-2">
				<span className="text-[24px] font-[700]">
					استاد خود را انتخاب کنید
				</span>
				<IconFilter />
			</div>

			<List
				title=""
				bottomArrow
				start>
				{[...Array(6)].map((item, index) => (
					<div
						key={index}
						className="bg-[#EEF5FF] shrink-0 w-[356px] rounded-[16px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] flex flex-col py-3 px-5">
						<div className="flex gap-20">
							<div className="flex items-center gap-3">
								<Image
									src={profile}
									alt=""
								/>
								<span className="text-[24px] text-[#1450A3] font-[700] shrink-0">
									نام استاد
								</span>
							</div>
							<div className="flex items-center gap-1">
								<IconStar className="w-[10px] h-[10px]" />
								<IconStar className="w-[10px] h-[10px]" />
								<IconStar className="w-[10px] h-[10px]" />
								<IconStar className="w-[10px] h-[10px]" />
								<IconStar className="w-[10px] h-[10px]" />
							</div>
						</div>
						<div className="flex flex-col items-center gap-5">
							<span className="text-[16px] font-[700]">
								کارشناس مدیریت آموزشی از دانشگاه فلان
							</span>

							<ul className="list-disc pr-5 text-right leading-12 text-[#57626D] text-[12px]">
								<li className="lg:text-[18px] text-[14px] font-[400]">
									10 سال سابقه کاری در فلان موسسه
								</li>
								<li className="lg:text-[18px] text-[14px] font-[400]">
									2 سال سابقه کار با فرتاک
								</li>
								<li className="lg:text-[18px] text-[14px] font-[400]">
									فارغ التحصیل فلان رشته از فلان دانشگاه
								</li>
							</ul>
						</div>
						<div className="flex items-center mt-5 justify-center gap-8 text-[14px] font-[400]">
							<Button
								onClick={() => {}}
								text="انتخاب استاد"
								color="#1450A3"
								outline
							/>
							<Button
								onClick={() => {
									router.replace("/teacherResume/1");
								}}
								text="رزومه استاد"
								color="#1450A3"
							/>
						</div>
					</div>
				))}
			</List>
		</div>
	);
};

export default memo(ThirdForm);
