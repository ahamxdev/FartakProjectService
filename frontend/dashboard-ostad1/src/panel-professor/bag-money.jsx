import React from "react";

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
