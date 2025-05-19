"use client";
import { ReactNode } from "react";

type AboutUsCardProps = {
	front: ReactNode;
	back: ReactNode;
	width: number;
	height: number;
};

export default function AboutUsCard({
	front,
	back,
	height,
	width,
}: AboutUsCardProps) {
	return (
		<div className="flex items-center justify-center mt-5">
			<div
				style={{ width, height }}
				className="relative group [perspective:1000px]">
				<div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
					<div className="absolute flex items-center justify-center inset-0 rounded-[20px] bg-cover bg-center [backface-visibility:hidden]">
						{front}
					</div>

					<div className="absolute flex items-center justify-center inset-0 rounded-[20px] bg-cover bg-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
						{back}
					</div>
				</div>
			</div>
		</div>
	);
}
