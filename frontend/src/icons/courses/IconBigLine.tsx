import { memo, SVGProps } from "react";
const IconBigLine = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="176"
			height="12"
			fill="none"
			{...props}>
			<path
				fill="#FAB437"
				d="M175.774 6 170 .226 164.226 6 170 11.774 175.774 6ZM.227 6 6 11.774 11.774 6 6 .226.227 6ZM170 5H6v2h164V5Z"
			/>
		</svg>
	);
};

export default memo(IconBigLine);
