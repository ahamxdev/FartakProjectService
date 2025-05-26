import { memo, SVGProps } from "react";
const IconMiniComment = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="22"
			height="20"
			fill="none"
			{...props}>
			<path
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M16.373 6.173A7.88 7.88 0 0 1 21 13.375v3.375c0 1.243-.995 2.25-2.222 2.25H12.11c-2.903 0-5.372-1.878-6.287-4.5m10.549-8.327C15.67 3.206 13.034 1 9.889 1H8.778C4.482 1 1 4.526 1 8.875v3.375c0 1.243.995 2.25 2.222 2.25h2.602m10.549-8.327a6.85 6.85 0 0 1 .183 1.577c0 3.728-2.985 6.75-6.667 6.75H5.824"
			/>
		</svg>
	);
};

export default memo(IconMiniComment);
