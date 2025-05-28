import React from "react";
import { Link } from "react-router-dom";
const Setting = () => {
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
          <div className="body--empty-search">
            <div className="serach-container">
         <input type="search" className="search-input" placeholder="جستجو تخصص و مهارت ..."/>
          <img src="../img/لوگو/کارفرما/جستجو.svg" alt="icon-search" className="search-icon"/>
               </div>

               <div className="serach-Popular-services">
                <img src="../img/announcement.svg" alt="icon-services" />
                <p>سرویس های پرطرفدار</p>
               </div>
               <div className="search-suggestion">
                <div>  <p>طراحی سایت</p></div>
                <div>  <p>طراحی لوگو</p></div>
                <div > <p>برنامه نویسی و توسعه نرم افزار</p></div>
                <div>  <p>تولید محتوا</p></div>
                <div> <p>سئو SEO</p></div>
                <div> <p>طراحی رابط کاربری UI/UX</p></div>
               </div>
               <div className="serach-Popular-services">
                <img src="../img/announcement.svg" alt="icon-services" />
                <p>سرویس های پرطرفدار</p>
               </div>
               <div className="search-suggestion">
               <div>  <p>طراحی وبسایت</p></div>
               </div>
               
       
        </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

export default Setting;
