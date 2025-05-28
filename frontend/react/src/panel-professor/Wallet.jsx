import React from "react";
import { Link } from "react-router-dom";
function Dashboard() {
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
          <ul className="sidebar__ul">
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
            <div className="body--empty-title">
              <p>
                کلاس آنلاین در حال برگزاری است لطفا <b>کلیک </b> وارد شوید
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "start",
                justifyContent: "space-between",
              }}
            >
              <div className="body__empty--left--container">
                <div className="body__empty--left">
                  <p className="body__empty--left--p1">کیف پول</p>
                  <p className="body__empty--left--p2">2,500,000 تومان</p>
                </div>
                <div className="body__empty--left-card">
                  <div className="body__empty--left-box">
                    <div className="body__empty--left-box1">
                      <p className="body__empty--left-box-p">درخواست های تدریس </p>
                    </div>
                    <p className="body__empty--left-box-p">
                      کلاس خصوصی ریاضی گسسته در انتظار تایید استاد امامی است
                    </p>
                  </div>
                  <div className="body__empty--left-box">
                    <div className="body__empty--left-box2">
                      <p className="body__empty--left-box-p">تخفیف مخصوص شما</p>
                    </div>
                    <img
                      className="body__empty--left-box2-img"
                      src="img/Layer%201%202.png"
                      alt=""
                    />
                  </div>
                  <div className="body__empty--left-box">
                    <div className="body__empty--left-box3">
                      <p className="body__empty--left-box-p">نزدیک ترین جلسه بعدی</p>
                    </div>
                    <p className="body__empty--left-box-p">
                      دوره آماده سازی برای کنکور 1405 در 3 ماه
                      <br />
                      فردا چهارشنبه 1404/12/20 ساعت 9 شب
                    </p>
                  </div>
                </div>
              </div>

              <div className="body__empty--right">
                <div className="body__empty--right-r">
                  <p>دوره افتخاری مخصوص شما</p>
                  <p>1 جلسه رایگان از دوره 0 تا 100 کنکور با امید باقری عضو انجمن علمی دانشگاه تهران</p>
                  <div className="body__empty--right-box">
                    <p>کد تخفیف</p>
                    <p>RT4578D5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
