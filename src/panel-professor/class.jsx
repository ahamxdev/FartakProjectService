import React from "react";

const SidebarOrder = ({ imgSrc, alt }) => (
  <div className="sidebar--order">
    <img src={imgSrc} alt={alt} />
    {/* <li>{alt}</li> */}
  </div>
);

const BodyEmptyClass = ({ title, description, buttonText, checkboxes, buttonStyle }) => (
  <div className="body--empty--classes">
    <h2>{title}</h2>
    <p dangerouslySetInnerHTML={{ __html: description }} />
    {checkboxes ? (
      <div className="body--empty--checkBox">
        <input type="checkbox" id={`${title}-done`} />
        <label htmlFor={`${title}-done`}>برگزار شد</label>
        <input type="checkbox" id={`${title}-notdone`} />
        <label htmlFor={`${title}-notdone`}>برگزار نشد</label>
      </div>
    ) : null}
    {buttonText && <button style={buttonStyle}>{buttonText}</button>}
  </div>
);

const ContainerTicket = () => {
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

      <div className="container-ticket">
        <div className="sidebar-ticket">
          <ul>
            <SidebarOrder imgSrc="img/search%2001.svg" alt="بستن سایدبار" />
            <SidebarOrder imgSrc="img/search%2001.svg" alt="خانه" />
            <SidebarOrder imgSrc="img/search%2001.svg" alt="دوره های خریداری شده" />
            <SidebarOrder imgSrc="img/search%2001.svg" alt="دوره های آنلاین" />
            <SidebarOrder imgSrc="img/search%2001.svg" alt="کلاس های من" />
            <SidebarOrder imgSrc="img/search%2001.svg" alt="مدیریت درخواست ها" />
            <SidebarOrder imgSrc="img/search%2001.svg" alt="کیف پول" />
            <SidebarOrder imgSrc="img/search%2001.svg" alt="کد تخفیف" />
            <SidebarOrder imgSrc="img/search%2001.svg" alt="تیکت پشتیبانی" />
            <SidebarOrder imgSrc="img/search%2001.svg" alt="سوالات متداول" />
          </ul>

          <div className="body--empty-asked">
            <div className="body--empty--cls">
              <BodyEmptyClass
                title="کلاس خصوصی آنلاین"
                description={`استان قزوین <br/>جمعه 1404/06/11<br/> دروس تخصصی هنرستان رشته <br/> کامپیوتر جلسه 5`}
                buttonText="چت با استاد"
                buttonStyle={{ marginTop: "80px" }}
              />
              <BodyEmptyClass
                title="کلاس خصوصی حضوری"
                description={`دروس تخصصی هنرستان رشته <br/>کامپیونر جلسه 5<br/>در دفتر نمایندگی شرکت فرتاک<br/>ساعت 10 صبح`}
                checkboxes={true}
                buttonText="ارسال"
              />
              <BodyEmptyClass
                title="دوره های آنلاین"
                description={`دوره آماده سازی امتخانات <br/> پایان ترم کلاس 11 تجربی`}
                buttonText="چت با استاد"
                buttonStyle={{ marginTop: "130px" }}
              />
            </div>

            <p className="body__class--para">کلاس ها و دوره های پایان یافته:</p>

            <div className="body__info--class">
              <p style={{ marginRight: "65px" }}>تاریخ قسط</p>
              <p>مبلغ قسط</p>
              <p>بابت  دوره</p>
              <p style={{ marginRight: "100px" }}>وضیعت</p>
            </div>

            <div className="body__information-money">
              <p>کلاس طراحی uml</p>
              <p>1200000</p>
              <p>
                دوره آمادگی برای <br /> امتحانات پایانی کلاس 11
              </p>
              <p style={{ color: "lawngreen" }}>پرداخت شد</p>
            </div>
            <hr className="body__money-dashed" />
            <div className="body__information-money">
              <p>ریاضیات گسسته</p>
              <p>1200000</p>
              <p>
                دوره آمادگی برای <br /> امتحانات پایانی کلاس 11
              </p>
              <p style={{ color: "lawngreen" }}>پرداخت شد</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerTicket;
