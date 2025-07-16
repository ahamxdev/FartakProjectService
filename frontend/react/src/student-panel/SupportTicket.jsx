import React from "react";
import { Link } from "react-router-dom";
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
                <Link href="#">
                  <img   style={{ height: 30, width: 30 }} src="img/whatsapp.svg" alt="icon-whatsapp" />
                </Link>
                <Link href="#">
                  <img
                    style={{ height: 30, width: 30 }}
                    src="img/telegram.svg"
                    alt="icon-telegram"
                  />
                </Link>
                <Link href="#">
                  <img src="img/Frame.svg" alt="icon-x" />
                </Link>
                <Link href="#">
                  <img src="img/instagram.svg" alt="icon-instagram" />
                </Link>
                <Link href="#">
                  <img
                    style={{ width: 30, height: 30 }}
                    src="img/facebook.svg"
                    alt="icon-facebook"
                  />
                </Link>
                <Link href="#">
                  <img src="img/youtube.svg" alt="icon-youTube" />
                </Link>
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
