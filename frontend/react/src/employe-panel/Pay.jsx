import React from "react";
import { Link } from 'react-router-dom';


const DashboardLayout = () => {
  return (
    <>
      <header>
        <div className="header--container">
          <div className="header__left">
            <div className="header--dashobord">
              <img src="../img/Link → logo.png" alt="" />
              <p className="header__right--para">|</p>
              <img className="header__right--img" src="../img/img-person.jpg" alt="person" />
              <div className="header--dashbord-p-home">
                <p>پروفایل شخصی</p>
              </div>
            </div>

            <div className="search-container">
              <button className="add-project">
                <img src="../img/plus.svg" alt="add-project" />
              </button>
              <p className="add-project-para">افزودن پروژه</p>
              <input type="text" className="search-input-home" placeholder="دنبال چه چیزی میگردید؟" />
              <img src="../img/search 01.svg" className="search-icon-home" alt="search" />
            </div>

            <p className="header__right--para">|</p>
            <img className="header__left--img" src="../img/setting.svg" alt="" />
            <p className="header__right--para">|</p>
            <img className="header__left--img" src="../img/notification 03.svg" alt="" />
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
    { icon: "../img/لوگو/کارفرما/تنظیمات پنل کارفرما.svg", label: "تنظیمات  کارفرما", path: "/Money" },
    { icon: "../img/لوگو/کارفرما/جستجو.svg", label: "جستجو", path: "/Search" },
    { icon: "../img/لوگو/کارفرما/مجری های سفارش.svg", label: "مجری های سفارش", path: "/Workers" },
    { icon: "../img/لوگو/کارفرما/ارتباط با مدیرعامل.svg", label: "ارتباط با مدیرعامل", path: "/" },
  ].map((item, index) => (
    <li key={index}>
      <Link to={item.path} className="sidebar--order">
        <img src={item.icon} alt={item.label} />
        <span>{item.label}</span>
      </Link>
    </li>
  ))}
</ul>


          <div className="body--empty-pay-container">
            <div className="body--empty--header">
              <div className="body--header-items">
                <p>موجودی قابل استفاده</p>
                <p>2,500,000 تومان</p>
              </div>
              <div className="body--header-items">
                <p>موجودی معلق</p>
                <p>1,000,000 تومان</p>
              </div>
              <div className="body--header-items">
                <p>امتیاز فعلی</p>
                <p>100</p>
                <button>تبدیل به تخفیف</button>
              </div>
            </div>

            <div className="body--empty-pay">
              <h5 className="body--empty--para-pay">پرداخت های من</h5>
              <div className="body--empty-right-title-pay">
                <p>پروژه</p>
                <p>مبلغ</p>
                <p>وضعیت</p>
                <p>تاریخ</p>
              </div>

              <div className="body--empty-right-item">
                <p>طراحی سایت شرکتی</p>
                <p>10,000,000 تومان</p>
                <p>تسویه کامل</p>
                <p>1403/01/28</p>
              </div>
              <hr style={{ width: '95%', marginRight: '13px' }} />
              <div className="body--empty-right-item">
                <p>اپلیکیشن موبایل</p>
                <p>10,000,000 تومان</p>
                <p>تسویه کامل</p>
                <p>1403/01/28</p>
              </div>

              <h5 className="body--empty--para-pay">برداشت های من</h5>
              <div className="body--empty-right-title-pay">
                <p>مبلغ</p>
                <p>وضعیت</p>
                <p>تاریخ درخواست</p>
              </div>

              <div className="body--empty-right-item">
                <p>طراحی سایت شرکتی</p>
                <p>معلق</p>
                <p>1403/01/28</p>
              </div>
              <hr style={{ width: '95%', marginRight: '13px' }} />
              <div className="body--empty-right-item">
                <p>اپلیکیشن موبایل</p>
                <p>واریز شده</p>
                <p>1403/01/28</p>
              </div>

              <div className="body--empty-pay-footer">
                <p>سؤالی درباره موجودی یا برداشت‌ها دارید؟</p>
                <button>ارتباط با پشتیبان مالی</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
