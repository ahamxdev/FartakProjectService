import { Link } from "react-router-dom";

const TicketSidebar = () => {
  return (
    <>
      <header>
        <div className="header--container">
          <div className="header__left">
            <div className="header--dashobord">
              <img src="./img/Link → logo.png" alt="logo" />
              <p className="header__right--para"> |</p>
              <img
                className="header__right--img"
                src="./img/img-person.jpg"
                alt="person"
              />
              <div className="header--dashbord-p-home"></div>
            </div>

            <div className="search-container">
              <input
                type="text"
                className="search-input-home"
                placeholder="دنبال چه چیزی میگردید؟"
              />
              <img
                src="./img/search 01.svg"
                className="search-icon-home"
                alt="search"
              />
            </div>

            <p className="header__right--para"> |</p>
            <img
              className="header__left--img"
              src="../img/setting.svg"
              alt="setting"
            />
            <p className="header__right--para"> |</p>
            <img
              className="header__left--img"
              src="../img/notification 03.svg"
              alt="notification"
            />
            <p className="header__right--para">|</p>
            <img
              className="header__left--img"
              src="../img/out.svg"
              alt="logout"
            />
          </div>
        </div>
      </header>

      <div className="container-ticket">
        <div className="sidebar-main">
          <ul>
            {[
              { icon: "../img/لوگو/کارفرما/بستن سایدبار.svg", path: "/#" },
              { icon: "../img/لوگو/کارفرما/خانه.svg", path: "/Home" },
              {
                icon: "../img/لوگو/پنل دانشجو/دوره های خریداری شده.svg",
                path: "/PurchasedCourses",
              },
              {
                icon: "../img/لوگو/پنل دانشجو/دوره های آنلاین.svg",
                path: "/OnlineCourses",
              },
              {
                icon: "../img/لوگو/پنل دانشجو/کلاس های من.svg",
                path: "/MyClasses",
              },
              {
                icon: "../img/لوگو/پنل دانشجو/مدریت درخواست ها.svg",
                path: "/RequestManagement",
              },
              { icon: "../img/لوگو/پنل دانشجو/کیف پول.svg", path: "/Wallet" },
              {
                icon: "../img/لوگو/پنل دانشجو/کد تخفیف.svg",
                path: "/DiscountCode",
              },
              {
                icon: "../img/لوگو/پنل دانشجو/تیکت پشتیبانی.svg",
                path: "/SupportTicket",
              },
              {
                icon: "../img/لوگو/پنل دانشجو/سوالات متداول.svg",
                path: "/FAQ",
              },
            ].map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="sidebar--order">
                  <img src={item.icon} alt={item.label} />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="body--empty-asked">
            <h2 style={{ textAlign: "center", marginTop: 85 }}>
              سوالات متداول
            </h2>
            <p style={{ textAlign: "center", marginTop: 15 }}>
              هزاران کاربر نمی‌توانند اشتباه کنند
            </p>

            <div className="body--empty-ask--header">
              <button className="body--empty-btn-first">درباره ما</button>
              <button className="body--empty-btn">خدمات ما</button>
              <button className="body--empty-btn">پشتیبانی</button>
            </div>

            <select className="body--empty-DropDown">
              <option>
                هدف ما از راه‌اندازی این سرویس چیست؟
                <img src="img/Vector%20458.svg" alt="" />
              </option>
            </select>

            <select className="body--empty-DropDown">
              <option>
                چه کسانی پشت این پروژه هستند؟
                <img src="img/Vector%20458.svg" alt="" />
              </option>
              <option>
                تیم ما متشکل از متخصصان با تجربه در حوزه‌های [مثلاً طراحی وب،
                توسعه نرم‌افزار، خدمات دیجیتال] است که با علاقه و تخصص در حال
                توسعه این پلتفرم هستند.
              </option>
            </select>

            <select className="body--empty-DropDown">
              <option>
                چه چیزی ما را از دیگران متمایز می‌کند؟
                <img src="img/Vector%20458.svg" alt="" />
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketSidebar;
