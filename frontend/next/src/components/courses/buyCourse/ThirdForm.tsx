import { lazy, memo } from "react";

const IconFilter = lazy(() => import("@/icons/courses/IconFilter"));

const ThirdForm = () => {
	return (
		<div className="flex w-full flex-col mt-10">
			<div className="w-full py-3 border-2 rounded-[8px] px-2 lg:px-5 flex lg:items-center justify-between sm:justify-start sm:gap-2">
				<span className="text-[24px] font-[700]">
					استاد خود را انتخاب کنید
				</span>
				<IconFilter />
			</div>
		</div>
	);
};

export default memo(ThirdForm);
