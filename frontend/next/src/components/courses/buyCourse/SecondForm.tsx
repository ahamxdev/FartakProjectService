import IconMagnifier from "@/icons/IconMagnifier";
import { memo } from "react";
const SecondForm = () => {
	return (
		<>
			<div className="flex w-full flex-col items-center mt-10">
				<div className="w-full py-3 border-2 rounded-[8px] px-2 lg:px-5 flex flex-col lg:flex-row lg:items-center justify-between">
					<span className="text-[24px] font-[700]">
						در چه زمینه ای میخوای آموزش ببینی ؟
					</span>
					<div className="flex items-center justify-center gap-10 lg:w-1/2">
						<div className="flex justify-between items-center w-full rounded-[8px] pe-2 border-2">
							<input
								className="grow outline-none px-2 h-[47px]"
								type="text"
								placeholder="دوست داری چی یاد بگیری؟"
							/>
							<IconMagnifier />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default memo(SecondForm);
