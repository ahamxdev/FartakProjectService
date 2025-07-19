import ClassFilterForm from "../../components/ClassFilterForm";
import CourseCard from "../../components/CourseCard";

const classes = [
  {
    title: "جلسه اول",
    duration: 2,
    rating: 4.5,
    imgURL: "/img/admin/course.png",
    author: "امیرحسین بازیار",
  },
  {
    title: "جلسه اول",
    duration: 2,
    rating: 4.5,
    imgURL: "/img/admin/course.png",
    author: "امیرحسین بازیار",
  },
];
function RecordedClasses() {
  return (
    <>
      <h2 className="font-bold mb-3">ابتدا دسته بندی خود را مشخص کنید</h2>
      <ClassFilterForm />
      <div className="container-effects p-4">
        <h2 className="text-[#585858] font-bold mb-4">
          دبستان / اول دبستان / فارسی اول ابتدایی
        </h2>
        <div className="grid grid-cols-3">
          {classes.map((item, index) => (
            <CourseCard key={index} course={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default RecordedClasses;
