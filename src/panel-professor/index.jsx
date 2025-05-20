import React from 'react';


const DashboardLayout = () => {
  return (
    <div>
      <header>
        <div className="header--container">
          <div className="header__left">
            <div className="header--dashobord">
              <img src="img/Link → logo.png" alt="لوگو" />
              <div className="header--dashbord-p">
                <p>امیر حسین شادمان</p>
                <img src="img/setting.svg" alt="تنظیمات" />
              </div>
            </div>

            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="دنبال چه چیزی میگردید؟"
              />
              <img src="img/search 01.svg" className="search-icon" alt="جستجو" />
            </div>

            <p className="header__right--para"> |</p>
            <img className="header__left--img" src="img/setting.svg" alt="تنظیمات" />
            <p className="header__right--para"> |</p>
            <img className="header__left--img" src="img/notification 03.svg" alt="اعلان" />
            <p className="header__right--para">|</p>
            <img className="header__left--img" src="img/out.svg" alt="خروج" />
          </div>
        </div>
      </header>

      <div className="container">
        <div className="sidebar">
          <ul>
            {[
              'بستن سایدبار',
              'خانه',
              'دوره های خریداری شده',
              'دوره های آنلاین',
              'کلاس های من',
              'مدیریت درخواست ها',
              'کیف پول',
              'کد تخفیف',
              'تیکت پشتیبانی',
              'سوالات متداول'
            ].map((item, index) => (
              <div className="sidebar--order" key={index}>
                <img src="img/search%2001.svg" alt="" />
                <li>{item}</li>
              </div>
            ))}
          </ul>

          <div className="body--empty">
            {/* اینجا می‌توانید محتوای اصلی صفحه را اضافه کنید */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
