import { memo } from "react";

const FirstInfoItem = ({
	Icon,
	title,
	amount,
}: {
	Icon: React.ElementType;
	title: string;
	amount: string;
}) => {
	return (
		<div className="flex justify-center items-center gap-1 md:gap-3">
			<div className="flex flex-col justify-center items-start">
				<span className="font-extrabold text-[16px] md:text-[20px] text-yellowPrimary">
					{amount}
				</span>
				<span className="font-medium text-[12px] md:text-[16px] text-background">
					{title}
				</span>
			</div>
			<Icon className="text-white" />
		</div>
	);
};
export default memo(FirstInfoItem);
