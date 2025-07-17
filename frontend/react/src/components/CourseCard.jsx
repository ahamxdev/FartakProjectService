function CourseCard({ course }) {
  const { title, duration, rating, authur, imgURL } = course;
  return (
    <div className="flex flex-col gap-3 p-3 bg-[#EEF5FF]">
      <img src={imgURL} alt={title} />
      <h3>{title}</h3>
      <span>{duration}</span>
      <span>{rating}</span>
      <p>{authur}</p>
      <button>مشاهده اطلاعات</button>
    </div>
  );
}

export default CourseCard;
