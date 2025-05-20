import {memo, SVGProps} from 'react';
const IconSmallLine = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="12"
			height="112"
			fill="none"{...props}>
			<path
				fill="#FAB437"
				d="M6 .226.226 6 6 11.774 11.774 6 6 .226Zm0 111.548L11.774 106 6 100.226.226 106 6 111.774ZM5 6v100h2V6H5Z"
			/>
		</svg>
	);
};

export default memo(IconSmallLine);