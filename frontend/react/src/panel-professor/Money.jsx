import React from "react";

const WalletComponent = () => {
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

      <div className="container-money">
        <div className="sidebar-money">
          <ul className="sidebar__ul">
            <div className="sidebar--order">
              <img src="img/search%2001.svg" alt="" />
              {/* <li>بستن سایدبار</li> */}
            </div>

            <div className="sidebar--order">
              <img src="img/search%2001.svg" alt="" />
              {/* <li>خانه</li> */}
            </div>

            <div className="sidebar--order">
              <img src="img/search%2001.svg" alt="" />
              {/* <li>دوره های خریداری شده </li> */}
            </div>

            <div className="sidebar--order">
              <img src="img/search%2001.svg" alt="" />
              {/* <li>دوره های آنلاین</li> */}
            </div>
            <div className="sidebar--order">
              <img src="img/search%2001.svg" alt="" />
              {/* <li>کلاس های من</li> */}
            </div>
            <div className="sidebar--order">
              <img src="img/search%2001.svg" alt="" />
              {/* <li>مدیریت درخواست ها</li> */}
            </div>
            <div className="sidebar--order">
              <img src="img/search%2001.svg" alt="" />
              {/* <li>کیف پول</li> */}
            </div>
            <div className="sidebar--order">
              <img src="img/search%2001.svg" alt="" />
              {/* <li>کد تخفیف</li> */}
            </div>
            <div className="sidebar--order">
              <img src="img/search%2001.svg" alt="" />
              {/* <li>تیکت پشتیبانی</li> */}
            </div>
            <div className="sidebar--order">
              <img src="img/search%2001.svg" alt="" />
              {/* <li>سوالات متداول</li> */}
            </div>
          </ul>

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
                      {" "}
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
            <p className="body__info--para-money">قسط های پیش رو:</p>
            <div className="body__info-money">
              <p style={{ marginRight: 65 }}> تاریخ قسط</p>
              <p> مبلغ قسط</p>
              <p>بابت دوره</p>
              <p style={{ marginRight: 100 }}> وضیعت</p>
            </div>

            {[...Array(2)].map((_, i) => (
              <div key={i} className="body__information-money">
                <p>1404/02/15</p>
                <p>1200000</p>
                <p>
                  دوره آمادگی برای <br /> امتحانات پایانی کلاس 11
                </p>
                <p style={{ color: "lawngreen" }}> پرداخت شد</p>
              </div>
            ))}

            <p className="body__info--para-money">تاریخچه تراکنش ها:</p>
            <div className="body__info-money">
              <p style={{ marginRight: 65 }}> تاریخ قسط</p>
              <p> مبلغ قسط</p>
              <p>بابت دوره</p>
              <p style={{ marginRight: 100 }}> وضیعت</p>
            </div>

            {[...Array(10)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="body__information-money">
                  <p>1404/02/15</p>
                  <p>1200000</p>
                  <p>
                    دوره آمادگی برای <br /> امتحانات پایانی کلاس 11
                  </p>
                  <p style={{ color: "lawngreen" }}> پرداخت شد</p>
                </div>
                <hr className="body__money-dashed" />
              </React.Fragment>
            ))}

            <div className="information__money--footer">
              <p>
                شما به سقف بازدید تراکنش رسیدید برای دیدن باقی تراکنش ها در
                قسمت تیکت پشتیبانی از بخش مالی درخواست رسید تراکنش ها را انجام
                دهید
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletComponent;
