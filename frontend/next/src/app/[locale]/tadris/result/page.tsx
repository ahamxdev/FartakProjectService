
import { lazy } from "react";
const BuyCourseResult = lazy(
	() => import("@/components/courses/buyCourse/BuyCourseResult"),
);

const ResultPage = () => {
	return (
		<div className="flex flex-col justify-center gap-20 py-10 px-2 items-center w-full">
			
			<BuyCourseResult/>
		</div>
	);
};
export default ResultPage;
