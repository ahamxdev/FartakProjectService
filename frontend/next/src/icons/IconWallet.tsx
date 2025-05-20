import { SVGProps } from "react";

const IconWallet = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			{...props}>
			<path
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6ZM22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14Z"
			/>
			<path
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M2 12v4h4a2 2 0 1 0 0-4H2Z"
			/>
		</svg>
	);
};

export default IconWallet;
