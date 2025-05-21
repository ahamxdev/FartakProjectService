import React from "react";

const Dashboard = () => {
  return (
    <>
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
            <img
              className="header__left--img"
              src="img/notification 03.svg"
              alt=""
            />
            <p className="header__right--para">|</p>
            <img className="header__left--img" src="img/out.svg" alt="" />
          </div>
        </div>
      </header>

      <div className="container">
        <div className="sidebar">
          <ul>
            {[
              "بستن سایدبار",
              "خانه",
              "دوره های خریداری شده",
              "دوره های آنلاین",
              "کلاس های من",
              "مدیریت درخواست ها",
              "کیف پول",
              "کد تخفیف",
              "تیکت پشتیبانی",
              "سوالات متداول",
            ].map((item, index) => (
              <div className="sidebar--order" key={index}>
                <img src="img/search%2001.svg" alt="" />
                <li>{item}</li>
              </div>
            ))}
          </ul>

          <div className="body--empty">
            <div className="menu-left">
              <a
                href="#"
                className="menu-left-items"
                style={{ border: "1px solid #c009d6" }}
              >
                ابتدایی
              </a>
              <a href="#" className="menu-left-items">
                دوره اول متوسطه
              </a>
              <a href="#" className="menu-left-items">
                دوره دوم متوسطه
              </a>
              <a href="#" className="menu-left-konkor">
                کنکور
              </a>
              <a href="#" className="menu-left-us">
                دانشگاه
              </a>
              <a href="#" className="menu-left-items-last">
                کسب و کار
              </a>
            </div>

            <div className="container--courses">
              {[1, 2, 3].map((_, index) => (
                <div className="container--courses-content" key={index}>
                  <img
                    src="img/Rectangle%202715.png"
                    alt="image-courses"
                  />
                  <div className="container--courses-content2">
                    <img src="img/Instructor.png" alt="img" />
                    <p>امیرحسین بازیار</p>
                    <a href="#" className="menu-left-us">
                      دانشگاه
                    </a>
                  </div>
                  <p className="container--courses-content--p">
                    دوره طراحی UML برای درس <br />
                    مهندسی نرم افزار کارشناسی <br />
                    ناپیوسته حرفه ای نرم افزار
                  </p>
                  <p className="container--courses-content--p_light">
                    پیشرفت در مطالعه
                  </p>
                  <div className="container--courses-content__rang">
                    <div className="container--courses-content__rang2">
                      <p className="container--courses-content__rang-p">30%</p>
                    </div>
                  </div>
                  <button className="container--courses-content--btn">
                    <a href="#">مطالعه دوره</a>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
