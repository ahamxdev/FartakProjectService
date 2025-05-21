import React from "react";

function Dashboard() {
  return (
    <>
      <header>
        <div className="header--container">
          <div className="header__left">
            <div className="header--dashobord">
              <img src="../img/Link → logo.png" alt="" />
              <p className="header__right--para"> |</p>
              <img className="header__right--img" src="../img/img-person.jpg" alt="person" />

              <div className="header--dashbord-p-home">
                <p>پروفایل شخصی</p>
              </div>
            </div>

            <div className="search-container">
              <input type="text" className="search-input-home" placeholder="دنبال چه چیزی میگردید؟" />
              <img src="../img/search 01.svg" className="search-icon-home" alt="search icon" />
            </div>

            <p className="header__right--para"> |</p>
            <img className="header__left--img" src="../img/setting.svg" alt="settings" />
            <p className="header__right--para"> |</p>
            <img className="header__left--img" src="../img/notification 03.svg" alt="notification" />
            <p className="header__right--para">|</p>
            <img className="header__left--img" src="../img/out.svg" alt="logout" />
          </div>
        </div>
      </header>

      <div className="container">
        <div className="sidebar">
          <ul>
            <li className="sidebar--order">
              <img src="../img/Vector.svg" alt="" />
              بستن سایدبار
            </li>

            <li className="sidebar--order">
              <img src="../img/search%2001.svg" alt="" />
              خانه
            </li>

            <li className="sidebar--order">
              <img src="../img/Vecto1r.svg" alt="" />
              ثبت سفارش
            </li>

            <li className="sidebar--order">
              <img src="../img/search%2001.svg" alt="" />
              سفارش ها
            </li>

            <li className="sidebar--order">
              <img src="../img/search%2001.svg" alt="" />
              اتاق کار
            </li>

            <li className="sidebar--order">
              <img src="../img/search%2001.svg" alt="" />
              درصد پیشرفت سفارش
            </li>

            <li className="sidebar--order">
              <img src="../img/search%2001.svg" alt="" />
              اطلاعیه ها
            </li>

            <li className="sidebar--order">
              <img src="../img/search%2001.svg" alt="" />
              صفحه چت و پیام ها
            </li>

            <li className="sidebar--order">
              <img src="../img/search%2001.svg" alt="" />
              کیف پول و امور مالیاتی
            </li>

            <li className="sidebar--order">
              <img src="../img/search%2001.svg" alt="" />
              کیف پول کارفرما
            </li>

            <li className="sidebar--order">
              <img src="../img/search%2001.svg" alt="" />
              جستجو
            </li>

            <li className="sidebar--order">
              <img src="../img/search%2001.svg" alt="" />
              مجری های سفارش
            </li>

            <li className="sidebar--order">
              <img src="../img/search%2001.svg" alt="" />
              ارتباط با مدیرعامل
            </li>
          </ul>

          <div className="body--empty-show-order">
            <div className="body--empty--row">
              <div className="body--empty--card">
                <h4>سفارش شماره1</h4>
                <div className="body--empty--card-position">
                  <p>دسته بندی : توسعه نرم افزار و آی تی</p>
                  <p className="body--empty--card-position-p1">ثبت شده</p>
                </div>
                <p>عنوان : طراحی وب سایت دیکشنری مخصوص کامپیوتر</p>
              </div>

              <div className="body--empty--card">
                <h4>سفارش شماره2</h4>
                <div className="body--empty--card-position">
                  <p>دسته بندی : محتوا و ترجمه</p>
                  <p className="body--empty--card-position-p">در حال انجام</p>
                </div>
                <p>
                  عنوان : ترجمه کامل کتاب در سه هفته Change your mind before change for you <br />
                </p>
              </div>
            </div>

            <div className="body--empty--row">
              <div className="body--empty--card">
                <h4>سفارش شماره3</h4>
                <div className="body--empty--card-position">
                  <p>دسته بندی : بازاریابی و فروش</p>
                  <p className="body--empty--card-position-p3">کنسل شد</p>
                </div>
                <p>عنوان : طراحی وب سایت دیکشنری مخصوص کامپیوتر</p>
              </div>

              <div className="body--empty--card">
                <h4>سفارش شماره4</h4>
                <div className="body--empty--card-position">
                  <p>دسته بندی : طراحی و خلاقیت</p>
                  <p className="body--empty--card-position-p4">کامل شد</p>
                </div>
                <p>عنوان : طراحی وب سایت دیکشنری مخصوص کامپیوتر</p>
              </div>
            </div>

            <div className="body--empty--row">
              <div className="body--empty--card">
                <h4>سفارش شماره5</h4>
                <div className="body--empty--card-position">
                  <p>دسته بندی : طراحی و خلاقیت</p>
                  <p className="body--empty--card-position-p">پرداخت شد</p>
                </div>
                <p>عنوان : طراحی وب سایت دیکشنری مخصوص کامپیوتر</p>
              </div>

              <div className="body--empty--card">
                <h4>سفارش شماره6</h4>
                <div className="body--empty--card-position">
                  <p>دسته بندی : طراحی و خلاقیت</p>
                  <p className="body--empty--card-position-p4">غیرفعال شده</p>
                </div>
                <p>عنوان : طراحی وب سایت دیکشنری مخصوص کامپیوتر</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
