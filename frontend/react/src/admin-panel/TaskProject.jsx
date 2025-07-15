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
          <div className="dasbord-admin-left-para" style={{ height: "700px" }}>
            <p style={{ textAlign: "center" }}>پروژه های جدید تایید شده</p>
            <hr />
            <p className="task-project-p">پروژه سایت فانتزی قهوه</p>
            <p className="task-project-p">پروژه سایت فانتزی قهوه</p>
            <p className="task-project-p">پروژه سایت فانتزی قهوه</p>
            <p className="task-project-p">پروژه سایت فانتزی قهوه</p>
            <p className="task-project-p">پروژه سایت فانتزی قهوه</p>
            <p className="task-project-p">پروژه سایت فانتزی قهوه</p>
            <p className="task-project-p">پروژه سایت فانتزی قهوه</p>
            <p className="task-project-p">پروژه سایت فانتزی قهوه</p>
            <p className="task-project-p">پروژه سایت فانتزی قهوه</p>
            <p className="task-project-p">پروژه سایت فانتزی قهوه</p>
            <p className="task-project-p">پروژه سایت فانتزی قهوه</p>
            <p className="task-project-p">پروژه سایت فانتزی قهوه</p>

            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <button className="dashbord-admin-left-btn1">تایید سفارش </button>
              <button className="dashbord-admin-left-btn2">
                عدم تایید سفارش - ارسال پیام
              </button>
            </div>
          </div>

          <div
            className="dasbord-admin-left-paragraph"
            style={{ height: "700px" }}
          >
            <p>پیام های اخیر با کارفرما در پروژه سایت فانتزی قهوه</p>
            <div className="project-task-div1"></div>
            <div className="project-task-div2"></div>
            <div className="project-task-div3"></div>
            <div className="project-task-div4"></div>
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <button className="dashbord-admin-left-btn1">تایید سفارش </button>
              <button className="dashbord-admin-left-btn2">
                عدم تایید سفارش - ارسال پیام
              </button>
            </div>
          </div>

          <div className="dasbord-admin-left-paragraph2">
            <p className="task-project-div3-p">
              {" "}
              مشخص کردن تسک های پروژه سایت فانتزی قهوه
            </p>
            <hr className="task-project-div3-line" />

            <div
              class="accordion"
              id="accordionExample"
              style={{ width: "320px" }}
            >
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingNine">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="true"
                    aria-controls="collapseNine"
                    style={{ gap: "13rem" }}
                  >
                    فاز یک{" "}
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse "
                  aria-labelledby="headingNine"
                  data-bs-parent="#accordionExample"
                  id="collapseNine"
                >
                  <div class="accordion-body">
                    <div className=" task-project-inputs">
                      <label>نام تسک</label>
                      <input type="text" />
                    </div>
                    <div className=" task-project-inputs">
                      <label>درصد دریافتی فریلنسر از این تسک</label>
                      <input type="text" />
                    </div>
                    <hr className="task-project-div3-line" />
                    <p style={{ marginTop: "25px", lineHeight: "45px" }}>
                      جسله با کارفرما برای تعیین نیاز مندی ها <br /> ( 10%
                      )تحلیل بازار و رقبا ( 5% )تعیین ویژگی‌های کلیدی (ثبت‌نام،
                      منو غذا، سبد خرید، پرداخت آنلاین)( 7% )طراحی وایرفریم
                      صفحات اصلی (Home, منو، صفحه سفارش، داشبورد کاربر) <br /> (
                      10 % )طراحی پایگاه داده (ERD ساده: کاربر، غذا، سفارش،
                      پرداخت) ( 10% )
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTen">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                    style={{ gap: "13rem" }}
                  >
                    فاز دو
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                  id="collapseTen"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cumque dicta enim cupiditate natus dolorum distinctio,
                    impedit tenetur nisi laboriosam ut animi delectus quod quos
                    ipsum corporis magnam, nobis neque mollitia.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEleven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEleven"
                    aria-expanded="false"
                    aria-controls="collapseEleven"
                    style={{ gap: "13rem" }}
                  >
                    {" "}
                    فاز سه
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse"
                  aria-labelledby="headingEleven"
                  data-bs-parent="#accordionExample"
                  id="collapseEleven"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero ut accusantium ea a ipsa, aliquam nemo aperiam porro
                    deserunt aspernatur sequi amet voluptatibus, fugiat nobis.
                    Atque voluptatibus quibusdam placeat voluptas?
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <button
                style={{
                  width: "150px",
                  height: "40px",
                  backgroundColor: "rgba(37, 153, 132, 1)",
                  borderRadius: "10px",
                  marginTop: "1rem",
                  marginRight: "10rem",
                }}
              >
                ثبت تسک ها{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
