import { memo, SVGProps } from "react";
const IconPlayVideo = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="16"
			fill="none"
			{...props}>
			<path
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M12.461 9.736 4.492 14.29c-1.333.762-2.992-.2-2.992-1.736V3.446C1.5 1.911 3.159.948 4.492 1.71l7.97 4.553c1.343.768 1.343 2.706 0 3.473Z"
			/>
		</svg>
	);
};

export default memo(IconPlayVideo);
