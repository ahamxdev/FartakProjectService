import { aboutUsComments, courses, projects, teachers } from "@/api";
import AboutUsCard from "@/components/AboutUsCard";
import BackTeacherCard from "@/components/BackTeacherCard";
import CourseCard from "@/components/courses/CourseCard";
import FlipCard from "@/components/FlipCard";
import FrontTeacherCard from "@/components/FrontTeacherCard";
import HomeAcademic from "@/components/home/HomeAcademic";
import HomeDescription from "@/components/home/HomeDescription";
import HomeWork from "@/components/home/HomeWork";
import List from "@/components/List";
import ProjectCard from "@/components/ProjectCard";
import { memo } from "react";

const Home = () => {
	return (
		<div className="flex flex-col justify-center gap-20 items-center w-full">
			<HomeDescription />
			<HomeAcademic />
			<HomeWork />
			<List
				tabs={[
					"هوش مصنوعی",
					"هنر",
					"زبان",
					"مهندسی",
					"ریاضی",
					"گرافیک",
					"بورس",
					"تولید محتوا",
				]}
				title="دوره های محبوب">
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
			</List>
			<List title="اساتید برتر فرتاک">
				{teachers.map(
					({ description, fullName, profile, role, star }, index) => (
						<FlipCard
							key={index}
							front={
								<FrontTeacherCard
									fullName={fullName}
									profile={profile}
									role={role}
									star={star}
								/>
							}
							height={280}
							width={270}
							back={<BackTeacherCard description={description} />}
						/>
					),
				)}
			</List>
			<List title="درباره ما گفته میشه... !">
				{aboutUsComments.map(
					({ description, fullName, profile }, index) => (
						<AboutUsCard
							description={description}
							fullName={fullName}
							profile={profile}
							key={index}
						/>
					),
				)}
			</List>
			<List title="پروژه ها">
				{projects.map(
					({ createDate, description, priceRange, title }, index) => (
						<ProjectCard
							key={index}
							createDate={createDate}
							description={description}
							priceRange={priceRange}
							title={title}
						/>
					),
				)}
			</List>
		</div>
	);
};

export default memo(Home);
