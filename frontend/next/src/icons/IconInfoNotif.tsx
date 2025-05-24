import { memo, SVGProps } from "react";
const IconInfoNotif = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="none"
			{...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M8 5.333V6m0 2v2.667M8.667 2H7.334a6 6 0 1 0 0 12H12a2.667 2.667 0 0 0 2.667-2.667V8a6 6 0 0 0-6-6Z"
			/>
		</svg>
	);
};

export default memo(IconInfoNotif);
