import React from "react";
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
              <p className="add-project-para">افزودن پروژه</p>
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
              { icon: "Vector.svg", label: "بستن سایدبار" },
              { icon: "search%2001.svg", label: "خانه" },
              { icon: "Vecto1r.svg", label: "ثبت سفارش" },
              { icon: "search%2001.svg", label: "سفارش ها" },
              { icon: "search%2001.svg", label: "اتاق کار" },
              { icon: "search%2001.svg", label: "درصد پیشرفت سفارش" },
              { icon: "search%2001.svg", label: "اطلاعیه ها" },
              { icon: "search%2001.svg", label: "صفحه چت و پیام ها" },
              { icon: "search%2001.svg", label: "کیف پول و امور مالیاتی" },
              { icon: "search%2001.svg", label: "کیف پول کارفرما" },
              { icon: "search%2001.svg", label: "جستجو" },
              { icon: "search%2001.svg", label: "مجری های سفارش" },
              { icon: "search%2001.svg", label: "ارتباط با مدیرعامل" },
            ].map((item, index) => (
              <div className="sidebar--order" key={index}>
                <img src={`../img/${item.icon}`} alt="" />
                <li>{item.label}</li>
              </div>
            ))}
          </ul>

          <div className="body--empty--room--container">
            <div className="body--empty-room-work">
              <div className="body--empty-right">
                <div className="body--empty-left-items">
                  <h5 className="body--empty--para">جدید ترین اطلاعیه ها</h5>

                  {[
                    "مهلت پرداخت برای پروژه زبان در حال اتمام است.",
                    "فرصت ویژه: تخفیف روی پروژه‌های بعدی شما!",
                    "یک فایل جدید به پروژه شما اضافه شد.",
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
