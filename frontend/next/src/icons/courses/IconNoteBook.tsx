import { memo, SVGProps } from "react";
const IconNoteBook = ({ ...props }: SVGProps<SVGSVGElement>) => {
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
				d="M32 16.142V54.14M13.333 22.012c3.376.523 7.141 1.392 10.667 2.756m-10.667 7.911c1.706.264 3.51.617 5.334 1.077M10.65 8.03c5.916.669 13.864 2.467 19.527 6.435a3.187 3.187 0 0 0 3.644 0c5.663-3.968 13.61-5.766 19.526-6.435 2.928-.33 5.319 2.114 5.319 5.13V43.2c0 3.016-2.39 5.462-5.319 5.793-5.915.668-13.863 2.467-19.526 6.435a3.187 3.187 0 0 1-3.644 0c-5.663-3.968-13.61-5.767-19.526-6.435-2.928-.331-5.319-2.777-5.319-5.793V13.16c0-3.016 2.39-5.46 5.319-5.13Z"
			/>
		</svg>
	);
};

export default memo(IconNoteBook);
