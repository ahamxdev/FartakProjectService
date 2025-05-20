import React from "react";

const SupportTickets = () => {
  return (
    <>
      <header>
        <div className="header--container ">
          <div className="header__left">
            <div className="header--dashobord">
              <img src="./img/Link → logo.png" alt="logo" />
              <p className="header__right--para"> |</p>
              <img className="header__right--img" src="./img/img-person.jpg" alt="person" />
              <div className="header--dashbord-p-home"></div>
            </div>

            <div className="search-container">
              {/* <button className="add-project"><img src="../img/plus.svg" alt="add-project" /></button>
              <p className="add-project-para">افزودن پروژه</p> */}
              <input type="text" className="search-input-home" placeholder="دنبال چه چیزی میگردید؟" />
              <img src="./img/search 01.svg" className="search-icon-home" alt="search icon" />
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

          <div className="body--empty-ticket">
            <div className="main">
              <div className="box">
                <h3>وضعیت تیکت‌های پشتیبانی</h3>
                <table>
                  <thead>
                    <tr>
                      <th>شماره</th>
                      <th>عنوان</th>
                      <th>وضعیت</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3a00</td>
                      <td>مشکل در برداشت وجه</td>
                      <td className="status pending">منتظر پاسخ</td>
                    </tr>
                    <tr>
                      <td>2fd4</td>
                      <td>من نمی‌تونم وارد پنل بشم پسر خالم حسابش رو هک کنم</td>
                      <td className="status answered">پاسخ داده شده</td>
                    </tr>
                    <tr>
                      <td>120f</td>
                      <td>مشکل در برداشت وجه</td>
                      <td className="status answered">پاسخ داده شده</td>
                    </tr>
                    <tr>
                      <td>120f</td>
                      <td>مشکل در برداشت وجه</td>
                      <td className="status answered">پاسخ داده شده</td>
                    </tr>
                    <tr>
                      <td>120f</td>
                      <td>مشکل در برداشت وجه</td>
                      <td className="status answered">پاسخ داده شده</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <button>نمایش کامل تیکت‌ها</button>
              </div>

              <div className="box">
                <h3>ارسال تیکت پشتیبانی</h3>
                <div className="form-group">
                  <label>
                    <input type="checkbox" /> پاسخ خود را از تیکت قبلی دریافت نکردم
                  </label>
                </div>
                <div className="form-group">
                  <label>گروه پیام:</label>
                  <select>
                    <option>گروه خود را انتخاب کنید</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>موضوع پیام:</label>
                  <select>
                    <option>موضوع پیام را انتخاب کنید</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>زیر موضوع پیام:</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>پیام خود را وارد کنید:</label>
                  <textarea></textarea>
                </div>
                <button>ارسال فرم</button>
              </div>
            </div>

            <div className="footer-box">
              <p className="footer-box-para">ما را در فضای مجازی دنبال کنید</p>
              <div className="footer-icons">
                <a href="#">
                  <img src="img/whatsapp.svg" alt="icon-whatsapp" />
                </a>
                <a href="#">
                  <img
                    style={{ height: 30, width: 30 }}
                    src="img/telegram.svg"
                    alt="icon-telegram"
                  />
                </a>
                <a href="#">
                  <img src="img/Frame.svg" alt="icon-x" />
                </a>
                <a href="#">
                  <img src="img/instagram.svg" alt="icon-instagram" />
                </a>
                <a href="#">
                  <img
                    style={{ width: 30, height: 30 }}
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
    </>
  );
};

export default SupportTickets;
