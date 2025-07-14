import "./styles/order-executors.css";

const executorProfiles = [
  {
    id: 0,
    name: "علی علوی",
    img: "/img/img-person.jpg",
    skill: "برنامه نویس ",
  },
  {
    id: 1,
    name: "علی علوی",
    img: "/img/img-person.jpg",
    skill: "برنامه نویس ",
  },
  {
    id: 2,
    name: "علی علوی",
    img: "/img/img-person.jpg",
    skill: "برنامه نویس ",
  },
  {
    id: 3,
    name: "علی علوی",
    img: "/img/img-person.jpg",
    skill: "برنامه نویس ",
  },
  {
    id: 4,
    name: "علی علوی",
    img: "/img/img-person.jpg",
    skill: "برنامه نویس ",
  },
  {
    id: 5,
    name: "علی علوی",
    img: "/img/img-person.jpg",
    skill: "برنامه نویس ",
  },
  {
    id: 6,
    name: "علی علوی",
    img: "/img/img-person.jpg",
    skill: "برنامه نویس ",
  },
  {
    id: 7,
    name: "علی علوی",
    img: "/img/img-person.jpg",
    skill: "برنامه نویس ",
  },
  {
    id: 8,
    name: "علی علوی",
    img: "/img/img-person.jpg",
    skill: "برنامه نویس ",
  },
  {
    id: 9,
    name: "علی علوی",
    img: "/img/img-person.jpg",
    skill: "برنامه نویس ",
  },
  {
    id: 10,
    name: "علی علوی",
    img: "/img/img-person.jpg",
    skill: "برنامه نویس ",
  },
  {
    id: 11,
    name: "علی علوی",
    img: "/img/img-person.jpg",
    skill: "برنامه نویس ",
  },
];
const OrderExecutors = () => {
  return (
    <div className="order-executor">
      <div className="executor-right container-effects">
        <h2 className="executors-title">جستجو مدیر لاین</h2>
        <form className="executor-form">
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="name">نام:</label>
              <input
                className="container-effects"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="skill">مهارت:</label>
              <input
                className="container-effects"
                type="text"
                id="skill"
                name="skill"
              />
            </div>
          </div>
          <div className="form-btn">
            <button className="btn-secondary">جستجو</button>
          </div>
        </form>
        <table className="rounded-table">
          <tr>
            <th>نام</th>
            <th>مهارت</th>
          </tr>
        </table>
      </div>
      <div className="executor-left container-effects">
        <h2 className="executors-title">برنامه نویسان و مدیران لاین ها</h2>
        <div className="executor-profiles">
          {executorProfiles.map((executor) => (
            <div className="executor-profile" key={executor.id}>
              <img
                className="executor-img"
                src={executor.img}
                alt={executor.name}
              />
              <div className="executor-info">
                <h3 className="executor-name">{executor.name}</h3>
                <span className="executor-skill">{executor.skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderExecutors;
