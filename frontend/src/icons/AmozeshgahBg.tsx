import { memo, SVGProps } from "react";
const AmozeshgahBg = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="330"
			height="426"
			fill="none"
			{...props}>
			<path
				fill="currentColor"
				d="M322 0a8 8 0 0 1 8 8v410a8 8 0 0 1-8 8H221.597a8 8 0 0 1-7.515-5.258l-23.164-63.484a8 8 0 0 0-7.515-5.258H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8h314Z"
			/>
		</svg>
	);
};

export default memo(AmozeshgahBg);
