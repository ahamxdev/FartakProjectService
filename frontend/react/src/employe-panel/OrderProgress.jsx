const accordionData = [
  {
    id: 0,
    title: "فاز 1 ",
    subTitle: "تحلیل و طراحی",
    tasks: [
      { lable: "جسله با کارفرما برای تعیین نیاز مندی ها ", isDone: true },
      { lable: "تحلیل بازار و رقبا", isDone: true },
      {
        lable:
          "تعیین ویژگی‌های کلیدی (ثبت‌نام، منو غذا، سبد خرید، پرداخت آنلاین)",
        isDone: true,
      },
      {
        lable:
          "طراحی وایرفریم صفحات اصلی (Home, منو، صفحه سفارش، داشبورد کاربر)",
        isDone: true,
      },
      {
        lable: "طراحی پایگاه داده (ERD ساده: کاربر، غذا، سفارش، پرداخت)",
        isDone: true,
      },
      {
        lable: "تعیین تکنولوژی‌ها (مثلاً: Next.js + Node.js + MongoDB)  ",
        isDone: true,
      },
    ],
    isActive: true,
  },
  {
    id: 1,
    title: "فاز 2 ",
    subTitle: "توسعه اولیه",
    tasks: [
      {
        lable: "ساخت ساختار پروژه (Frontend + Backend جدا یا مونو؟)",
        isDone: true,
      },
      { lable: "پیاده‌سازی ثبت‌نام/ورود کاربران", isDone: true },
      { lable: "ساخت صفحه منوی غذا و نمایش دسته‌بندی‌ها", isDone: true },
      { lable: "اضافه کردن قابلیت اضافه به سبد خرید", isDone: true },
      { lable: "ایجاد امکان ثبت سفارش", isDone: true },
      { lable: "توسعه API برای مدیریت غذا و سفارش‌ها", isDone: false },
      { lable: "تست واحد (Unit Test) روی بخش‌های حساس  ", isDone: false },
    ],
    isActive: true,
  },
  {
    id: 2,
    title: "فاز 3",
    subTitle: "تست و بهینه‌سازی",
    tasks: [
      {
        lable: "تست دستی تمامی سناریوها (ورود، ثبت سفارش، پرداخت)",
        isDone: false,
      },
      {
        lable: "تست امنیتی (بررسی آسیب‌پذیری فرم‌ها، SQL Injection و غیره)",
        isDone: false,
      },
      {
        lable:
          "بهینه‌سازی سرعت بارگذاری صفحات (Lazy Loading, Optimization Images)",
        isDone: false,
      },
      { lable: "تست ریسپانسیو روی موبایل و دسکتاپ", isDone: false },
      { lable: "تست چند مرورگر (Chrome, Firefox, Safari)", isDone: false },
      { lable: "دریافت بازخورد اولیه از کاربران محدود", isDone: false },
    ],
    isActive: false,
  },
  {
    id: 3,
    title: "فاز 4",
    subTitle: "استقرار و پشتیبانی",
    tasks: [
      { lable: "آماده‌سازی هاست و دامنه", isDone: false },
      { lable: "استقرار سرور Backend و Frontend", isDone: false },
      { lable: "تنظیم SSL (https)", isDone: false },
      { lable: "مانیتورینگ سرور و لاگ خطاها", isDone: false },
      {
        lable: "ایجاد مستندات پروژه (Docs برای توسعه‌دهندگان بعدی)",
        isDone: false,
      },
      {
        lable: "پشتیبانی اولیه (مثلاً رفع باگ‌های ۳۰ روز اول رایگان)",
        isDone: false,
      },
      { lable: "دریافت فیدبک برای نسخه‌های آینده", isDone: false },
    ],
    isActive: false,
  },
];
const OrderProgress = () => {
  return (
    <>
      <div class="accordion">
        <input type="checkbox" id="section1" />
        <label htmlFor="section1" className="container-effects">
          <span>سفارش شماره 8 : وبسایت سفارش آنلاین غذا</span>
          <div>
            <span>درصد پیشرفت سفارش 42%</span>
            <img src="/img/employer/arrow.png" alt="arrow" className="arrow" />
          </div>
        </label>
        <div class="content">
          <div className="content-container">
            {accordionData.map((data) => (
              <div
                key={data.id}
                className="accordion-card container-effects"
                style={{ opacity: `${data.isActive ? "100%" : "40%"}` }}
              >
                <h3>{data.title}</h3>
                <span>{data.subTitle}</span>
                <ul>
                  {data.tasks.map((task, index) => (
                    <li key={index}>
                      {task.isDone ? (
                        <img
                          className="inline"
                          src="/img/employer/checked.png"
                          alt="Done"
                        />
                      ) : (
                        <img
                          className="inline"
                          src="/img/employer/unchecked.png"
                          alt="Undone"
                        />
                      )}{" "}
                      <span>{task.lable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="accordion">
        <input type="checkbox" id="section2" />
        <label for="section2" className="container-effects">
          <span>سفارش شماره 8 : وبسایت سفارش آنلاین غذا</span>
          <div>
            <span>درصد پیشرفت سفارش 42%</span>
            <img src="/img/employer/arrow.png" alt="arrow" className="arrow" />
          </div>
        </label>
        <div class="content">
          <div className="content-container">
            {accordionData.map((data) => (
              <div
                key={data.id}
                className="accordion-card container-effects"
                style={{ opacity: `${data.isActive ? "100%" : "40%"}` }}
              >
                <h3>{data.title}</h3>
                <span>{data.subTitle}</span>
                <ul>
                  {data.tasks.map((task, index) => (
                    <li key={index}>
                      {task.isDone ? (
                        <img
                          className="inline"
                          src="/img/employer/checked.png"
                          alt="Done"
                        />
                      ) : (
                        <img
                          className="inline"
                          src="/img/employer/unchecked.png"
                          alt="Undone"
                        />
                      )}{" "}
                      <span>{task.lable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderProgress;
