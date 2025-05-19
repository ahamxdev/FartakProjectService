import { memo, SVGProps } from "react";
const IconCap = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="22"
			height="16"
			viewBox="0 0 22 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M17 8.00026V12.0003C17 13.6571 15.6569 15.0003 14 15.0003H8C6.34315 15.0003 5 13.6571 5 12.0003V8.00026M10.1056 1.44747L1 6.00026L10.1056 10.553C10.6686 10.8346 11.3314 10.8346 11.8944 10.553L21 6.00026L11.8944 1.44747C11.3314 1.16595 10.6686 1.16595 10.1056 1.44747Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default memo(IconCap);
