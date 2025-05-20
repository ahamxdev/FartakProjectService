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
            <div className="sidebar--order">
              <img src="../img/Vector.svg" alt="" />
              <li>بستن سایدبار</li>
            </div>
            <div className="sidebar--order">
              <img src="../img/search 01.svg" alt="" />
              <li>خانه</li>
            </div>
            <div className="sidebar--order">
              <img src="../img/Vecto1r.svg" alt="" />
              <li>ثبت سفارش</li>
            </div>
            <div className="sidebar--order">
              <img src="../img/search 01.svg" alt="" />
              <li>سفارش ها</li>
            </div>
            <div className="sidebar--order">
              <img src="../img/search 01.svg" alt="" />
              <li>اتاق کار</li>
            </div>
            <div className="sidebar--order">
              <img src="../img/search 01.svg" alt="" />
              <li>درصد پیشرفت سفارش</li>
            </div>
            <div className="sidebar--order">
              <img src="../img/search 01.svg" alt="" />
              <li>اطلاعیه ها</li>
            </div>
            <div className="sidebar--order">
              <img src="../img/search 01.svg" alt="" />
              <li>صفحه چت و پیام ها</li>
            </div>
            <div className="sidebar--order">
              <img src="../img/search 01.svg" alt="" />
              <li>کیف پول و امور مالیاتی</li>
            </div>
            <div className="sidebar--order">
              <img src="../img/search 01.svg" alt="" />
              <li>کیف پول کارفرما</li>
            </div>
            <div className="sidebar--order">
              <img src="../img/search 01.svg" alt="" />
              <li>جستجو</li>
            </div>
            <div className="sidebar--order">
              <img src="../img/search 01.svg" alt="" />
              <li>مجری های سفارش</li>
            </div>
            <div className="sidebar--order">
              <img src="../img/search 01.svg" alt="" />
              <li>ارتباط با مدیرعامل</li>
            </div>
          </ul>

          <div className="body--empty">
            <div className="body--empty-chats">
              <div className="body--empty-chats--container-right">
                <img
                  className="body--empty-chats-img"
                  src="../img/mohandes.jpg"
                  alt=""
                />
                <div className="body--empty--chat"></div>
              </div>

              <div className="body--empty-chats--container-left">
                <div
                  className="body--empty--chat"
                  style={{
                    width: "409px",
                    height: "200px",
                    border: "2px solid gray",
                  }}
                ></div>
                <img
                  className="body--empty-chats-img"
                  src="../img/mohandes.jpg"
                  alt=""
                />
              </div>
            </div>

            <div>
              <input type="search" className="body--empty-chats-search" />
              <img
                className="body--empty-chats-icon"
                src="../img/search 01.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
