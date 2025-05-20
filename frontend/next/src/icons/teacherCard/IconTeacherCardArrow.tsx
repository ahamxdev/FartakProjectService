import { memo, SVGProps } from "react";
const IconTeacherCardArrow = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M10 8L6 12M6 12L10 16M6 12L18 12"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default memo(IconTeacherCardArrow);
