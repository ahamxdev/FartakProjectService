import React from "react";

const TicketSidebar = () => {
  return (
    <>
      <header>
        <div className="header--container">
          <div className="header__left">
            <div className="header--dashobord">
              <img src="./img/Link → logo.png" alt="logo" />
              <p className="header__right--para"> |</p>
              <img className="header__right--img" src="./img/img-person.jpg" alt="person" />
              <div className="header--dashbord-p-home"></div>
            </div>

            <div className="search-container">
              <input
                type="text"
                className="search-input-home"
                placeholder="دنبال چه چیزی میگردید؟"
              />
              <img src="./img/search 01.svg" className="search-icon-home" alt="search" />
            </div>

            <p className="header__right--para"> |</p>
            <img className="header__left--img" src="../img/setting.svg" alt="setting" />
            <p className="header__right--para"> |</p>
            <img className="header__left--img" src="../img/notification 03.svg" alt="notification" />
            <p className="header__right--para">|</p>
            <img className="header__left--img" src="../img/out.svg" alt="logout" />
          </div>
        </div>
      </header>

      <div className="container-ticket">
        <div className="sidebar-main">
          <ul>
            <div className="sidebar--order">
              {/* <img src="img/search%2001.svg" alt="" /> */}
              <li>بستن سایدبار</li>
            </div>

            <div className="sidebar--order">
              {/* <img src="img/search%2001.svg" alt="" /> */}
              <li>خانه</li>
            </div>

            <div className="sidebar--order">
              {/* <img src="img/search%2001.svg" alt="" /> */}
              <li>دوره های خریداری شده </li>
            </div>

            <div className="sidebar--order">
              {/* <img src="img/search%2001.svg" alt="" /> */}
              <li>دوره های آنلاین</li>
            </div>

            <div className="sidebar--order">
              {/* <img src="img/search%2001.svg" alt="" /> */}
              <li>کلاس های من</li>
            </div>

            <div className="sidebar--order">
              {/* <img src="img/search%2001.svg" alt="" /> */}
              <li>مدیریت درخواست ها</li>
            </div>

            <div className="sidebar--order">
              {/* <img src="img/search%2001.svg" alt="" /> */}
              <li>کیف پول</li>
            </div>

            <div className="sidebar--order">
              {/* <img src="img/search%2001.svg" alt="" /> */}
              <li>کد تخفیف</li>
            </div>

            <div className="sidebar--order">
              {/* <img src="img/search%2001.svg" alt="" /> */}
              <li>تیکت پشتیبانی</li>
            </div>

            <div className="sidebar--order">
              {/* <img src="img/search%2001.svg" alt="" /> */}
              <li>سوالات متداول</li>
            </div>
          </ul>

          <div className="body--empty-asked">
            <h2 style={{ textAlign: "center", marginTop: 85 }}>سوالات متداول</h2>
            <p style={{ textAlign: "center", marginTop: 15 }}>
              هزاران کاربر نمی‌توانند اشتباه کنند
            </p>

            <div className="body--empty-ask--header">
              <button className="body--empty-btn-first">درباره ما</button>
              <button className="body--empty-btn">خدمات ما</button>
              <button className="body--empty-btn">پشتیبانی</button>
            </div>

            <select className="body--empty-DropDown">
              <option>
                هدف ما از راه‌اندازی این سرویس چیست؟
                <img src="img/Vector%20458.svg" alt="" />
              </option>
            </select>

            <select className="body--empty-DropDown">
              <option>
                چه کسانی پشت این پروژه هستند؟
                <img src="img/Vector%20458.svg" alt="" />
              </option>
              <option>
                تیم ما متشکل از متخصصان با تجربه در حوزه‌های [مثلاً طراحی وب، توسعه نرم‌افزار، خدمات دیجیتال] است که با علاقه و تخصص در حال توسعه این پلتفرم هستند.
              </option>
            </select>

            <select className="body--empty-DropDown">
              <option>
                چه چیزی ما را از دیگران متمایز می‌کند؟
                <img src="img/Vector%20458.svg" alt="" />
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketSidebar;
