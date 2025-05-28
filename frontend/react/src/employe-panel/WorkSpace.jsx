import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header--container">
        <div className="header__left">
          <div className="header--dashobord">
            <img src="../img/Link → logo.png" alt="لوگو" />
            <p className="header__right--para"> |</p>
            <img className="header__right--img" src="../img/img-person.jpg" alt="person" />
            <div className="header--dashbord-p-home">
              <p>پروفایل شخصی</p>
            </div>
          </div>

          <div className="search-container">
            <button className="add-project">
              <img src="../img/plus.svg" alt="add-project" />
            </button>
            <p className="add-project-para">افزودن پروژه</p>
            <input type="text" className="search-input-home" placeholder="دنبال چه چیزی میگردید؟" />
            <img src="../img/search 01.svg" className="search-icon-home" alt="search" />
          </div>

          <p className="header__right--para"> |</p>
          <img className="header__left--img" src="../img/setting.svg" alt="تنظیمات" />
          <p className="header__right--para"> |</p>
          <img className="header__left--img" src="../img/notification 03.svg" alt="اطلاعیه‌ها" />
          <p className="header__right--para">|</p>
          <img className="header__left--img" src="../img/out.svg" alt="خروج" />
        </div>
      </div>
    </header>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar-Room">
      <ul>
        {[
           { icon: "../img/لوگو/کارفرما/بستن سایدبار.svg", label: "بستن سایدبار", path: "/#" },
           { icon: "../img/لوگو/کارفرما/خانه.svg", label: "خانه", path: "/Home" },
           { icon: "../img/لوگو/کارفرما/ثبت سفارش.svg", label: "ثبت سفارش", path: "/PlaceOrder" },
           { icon: "../img/لوگو/کارفرما/سفارش ها.svg", label: "سفارش ها", path: "/Orders"},
           { icon: "../img/لوگو/کارفرما/اتاق کار.svg", label: "اتاق کار", path: "/Room" },
           { icon: "../img/لوگو/کارفرما/درصد پیشرفت سفارش.svg", label: "درصد پیشرفت سفارش", path: "/OrderProgress" },
           { icon: "../img/لوگو/کارفرما/اطلاعیه ها.svg", label: "اطلاعیه ها", path: "/Notification" },
           { icon: "../img/لوگو/کارفرما/صفحه چت و پیام ها.svg", label: "صفحه چت و پیام ها", path: "/Chat" },
           { icon: "../img/لوگو/کارفرما/کیف پول و امور مالی.svg", label: "کیف پول و امور مالیاتی", path: "/BagMoney"},
           { icon: "../img/لوگو/کارفرما/تنظیمات پنل کارفرما.svg", label: "تنظیمات  کارفرما", path: "/Money" },
           { icon: "../img/لوگو/کارفرما/جستجو.svg", label: "جستجو", path: "/Search" },
           { icon: "../img/لوگو/کارفرما/مجری های سفارش.svg", label: "مجری های سفارش", path: "/Workers" },
           { icon: "../img/لوگو/کارفرما/ارتباط با مدیرعامل.svg", label: "ارتباط با مدیرعامل", path: "/" },
        ].map(([img, label], idx) => (
          <div className="sidebar--order" key={idx}>
            <img src={`../img/${img}`} alt="" />
            <li>{label}</li>
          </div>
        ))}
      </ul>
    </aside>
  );
};

const MainContent = () => {
  return (
    <main className="body--empty--room--container">
      <div className="body--empty-room-work">
        <div className="body--empty-right">
          <h5 className="body--empty--para">همه پروژه ها</h5>
          <div className="body--empty-right-title">
            <p >وضعیت</p>
            <p>نام</p>
            <p>فاز</p>
            <p>پیشرفت</p>
          </div>

          {[1, 2].map((_, idx) => (
            <div key={idx}>
              <div className="body--empty-right-item">
                <p>پروژه فعال</p>
                <p>پروژه عناصر پروانه</p>
                <p>فاز دوم</p>
                <p>32 در صد پیشرفت</p>
              </div>
              <hr style={{ width: "95%", marginRight: "13px" ,marginTop:"15px"}} />
            </div>
          ))}
        </div>

        <div className="body--empty-left-room">
          <div className="body--empty-left-room-items">
            <h5 className="body--empty--para">جدید ترین اطلاعیه ها</h5>
            {[
              'مهلت پرداخت برای پروژه زبان در حال اتمام است.',
              'فرصت ویژه: تخفیف روی پروژه‌های بعدی شما!',
              ' یک فایل جدید به پروژه شما اضافه خواهد شد.'
            ].map((text, idx) => (
              <div className="body__empty-left-room-news" key={idx}>
                <p>{text}</p>
                <div className="body__empty-left-notification"></div>
              </div>
            ))}
          </div>

          <div className="body__empty--left-bg">
            <p>پیام با مدیر عامل</p>
            <img className="body__empty--left--img" src="../img/Group.png" alt="#" />
          </div>
          <div className="body__empty--left-bg">
            <p>پیام با مدیر لاین ها</p>
            <img className="body__empty--left--img" src="../img/Group.png" alt="#" />
          </div>
        </div>
      </div>
    </main>
  );
};

const App = () => {
  return (
    <div className="app-layout">
      <Header />
      <div className="app-body">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
