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
 <div className="body--empty-order-place">
  <div className="title-place_order">
    <h2 className="title-place_order-para">از کوچک ترین تا بزرگ ترین پروژه</h2>
    <p className="title-place_order-para">با فرتاک خیالت راحت</p>
  </div>

  <div className="place_order-items-container">

  <div className="place_order-items">
    <div className="place_order-item">
      <div className="place_order-item-content">
        <p className="place_order-item-content-p">مهارت بهتر فرتاک</p>
   <p className="place_order-item-content-p-little">گران هیچی نباش با فرتاک همیشه و همه جا آموزش ببین.</p>

  </div> 

<div className="place_order-item-content" >
   <img src="../img/Woman in vr glasses looking at website pages.svg" alt="img" />
  
   <button>مشاهده اطلاعات</button>

    </div>
    
    </div>
  </div>



  <div className="place_order-items">
    <div className="place_order-item">
      <div className="place_order-item-content">
        <p className="place_order-item-content-p">مشاوره با مدیر های موفق فرتاک</p>
   <p className="place_order-item-content-p-little">گران هیچی نباش با فرتاک همیشه و همه جا آموزش ببین.</p>

  </div> 

<div className="place_order-item-content" >
   <img src="../img/man and woman working at table with laptop.svg" alt="img" />
   <button>مشاهده اطلاعات</button>
    </div>

    </div>
  </div>

 </div>

 <div>
 <div className="place_order-items2">
    <div className="place_order-item">
      <div className="place_order-item-content">
        <p className="place_order-item-content-p">مشاوره با مدیر های موفق فرتاک</p>
   <p className="place_order-item-content-p-little">گران هیچی نباش با فرتاک همیشه و همه جا آموزش ببین.</p>

  </div> 

<div className="place_order-item-content" >
   <img src="../img/man and woman working at the table.svg" alt="img" />
   <button>مشاهده اطلاعات</button>
    </div>

    </div>
  </div>
 
{/* form */}

<h4 className="place_order-info-title">اطلاعات اولیه</h4>
<div className="place_order-form-full-conatiner">
<div className="place_order-form-conatiner">

<label className="place_order-label" >دسته بندی</label>

<select className="place_order-Category" >
  <option  value="دسته بندی پروژه خود را انتخاب کنید...">دسته بندی پروژه خود را انتخاب کنید...</option>
  <option value="....">....</option>
  <option value="...">...</option>

</select>

<br />
<label className="place_order-label" >عنوان</label>

<input className="place_order-Category" type="text" placeholder="عنوان پروژه خود را وارد کنید"/>


 </div>
 <div className="place_order-information"><label >توضیحات</label><br /><input className="place_order-info" type="text" placeholder="توضیحاتی برای شفاف تر شدن درخواست خود را بنویسید"/></div>
 </div>
 <div className="place_order-time-budge">
 <h5 className="place_order-time" >بودجه و زمان بندی</h5>
<p>بودجه مالی</p>
<p className="place_order-budge-p">میزان هزینه‌ای که برای پروژه خود درنظر دارید را وارد کنید.</p>
</div>

<div className="place_order-range-budge">
  <p>از</p><input type="number" placeholder="500,000 تومان" /> <p>تا</p><input type="number" placeholder="2500,000 تومان" /><input type="number" placeholder="میزان زمانی که در نظر دارید پروژه خود را تحویل بگیرید وارد کنید" /><select name="" id="">
    <option value="">روز</option>
  <option value="">1</option>
  <option value="">2</option>
  <option value="">3</option>
  <option value="">4</option>
  <option value="">5</option>
  <option value="">6</option>
  <option value="">7</option>
  <option value="">8</option>
  <option value="">9</option>
  <option value="">10</option>
  <option value="">11</option>
  <option value="">12</option>
  <option value="">13</option>
  <option value="">14</option>
  <option value="">15</option>
  <option value="">16</option>
  <option value="">17</option>
  <option value="">18</option>
  <option value="">19</option>
  <option value="">20</option>
  <option value="">21</option>
  <option value="">22</option>
  <option value="">23</option>
  <option value="">24</option>
  <option value="">25</option>
  <option value="">26</option>
  <option value="">27</option>
  <option value="">28</option>
  <option value="">29</option>
  <option value="30">30</option>
  </select>
</div>
<p className="place_order-priority-p">الویت شما</p>
<div className="place_order-priority-input">
  <input  value={"بالاترین قیمت"} name="price" type="radio" />
  <label >بالاترین قیمت</label>
  <input value={"کمترین قیمت"} name="price" type="radio" />
  <label >کمترین قیمت</label>
   <input value={"تحویل سریع"} name="price" type="radio" />
  <label >تحویل سریه</label>
  <input value={"میانه"} name="price" type="radio" />
  <label >میانه</label>
  </div>
  <p className="place_order-priority-p">نحوه و فوریت خود را انتخاب کنید</p>
  <div className="place_order-cards">
    <div  className="place_order-card"><p>تمام وقت</p><img src="../img/objects.svg" alt="img" /><p>Price ×2.5</p></div>
    <div className="place_order-card"><p>برجسته و فوری</p><img src="../img/objects.svg" alt="img" /><p>Price ×1.5</p></div>
    <div className="place_order-card"><p>معمولی</p><img src="../img/objects.svg" alt="img" /><p>Price ×1</p></div>
    <div className="place_order-card"><p>متمایز</p><img src="../img/objects.svg" alt="img" /><p>Price ×2</p></div>
    <div className="place_order-card"><p>حضوری و یا محرمانه</p><img src="../img/objects.svg" alt="img" /><p>Price ×3</p></div>
  </div>
  <p className="place_order-priority-p">روش پرداخت خودتان را انتخاب کنید</p>
<div className="place_order-payment">
  <div className="place_order-payment-zarin"><img src="../img/banknote-fast.svg" alt="icon" /><p>پرداخت با زرین پال</p><input value={"zarinpal"} name="money" type="radio" /></div>
  <div className="place_order-payment-bagmoney"><img src="../img/e6f64c557328514626363ee2a8f84e81859938b567ccca 1.svg" alt="icon" /><p>پرداخت با کیف پول من</p><input value={"bagmony"} name="money" type="radio" /></div>
</div>
<button className="place_order-payment-btn" type="submit">ثبت پروژه</button>
<p className="place_order-priority-footer">کسب و کارهایی که با  <span className="place_order-footer-p">فرتاک</span> همکاری کردند</p>
<div className="place_order-footer-logo">
  <img src="../img/Frame 1261153153.svg" alt="logo" />
  <img src="../img/Frame 1261153153.svg" alt="logo" />
  <img src="../img/Frame 1261153153.svg" alt="logo" />
</div>
 </div>

 </div>



       
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
