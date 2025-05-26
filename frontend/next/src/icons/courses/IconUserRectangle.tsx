import { memo, SVGProps } from "react";
const IconUserRectangle = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="64"
			height="64"
			fill="none"
			{...props}>
			<circle
				cx="8"
				cy="8"
				r="8"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="1.5"
				transform="matrix(1 0 0 -1 24 32)"
			/>
			<path
				stroke="currentColor"
				strokeWidth="1.5"
				d="M50.664 58.332c4.602-1.183 8.003-5.36 8.003-10.331V16C58.667 10.11 53.89 5.334 48 5.334H16c-5.891 0-10.667 4.776-10.667 10.667v32c0 4.971 3.401 9.148 8.003 10.331m37.328 0c-.852.219-1.744.335-2.664.335H16c-.92 0-1.812-.116-2.664-.335m37.328 0C50.484 48.177 42.197 40.001 32 40.001c-10.197 0-18.485 8.176-18.664 18.331"
			/>
		</svg>
	);
};

export default memo(IconUserRectangle);
