import { memo, SVGProps } from "react";
const IconFilter = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			{...props}>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M4.256 8.333h11.1a5.002 5.002 0 0 1 9.8 0h3.1a1 1 0 1 1 0 2h-3.1a5.002 5.002 0 0 1-9.8 0h-11.1a1 1 0 0 1 0-2Zm16-2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
				clipRule="evenodd"
			/>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M4.256 21.667a1 1 0 1 0 0 2h3.1a5.002 5.002 0 0 0 9.8 0h11.1a1 1 0 1 0 0-2h-11.1a5.002 5.002 0 0 0-9.8 0h-3.1Zm11 1a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default memo(IconFilter);
