import { SVGProps } from "react";

const IconSearch = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M22 21.8487L20 19.869M2 11.4553C2 6.26187 6.25329 2.05176 11.5 2.05176C16.7467 2.05176 21 6.26187 21 11.4553C21 16.6488 16.7467 20.8589 11.5 20.8589C6.25329 20.8589 2 16.6488 2 11.4553Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default IconSearch;
