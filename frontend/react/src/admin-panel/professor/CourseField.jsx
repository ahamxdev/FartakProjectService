import { useLoaderData } from "react-router-dom";
import CourseCard from "../../components/CourseCard";

export const loader = async ({ params }) => {
  return params.field;
};
const courses = [
  {
    title: "مباحث ابتدایی مهندسی داده",
    duration: 36,
    rating: 4.5,
    author: "امیرحسین بازیار",
    imgURL: "/img/admin/course.png",
  },
];
function CourseField() {
  const field = useLoaderData();

  if (!field)
    return (
      <h3 className="text-center text-2xl text-gray-500 py-32">
        لطفا یک فیلد انتخاب کنید
      </h3>
    );
  return (
    <div>
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default CourseField;
