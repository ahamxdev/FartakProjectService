import { SVGProps, useMemo } from "react";

interface Prop extends SVGProps<SVGSVGElement> {
	right?: true;
}
const IconArrow = ({ right, className, ...props }: Prop) => {
	const cssClass = useMemo(
		() =>
			className
				? right
					? `${right && "rotate-180"} ${className}`
					: className
				: right && "rotate-180",
		[right, className],
	);

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="10"
			height="19"
			fill="none"
			className={cssClass}
			{...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="1.5"
				d="m8.549 17.421-6.52-6.52c-.77-.77-.77-2.03 0-2.8l6.52-6.52"
			/>
		</svg>
	);
};

export default IconArrow;
