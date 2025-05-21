import FirstForm from "@/components/courses/buyCourse/FirstForm";
import SecondForm from "@/components/courses/buyCourse/SecondForm";
import { memo } from "react";
const page = () => {
	return (
		<div className="flex flex-col justify-center gap-20 p-10 items-center w-full">
			<div>
				{/* <FirstForm /> */}
				<SecondForm />
			</div>
		</div>
	);
};

export default memo(page);
