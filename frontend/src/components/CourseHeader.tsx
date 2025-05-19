"use client";

import IconBook from "@/icons/courses/IconBook";
import IconCalculator from "@/icons/courses/IconCalculator";
import IconCPU from "@/icons/courses/IconCPU";
import IconGlobal from "@/icons/courses/IconGlobal";
import IconMonitorMobile from "@/icons/courses/IconMonitorMobile";
import IconMusic from "@/icons/courses/IconMusic";
import IconPenTool from "@/icons/courses/IconPenTool";
import {
	createRef,
	memo,
	useCallback,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
	useDebounce,
	useDebounceFn,
	useWindowSize,
} from "@reactuses/core";
import { isInViewport } from "@/utils/screen";
import IconArrow from "@/icons/IconArrow";
import { Menu } from "antd";
const CourseHeader = () => {
	const { height, width } = useWindowSize();
	const [selectedTab, setSelectedTab] = useState<
		| "programing"
		| "graphic"
		| "english language"
		| "math"
		| "it"
		| "song"
		| ""
	>("");
	const tabDebounce = useDebounce(selectedTab, 200);
	const dropDownRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const isClickedMenu = useRef(false);

	const [mobileDropDonw, setMobileDropDown] = useState(false);
	const tabRefs = useRef({
		programing: createRef<HTMLDivElement>(),
		"": createRef<HTMLDivElement>(),
		graphic: createRef<HTMLDivElement>(),
		"english language": createRef<HTMLDivElement>(),
		math: createRef<HTMLDivElement>(),
		it: createRef<HTMLDivElement>(),
		song: createRef<HTMLDivElement>(),
	});

	const [bgProps, setBgProps] = useState({
		x: 0,
		width: 0,
	});
	const onScroll = useCallback(() => {
		if (
			!isClickedMenu.current &&
			!isInViewport(tabRefs.current[selectedTab].current as HTMLElement)
		)
			setSelectedTab("");
		else isClickedMenu.current = false;
	}, [selectedTab, isClickedMenu]);
	const { run } = useDebounceFn(onScroll, 200);
	useLayoutEffect(() => {
		const menu = menuRef.current;
		const ref = tabRefs.current[tabDebounce];
		if (ref?.current) {
			const { offsetLeft, offsetWidth } = ref.current;

			if (tabDebounce !== "")
				setBgProps({
					x: offsetLeft - 11,
					width: offsetWidth + 20,
				});
			else {
				setBgProps((prev) => ({ ...prev, width: offsetWidth + 20 }));
				setTimeout(() => {
					setBgProps((prev) => ({ ...prev, x: offsetLeft - 11 }));
				}, 200);
			}
		}
		menu?.addEventListener("scrollend", run);
		return () => {
			menu?.removeEventListener("scrollend", run);
		};
	}, [tabDebounce, tabRefs, menuRef, run, width, height]);

	useLayoutEffect(() => {
		if (!menuRef.current || !tabRefs.current[tabDebounce]?.current)
			return;

		// فقط وقتی از دسکتاپ به موبایل رفتیم
		if (width < 1024) {
			tabRefs.current[tabDebounce]?.current.scrollIntoView({
				inline: "center",
				block: "nearest",
				behavior: "smooth",
			});
		}
	}, [width, tabDebounce]);

	return (
		<>
			<div className="hidden lg:block relative h-full">
				<div
					ref={menuRef}
					className="min-h-full relative w-[90vw] lg:w-full bg-[#D3D3D3] text-[#1E2531] flex px-6 py-4 overflow-x-auto rounded-2xl items-center gap-[70px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.25)]">
					<div
						ref={tabRefs.current[""]}
						onClick={(e) => {
							if (tabDebounce !== "") {
								isClickedMenu.current = true;
								e.currentTarget.scrollIntoView({
									inline: "center",
									block: "nearest",
									behavior: "smooth",
								});
								setSelectedTab("");
							}
						}}
						className="grow z-10 cursor-pointer flex gap-2 shrink-0 text-2xl items-center font-bold">
						<IconBook />
						<span>همه دروس</span>
					</div>
					<div
						ref={tabRefs.current["programing"]}
						onClick={(e) => {
							if (tabDebounce !== "programing") {
								isClickedMenu.current = true;
								e.currentTarget.scrollIntoView({
									inline: "center",
									block: "nearest",
									behavior: "smooth",
								});
								setSelectedTab("programing");
							} else setSelectedTab("");
						}}
						className={`${
							tabDebounce !== "programing" &&
							"opacity-50 font-normal bg-transparent"
						} cursor-pointer z-10 rounded-t-2xl flex items-center gap-2 transition-all font-bold text-[#1E2531] shrink-0`}>
						<IconMonitorMobile
							className={`${
								tabDebounce !== "programing" && "invisible"
							} transition-all`}
						/>
						برنامه نویسی
					</div>
					<div
						ref={tabRefs.current["graphic"]}
						onClick={(e) => {
							if (tabDebounce !== "graphic") {
								isClickedMenu.current = true;
								e.currentTarget.scrollIntoView({
									inline: "center",
									block: "nearest",
									behavior: "smooth",
								});
								setSelectedTab("graphic");
							} else setSelectedTab("");
						}}
						className={`${
							tabDebounce !== "graphic" &&
							"opacity-50 font-normal bg-transparent"
						} cursor-pointer z-10 rounded-t-2xl flex items-center gap-2 transition-all font-bold text-[#1E2531] shrink-0`}>
						<IconPenTool
							className={`${
								tabDebounce !== "graphic" && "invisible"
							} transition-all`}
						/>
						گرافیک
					</div>
					<div
						ref={tabRefs.current["english language"]}
						onClick={(e) => {
							if (tabDebounce !== "english language") {
								isClickedMenu.current = true;
								e.currentTarget.scrollIntoView({
									inline: "center",
									block: "nearest",
									behavior: "smooth",
								});
								setSelectedTab("english language");
							} else setSelectedTab("");
						}}
						className={`${
							tabDebounce !== "english language" &&
							"opacity-50 font-normal bg-transparent"
						} cursor-pointer z-10 rounded-t-2xl flex items-center gap-2 transition-all font-bold text-[#1E2531] shrink-0`}>
						<IconGlobal
							className={`${
								tabDebounce !== "english language" && "invisible"
							} transition-all`}
						/>
						زبان انگلیسی
					</div>
					<div
						ref={tabRefs.current["math"]}
						onClick={(e) => {
							if (tabDebounce !== "math") {
								isClickedMenu.current = true;
								e.currentTarget.scrollIntoView({
									inline: "center",
									block: "nearest",
									behavior: "smooth",
								});
								setSelectedTab("math");
							} else setSelectedTab("");
						}}
						className={`${
							tabDebounce !== "math" &&
							"opacity-50 font-normal bg-transparent"
						} cursor-pointer z-10 rounded-t-2xl flex items-center gap-2 transition-all font-bold text-[#1E2531] shrink-0`}>
						<IconCalculator
							className={`${
								tabDebounce !== "math" && "invisible"
							} transition-all`}
						/>
						ریاضی
					</div>
					<div
						ref={tabRefs.current["it"]}
						onClick={(e) => {
							if (tabDebounce !== "it") {
								isClickedMenu.current = true;
								e.currentTarget.scrollIntoView({
									inline: "center",
									block: "nearest",
									behavior: "smooth",
								});
								setSelectedTab("it");
							} else setSelectedTab("");
						}}
						className={`${
							tabDebounce !== "it" &&
							"opacity-50 font-normal bg-transparent"
						} cursor-pointer z-10 rounded-t-2xl flex items-center gap-2 transition-all font-bold text-[#1E2531] shrink-0`}>
						<IconCPU
							className={`${
								tabDebounce !== "it" && "invisible"
							} transition-all`}
						/>
						آی تی
					</div>
					<div
						ref={tabRefs.current["song"]}
						onClick={(e) => {
							if (tabDebounce !== "song") {
								isClickedMenu.current = true;
								e.currentTarget.scrollIntoView({
									inline: "center",
									block: "nearest",
									behavior: "smooth",
								});
								setSelectedTab("song");
							} else setSelectedTab("");
						}}
						className={`${
							tabDebounce !== "song" &&
							"opacity-50 font-normal bg-transparent"
						} cursor-pointer z-10 rounded-t-2xl flex items-center gap-2 transition-all font-bold text-[#1E2531] shrink-0`}>
						<IconMusic
							className={`${
								tabDebounce !== "song" && "invisible"
							} transition-all`}
						/>
						موسیقی
					</div>
					<motion.div
						layout
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						className={`absolute top-0 left-0 h-full rounded-t-2xl bg-[#B4B4B4]`}
						animate={{
							x: bgProps.x,
							width: bgProps.width,
							opacity: +!!tabDebounce,
						}}
					/>
				</div>
				<AnimatePresence initial={false}>
					{tabDebounce !== "" && (
						<motion.div
							ref={dropDownRef}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={!!tabDebounce ? { opacity: 0 } : {}}
							className="z-10 py-[13px] px-4 start-1/2 translate-x-1/2 grid [grid-template-columns:repeat(auto-fit,_220px)] justify-center rounded-2xl absolute top-15 bg-[#B4B4B4] w-[105%] overflow-hidden shadow-lg">
							<div className="flex flex-col lg:flex-row">
								<div>
									<h4 className="text-[16px] mb-3 font-semibold">
										فصل اول
									</h4>
									<ul className="list-disc space-y-3 ms-3 text-[16px] !font-light list-inside">
										<li>مقدمه</li>
										<li>توضیحات اولیه</li>
										<li>توضیحات اضافی</li>
										<li>تمرین های فصل اول</li>
										<li>ارزیابی و پایان</li>
									</ul>
								</div>
								<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
							</div>
							<div className="flex flex-col lg:flex-row">
								<div>
									<h4 className="text-[16px] mb-3 font-semibold">
										فصل دوم
									</h4>
									<ul className="list-disc space-y-3 ms-3 text-[16px] !font-light list-inside">
										<li>مقدمه</li>
										<li>توضیحات اولیه</li>
										<li>توضیحات اضافی</li>
										<li>تمرین های فصل اول</li>
										<li>ارزیابی و پایان</li>
									</ul>
								</div>
								<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
							</div>
							<div className="flex flex-col lg:flex-row">
								<div>
									<h4 className="text-[16px] mb-3 font-semibold">
										فصل سوم
									</h4>
									<ul className="list-disc space-y-3 ms-3 text-[16px] !font-light list-inside">
										<li>مقدمه</li>
										<li>توضیحات اولیه</li>
										<li>توضیحات اضافی</li>
										<li>تمرین های فصل اول</li>
										<li>ارزیابی و پایان</li>
									</ul>
								</div>
								<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
							</div>
							<div className="flex flex-col lg:flex-row">
								<div>
									<h4 className="text-[16px] mb-3 font-semibold">
										فصل چهارم
									</h4>
									<ul className="list-disc space-y-3 ms-3 text-[16px] !font-light list-inside">
										<li>مقدمه</li>
										<li>توضیحات اولیه</li>
										<li>توضیحات اضافی</li>
										<li>تمرین های فصل اول</li>
										<li>ارزیابی و پایان</li>
									</ul>
								</div>
								<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
							</div>
							<div>
								<h4 className="text-[16px] mb-3 font-semibold">
									فصل پنجم
								</h4>
								<ul className="list-disc space-y-3 ms-3 text-[16px] !font-light list-inside">
									<li>مقدمه</li>
									<li>توضیحات اولیه</li>
									<li>توضیحات اضافی</li>
									<li>تمرین های فصل اول</li>
									<li>ارزیابی و پایان</li>
								</ul>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<div className="lg:hidden !shadow-[0px_0px_16px_0px_rgba(0,0,0,0.25)] rounded-2xl grow relative">
				<div
					onClick={() => {
						setMobileDropDown((prev) => !prev);
					}}
					className={`flex ${
						mobileDropDonw ? "rounded-t-2xl" : "rounded-2xl"
					} cursor-pointer hover:opacity-80 h-full transition-opacity duration-200 bg-[#D3D3D3] py-2 lg:p-4 lg:w-[236px] items-center justify-between text-[#1E2531] !px-4`}>
					<div className="flex gap-2 lg:gap-4 items-center">
						<div className="flex gap-2 items-center">همه دروس</div>
					</div>
					<IconArrow className="-rotate-90 scale-80 lg:scale-100" />
				</div>
				<AnimatePresence initial={false}>
					{mobileDropDonw && (
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
									title="برنامه نویسی"
									key="programing">
									<div className="py-[13px] px-4 flex flex-col justify-center rounded-2xl">
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل اول
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل دوم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل سوم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل چهارم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div>
											<h4 className="text-[16px] mb-7 font-semibold">
												فصل پنجم
											</h4>
											<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
												<li>مقدمه</li>
												<li>توضیحات اولیه</li>
												<li>توضیحات اضافی</li>
												<li>تمرین های فصل اول</li>
												<li>ارزیابی و پایان</li>
											</ul>
										</div>
									</div>
								</Menu.SubMenu>
								<Menu.Divider />
								<Menu.SubMenu
									className="font-bold [&_.ant-menu-item-selected]:!bg-transparent [&_.ant-menu-inline]:!bg-transparent my-2 text-[18px]"
									title="گرافیک"
									key="graphice">
									<div className="py-[13px] px-4 flex flex-col justify-center rounded-2xl">
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل اول
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل دوم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل سوم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل چهارم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div>
											<h4 className="text-[16px] mb-7 font-semibold">
												فصل پنجم
											</h4>
											<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
												<li>مقدمه</li>
												<li>توضیحات اولیه</li>
												<li>توضیحات اضافی</li>
												<li>تمرین های فصل اول</li>
												<li>ارزیابی و پایان</li>
											</ul>
										</div>
									</div>
								</Menu.SubMenu>
								<Menu.Divider />
								<Menu.SubMenu
									className="font-bold [&_.ant-menu-item-selected]:!bg-transparent [&_.ant-menu-inline]:!bg-transparent my-2 text-[18px]"
									title="زبان انگلیسی"
									key="english language">
									<div className="py-[13px] px-4 flex flex-col justify-center rounded-2xl">
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل اول
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل دوم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل سوم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل چهارم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div>
											<h4 className="text-[16px] mb-7 font-semibold">
												فصل پنجم
											</h4>
											<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
												<li>مقدمه</li>
												<li>توضیحات اولیه</li>
												<li>توضیحات اضافی</li>
												<li>تمرین های فصل اول</li>
												<li>ارزیابی و پایان</li>
											</ul>
										</div>
									</div>
								</Menu.SubMenu>
								<Menu.Divider />
								<Menu.SubMenu
									className="font-bold [&_.ant-menu-item-selected]:!bg-transparent [&_.ant-menu-inline]:!bg-transparent my-2 text-[18px]"
									title="ریاضی"
									key="math">
									<div className="py-[13px] px-4 flex flex-col justify-center rounded-2xl">
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل اول
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل دوم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل سوم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل چهارم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div>
											<h4 className="text-[16px] mb-7 font-semibold">
												فصل پنجم
											</h4>
											<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
												<li>مقدمه</li>
												<li>توضیحات اولیه</li>
												<li>توضیحات اضافی</li>
												<li>تمرین های فصل اول</li>
												<li>ارزیابی و پایان</li>
											</ul>
										</div>
									</div>
								</Menu.SubMenu>
								<Menu.Divider />
								<Menu.SubMenu
									className="font-bold [&_.ant-menu-item-selected]:!bg-transparent [&_.ant-menu-inline]:!bg-transparent my-2 text-[18px]"
									title="آی تی"
									key="it">
									<div className="py-[13px] px-4 flex flex-col justify-center rounded-2xl">
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل اول
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل دوم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل سوم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل چهارم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div>
											<h4 className="text-[16px] mb-7 font-semibold">
												فصل پنجم
											</h4>
											<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
												<li>مقدمه</li>
												<li>توضیحات اولیه</li>
												<li>توضیحات اضافی</li>
												<li>تمرین های فصل اول</li>
												<li>ارزیابی و پایان</li>
											</ul>
										</div>
									</div>
								</Menu.SubMenu>
								<Menu.Divider />
								<Menu.SubMenu
									className="font-bold [&_.ant-menu-item-selected]:!bg-transparent [&_.ant-menu-inline]:!bg-transparent my-2 text-[18px]"
									title="موسیقی"
									key="song">
									<div className="py-[13px] px-4 flex flex-col justify-center rounded-2xl">
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل اول
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل دوم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل سوم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div className="flex flex-col lg:flex-row">
											<div>
												<h4 className="text-[16px] mb-7 font-semibold">
													فصل چهارم
												</h4>
												<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
													<li>مقدمه</li>
													<li>توضیحات اولیه</li>
													<li>توضیحات اضافی</li>
													<li>تمرین های فصل اول</li>
													<li>ارزیابی و پایان</li>
												</ul>
											</div>
											<div className="bg-[#1E2531] opacity-15 w-full h-[1px] lg:w-[1px] lg:h-full my-6 lg:my-0 lg:mx-6" />
										</div>
										<div>
											<h4 className="text-[16px] mb-7 font-semibold">
												فصل پنجم
											</h4>
											<ul className="list-disc space-y-5 ms-3 text-[16px] !font-light list-inside">
												<li>مقدمه</li>
												<li>توضیحات اولیه</li>
												<li>توضیحات اضافی</li>
												<li>تمرین های فصل اول</li>
												<li>ارزیابی و پایان</li>
											</ul>
										</div>
									</div>
								</Menu.SubMenu>
							</Menu>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default memo(CourseHeader);
