import React from "react";

const TicketFAQComponent = () => {
  return (
    <div>
      <header>
        <div className="header--container">
          <div className="header__left">
            <div className="header--dashobord">
              <img src="./img/Link → logo.png" alt="logo" />
              <p className="header__right--para"> |</p>
              <img
                className="header__right--img"
                src="./img/img-person.jpg"
                alt="person"
              />
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
        <div className="sidebar-ticket">
          <ul>
            {[...Array(10)].map((_, index) => (
              <div className="sidebar--order" key={index}>
                <img src="img/search%2001.svg" alt="" />
              </div>
            ))}
          </ul>

          <div className="body--empty-asked">
            <h2 style={{ textAlign: "center", marginTop: "85px" }}>سوالات متداول</h2>
            <p style={{ textAlign: "center", marginTop: "15px" }}>هزاران کاربر نمی‌توانند اشتباه کنند</p>

            <div className="body--empty-ask--header">
              <button className="body--empty-btn-first">درباره ما</button>
              <button className="body--empty-btn">خدمات ما</button>
              <button className="body--empty-btn">پشتیبانی</button>
            </div>

            <select className="body--empty-DropDown">
              <option>
                هدف ما از راه‌اندازی این سرویس چیست؟
              </option>
            </select>
            <select className="body--empty-DropDown">
              <option>چه کسانی پشت این پروژه هستند؟</option>
              <option>
                تیم ما متشکل از متخصصان با تجربه در حوزه‌های [مثلاً طراحی وب، توسعه نرم‌افزار، خدمات دیجیتال] است که با علاقه و تخصص در حال توسعه این پلتفرم هستند.
              </option>
            </select>
            <select className="body--empty-DropDown">
              <option>
                چه چیزی ما را از دیگران متمایز می‌کند؟
              </option>
            </select>

            <div className="footer-box">
              <p className="footer-box-para">ما را در فضای مجازی دنبال کنید</p>
              <div className="footer-icons">
                <a href="#">
                  <img src="img/whatsapp.svg" alt="icon-whatsapp" />
                </a>
                <a href="#">
                  <img style={{ height: "30px", width: "30px" }} src="img/telegram.svg" alt="icon-telegram" />
                </a>
                <a href="#">
                  <img src="img/Frame.svg" alt="icon-x" />
                </a>
                <a href="#">
                  <img src="img/instagram.svg" alt="icon-instagram" />
                </a>
                <a href="#">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src="img/facebook.svg"
                    alt="icon-facebook"
                  />
                </a>
                <a href="#">
                  <img src="img/youtube.svg" alt="icon-youTube" />
                </a>
              </div>

              <div className="footer-address">
                <p>شماره تماس پشتیبانی: 0913-627-9624</p>
                <p>شماره تماس دفتر مرکزی: 021-3522-7334</p>
                <p>آدرس دفتر مرکزی: تهران - میدان انقلاب</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketFAQComponent;
