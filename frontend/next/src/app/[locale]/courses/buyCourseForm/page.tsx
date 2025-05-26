import Image from "next/image";
import { lazy, memo } from "react";
import yellowBg from "../../../../../public/buyCourse/yellow.svg";
import yellowMobileBg from "../../../../../public/buyCourse/yellowmobile.svg";
import youngGirl from "../../../../../public/buyCourse/youngWoman.svg";

const MainForm = lazy(
	() => import("@/components/courses/buyCourse/MainForm"),
);

const Page = () => {
	return (
		<div className="flex flex-col justify-center gap-20 py-10 px-2 items-center w-full">
			<div className="lg:flex justify-center mt-20 hidden">
				<div className="relative w-full flex justify-center">
					<Image
						className="absolute lg:w-[1062px] lg:h-[368px] -z-10"
						src={yellowBg}
						alt=""
					/>
					<div className="flex w-full justify-center gap-[1vw] items-center flex-row-reverse">
						<Image
							src={youngGirl}
							alt=""
						/>
						<div className="flex flex-col gap-5">
							<span className="text-[32px] font-[800]">
								تدریس خصوصی آنلاین
							</span>
							<span className="text-[24px] font-[400]">
								نگران هیچی نباش با فرتاک همیشه و همه جا آموزش ببین.
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center mt-20 lg:hidden">
				<div className="relative w-full flex justify-center">
					<Image
						className="absolute scale-110 -z-10"
						src={yellowMobileBg}
						alt=""
					/>
					<div className="flex flex-col w-full items-center">
						<Image
							className="w-[198px] h-[182px] mr-36"
							src={youngGirl}
							alt=""
						/>
						<div className="flex flex-col gap-4 text-right ml-12 -mt-5">
							<span className="text-[16px] font-[800]">
								تدریس خصوصی آنلاین
							</span>
							<span className="text-[12px] font-[400]">
								نگران هیچی نباش با فرتاک همیشه و همه جا آموزش ببین.
							</span>
						</div>
					</div>
				</div>
			</div>
			<MainForm />
		</div>
	);
};
export default memo(Page);
