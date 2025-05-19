"use client";
import { getTextColor } from "@/utils/color";
import { memo, useMemo, useState } from "react";

interface ButtonProps {
	text: string;
	color: string;
	outline?: boolean;
	className?: string;
}

const Button = ({ text, color, outline, className }: ButtonProps) => {
	const [hovered, setHovered] = useState(false);

	const baseStyle = useMemo(() => {
		if (outline) {
			return {
				backgroundColor: hovered ? color : "#ffffff",
				color: hovered ? getTextColor(color) : color,
				border: `1px solid ${color}`,
			};
		} else {
			return {
				backgroundColor: hovered ? "#ffffff" : color,
				color: hovered ? color : getTextColor(color),
				border: `1px solid ${color}`,
			};
		}
	}, [hovered, color, outline]);

	return (
		<button
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className={`rounded-lg cursor-pointer transition duration-300 px-6 py-2 ${
				className ?? ""
			}`}
			style={baseStyle}>
			{text}
		</button>
	);
};

export default memo(Button);
