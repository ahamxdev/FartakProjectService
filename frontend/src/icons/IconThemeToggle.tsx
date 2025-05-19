import { SVGProps } from "react";

const IconThemeToggle = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M12.0001 2.05176V3.04161M12.0001 20.8589V21.8487M20.6603 7.001L19.7943 7.49592M4.20587 16.4045L3.33985 16.8995M3.33984 7.001L4.20587 7.49592M19.7943 16.4045L20.6603 16.8995M18.0001 11.9502C18.0001 15.2303 15.3138 17.8893 12.0001 17.8893C8.68641 17.8893 6.00012 15.2303 6.00012 11.9502C6.00012 8.67017 8.68641 6.01115 12.0001 6.01115C15.3138 6.01115 18.0001 8.67017 18.0001 11.9502Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export default IconThemeToggle;
