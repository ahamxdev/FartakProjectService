"use client";

import { DropDownMenuItemsType } from "@/types/card";
import { getTextColor } from "@/utils/color";
import { memo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DropDownMenuProps = {
	titleBarColor?: string;
	mainItems: DropDownMenuItemsType;
};

const DropDownMenu = ({
	titleBarColor = "black",
	mainItems,
}: DropDownMenuProps) => {

	const [selectedMainTitle, setSelectedMainTitle] = useState("");
	const [selectedSubTitle, setSelectedSubTitle] = useState("");

	const handleItemClick = (
		event: React.MouseEvent<HTMLSpanElement>,
		item: string,
	) => {
		event.stopPropagation();
		setSelectedMainTitle((prev) => (prev === item ? "" : item));
	};
	const handleSubItemClick = (
		event: React.MouseEvent<HTMLSpanElement>,
		item: string,
	) => {
		event.stopPropagation();
		setSelectedSubTitle((prev) => (prev === item ? "" : item));
	};

	return (
		<div
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
						className="lg:overflow-hidden transition-transform duration-600 relative -top-5"
					>
						<div className='overflow-x-auto max-w-[90vw] lg:max-w-none bg-[#222222] text-white rounded-2xl mx-px lg:mx-2 p-2 flex'>
							<div className='w-1/2 smd:w-1/6 border-e-2'>
								{Object.keys(mainItems[selectedMainTitle]).map((item, index) => (
									<p
										key={`${selectedMainTitle}-${index}`}
										onClick={(e) => handleSubItemClick(e, item)}
										className={`
											${Object.keys(mainItems[selectedMainTitle]).length !== index+1 && 'border-b-2'}
											${selectedSubTitle == item && 'text-gray-500 font-bold'}
											border-slate-200 mx-4 py-4
										`}
									>
										{item}
									</p>
								))}
							</div>
							<div className='smd:flex w-1/2 smd:w-5/6 m-4'>
								<div className='smd:w-1/3'>
									{((Array.isArray(mainItems[selectedMainTitle]?.[selectedSubTitle]?.[0]) ?
										mainItems[selectedMainTitle]?.[selectedSubTitle]?.[0] : []) || []).map((item: [string, number], index: number) => (
										<div key={index}
											className={`
												${ item[1] === 1 ? 'text-amber-300 font-bold' : 'ms-8'}
												mb-4
											`}
										>
											{item[0]}{item[1] === 1 && '>'}
										</div>
									))}
								</div>
								<div className='smd:w-1/3'>
									{((Array.isArray(mainItems[selectedMainTitle]?.[selectedSubTitle]?.[1]) ?
										mainItems[selectedMainTitle]?.[selectedSubTitle]?.[1] : []) || []).map((item: [string, number], index: number) => (
										<div key={index}
											className={`
												${ item[1] === 1 ? 'text-amber-300 font-bold' : 'ms-8'}
												mb-4
											`}
										>
											{item[0]}{item[1] === 1 && '>'}
										</div>
									))}
								</div>
								<div className='smd:w-1/3'>
									{((Array.isArray(mainItems[selectedMainTitle]?.[selectedSubTitle]?.[2]) ?
										mainItems[selectedMainTitle]?.[selectedSubTitle]?.[2] : []) || []).map((item: [string, number], index: number) => (
										<div key={index}
											className={`
												${ item[1] === 1 ? 'text-amber-300 font-bold' : 'ms-8'}
												mb-4
											`}
										>
											{item[0]}{item[1] === 1 && '>'}
										</div>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default memo(DropDownMenu);