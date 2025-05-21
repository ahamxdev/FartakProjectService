import { memo, SVGProps } from "react";
const IconMagnifier = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			{...props}>
			<g fill="currentColor">
				<path
					fillRule="evenodd"
					d="M1.25 10.5a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Zm9.25-7.75a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5Z"
					clipRule="evenodd"
				/>
				<path d="M19.826 21.968a1.91 1.91 0 0 1-1.413-.919l-1.092-1.82a1.39 1.39 0 0 1 1.908-1.908l1.82 1.093a1.921 1.921 0 0 1-1.223 3.554Z" />
			</g>
		</svg>
	);
};

export default memo(IconMagnifier);
