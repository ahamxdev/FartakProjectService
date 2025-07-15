"use client";

import { fromPersianDigits, toPersianPrice } from "@/utils/string";
import { lazy, memo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Checkbox,
	Input,
	Slider,
} from "@mui/material";


const IconFilter = lazy(
	() => import("@/icons/filterDropDown/IconFilter"),
);
const IconArrow = lazy(() => import("@/icons/IconArrow"));
const Button = lazy(() => import("./Button"));

const FilterDropDown = () => {
	const [price, setPrice] = useState([20000, 1200000]);
	const [filterMenu, setFilterMenu] = useState(false);
	return (
		<div className="grow lg:grow-0 !shadow-[0px_5px_16px_0px_rgba(0,0,0,0.25)] !w-fit !h-fit rounded-2xl relative">
			<div
				onClick={() => {
					setFilterMenu((prev) => !prev);
				}}
				className={`flex ${
					filterMenu ? "rounded-t-2xl" : "rounded-2xl"
				} cursor-pointer hover:opacity-80 h-full transition-opacity duration-200 bg-[#D3D3D3] py-2 lg:p-4 lg:w-[236px] items-center justify-between text-[#1E2531] !px-4`}>
				<div className="flex gap-2 lg:gap-4 items-center">
					<IconFilter className="size-8 scale-80 lg:scale-100" />
					<div className="flex gap-2 items-center">
						<span className="text-[16px] lg:text-[20px] font-bold">
							فیلتر
						</span>
						{/* <span className="w-6 h-6 hidden lg:flex text-white text-[14px] font-bold rounded-full items-center justify-center bg-bluePrimary">
							{toPersianDigits(3)}
						</span> */}
					</div>
				</div>
				<IconArrow className="-rotate-90 scale-80 lg:scale-100" />
			</div>
			<AnimatePresence initial={false}>
				{filterMenu && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className="!font-yekan !absolute !w-full !rounded-b-2xl">
						<Accordion className="!my-0 !rounded-t-none before:!opacity-100 !bg-[#D3D3D3]">
							<AccordionSummary
								expandIcon={<IconArrow className="-rotate-90" />}>
								مقطع دوره
							</AccordionSummary>
							<AccordionDetails className="flex !px-0 flex-col justify-center rounded-2xl">
								<div className="flex items-center">
									<Checkbox
										id="ebtedayi"
										value="ebtedayi"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="ebtedayi">ابتدایی</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="motaveseteAval"
										value="motaveseteAval"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="motaveseteAval">متوسطه اول</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="motaveseteDovom"
										value="motaveseteDovom"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="motaveseteDovom">متوسطه دوم</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="konkur"
										value="konkur"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="konkur">کنکور</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="collage"
										value="collage"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="collage">دانشگاهی</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="it"
										value="it"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="it">آی تی</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="bussiness"
										value="bussiness"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="bussiness">کسب و کار</label>
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion className="!my-0 !rounded-t-none before:!opacity-100 !bg-[#D3D3D3]">
							<AccordionSummary
								expandIcon={<IconArrow className="-rotate-90" />}>
								قیمت
							</AccordionSummary>
							<AccordionDetails className="flex flex-col justify-center rounded-2xl">
								<Slider
									onChange={(
										_event: Event,
										newValue: number | number[],
									) => {
										setPrice(newValue as number[]);
									}}
									value={price}
									max={5000000}
									step={250000}
									classes={{
										rail: "!bg-white !h-[8px] !rounded-2xl",
										track: "!bg-bluePrimary !h-[8px] !rounded-none",
										thumb:
											"!bg-[#7790FF] !w-[8px] !h-[16px] !rounded-[2px] ",
									}}
								/>
								<div className="flex mb-3 justify-between w-full !font-thin items-baseline">
									<span className="h-fit relative top-1">از</span>
									<Input
										dir="ltr"
										onChange={(e) => {
											setPrice((prev) => [
												+fromPersianDigits(e.target.value),
												prev[1],
											]);
										}}
										value={toPersianPrice(price[0])}
										className="!bg-transparent !text-[20px] !font-yekan !w-[124px] !border-b-black !p-0 !font-[700]"
									/>
									<span className="h-fit relative top-1">تومان</span>
								</div>
								<div className="flex justify-between w-full !font-thin items-baseline">
									<span className="h-fit relative top-1">تا</span>
									<Input
										dir="ltr"
										onChange={(e) => {
											setPrice((prev) => [
												prev[0],
												+fromPersianDigits(e.target.value),
											]);
										}}
										value={toPersianPrice(price[1])}
										className="!bg-transparent !text-[20px] !font-yekan !w-[124px] !border-b-black !p-0 !font-[700]"
									/>
									<span className="h-fit relative top-1">تومان</span>
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion className="!my-0 !rounded-t-none before:!opacity-100 !bg-[#D3D3D3]">
							<AccordionSummary
								expandIcon={<IconArrow className="-rotate-90" />}>
								استاد
							</AccordionSummary>
							<AccordionDetails className="flex !px-0 flex-col justify-center rounded-2xl">
								<div className="flex items-center">
									<Checkbox
										id="ostad1"
										value="ostad1"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="ostad1">نام استاد</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="ostad2"
										value="ostad2"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="ostad2">نام استاد</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="ostad3"
										value="ostad3"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="ostad3">نام استاد</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="ostad4"
										value="ostad4"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="ostad4">نام استاد</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="ostad5"
										value="ostad5"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="ostad5">نام استاد</label>
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion className="!my-0 !rounded-t-none before:!opacity-100 !bg-[#D3D3D3]">
							<AccordionSummary
								expandIcon={<IconArrow className="-rotate-90" />}>
								نوع پروژه
							</AccordionSummary>
							<AccordionDetails className="flex !px-0 flex-col justify-center rounded-2xl">
								<div className="flex items-center">
									<Checkbox
										id="partTime"
										value="partTime"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="ostad1">پاره وقت</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="fullTime"
										value="fullTime"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="fullTime">تمام وقت</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="remote"
										value="remote"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="remote">دورکاری</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="onPlace"
										value="onPlace"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="onPlace">حضوری</label>
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion className="!my-0 !shadow-none before:!opacity-100 !rounded-t-none !bg-[#D3D3D3]">
							<AccordionSummary
								expandIcon={<IconArrow className="-rotate-90" />}>
								مرتب سازی
							</AccordionSummary>
							<AccordionDetails className="flex !px-0 flex-col justify-center rounded-2xl">
								<div className="flex items-center">
									<Checkbox
										id="populate"
										value="populate"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="populate">محبوبیت</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="mostSale"
										value="mostSale"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="mostSale">پرفروش ترین</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="cheap"
										value="cheap"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="cheap">ارزان ترین</label>
								</div>
								<div className="flex items-center">
									<Checkbox
										id="expensive"
										value="expensive"
										className="!font-yekan !bg-transparent"
									/>
									<label htmlFor="expensive">گران ترین</label>
								</div>
							</AccordionDetails>
						</Accordion>
						<div className="!bg-[#D3D3D3] flex justify-center py-2">
							<Button
								color="#1d40d7"
								className="!text-[18px] !py-0 !font-bold"
								text="اعمال تغییرات"
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default memo(FilterDropDown);
