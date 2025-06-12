"use client";
import { ActionsButtons, buttonActions } from "@/utils";
import { getTextColor } from "@/utils/color";
import { useRouter } from "next/navigation";
import { memo, useMemo, useState } from "react";

interface ButtonProps {
	text: string;
	color: string;
	action?: ActionsButtons;
	outline?: boolean;
	className?: string;
	click?: () => void;
}

const Button = ({
	text,
	color,
	action = "empty",
	outline,
	className,
	click = () => {}, // Default click function
}: ButtonProps) => {
	const router = useRouter();
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
			onClick={() => {
				buttonActions[action](router);
				click();
			}}
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
