import MainForm from "@/components/courses/buyCourse/MainForm";
import { memo } from "react";

const Page = () => {
	return (
		<div className="flex flex-col justify-center gap-20 py-10 px-2 items-center w-full">
			<MainForm />
		</div>
	);
};
export default memo(Page);
