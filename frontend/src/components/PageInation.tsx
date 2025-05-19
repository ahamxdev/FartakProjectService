"use client";
import IconSquerArrow from "@/icons/IconSquerArrow";
import { toPersianDigits } from "@/utils/string";
import { memo, ReactNode, useMemo } from "react";
interface Props {
	children: ReactNode;
	page: number;
	handlePageChange: (pagee: number) => void;
}
const PageInation = ({ children, page, handlePageChange }: Props) => {
	const array = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);
	const canPrevPage = useMemo(() => page > 1, [page]);
	const canNextPage = useMemo(
		() => page + 1 <= array.length,
		[array, page],
	);

	return (
		<>
			<div
				className={`grid [grid-template-columns:repeat(auto-fit,_300px)] mt-15 w-full gap-y-12 justify-center gap-x-14`}>
				{children}
			</div>
			<div
				dir="ltr"
				className="flex mx-auto my-7 justify-between w-[200px] md:!w-[320px] items-center">
				<button
					onClick={() => {
						handlePageChange(page - 1);
					}}
					disabled={!canPrevPage}
					className="disabled:opacity-30 rotate-180">
					<IconSquerArrow />
				</button>
				<div className="flex gap-1">
					{array.map((pagee) => (
						<button
							onClick={() => {
								handlePageChange(pagee);
							}}
							className={`bg-[#2D3E5A] w-10 h-10 flex items-center justify-center rounded-full text-white transition-opacity duration-300 ${
								pagee === page - 1 || pagee === page + 1
									? "opacity-50 text-2xl scale-85 hover:opacity-80  cursor-pointer"
									: pagee === page - 2 || pagee === page + 2
									? "opacity-20 hidden md:block text-[16px] scale-70 hover:opacity-40 cursor-pointer"
									: pagee !== page
									? "hidden"
									: "text-[32px]"
							}`}
							key={pagee}>
							{toPersianDigits(pagee)}
						</button>
					))}
				</div>
				<button
					disabled={!canNextPage}
					className="disabled:opacity-30"
					onClick={() => {
						handlePageChange(page + 1);
					}}>
					<IconSquerArrow />
				</button>
			</div>
		</>
	);
};

export default memo(PageInation);
