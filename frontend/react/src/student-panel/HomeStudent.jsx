import React from "react";
import "../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header";
import Sidebar from "./components/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1">
          <div className="container-fluid py-3">
            <div class="alert alert-success text-center rounded-4" role="alert">
              <span className="">
                پخش زنده ی کلاس کنکور در حال برگزاری است{" "}
                <a href="/" className="text-decoration-none text-black fw-bold">
                  کلیک
                </a>{" "}
                کنید
              </span>
            </div>            
            <div className="row" style={{ minHeight: "86vh" }}>
              <div className="col-md-5 rounded-4 border border-light-subtle shadow-sm">
                <div class="card m-3" style={{ backgroundColor: "#D9EBFF" }}>
                  <div class="card-body">
                    <h5 class="card-title">دوره افتخاری مخصوص شما</h5>
                    <p class="card-text">
                      یک جلسه ی رایگان از دوره ی 0 تا 100 کنکور با امید باقری
                      جزو انجمن علمی دانشگاه تهران
                    </p>
                    <div
                      class="card w-50 mx-auto"
                      style={{ backgroundColor: "#BCE4C5" }}
                    >
                      <div class="card-body">
                        <h6 class="card-text text-center">کد تخفیف</h6>
                        <p class="card-text text-center">RT583J3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="position-relative">
                  <img src="/img/moneypanel.png" alt="" className="img-fluid" />
                  <div
                    className="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-1"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                  >
                    ٢,٥٠٠,٠٠٠ تومان
                  </div>
                </div>
                <div className="d-flex">
                  <div class="card mb-3 mx-2" style={{ maxWidth: "12rem" }}>
                    <div class="card-header text-bg-warning text-center">
                      دورخواست های تدریس
                    </div>
                    <div class="card-body shadow-sm text-center">
                      <p class="card-text">
                        کلاس خصوصی ریاضی گسسته در انتظار تایید استاد
                      </p>
                    </div>
                  </div>
                  <div class="card mb-3 mx-3" style={{ maxWidth: "12rem" }}>
                    <div class="card-header text-bg-primary text-center">
                      تخفیف مخصوص شما
                    </div>
                    <div class="card-body shadow-sm">
                      <p class="card-text"></p>
                    </div>
                  </div>
                  <div class="card mb-3 mx-3" style={{ maxWidth: "12rem" }}>
                    <div class="card-header text-bg-secandary text-center">
                      نزدیک ترین جلسه بعدی
                    </div>
                    <div class="card-body shadow-sm">
                      <p class="card-text text-center">
                        دوره آماده سازی برای کنکور 1405 در 3 ماه
                        <br />
                        فردا چهارشنبه
                        1404/12/20 ساعت 9 شب
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
