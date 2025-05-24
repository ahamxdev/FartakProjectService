import { memo, SVGProps } from "react";
const IconEditForm = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="64"
			height="64"
			fill="none"
			{...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.5"
				d="M58.667 32v16c0 5.892-4.776 10.667-10.667 10.667H16c-5.891 0-10.667-4.775-10.667-10.666V16C5.333 10.11 10.11 5.334 16 5.334h16m9.83 5.394s0 3.814 3.814 7.628c3.815 3.814 7.629 3.814 7.629 3.814m-28.86 20.47 8.01-1.145a5.394 5.394 0 0 0 3.05-1.525l21.614-21.614a5.394 5.394 0 0 0 0-7.628l-3.814-3.814a5.394 5.394 0 0 0-7.629 0L24.031 28.527a5.394 5.394 0 0 0-1.526 3.051l-1.144 8.01a2.697 2.697 0 0 0 3.051 3.051Z"
			/>
		</svg>
	);
};

export default memo(IconEditForm);
