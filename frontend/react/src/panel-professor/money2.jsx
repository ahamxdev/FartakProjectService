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
            <img
              className="header__left--img"
              src="img/setting.svg"
              alt=""
            />
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

      <div className="container " style={{marginRight:"-20rem"}}>
        <div className="sidebar-request" >
          <ul style={{marginRight:"150px",width:"100px"}}>
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

          <div className="body--empty-moneyTwo">
            <div className="body--empty-money">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "start",
                  justifyContent: "space-between",
                }}
              >
                <div className="body__empty--left--container3">
                  <div className="body__empty--left">
                    <p className="body__empty--left--p1">کیف پول</p>
                    <p className="body__empty--left--p2">2,500,000 تومان</p>
                  </div>

                  <div className="body__empty--left--container2">
                    <div className="body__empty--left">
                      <p className="body__empty--left--p1">
                        در انتظار تایید برای یرداشت
                      </p>
                      <p className="body__empty--left--p2">2,000,000 تومان</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="body--empty-left--container2-btn">
                <button className="container__empty--btn2">افزایش موجودی</button>
                <button className="container__empty--btn1">درخواست برداشت وجه</button>
              </div>

              <p className="body__info--para">قسط های پیش رو:</p>
              <div className="body__info">
                <p style={{ marginRight: 65 }}>تاریخ قسط</p>
                <p>مبلغ قسط</p>
                <p>بابت دوره</p>
                <p style={{ marginRight: 100 }}>وضیعت</p>
              </div>

              <div className="body__information-money">
                <p>1404/02/15</p>
                <p>1200000</p>
                <p>
                  دوره آمادگی برای
                  <br />
                  امتحانات پایانی کلاس 11
                </p>
                <p style={{ color: "lawngreen" }}>پرداخت شد</p>
              </div>
              <hr className="body__money-dashed" />
              <div className="body__information-money">
                <p>1404/02/15</p>
                <p>1200000</p>
                <p>
                  دوره آمادگی برای
                  <br />
                  امتحانات پایانی کلاس 11
                </p>
                <p style={{ color: "lawngreen" }}>پرداخت شد</p>
              </div>

              <p className="body__info--para">تاریخچه تراکنش ها:</p>
              <div className="body__info">
                <p style={{ marginRight: 65 }}>تاریخ قسط</p>
                <p>مبلغ قسط</p>
                <p>بابت دوره</p>
                <p style={{ marginRight: 100 }}>وضیعت</p>
              </div>

              <div className="body__information-money">
                <p>1404/02/15</p>
                <p>1200000</p>
                <p>
                  دوره آمادگی برای
                  <br />
                  امتحانات پایانی کلاس 11
                </p>
                <p style={{ color: "lawngreen" }}>پرداخت شد</p>
              </div>
              <hr className="body__money-dashed" />
              <div className="body__information-money">
                <p>1404/02/15</p>
                <p>1200000</p>
                <p>
                  دوره آمادگی برای
                  <br />
                  امتحانات پایانی کلاس 11
                </p>
                <p style={{ color: "lawngreen" }}>پرداخت شد</p>
              </div>
              <hr className="body__money-dashed" />
              <div className="body__information-money">
                <p>1404/02/15</p>
                <p>1200000</p>
                <p>
                  دوره آمادگی برای
                  <br />
                  امتحانات پایانی کلاس 11
                </p>
                <p style={{ color: "lawngreen" }}>پرداخت شد</p>
              </div>
              <hr className="body__money-dashed" />
              <div className="body__information-money">
                <p>1404/02/15</p>
                <p>1200000</p>
                <p>
                  دوره آمادگی برای
                  <br />
                  امتحانات پایانی کلاس 11
                </p>
                <p style={{ color: "lawngreen" }}>پرداخت شد</p>
              </div>
              <hr className="body__money-dashed" />
              <div className="body__information-money">
                <p>1404/02/15</p>
                <p>1200000</p>
                <p>
                  دوره آمادگی برای
                  <br />
                  امتحانات پایانی کلاس 11
                </p>
                <p style={{ color: "lawngreen" }}>پرداخت شد</p>
              </div>
              <hr className="body__money-dashed" />
              <div className="body__information-money">
                <p>1404/02/15</p>
                <p>1200000</p>
                <p>
                  دوره آمادگی برای
                  <br />
                  امتحانات پایانی کلاس 11
                </p>
                <p style={{ color: "lawngreen" }}>پرداخت شد</p>
              </div>
              <hr className="body__money-dashed" />
              <div className="body__information-money">
                <p>1404/02/15</p>
                <p>1200000</p>
                <p>
                  دوره آمادگی برای
                  <br />
                  امتحانات پایانی کلاس 11
                </p>
                <p style={{ color: "lawngreen" }}>پرداخت شد</p>
              </div>
              <hr className="body__money-dashed" />
              <div className="body__information-money">
                <p>1404/02/15</p>
                <p>1200000</p>
                <p>
                  دوره آمادگی برای
                  <br />
                  امتحانات پایانی کلاس 11
                </p>
                <p style={{ color: "lawngreen" }}>پرداخت شد</p>
              </div>
              <hr className="body__money-dashed" />
              <div className="body__information-money">
                <p>1404/02/15</p>
                <p>1200000</p>
                <p>
                  دوره آمادگی برای
                  <br />
                  امتحانات پایانی کلاس 11
                </p>
                <p style={{ color: "lawngreen" }}>پرداخت شد</p>
              </div>

              <div className="information__money--footer">
                <p>
                  شما به سقف بازدید تراکنش رسیدید برای دیدن باقی تراکنش ها در
                  قسمت تیکت پشتیبانی از بخش مالی درخواست رسید تراکنش ها را
                  انجام دهید
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
