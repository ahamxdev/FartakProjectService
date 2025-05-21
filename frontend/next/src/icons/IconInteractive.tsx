import { SVGProps } from "react";

const IconInteractive = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="56"
			height="57"
			fill="none"
			{...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M38.822 24.112c-1.729-4.28-5.923-7.3-10.822-7.3-6.443 0-11.666 5.223-11.666 11.667 0 4.899 3.02 9.093 7.299 10.822m4.17 12.51C15.007 51.706 4.667 41.3 4.667 28.48 4.667 15.592 15.114 5.146 28 5.146c12.821 0 23.227 10.34 23.333 23.136M28.134 31.8 34.23 50.09c.766 2.298 4.016 2.298 4.782 0l2.251-6.753a2.52 2.52 0 0 1 1.594-1.594l6.753-2.252c2.298-.765 2.298-4.015 0-4.781l-18.288-6.097c-1.97-.656-3.845 1.218-3.188 3.188Z"
			/>
		</svg>
	);
};

export default IconInteractive;
