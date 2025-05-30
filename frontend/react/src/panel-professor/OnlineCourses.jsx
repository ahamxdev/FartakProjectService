import React from "react";


const DashboardLayout = () => {
  return (
    <div>
      <header>
        <div className="header--container">
          <div className="header__left">
            <div className="header--dashobord">
              <img src="img/Link → logo.png" alt="" />
              <div className="header--dashbord-p">
                <p>امیر حسین شادمان</p>
                <img src="img/setting.svg" alt="" />
              </div>
            </div>
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="دنبال چه چیزی میگردید؟"
              />
              <img src="img/search 01.svg" className="search-icon" alt="" />
            </div>
            <p className="header__right--para"> |</p>
            <img className="header__left--img" src="img/setting.svg" alt="" />
            <p className="header__right--para"> |</p>
            <img className="header__left--img" src="img/notification 03.svg" alt="" />
            <p className="header__right--para">|</p>
            <img className="header__left--img" src="img/out.svg" alt="" />
          </div>
        </div>
      </header>

      <div className="container">
        <div className="sidebar">
          <ul>
          {[
     { icon: "../img/لوگو/کارفرما/بستن سایدبار.svg",  path: "/#" },
     { icon: "../img/لوگو/کارفرما/خانه.svg",  path: "/Home" },
     { icon: "../img/لوگو/پنل دانشجو/دوره های خریداری شده.svg",path: "/PurchasedCourses" },
     { icon: "../img/لوگو/پنل دانشجو/دوره های آنلاین.svg", path: "/OnlineCourses"},
     { icon: "../img/لوگو/پنل دانشجو/کلاس های من.svg", path: "/MyClasses" },
     { icon: "../img/لوگو/پنل دانشجو/مدریت درخواست ها.svg",  path: "/RequestManagement" },
     { icon: "../img/لوگو/پنل دانشجو/کیف پول.svg", path: "/Wallet" },
     { icon: "../img/لوگو/پنل دانشجو/کد تخفیف.svg",  path: "/DiscountCode" },
     { icon: "../img/لوگو/پنل دانشجو/تیکت پشتیبانی.svg",  path: "/SupportTicket"},
     { icon: "../img/لوگو/پنل دانشجو/سوالات متداول.svg", path: "/FAQ" },
            ].map((item, index) => (
              <div className="sidebar--order" key={index}>
                <img src={`../img/${item.icon}`} alt="" />
                <li>{item.label}</li>
              </div>
            ))}
          </ul>

          <div className="body--empty">
            <div className="body__live--class">
              <button className="body__live--class-icon"></button>
              <p>
                پخش زنده کلاس کنکور در حال برگزاری است <b style={{ cursor: "pointer" }}>کلیک</b> کنید
              </p>
            </div>

            <p className="bode--p">
              <b>دوره های در حال برگزاری</b>
            </p>

            <div className="body__info">
              <p >نام دوره</p>
              <p >نام استاد</p>
              <p>مدت جلسه</p>
              <p>تعداد جلسات برگزار شده</p>
              <p>آمار کلاس ها</p>
              <p>لینک کلاس</p>
              <p>تعداد جلسات</p>
            </div>

            <div className="body__information">
              <p>ریاضیات دوره <br /> دوم دبیرستان</p>
              <p>مهرداد طاهرخانی</p>
              <p>100 ساعت</p>
              <p>30 جلسه</p>
              <p>نمایش بیشتر <br /> آمار کلاس ها</p>
              <p>پخش زنده <br /> فعال است</p>
              <p >نمایش ❤</p>
            </div>

            <div className="body__information2">
              <div className="information-data-2">
                <p>ریاضیات دوره <br /> اول دبیرستان</p>
                <p>مهرداد طاهرخانی</p>
                <p>8 ساعت</p>
                <p>4 جلسه</p>
                <p>نمایش بیشتر <br /> آمار کلاس ها</p>
                <p>پخش زنده <br /> فعال است</p>
                <p style={{ marginLeft: "10px" }}>نمایش ❤</p>
              </div>
              <div className="information-data">
                <p>جلسه</p>
                <p>مدت زمان</p>
                <p>لینک</p>
              </div>

              {[1, 2, 3, 4].map((session) => (
                <React.Fragment key={session}>
                  <div className="information-data-time">
                    <p>جلسه شماره {session}</p>
                    <p>1 ساعت و 25 دقسقه</p>
                    <p>بازپخش کلاس</p>
                  </div>
                  <hr className="information-data-dashed" />
                </React.Fragment>
              ))}

              <p style={{ color: "rgba(36, 98, 165, 1)" }}>
                جسله بعدی کلاس در تاریخ 25 ادریبهشت 1404 ساعت 8 شب برگزار میشود
              </p>
            </div>

            <p className="bode--p" style={{ marginTop: "25px" }}>
              <b>دوره های آنلاین به پایان رسیده</b>
            </p>

            <div className="body__info">
              <p style={{ marginLeft: "80px" }}>نام دوره</p>
              <p style={{ marginLeft: "20px" }}>نام استاد</p>
              <p>مدت جلسه</p>
              <p>تعداد جلسات برگزار شده</p>
              <p>آمار کلاس ها</p>
              <p>تعداد جلسات</p>
            </div>

            <div className="body__information">
              <p>ریاضیات دوره دوم دبیرستان</p>
              <p>مهرداد طاهرخانی</p>
              <p>100 ساعت</p>
              <p>30 جلسه</p>
              <p>نمایش بیشتر <br /> آمار کلاس ها</p>
              <p style={{ marginLeft: "10px" }}>نمایش ❤</p>
            </div>

            <div className="body__information2">
              <div className="information-data-2">
                <p>ریاضیات دوره اول دبیرستان</p>
                <p>مهرداد طاهرخانی</p>
                <p>8 ساعت</p>
                <p>4 جلسه</p>
                <p>نمایش بیشتر <br /> آمار کلاس ها</p>
                <p style={{ marginLeft: "10px" }}>نمایش ❤</p>
              </div>
              <div className="information-data">
                <p>جلسه</p>
                <p>مدت زمان</p>
                <p>لینک</p>
              </div>

              {[1, 2, 3, 4, 5].map((session) => (
                <React.Fragment key={session}>
                  <div className="information-data-time">
                    <p>جلسه شماره {session}</p>
                    <p>1 ساعت و 25 دقسقه</p>
                    <p>بازپخش کلاس</p>
                  </div>
                  <hr className="information-data-dashed" />
                </React.Fragment>
              ))}

              <p style={{ color: "rgba(36, 98, 165, 1)" }}>
                جسله بعدی کلاس در تاریخ 25 ادریبهشت 1404 ساعت 8 شب برگزار میشود
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
