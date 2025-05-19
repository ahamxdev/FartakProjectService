"use client";
import IconChart from "@/icons/works/IconChart";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import listIcon from "../../../public/listIcon.png";
import Image from "next/image";
import IconWebCoding from "@/icons/works/IconWebCoding";
import IconMechanicEng from "@/icons/works/IconMechanicEng";
import IconPython from "@/icons/works/IconPython";
import IconBourse from "@/icons/works/IconBourse";
import IconHonar from "@/icons/works/IconHonar";
import IconMath from "@/icons/works/IconMath";
import IconHoush from "@/icons/works/IconHoush";
import IconExcel from "@/icons/works/IconExcel";
import IconBargh from "@/icons/works/IconBargh";
import IconBinary from "@/icons/works/IconBinary";
import IconSparkles from "@/icons/works/IconSparkles";
import IconMemari from "@/icons/works/IconMemari";
import IconBuilding from "@/icons/works/IconBuilding";
import IconLanguage from "@/icons/works/IconLanguage";
import IconSanaye from "@/icons/works/IconSanaye";
import IconArrow from "@/icons/IconArrow";
import clsx from "clsx";
import { usePrevious, useWindowSize } from "@reactuses/core";

const HomeWork = () => {
	const [canScrollRight, setCanScrollRight] = useState(false);
	const [canScrollLeft, setCanScrollLeft] = useState(true);
	const list = useRef<HTMLDivElement>(null);
	const [currentCard, setCurrentCard] = useState(0);
	const prevCard = usePrevious(currentCard);
	const { width } = useWindowSize();

	useEffect(() => {
		const liist = list.current;
		const card = liist?.childNodes[currentCard] as HTMLElement;
		if (currentCard === 0) liist?.scroll({ left: 0, behavior: "smooth" });
		else if (currentCard === (liist?.childElementCount as number) - 1)
			liist?.scroll({ left: -1 * liist.scrollWidth, behavior: "smooth" });
		else if (card && liist) {
			let scrollPosition: ScrollLogicalPosition = "center";

			if (width! >= 768) {
				if (prevCard !== undefined && currentCard > prevCard!) {
					scrollPosition = "end"; // به جلو (راست)
				} else if (prevCard !== undefined && currentCard < prevCard!) {
					scrollPosition = "start"; // به عقب (چپ)
				}
			}
			card.scrollIntoView({
				behavior: "smooth",
				inline: scrollPosition,
				block: "nearest",
			});
		}

		setCanScrollLeft(
			(list.current?.scrollWidth as number) >
				(list.current?.clientWidth as number) &&
				currentCard < (liist?.childElementCount ?? 0) - 1,
		);
		setCanScrollRight(
			(list.current?.scrollWidth as number) >
				(list.current?.clientWidth as number) && currentCard > 0,
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentCard, width]);

	const onRightArrowClick = useCallback(() => {
		if (list.current && canScrollRight) {
			let count = 0;
			for (let i = currentCard; i > 0; i--) {
				const card = list.current?.childNodes[i] as HTMLElement;
				const rect = card?.getBoundingClientRect();
				const parentRect = list.current?.getBoundingClientRect();
				const isVisible =
					rect?.left >= parentRect?.left &&
					rect?.right <= parentRect?.right;
				if (isVisible) count++;
				else break;
			}
			setCurrentCard((prev) => (count ? prev - count : prev - 1));
		}
	}, [canScrollRight, currentCard]);
	const onLeftArrowClick = useCallback(() => {
		if (list.current && canScrollLeft) {
			let count = 0;
			for (let i = currentCard; i < list.current.childElementCount; i++) {
				const card = list.current?.childNodes[i] as HTMLElement;
				const rect = card?.getBoundingClientRect();
				const parentRect = list.current?.getBoundingClientRect();
				const isVisible =
					rect?.left >= parentRect?.left &&
					rect?.right <= parentRect?.right;
				if (isVisible) count++;
				else break;
			}
			setCurrentCard((prev) => (count ? prev + count : prev + 1));
		}
	}, [canScrollLeft, currentCard]);
	return (
		<div className="mt-10 w-full">
			<div className="flex justify-between ">
				<div className="flex items-center w-fit relative start-4 lg:start-[72px]">
					<Image
						src={listIcon}
						alt="icon"
					/>
					<p className="text-black font-black text-[24px] shrink-0 me-10 ms-10">
						دوره های کسب و کار
					</p>
				</div>
				{(list.current?.clientWidth as number) <
					(list.current?.scrollWidth as number) && (
					<div className="flex gap-4 items-center relative end-4 lg:end-[72px]">
						<div className="flex gap-7">
							<button
								disabled={!canScrollRight}
								onClick={onRightArrowClick}
								className={clsx("transition-opacity duration-300", {
									"cursor-pointer hover:opacity-60": canScrollRight,
									"opacity-20": !canScrollRight,
								})}>
								<IconArrow right />
							</button>
							<button
								disabled={!canScrollLeft}
								onClick={onLeftArrowClick}
								className={clsx("transition-opacity duration-300", {
									"cursor-pointer hover:opacity-60": canScrollLeft,
									"opacity-20": !canScrollLeft,
								})}>
								<IconArrow />
							</button>
						</div>
					</div>
				)}
			</div>
			<div
				id="list"
				ref={list}
				className="mt-10 mx-auto grid grid-rows-2 gap-y-10 overflow-x-auto max-w-[1440px] px-10">
				<div className="flex justify-between gap-5 sm:gap-10">
					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconWebCoding className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							برنامه نویسی
						</button>
					</div>

					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconChart className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							آمار و داده کاوی
						</button>
					</div>

					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconMechanicEng className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							مهندسی مکانیک
						</button>
					</div>

					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconPython className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							پایتون
						</button>
					</div>

					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconBourse className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							بورس و سهام
						</button>
					</div>

					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconHonar className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							هنر
						</button>
					</div>

					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconMath className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							ریاضیات
						</button>
					</div>

					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconHoush className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							هوش مصنوعی
						</button>
					</div>
				</div>

				<div className="flex justify-between gap-5 sm:gap-10">
					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconExcel className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							اکسل
						</button>
					</div>

					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconBargh className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							مهندسی برق
						</button>
					</div>

					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconBinary className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							مهندسی نرم افزار
						</button>
					</div>

					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconSparkles className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							طراحی گرافیک
						</button>
					</div>

					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconBuilding className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							مهندسی عمران
						</button>
					</div>

					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconMemari className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							مهندسی معماری
						</button>
					</div>

					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconLanguage className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							زبان انگلیسی
						</button>
					</div>

					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="w-[120px] h-[96px] bg-darkBlue border-2 rounded-lg relative flex items-center justify-center overflow-hidden">
							<IconSanaye className="w-full h-full object-contain p-4 z-10" />
						</div>
						<button className="rounded-lg text-black text-[20px] py-1 whitespace-nowrap">
							مهندسی صنایع
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(HomeWork);
