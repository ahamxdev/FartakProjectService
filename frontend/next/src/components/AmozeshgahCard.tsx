import { lazy, memo, ReactNode } from "react";

const IconTeacherCardArrow = lazy(
	() => import("@/icons/teacherCard/IconTeacherCardArrow"),
);
const AmozeshgahBg = lazy(() => import("@/icons/AmozeshgahBg"));

const AmozeshgahCard = ({
	color,
	children,
	features,
}: {
	color: string;
	features: string[];
	children?: ReactNode;
}) => {
	return (
		<div className="flex shrink-0 flex-col relative w-[330px] h-[426px]">
			<AmozeshgahBg
				style={{ color }}
				className="absolute inset-0"
			/>
			<div
				// style={{ backgroundColor: color }}
				className="grow h-full rounded-lg rtl:rounded-br-none flex flex-col ltr:rounded-bl-none">
				<>{children}</>
				<ul className="space-y-6 p-6 pt-0 mt-auto mb-2 text-white text-[14px]">
					<li className="relative ps-4 before:content-[''] before:absolute before:start-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-[3px] before:bg-white before:rounded-full">
						{features[0]}
					</li>
					<li className="relative ps-4 before:content-[''] before:absolute before:start-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-[3px] before:bg-white before:rounded-full">
						{features[1]}
					</li>
					<li className="relative ps-4 before:content-[''] before:absolute before:start-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-[3px] before:bg-white before:rounded-full">
						{features[2]}
					</li>
				</ul>
			</div>
			<div className="w-1/2 h-[100px]" />
			<button className="flex bottom-0 absolute gap-2 shrink-0 py-3 cursor-pointer hover:bg-white hover:text-bluePrimary border hover:border-to-bluePrimary transition-colors duration-300 px-4 end-0 z-20 text-white bg-bluePrimary rounded-lg items-center">
				<span>مشاهده اطلاعات</span>
				<IconTeacherCardArrow />
			</button>
		</div>
	);
};

export default memo(AmozeshgahCard);
