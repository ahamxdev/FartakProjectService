import { memo, SVGProps } from "react";
const IconRectangleCheck = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="22"
			height="22"
			fill="none"
			{...props}>
			<path
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="m7 11 2.535 2.281a1 1 0 0 0 1.458-.13L15 8m2-7H5a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4Z"
			/>
		</svg>
	);
};

export default memo(IconRectangleCheck);
