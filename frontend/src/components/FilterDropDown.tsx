"use client";

import IconFilter from "@/icons/filterDropDown/IconFilter";
import IconArrow from "@/icons/IconArrow";
import { fromPersianDigits, toPersianPrice } from "@/utils/string";
import { memo, useState } from "react";
import { Checkbox, Input, Menu, Slider } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";

const FilterDropDown = () => {
	const [price, setPrice] = useState([20000, 1200000]);
	const [filterMenu, setFilterMenu] = useState(false);
	return (
		<div className="!shadow-[0px_0px_16px_0px_rgba(0,0,0,0.25)] rounded-2xl grow lg:grow-0 relative">
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
						exit={{ opacity: 0, y: -10 }}>
						<Menu
							className="!absolute !w-full !font-yekan !rounded-b-2xl [&_.ant-menu-submenu-selected_.ant-menu-title-content]:!text-[#1E2531] [&_.ant-menu-submenu-selected_.ant-menu-submenu-title]:!text-[#1E2531] !bg-[#D3D3D3]"
							mode="inline">
							<Menu.Divider />
							<Menu.SubMenu
								className="font-bold [&_.ant-menu-item-selected]:!bg-transparent [&_.ant-menu-inline]:!bg-transparent my-2 text-[18px]"
								title="مقطع دوره"
								key="level">
								<Menu.Item
									key="ebtedayi"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										ابتدایی
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="motovaseteAval"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										متوسطه اول
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="motovaseteDovom"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										متوسطه دوم
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="konkur"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										کنکور
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="collage"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										دانشگاهی
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="it"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										نرم افزار
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="work"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										کسب و کار
									</Checkbox>
								</Menu.Item>
							</Menu.SubMenu>
							<Menu.Divider />
							<Menu.SubMenu
								className="font-bold [&_.ant-menu-item-selected]:!bg-transparent [&_.ant-menu-inline]:!bg-transparent my-2 text-[18px]"
								title="قیمت"
								key="price">
								<Menu.Item
									key="slider"
									className="hover:!bg-transparent !flex !justify-center !w-full !overflow-visible [&_.ant-menu-title-content]:!overflow-visible !pe-7">
									<Slider
										range
										onChange={(newValue) => {
											setPrice(newValue);
										}}
										value={price}
										max={5000000}
										step={250000}
										classNames={{
											rail: "!bg-white !h-[8px] !rounded-2xl",
											track: "!bg-bluePrimary !h-[8px] !rounded-none",
											handle:
												"!bg-[#7790FF] !w-[8px] !h-[16px] !rounded-[2px] ",
										}}
									/>
								</Menu.Item>
								<Menu.Item
									key="minPrice"
									className="hover:!bg-transparent !px-[10px]">
									<div className="flex justify-between w-full !font-thin items-baseline">
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
											variant="underlined"
											className="!bg-transparent !text-[20px] !font-yekan !w-[124px] !border-b-black !p-0 !font-[700]"
										/>
										<span className="h-fit relative top-1">تومان</span>
									</div>
								</Menu.Item>
								<Menu.Item
									key="maxPrice"
									className="hover:!bg-transparent !px-[10px]">
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
											variant="underlined"
											className="!bg-transparent !text-[20px] !font-yekan !w-[124px] !border-b-black !p-0 !font-[700]"
										/>
										<span className="h-fit relative top-1">تومان</span>
									</div>
								</Menu.Item>
							</Menu.SubMenu>
							<Menu.Divider />
							<Menu.SubMenu
								className="font-bold [&_.ant-menu-item-selected]:!bg-transparent [&_.ant-menu-inline]:!bg-transparent my-2 text-[18px]"
								title="اساتید"
								key="teachers">
								<Menu.Item
									key="techer1"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										نام استاد
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="techer2"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan font-normal">
										نام استاد
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="techer3"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										نام استاد
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="techer4"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										نام استاد
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="techer5"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										نام استاد
									</Checkbox>
								</Menu.Item>
							</Menu.SubMenu>
							<Menu.Divider />
							<Menu.SubMenu
								className="font-bold [&_.ant-menu-item-selected]:!bg-transparent [&_.ant-menu-inline]:!bg-transparent my-2 text-[18px]"
								title="نوع پروژه"
								key="projectCondintion">
								<Menu.Item
									key="partTime"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										پاره وقت
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="fullTime"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan font-normal">
										تمام وقت
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="remote"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										دورکاری
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="onPlace"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										حضوری
									</Checkbox>
								</Menu.Item>
							</Menu.SubMenu>
							<Menu.Divider />
							<Menu.SubMenu
								className="font-bold [&_.ant-menu-item-selected]:!bg-transparent [&_.ant-menu-inline]:!bg-transparent my-2 text-[18px]"
								title="مرتب سازی"
								key="sort">
								<Menu.Item
									key="populate"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										محبوبیت
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="mostSale"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan font-normal">
										پرفروش ترین
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="mostCheap"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										ارزان ترین
									</Checkbox>
								</Menu.Item>
								<Menu.Item
									key="expensive"
									className="hover:!bg-transparent">
									<Checkbox className="!font-yekan !bg-transparent font-normal">
										گران ترین
									</Checkbox>
								</Menu.Item>
							</Menu.SubMenu>

							<Menu.Item className="!w-fit !m-0 !mt-5 !mb-3 !mx-auto !p-0 !h-fit">
								<Button
									color="#1d40d7"
									className="!text-[18px] !py-0 !font-bold"
									text="اعمال تغییرات"
								/>
							</Menu.Item>
						</Menu>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default memo(FilterDropDown);
