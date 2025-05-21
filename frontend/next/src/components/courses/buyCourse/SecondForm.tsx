import IconMagnifier from "@/icons/IconMagnifier";
import { memo } from "react";
const SecondForm = () => {
	return (
		<>
			<div className="flex flex-col items-center">
				<div className="w-[1229px] h-[68px] border-2 rounded-[8px] flex items-center">
					<span className="text-[24px] font-[700] px-5 pl-96">
						در چه زمینه ای میخوای آموزش ببینی ؟
					</span>
					<div className="flex items-center justify-center gap-10">
						<div className="flex justify-between items-center w-[385px] rounded-[8px] pe-2 border-2">
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
