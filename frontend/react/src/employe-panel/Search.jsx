import "./styles/search.css";
const popularServices = [
  {
    id: 0,
    title: "طراحی وبسایت",
  },
  {
    id: 1,
    title: "طراحی لوگو",
  },
  {
    id: 2,
    title: "برنامه نویسی و توسعه نرم افزار",
  },
  {
    id: 3,
    title: "تولید محتوا",
  },
  {
    id: 4,
    title: "سئو SEO",
  },
  {
    id: 5,
    title: "طراحی رابط کاربری UI/UX",
  },
];
const Search = () => {
  return (
    <div className="container-effects search-container">
      <form className="search-form">
        <input
          type="text"
          className="container-effects"
          placeholder="جستجو مهارت، پروژه و متخصص ..."
        />
        <button>
          <img src="/img/employer/search-icon.png" alt="Search Icon" />
        </button>
      </form>
      <div className="search-suggestions">
        <h2 className="search-suggestions-title">
          <img src="/img/employer/announcement.png" alt="Announcement icon" />{" "}
          سرویس های پرطرفدار
        </h2>
        <ul>
          {popularServices.map((service) => (
            <li key={service.id}>{service.title}</li>
          ))}
        </ul>
      </div>
      <div className="search-suggestions">
        <h2 className="search-suggestions-title">
          <img src="/img/employer/hourglass-end.png" alt="Announcement icon" />{" "}
          جستجو های اخیر
        </h2>
        <ul>
          <li>طراحی وبسایت</li>
        </ul>
      </div>
    </div>
  );
};
export default Search;
