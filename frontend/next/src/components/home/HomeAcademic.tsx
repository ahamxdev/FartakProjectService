import IconScooter from "../../../public/scooter.png";
import IconBycicle from "../../../public/bycicle.png";
import Image from "next/image";
import listIcon from "../../../public/listIcon.png";
import IconScooterDasti from "@/icons/academic/IconScooterDasti";
// import IconBycicle from "@/icons/academic/IconBycicle";
import IconMotorcycle from "@/icons/academic/IconMotorcycle";
import IconCar from "@/icons/academic/IconCar";
import { memo } from "react";

const HomeAcademic = () => {
	return (
		<div className="w-full">
			<div className="flex items-center w-fit relative start-4 lg:start-[72px]">
				<Image
					src={listIcon}
					alt=""
				/>
				<p className="text-black font-black text-[24px] shrink-0 me-10 ms-10">
					دوره های تدریس و آکادمیک
				</p>
			</div>

			<div className="mt-10 w-full">
				<div
					id="list"
					className="flex max-w-[95vw] w-fit mx-auto gap-10 sm:gap-16 lg:gap-20 justify-between items-end overflow-x-auto">
					<div className="inline-flex flex-col gap-5 items-center shrink-0 justify-center">
						<Image
							src={IconScooter}
							alt=""
						/>
						<button className="text-[20px] font-bold py-1 px-4">
							دبستان
						</button>
					</div>

					<div className="inline-flex flex-col gap-5 items-center shrink-0">
						<IconScooterDasti />
						<button className="text-[20px] font-bold py-1 px-4">
							متوسطه اول
						</button>
					</div>

					<div className="inline-flex flex-col gap-5 items-center shrink-0">
						<Image
							src={IconBycicle}
							alt=""
							className="w-[92px] h-[92px]"
						/>
						{/* <IconBycicle /> */}
						<button className="text-[20px] font-bold py-1 px-4">
							متوسطه دوم
						</button>
					</div>

					<div className="inline-flex flex-col gap-5 items-center shrink-0">
						<IconMotorcycle />
						<button className="text-[20px] font-bold py-1 px-4">
							کنکور
						</button>
					</div>

					<div className="inline-flex flex-col gap-5 items-center shrink-0">
						<IconCar className="w-[130px] h-[92px]" />
						<button className="text-[20px] font-bold py-1 px-4">
							دانشگاه
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(HomeAcademic);
