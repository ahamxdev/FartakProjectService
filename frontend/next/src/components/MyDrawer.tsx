"use client";
import IconArrow from "@/icons/IconArrow";
import { useDrawerStore } from "@/store";
import { DrawerHeader } from "@/utils/mui";
import logo from "../../public/logo.png";

import {
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	Typography,
} from "@mui/material";
import { useWindowSize } from "@reactuses/core";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
const MyDrawer = () => {
	const { width } = useWindowSize();
	const { open, setOpen } = useDrawerStore();
	const param = usePathname();
	return (
		<>
			{width < 929 && (
				<Drawer
					aria-hidden={false}
					ModalProps={{ disableEnforceFocus: true }}
					keepMounted={false}
					sx={{
						width: 240,
						flexShrink: 0,
						"& .MuiDrawer-paper": {
							width: 240,
						},
						position: "absolute",
					}}
					open={open}
					onClose={() => {
						setOpen(false);
					}}>
					<DrawerHeader>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Image
								className="w-[60px] h-[60px]"
								src={logo}
								priority
								alt="logo"
							/>
							<Typography
								variant="h2"
								fontWeight={700}
								fontSize={24}>
								فرتاک
							</Typography>
						</Box>
						<IconButton
							onClick={() => {
								setOpen(false);
							}}>
							<IconArrow className="rotate-180" />
						</IconButton>
					</DrawerHeader>
					<Divider />
					<List>
						{[
							{ title: "خانه", href: "/" },
							{ title: "تدریس", href: "/tadris" },
							{ title: "پروژه ها", href: "#" },
							{ title: "دوره ها", href: "/courses" },
							{ title: "وبلاگ", href: "#" },
							{ title: "درباره ما", href: "#" },
							{ title: "تماس با ما", href: "#" },
							{ title: "پشتیبانی", href: "#" },
						].map((item, index) => (
							<ListItem
								key={index}
								disablePadding>
								<ListItemButton
									onClick={() => {
										setOpen(false);
									}}
									sx={{
										padding: 0,
										bgcolor:
											param === `/fa${item.href === "/" ? "" : item.href}`
												? "rgba(0,0,0,0.04)"
												: "",
										"&:hover": {
											bgcolor: "rgba(0,0,0,0.07)",
										},
									}}>
									{/* <ListItemIcon>x</ListItemIcon> */}
									<Link
										className="w-full px-4 py-2"
										href={item.href}>
										{item.title}
									</Link>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Drawer>
			)}
		</>
	);
};

export default memo(MyDrawer);
