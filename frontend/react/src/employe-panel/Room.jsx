import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header--container">
        <div className="header__left">
          <div className="header--dashobord">
            <img src="../img/Link → logo.png" alt="" />
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
          <img className="header__left--img" src="../img/setting.svg" alt="" />
          <p className="header__right--para"> |</p>
          <img className="header__left--img" src="../img/notification 03.svg" alt="" />
          <p className="header__right--para">|</p>
          <img className="header__left--img" src="../img/out.svg" alt="" />
        </div>
      </div>
    </header>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <div className="sidebar--order">
          <img src="../img/Vector.svg" alt="" />
          <li>بستن سایدبار</li>
        </div>

        <div className="sidebar--order">
          <img src="../img/search%2001.svg" alt="" />
          <li>خانه</li>
        </div>

        <div className="sidebar--order">
          <img src="../img/Vecto1r.svg" alt="" />
          <li> ثبت سفارش</li>
        </div>

        <div className="sidebar--order">
          <img src="../img/search%2001.svg" alt="" />
          <li>سفارش ها</li>
        </div>
        <div className="sidebar--order">
          <img src="../img/search%2001.svg" alt="" />
          <li>اتاق کار</li>
        </div>
        <div className="sidebar--order">
          <img src="../img/search%2001.svg" alt="" />
          <li>  درصد پیشرفت سفارش</li>
        </div>
        <div className="sidebar--order">
          <img src="../img/search%2001.svg" alt="" />
          <li> اطلاعیه ها</li>
        </div>
        <div className="sidebar--order">
          <img src="../img/search%2001.svg" alt="" />
          <li> صفحه چت و پیام ها</li>
        </div>
        <div className="sidebar--order">
          <img src="../img/search%2001.svg" alt="" />
          <li> کیف پول و امور مالیاتی</li>
        </div>
        <div className="sidebar--order">
          <img src="../img/search%2001.svg" alt="" />
          <li>کیف پول کارفرما</li>
        </div>
        <div className="sidebar--order">
          <img src="../img/search%2001.svg" alt="" />
          <li>  جستجو</li>
        </div>
        <div className="sidebar--order">
          <img src="../img/search%2001.svg" alt="" />
          <li> مجری های سفارش</li>
        </div>
        <div className="sidebar--order">
          <img src="../img/search%2001.svg" alt="" />
          <li>ارتباط با مدیرعامل</li>
        </div>
      </ul>

      <div className="body--empty--room--container">
        <div className="body--empty-room-work">
          <div className="body--empty-right">
            <h5 className="body--empty--para">همه پروژه ها</h5>
            <div className="body--empty-right-title">
              <p>وضعیت</p>
              <p>نام</p>
              <p>فاز</p>
              <p>پیشرفت</p>
            </div>

            <div className="body--empty-right-item">
              <p>پروژه فعال</p>
              <p>پروژه عناصر پروانه</p>
              <p>فاز دوم</p>
              <p>32 در صد پیشرفت</p>
            </div>
            <hr style={{ width: "95%", marginRight: "13px" }} />
            <div className="body--empty-right-item">
              <p>پروژه فعال</p>
              <p>پروژه عناصر پروانه</p>
              <p>فاز دوم</p>
              <p>32 در صد پیشرفت</p>
            </div>
          </div>

          <div className="body--empty-left">
            <div className="body--empty-left-items">
              <h5 className="body--empty--para">جدید ترین اطلاعیه ها</h5>
              <div className="body__empty-left-news">
                <p>مهلت پرداخت برای پروژه زبان در حال اتمام است.</p>
                <div className="body__empty-left-notification"></div>
              </div>
              <div className="body__empty-left-news">
                <p>فرصت ویژه: تخفیف روی پروژه‌های بعدی شما!</p>
                <div className="body__empty-left-notification"></div>
              </div>
              <div className="body__empty-left-news">
                <p>یک فایل جدید به پروژه شما اضافه شد.</p>
                <div className="body__empty-left-notification"></div>
              </div>
            </div>
            <div className="body__empty--left-bg">
              <p>پیام با مدیر عامل</p>
              <img className="body__empty--left--img" src="../img/Group.png" alt="" />
            </div>
            <div className="body__empty--left-bg">
              <p>پیام با مدیر لاین ها</p>
              <img className="body__empty--left--img" src="../img/Group.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
    </div>
  );
};

export default App;
