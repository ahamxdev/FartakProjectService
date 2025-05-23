import { memo, SVGProps } from "react";
const IconCalculator = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="25"
			fill="none"
			{...props}>
			<path
				fill="currentColor"
				d="M14.256 23.25h-4c-5.43 0-7.75-2.32-7.75-7.75v-6c0-5.43 2.32-7.75 7.75-7.75h4c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-4-20c-4.61 0-6.25 1.64-6.25 6.25v6c0 4.61 1.64 6.25 6.25 6.25h4c4.61 0 6.25-1.64 6.25-6.25v-6c0-4.61-1.64-6.25-6.25-6.25h-4Z"
			/>
			<path
				fill="currentColor"
				d="M15.256 11.33h-6c-1.24 0-2.25-1.01-2.25-2.25v-1c0-1.24 1.01-2.25 2.25-2.25h6c1.24 0 2.25 1.01 2.25 2.25v1c0 1.24-1.01 2.25-2.25 2.25Zm-6-4c-.41 0-.75.34-.75.75v1c0 .41.34.75.75.75h6c.41 0 .75-.34.75-.75v-1c0-.41-.34-.75-.75-.75h-6Z"
			/>
			<path
				fill="currentColor"
				d="M8.406 15.42c-.13 0-.26-.03-.38-.08a.988.988 0 0 1-.32-.21.99.99 0 0 1-.29-.71.986.986 0 0 1 .29-.71c.04-.04.09-.09.15-.12.05-.04.11-.07.17-.09a.998.998 0 0 1 1.31.54c.05.12.08.25.08.38a1 1 0 0 1-.3.71.99.99 0 0 1-.71.29Z"
			/>
			<path
				fill="currentColor"
				d="M12.416 15.42a.99.99 0 0 1-1-1 .986.986 0 0 1 .29-.71c.04-.04.09-.09.15-.12.05-.04.11-.07.17-.09a.972.972 0 0 1 .77 0c.12.05.23.12.32.21.09.1.17.2.22.33.05.12.08.25.08.38a1 1 0 0 1-.3.71c-.19.19-.44.29-.7.29Z"
			/>
			<path
				fill="currentColor"
				d="M16.406 15.42c-.13 0-.26-.03-.38-.08a.988.988 0 0 1-.54-.54.986.986 0 0 1-.07-.38.986.986 0 0 1 .29-.71c.37-.37 1.04-.37 1.41 0 .19.19.3.45.3.71a1 1 0 0 1-.3.71c-.18.18-.43.29-.71.29Z"
			/>
			<path
				fill="currentColor"
				d="M8.416 19.42a.99.99 0 0 1-.71-.29 1 1 0 0 1-.3-.71 1.017 1.017 0 0 1 .45-.83c.05-.04.11-.07.17-.09.06-.03.13-.05.19-.06.33-.06.67.04.9.27.05.05.09.1.13.15l.09.18.06.18c.01.07.02.13.02.2a1 1 0 0 1-.3.71c-.19.19-.44.29-.7.29Z"
			/>
			<path
				fill="currentColor"
				d="M12.416 19.42a.99.99 0 0 1-.71-.29 1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.23-.23.58-.33.9-.27.06.01.13.03.19.06.06.02.12.05.17.09.05.03.1.08.15.12.19.19.29.45.29.71a.99.99 0 0 1-.99 1Z"
			/>
			<path
				fill="currentColor"
				d="M16.406 19.42a.99.99 0 0 1-.99-1c0-.26.1-.52.29-.71.09-.09.2-.16.32-.21.37-.15.82-.07 1.09.21.19.19.29.45.29.71 0 .27-.1.52-.29.71-.09.09-.2.16-.32.21-.12.05-.25.08-.39.08Z"
			/>
		</svg>
	);
};

export default memo(IconCalculator);
