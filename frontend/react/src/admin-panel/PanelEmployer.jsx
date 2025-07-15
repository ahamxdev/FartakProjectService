import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          position: "relative",
        }}
      >
       

        <div className="dashbord-admin-left-container-newProject">
          <div className="dasbord-admin-left-paragraph-employe">
            <p>سفارش شماره 194</p>
            <p>دسته بندی : توسعه نرم افزار و آی تی</p>
            <p>عنوان : وبسایت فروشگاهی شناخت حیوانات وحشی تهران</p>
            <p>
              توضیحات : ما نیاز داریم در این وبسایت به مردم آموزش بدیم که چی
              جوری با گلها بهتر تعامل داشته باشند هدف این هست که زیاد نکشن پس ما
              باید بکشیم ولی نقاشی را عرض میکنم که از همه کشیدن ها پیروی میکنه
            </p>
            <p>هزینه : از 500,000 تا 1,000,000 تومان</p>
            <p>زمان : 55 روز</p>
            <p>الویت : تحویل سریع</p>
            <p>فوریت : متمایز</p>
            <p>هزینه : 250,000 تومان پرداخت شده</p>
            <p>شماره تماس های کارفرما :09126663547</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <button className="dashbord-admin-left-btn1">تایید سفارش </button>
              <button className="dashbord-admin-left-btn2">
                عدم تایید سفارش - ارسال پیام
              </button>
            </div>
          </div>
          <div className="dasbord-admin-left-paragraph">
            <p>سفارش شماره 194</p>
            <p>دسته بندی : توسعه نرم افزار و آی تی</p>
            <p>عنوان : وبسایت فروشگاهی شناخت حیوانات وحشی تهران</p>
            <p>
              توضیحات : ما نیاز داریم در این وبسایت به مردم آموزش بدیم که چی
              جوری با گلها بهتر تعامل داشته باشند هدف این هست که زیاد نکشن پس ما
              باید بکشیم ولی نقاشی را عرض میکنم که از همه کشیدن ها پیروی میکنه
            </p>
            <p>هزینه : از 500,000 تا 1,000,000 تومان</p>
            <p>زمان : 55 روز</p>
            <p>الویت : تحویل سریع</p>
            <p>فوریت : متمایز</p>
            <p>هزینه : 250,000 تومان پرداخت شده</p>
            <p>شماره تماس های کارفرما :09126663547</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <button className="dashbord-admin-left-btn1">تایید سفارش </button>
              <button className="dashbord-admin-left-btn2">
                عدم تایید سفارش - ارسال پیام
              </button>
            </div>
          </div>
          <div className="dasbord-admin-left-paragraph-left">
            <p>سفارش شماره 194</p>
            <p>دسته بندی : توسعه نرم افزار و آی تی</p>
            <p>عنوان : وبسایت فروشگاهی شناخت حیوانات وحشی تهران</p>
            <p>
              توضیحات :ما نیاز داریم در این وبسایت به مردم آموزش بدیم که چی جوری
              با گلها بهتر تعامل داشته باشند هدف این هست که زیاد نکشن پس ما باید
              بکشیم ولی نقاشی را عرض میکنم که از همه کشیدن ها پیروی میکن ما نیاز
              داریم در این وبسایت به مردم آموزش بدیم که چی جوری با گلها بهتر
              تعامل داشته باشند هدف این هست که زیاد نکشن پس ما باید بکشیم ولی
              نقاشی را عرض میکنم که از همه کشیدن ها پیروی میکنه
            </p>
            <p>هزینه : از 500,000 تا 1,000,000 تومان</p>
            <p>زمان : 55 روز</p>
            <p>الویت : تحویل سریع</p>
            <p>فوریت : متمایز</p>
            <p>هزینه : 250,000 تومان پرداخت شده</p>
            <p>شماره تماس های کارفرما :09126663547</p>

            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <button className="dashbord-admin-left-btn1">تایید سفارش </button>
              <button className="dashbord-admin-left-btn2">
                عدم تایید سفارش - ارسال پیام
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
