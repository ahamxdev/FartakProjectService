"use client";

import { DropDownMenuItemsType } from "@/types/card";
import { getTextColor } from "@/utils/color";
import { memo, useState, useRef, useCallback, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DropDownMenuProps = {
	titleBarColor?: string;
	dropDownColor?: string;
	mainItems: DropDownMenuItemsType;
};

const DropDownMenu = ({
	titleBarColor = "black",
	dropDownColor = "#222222",
	mainItems,
}: DropDownMenuProps) => {
	const [selectedMainTitle, setSelectedMainTitle] = useState("");
	const containerRef = useRef<HTMLDivElement>(null);
	const dropDownRef = useRef<HTMLDivElement>(null);
	const titleRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});
	const [dropdownRight, setDropdownRight] = useState(0);
	const right = useMemo(() => {
		return dropdownRight;
	}, [dropdownRight]);
	// موقعیت dropdown رو تنظیم کن وقتی title انتخاب می‌شه
	// تابع محاسبه left (ممو‌شده)
	const calculateDropdownRight = useCallback(
		(
			span: HTMLSpanElement,
			container: HTMLDivElement,
			dropdown: HTMLDivElement,
		): number => {
			const spanRect = span.getBoundingClientRect();
			const containerRect = container.getBoundingClientRect();
			const offset = containerRect.right - spanRect.right;

			const dropWidth = dropdown.clientWidth;
			const containerWidth = container.clientWidth;

			let right = offset - 20;
			if (right < 0) right = 0;
			else if (right + dropWidth > containerWidth)
				right = containerWidth - dropWidth;

			return right;
		},
		[],
	);

	// افکت برای محاسبه موقعیت dropDown (ممو‌شده)
	const onAnimate = useCallback(() => {
		if (selectedMainTitle && titleRefs.current[selectedMainTitle]) {
			const span = titleRefs.current[selectedMainTitle];
			const container = containerRef.current;
			const dropdown = dropDownRef.current;

			requestAnimationFrame(() => {
				if (span && container && dropdown) {
					const newRight = calculateDropdownRight(
						span,
						container,
						dropdown,
					);
					if (newRight !== dropdownRight) {
						setDropdownRight(newRight);
					}
				}
			});
		}
	}, [selectedMainTitle, calculateDropdownRight, dropdownRight]);

	const handleItemClick = (
		event: React.MouseEvent<HTMLSpanElement>,
		item: string,
	) => {
		event.stopPropagation();
		setSelectedMainTitle((prev) => (prev === item ? "" : item));
	};
	return (
		<div
			ref={containerRef}
			className="relative overflow-hidden my-5"
			onClick={() => setSelectedMainTitle("")}>
			{/* Header Bar */}
			<div
				style={{
					backgroundColor: titleBarColor,
					color: getTextColor(titleBarColor),
				}}
				className="px-6 lg:min-w-5xl flex items-center justify-around h-[77px] rounded-2xl overflow-x-auto gap-28 max-w-[90vw] lg:max-w-none">
				{Object.keys(mainItems).map((item, index) => (
					<motion.span
						ref={(el) => {
							titleRefs.current[item] = el;
						}}
						key={index}
						onClick={(e) => handleItemClick(e, item)}
						className={`text-[18px] shrink-0 transition-all duration-200 ${
							selectedMainTitle === item
								? "font-bold p-3 !text-2xl bg-[#222222] rounded-t-xl"
								: "cursor-pointer hover:opacity-80"
						}`}>
						{item}
					</motion.span>
				))}{" "}
			</div>

			{/* DropDown Content */}
			<AnimatePresence initial={false}>
				{selectedMainTitle && (
					<motion.div
						key={selectedMainTitle} // ✅ این خط باعث رندر مجدد میشه
						initial={{ height: 0, opacity: 0, y: -10 }}
						animate={{
							height: "auto",
							opacity: 1,
							y: 0,
						}}
						exit={{ height: 0, opacity: 0, y: -10 }}
						transition={{
							duration: 0.1,
							ease: "circInOut",
						}}
						style={{
							left: -1 * right,
						}}
						onAnimationComplete={onAnimate}
						ref={dropDownRef}
						className="overflow-hidden transition-transform duration-600 w-fit relative -top-5">
						<div
							style={{
								backgroundColor: dropDownColor,
								color: getTextColor(dropDownColor),
							}}
							className="flex flex-col flex-wrap rounded-2xl lg:min-w-72 w-fit max-w-[90vw] h-96 py-10 lg:py-16 px-11 gap-y-4 gap-x-32 overflow-x-auto">
							<AnimatePresence mode="sync">
								{mainItems[selectedMainTitle].map((item, index) => (
									<motion.span
										key={`${selectedMainTitle}-${index}`}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{ duration: 0.25 }}>
										{item}
									</motion.span>
								))}
							</AnimatePresence>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default memo(DropDownMenu);
