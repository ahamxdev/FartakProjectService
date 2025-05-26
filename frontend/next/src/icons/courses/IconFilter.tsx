import { memo, SVGProps } from "react";
const IconFilter = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			fill="none"
			{...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M31.365 3.334H8.635c-2.898 0-4.627 3.193-3.02 5.576l9.537 12.47a7.113 7.113 0 0 1 1.219 3.979v9.511c0 1.598 1.954 2.398 3.098 1.269l3.629-3.587c.34-.336.531-.793.531-1.268v-5.925c0-1.417.424-2.801 1.22-3.98L34.383 8.91c1.608-2.383-.12-5.576-3.02-5.576Z"
			/>
		</svg>
	);
};

export default memo(IconFilter);
