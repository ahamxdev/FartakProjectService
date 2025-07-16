import React from "react";
import {Link} from 'react-router-dom';

const SidebarAndHeader = () => {
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
              {/* <button className="add-project"><img src="../img/plus.svg" alt="add-project" /></button> */}
              {/* <p className="add-project-para">افزودن پروژه</p> */}
              <input
                type="text"
                className="search-input-home"
                placeholder="دنبال چه چیزی میگردید؟"
              />
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

      <div className="container-request">
        <div className="sidebar-request ">
          <ul >
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
          
          <div className="body--empty-request">
            {/* <div className="body__live--class"> <button className="body__live--class-icon" ></button><p>پخش زنده کلاس کنکور در حال برگزاری است  <b style={{ cursor: "pointer" }}>کلیک</b> کنید</p></div> */}
            {/* <p className="bode--p"> <b>دوره های در حال برگزاری</b> </p> */}
            <p>درخواست های من</p>
            <div className="body__info-request">
              <p> شماره درخواست</p>
              <p style={{marginRight:"2rem",transform:"translatex(25px)"}}> زمان ارسال درخواست</p>
              <p>عنوان درخواست</p>
              <p>پاسخ درخواست</p>
            </div>

            <div className="body__information">
              <p>3a00</p>
              <p style={{ marginRight: "95px" }}>
                1401/01/25 <br /> ساعت 14,00
              </p>
              <p style={{ marginRight: "45px" }}> درخواست برگزاری کلاس نظریه زبان ها و ماشین ها</p>
              <p> 30 جلسه</p>
            </div>
            <hr className="information-data-dashed-request" />
            <div className="body__information">
              <p>3a00</p>
              <p style={{ marginRight: "95px" }}>
                1401/01/25 <br /> ساعت 14,00
              </p>
              <p style={{ marginRight: "45px" }}> درخواست برگزاری کلاس نظریه زبان ها و ماشین ها</p>
              <p> 30 جلسه</p>
            </div>

       
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarAndHeader;
