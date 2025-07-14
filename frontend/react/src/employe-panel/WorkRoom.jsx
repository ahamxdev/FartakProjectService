import "./styles/work-room.css";

const projects = [
  {
    id: 0,
    status: "پروژه فعال",
    name: "پروژه عناصر پروانه",
    faze: "دوم",
    progress: 32,
  },
  {
    id: 1,
    status: "پروژه غیر فعال",
    name: "پروژه ساختمان من و تو",
    faze: "سوم",
    progress: 80,
  },
  {
    id: 2,
    status: "پروژه غیر فعال",
    name: "پروژه ساختمان من و تو",
    faze: "چهارم",
    progress: 40,
  },
];
const notifications = [
  {
    id: 0,
    message: "مهلت پرداخت برای پروژه زبان در حال اتمام است.",
    isRead: false,
  },
  {
    id: 0,
    message: "فرصت ویژه: تخفیف روی پروژه‌های بعدی شما!",
    isRead: false,
  },
  {
    id: 0,
    message: "یک فایل جدید به پروژه شما اضافه شد.",
    isRead: false,
  },
  {
    id: 0,
    message: "یک فایل جدید به پروژه شما اضافه شد.",
    isRead: false,
  },
];
const WorkRoom = () => {
  return (
    <div className="work-room">
      <div className="work-room__right container-effects">
        <h2>همه پروژه ها</h2>
        <table>
          <tr className="workroom-th">
            <th>وضعیت</th>
            <th>نام</th>
            <th>فاز</th>
            <th>پیشرفت</th>
          </tr>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.status}</td>
              <td>{project.name}</td>
              <td>{project.faze}</td>
              <td>{project.progress}% پیشرفت</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="work-room__left">
        <div className="work-room-notifs container-effects">
          <h2> جدید ترین اطلاعیه ها</h2>
          <div className="notifs">
            {notifications.map((notif) => (
              <div key={notif.id} className="notification container-effects">
                {notif.message}
                {!notif.isRead && <span className="is-unread-notif"></span>}
              </div>
            ))}
          </div>
        </div>
        <div className="work-room-redirections">
          <div>پیام با مدیر عامل</div>
          <div>پیام با مدیر لاین ها</div>
        </div>
      </div>
    </div>
  );
};

export default WorkRoom;
