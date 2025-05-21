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
						<div className="flex justify-between items-center w-[385px] h-[47px] rounded-[8px] px-5 border-2">
							<input
								className="grow outline-none pe-3.5"
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
