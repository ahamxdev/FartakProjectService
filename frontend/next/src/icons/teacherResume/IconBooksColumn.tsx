import { memo, SVGProps } from "react";
const IconBooksColumn = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="22"
			height="20"
			fill="none"
			{...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M3 13h11a3 3 0 1 1 0 6H3m0-6v6m0-6H1m2 6H1M3 1h11a3 3 0 1 1 0 6H3m0-6v6m0-6H1m2 6H1m18 0H8a3 3 0 0 0 0 6h11m0-6v6m0-6h2m-2 6h2"
			/>
		</svg>
	);
};

export default memo(IconBooksColumn);
