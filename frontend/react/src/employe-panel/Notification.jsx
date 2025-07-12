import "../styles/notifications.css";

const notifications = [
  {
    id: 0,
    message: "مهلت پرداخت برای پروژه زبان در حال اتمام است.",
    isRead: false,
  },
  {
    id: 1,
    message: "فرصت ویژه: تخفیف روی پروژه‌های بعدی شما!",
    isRead: false,
  },
  {
    id: 2,
    message: "یک فایل جدید به پروژه شما اضافه شد.",
    isRead: false,
  },
  {
    id: 3,
    message: "مدیر عامل به پیام شما پاسخ داد.",
    isRead: true,
  },
  {
    id: 4,
    message: "پروژه شما به پایان رسید؛ لطفاً نظر خود را ثبت کنید!",
    isRead: true,
  },
  {
    id: 5,
    message: "پرداخت شما با موفقیت تایید شد.",
    isRead: true,
  },
  {
    id: 6,
    message: "وضعیت پروژه شما به «در حال انجام» تغییر یافت.",
    isRead: true,
  },
  {
    id: 7,
    message: "پیام جدیدی از لیدر پروژه دریافت کرده‌اید.",
    isRead: true,
  },
  {
    id: 8,
    message: "یک فریلنسر جدید برای پروژه شما پیشنهاد ارسال کرده است.",
    isRead: true,
  },
  {
    id: 9,
    message: "پروژه جدید شما با موفقیت ایجاد شد!",
    isRead: true,
  },
];
const Notification = () => {
  return (
    <div className="notifications">
      <div className="notifications-container">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification container-effects">
            {notification.message}
            {!notification.isRead && <span className="is-unread-notif"></span>}
          </div>
        ))}
      </div>
      <div className="notification-details container-effects"></div>
    </div>
  );
};

export default Notification;
