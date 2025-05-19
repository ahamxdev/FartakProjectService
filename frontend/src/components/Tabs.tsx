"use client";

import { useState, useRef, useLayoutEffect, memo } from "react";
import { motion } from "framer-motion";

interface TabProps {
	tabs: string[];
	onTabChange?: (index: number) => void;
}

const Tabs = memo(({ tabs, onTabChange }: TabProps) => {
	const [activeTab, setActiveTab] = useState(0);
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	const [indicator, setIndicator] = useState({ left: 0, width: 0 });

	useLayoutEffect(() => {
		const current = tabRefs.current[activeTab];
		if (current) {
			const { offsetLeft, offsetWidth } = current;
			setIndicator({ left: offsetLeft, width: offsetWidth });
		}
	}, [activeTab, tabs]);

	const handleTabClick = (index: number) => {
		if (index !== activeTab) {
			setActiveTab(index);
			onTabChange?.(index);
		}
	};

	return (
		<div
			ref={containerRef}
			className="relative w-fit md:mx-6">
			<div className="flex relative w-[90vw] gap-[74px] overflow-x-auto pb-2">
				{tabs.map((tab, index) => (
					<button
						key={index}
						ref={(el) => {
							tabRefs.current[index] = el;
						}}
						onClick={() => handleTabClick(index)}
						className={`shrink-0 text-[20px] rounded-t-lg py-2 text-center transition-all duration-200 ${
							activeTab === index
								? "text-yellowPrimary font-extrabold"
								: "text-gray-500 font-medium hover:text-gray-950 cursor-pointer"
						}`}>
						{tab}
					</button>
				))}

				<motion.div
					layout
					transition={{
						type: "keyframes",
						stiffness: 400,
						damping: 30,
					}}
					style={{
						left: indicator.left,
					}}
					className="flex flex-col absolute bottom-0 items-end gap-1.5">
					<div className="flex gap-1">
						<span
							className="rounded h-0.5 bg-[#1E2531]"
							style={{
								width: indicator.width * 0.1,
							}}
						/>
						<span
							className="rounded h-0.5 bg-[#1E2531]"
							style={{
								width: indicator.width * 0.4,
							}}
						/>
					</div>
					<span
						className="h-0.5 rounded bg-yellowPrimary"
						style={{
							width: indicator.width,
						}}
					/>
				</motion.div>
			</div>
		</div>
	);
});

Tabs.displayName = "AnimatedTabs";
export default Tabs;
