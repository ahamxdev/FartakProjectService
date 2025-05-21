"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import {
	useCallback,
	useEffect,
	useRef,
	useState,
	FC,
	ReactNode,
	lazy,
} from "react";
import Image from "next/image";
import listIcon from "../../public/listIcon.png";
import { usePrevious, useWindowSize } from "@reactuses/core";
import clsx from "clsx";

const IconArrow =lazy(()=>import( "@/icons/IconArrow"))
const Tabs =lazy(()=>import( "./Tabs"))

interface Props {
	title: string;
	tabs?: string[];
	gap?: number;
	children: ReactNode;
}
const List: FC<Props> = ({ title, children, tabs, gap }) => {
	const t = useTranslations("List");
	const list = useRef<HTMLDivElement>(null);
	const [currentCard, setCurrentCard] = useState(0);
	const [canScrollLeft, setCanScrollLeft] = useState(true);
	const [canScrollRight, setCanScrollRight] = useState(false);
	const { width } = useWindowSize();

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

	const prevCard = usePrevious(currentCard);

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

	return (
		<div className="w-full">
			<div className="flex justify-between items-center">
				<div className="flex gap-3 lg:gap-10 items-center relative start-4 lg:start-[72px]">
					<Image
						src={listIcon}
						alt="icon"
					/>
					<span className="font-black text-[16px] lg:text-2xl">
						{title}
					</span>
				</div>
				<div className="flex gap-4 items-center relative end-4 lg:end-[72px]">
					<Link
						href="#"
						className="text-[12px] lg:text-[18px] font-medium transition-opacity duration-300 hover:opacity-60">
						{t("seeAll")}
					</Link>
					<div className=" hidden lg:block bg-[rgba(30,37,49,0.45)] w-[1px] h-[60%]" />
					<div className=" hidden lg:flex  gap-7">
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
			</div>
			{tabs && (
				<div className="relative start-4 mt-4 lg:start-[72px] w-[95vw] overflow-hidden">
					<Tabs tabs={tabs} />
				</div>
			)}
			<div
				id="list"
				ref={list}
				style={{ gap: gap ? gap : 48 }}
				className="flex p-5 lg:px-[72px] overflow-x-auto overflow-y-hidden">
				{children}
			</div>
			<div className="flex mx-auto w-fit lg:hidden gap-7 pb-10 pt-3">
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
	);
};
export default List;
