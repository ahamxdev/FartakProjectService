import { SVGProps } from "react";

const IconBurgerMenu = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="12"
			height="10"
			fill="none"
			{...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="1.5"
				d="M1 1h10M1 5h10M1 9h10"
			/>
		</svg>
	);
};

export default IconBurgerMenu;
