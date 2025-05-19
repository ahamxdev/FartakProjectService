"use client";
import { memo, useState } from "react";
import PageInation from "./PageInation";
import { courses } from "@/api";
import CourseCard from "./CourseCard";
import CourseHeader from "./CourseHeader";
import FilterDropDown from "./FilterDropDown";

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
