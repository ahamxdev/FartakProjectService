"use client";
import { lazy, memo, useState } from "react";
import { courses } from "@/api";

const PageInation = lazy(() => import("../PageInation"));
const CourseCard = lazy(() => import("./CourseCard"));
const CourseHeader = lazy(() => import("./CourseHeader"));
const FilterDropDown = lazy(() => import("../FilterDropDown"));

const Courses = () => {
	const [page, setPage] = useState(1);
	return (
		<div className="w-full px-5 flex flex-col items-center">
			<div className="flex w-full justify-center gap-6 mt-10">
				<FilterDropDown />
				<CourseHeader />
			</div>
			<PageInation
				page={page}
				handlePageChange={(pagee) => setPage(pagee)}>
				{courses.map(
					(
						{
							courseDuration,
							price,
							profile,
							reshte,
							star,
							studentCount,
							teacherName,
							title,
						},
						index,
					) => (
						<CourseCard
							key={index}
							courseDuration={courseDuration}
							price={price}
							profile={profile}
							reshte={reshte}
							star={star}
							teacherName={teacherName}
							studentCount={studentCount}
							title={title}
						/>
					),
				)}
			</PageInation>
		</div>
	);
};

export default memo(Courses);
