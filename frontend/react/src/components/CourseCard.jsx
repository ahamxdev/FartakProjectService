function CourseCard({ course }) {
  const { title, duration, rating, author, imgURL } = course;
  return (
    <div class="w-[270px] bg-[#EEF5FF] rounded-2xl shadow p-6 flex flex-col gap-5 items-start text-right">
      <img src={imgURL} alt="Course" class=" object-cover rounded-xl" />

      <h3 class="text-[#1450A3] text-xl">{title}</h3>

      <div class="text-sm text-gray-600 flex justify-between w-full">
        <span>{duration} ساعت</span>
        <span class="flex items-center gap-1">
          <img src="/img/admin/merged.png" alt="Star" />
          {rating}
        </span>
      </div>

      <p class="text-2xl font-bold text-[#57626D]">{author}</p>

      <button class="bg-[#1450A3] w-full text-white py-2 rounded-lg hover:bg-[#1e447a] transition-clors duration-300">
        مشاهده اطلاعات
      </button>
    </div>
  );
}

export default CourseCard;
