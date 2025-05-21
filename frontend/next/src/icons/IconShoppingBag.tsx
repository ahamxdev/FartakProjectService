import { SVGProps } from "react";

const IconShoppingBag = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M9 6.47852L9 7.47852C9 9.13537 10.3431 10.4785 12 10.4785C13.6569 10.4785 15 9.13537 15 7.47852V6.47852"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.6113 3.47852H8.38836C6.433 3.47852 4.76424 4.89217 4.44278 6.82092L2.77612 16.8209C2.36976 19.259 4.24994 21.4785 6.72169 21.4785H17.278C19.7498 21.4785 21.6299 19.259 21.2236 16.8209L19.5569 6.82092C19.2355 4.89217 17.5667 3.47852 15.6113 3.47852Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default IconShoppingBag;
