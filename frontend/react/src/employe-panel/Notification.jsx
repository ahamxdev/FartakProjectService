import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <header>
        <div className="header--container">
          <div className="header__left">
            <div className="header--dashobord">
              <img src="../img/Link → logo.png" alt="" />
              <p className="header__right--para"> |</p>
              <img
                className="header__right--img"
                src="../img/img-person.jpg"
                alt="person"
              />
              <div className="header--dashbord-p-home">
                <p>پروفایل شخصی</p>
              </div>
            </div>

            <div className="search-container">
              <button className="add-project">
                <img src="../img/plus.svg" alt="add-project" />
              </button>
              <Link href="#" className="add-project-para">افزودن پروژه</Link>
              <input
                type="text"
                className="search-input-home"
                placeholder="دنبال چه چیزی میگردید؟"
              />
              <img
               src="../img/search 01.svg" 
               className="search-icon-home" 
               alt=""
               />
            </div>

            <p className="header__right--para"> |</p>
            <img className="header__left--img" src="../img/setting.svg" alt="" />
            <p className="header__right--para"> |</p>
            <img
              className="header__left--img"
              src="../img/notification 03.svg"
              alt=""
            />
            <p className="header__right--para">|</p>
            <img className="header__left--img" src="../img/out.svg" alt="" />
          </div>
        </div>
      </header>

      <div className="container">
        <div className="sidebar">
          <ul>
            {[
      { icon: "../img/لوگو/کارفرما/بستن سایدبار.svg", label: "بستن سایدبار", path: "/#" },
      { icon: "../img/لوگو/کارفرما/خانه.svg", label: "خانه", path: "/Home" },
      { icon: "../img/لوگو/کارفرما/ثبت سفارش.svg", label: "ثبت سفارش", path: "/PlaceOrder" },
      { icon: "../img/لوگو/کارفرما/سفارش ها.svg", label: "سفارش ها", path: "/Orders"},
      { icon: "../img/لوگو/کارفرما/اتاق کار.svg", label: "اتاق کار", path: "/Room" },
      { icon: "../img/لوگو/کارفرما/درصد پیشرفت سفارش.svg", label: "درصد پیشرفت سفارش", path: "/OrderProgress" },
      { icon: "../img/لوگو/کارفرما/اطلاعیه ها.svg", label: "اطلاعیه ها", path: "/Notification" },
      { icon: "../img/لوگو/کارفرما/صفحه چت و پیام ها.svg", label: "صفحه چت و پیام ها", path: "/Chat" },
      { icon: "../img/لوگو/کارفرما/کیف پول و امور مالی.svg", label: "کیف پول و امور مالیاتی", path: "/BagMoney"},
      { icon: "../img/لوگو/کارفرما/تنظیمات پنل کارفرما.svg", label: "تنظیمات  کارفرما", path: "/Setting" },
      { icon: "../img/لوگو/کارفرما/جستجو.svg", label: "جستجو", path: "/Search" },
      { icon: "../img/لوگو/کارفرما/مجری های سفارش.svg", label: "مجری های سفارش", path: "/Workers" },
      { icon: "../img/لوگو/کارفرما/ارتباط با مدیرعامل.svg", label: "ارتباط با مدیرعامل", path: "/" },
            ].map((item, index) => (
              <div className="sidebar--order" key={index}>
                <img src={`../img/${item.icon}`} alt="" />
                <li>{item.label}</li>
              </div>
            ))}
          </ul>

          <div className="body--empty--room-notification-container">
            <div className="body--empty-room-work">
              <div className="body--empty-notification-right">
                <div className="body--empty-left-items">
                  <h5 className="body--empty--para">جدید ترین اطلاعیه ها</h5>

                  {[
                    "مهلت پرداخت برای پروژه زبان در حال اتمام است.",
                    "  فرصت ویژه : تخفیف روی پروژه‌های بعدی شما!",
                    "یک فایل جدید به پروژه شما اضافه شده است",
                  ].map((text, index) => (
                    <div key={index} className="body__empty-left-news">
                      <p>{text}</p>
                      <div className="body__empty-left-notification"></div>
                    </div>
                  ))}

                  {[...Array(9)].map((_, index) => (
                    <div key={index + 3} className="body__empty-left-news">
                      <p>مهلت پرداخت برای پروژه زبان در حال اتمام است.</p>
                      <div className="body__empty-left-notification"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="body--empty-left--notification">
                <p className="body__empty--left-p">
                  مدیر عامل به پیام شما پاسخ داد.
                </p>
                <p>
                  کاربر گرامی مهندس محسن عبداللهی به سوال شما پاسخ داد. <br />
                  هم اکنون میتوانید جواب خود را در بخش چت ببینید
                </p>
                <button className="body--empty-left-btn">رفتن به چت</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
