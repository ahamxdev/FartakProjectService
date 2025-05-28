import React from "react";
import { Link } from "react-router-dom";

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
        <li key={index}>
          <Link to={item.path} className="sidebar--order">
            <img src={item.icon} alt={item.label} />
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
          </ul>

          <div className="body--empty">
            <div className="menu-left">
              <Link
                href="#"
                className="menu-left-items"
                style={{ border: "1px solid #c009d6" }}
              >
                ابتدایی
              </Link>
              <Link href="#" className="menu-left-items">
                دوره اول متوسطه
              </Link>
              <Link href="#" className="menu-left-items">
                دوره دوم متوسطه
              </Link>
              <Link href="#" className="menu-left-konkor">
                کنکور
              </Link>
              <Link href="#" className="menu-left-us">
                دانشگاه
              </Link>
              <Link href="#" className="menu-left-items-last">
                کسب و کار
              </Link>
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
                    <Link href="#" className="menu-left-us">
                      دانشگاه
                    </Link>
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
                    <Link href="#">مطالعه دوره</Link>
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
