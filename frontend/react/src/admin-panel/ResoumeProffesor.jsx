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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            position: "absolute",
          }}
        >
          <div style={{ marginRight: "-60rem" }}>
            <div className="dashbord-admin-profile">
              <img src="../img/img-person.jpg" alt="img" />
              <div>
                <h5>شهلا ایمانی</h5>
                <p>ادمین سطح 2</p>
              </div>
            </div>

            <div
              class="accordion d-flex flex-column justify-content-center  admin-dashbord-Acordin"
              id="accordionExample"
            >
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button btn-img"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <img src="../img/calling.svg" alt="icon-dash" />{" "}
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "right",
                        marginTop: "0.7rem",
                        marginLeft: "0.4rem",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      مدیر گروه ها
                    </p>
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                  id="collapseOne"
                >
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed btn-img"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <img
                      className=""
                      src="../img/calling.svg"
                      alt="icon-dash"
                    />{" "}
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "right",
                        marginTop: "0.7rem",
                        width: "100px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      پنل کارفرما
                    </p>
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                  id="collapseTwo"
                >
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      تایید پروژه های جدید{" "}
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      تسک بندی پروژه های جدید
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      ثبت اطلاعیه جدید به کارفرما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      چت با کارفرما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      هزینه ها؟؟
                    </Link>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEight">
                  <button
                    class="accordion-button collapsed btn-img"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    <img
                      className=""
                      src="../img/calling.svg"
                      alt="icon-dash"
                    />{" "}
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "right",
                        marginTop: "0.7rem",
                        width: "100px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      پنل فریلنسر{" "}
                    </p>
                  </button>
                </h2>

                <div
                  class="accordion-collapse collapse"
                  aria-labelledby="headingEight"
                  data-bs-parent="#accordionExample"
                  id="collapseEight"
                >
                  <div class="accordion-body">
                    <Link
                      class="text-decoration-none professor-font"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "8px",
                      }}
                      to={"#"}
                    >
                      {" "}
                      لیست و افزودن فریلنسر{" "}
                    </Link>
                  </div>

                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      لیست وضعیت پروژه{" "}
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      فایل تسک های پروژه ها
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      درخواست های تسک پروژه
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      چت با فریلنسرها{" "}
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      تایید فرایند مالی تسک ها
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      پروژه های انجام شده
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      تایید اطلاعات فریلنسر
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      هزینه ها
                    </Link>
                  </div>
                </div>
              </div>

              <div class="accordion-item ">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed btn-img"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <img
                      className=""
                      src="../img/calling.svg"
                      alt="icon-dash"
                    />{" "}
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "right",
                        marginTop: "0.7rem",
                        width: "100px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      پنل اساتید{" "}
                    </p>
                  </button>
                </h2>

                <div
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                  id="collapseThree"
                >
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      نمایش اساتید و سطح بندی
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      تایید رزومه استاد
                    </Link>
                  </div>

                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      تایید اطلاعات شخصی
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      مدیریت راهنماهای عملکردی
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      آموزش های ضبط شده
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      کلاس های خصوصی آنلاین
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      کلاس های ضبط شده
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      {" "}
                      کلاس های خصوصی حضوری
                    </Link>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed btn-img"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <img
                      className=""
                      src="../img/calling.svg"
                      alt="icon-dash"
                    />{" "}
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "right",
                        marginTop: "0.7rem",
                        width: "100px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      تدریس{" "}
                    </p>
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                  id="collapseFive"
                >
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button
                    class="accordion-button collapsed btn-img"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    <img
                      className=""
                      src="../img/calling.svg"
                      alt="icon-dash"
                    />{" "}
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "right",
                        marginTop: "0.7rem",
                        width: "100px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      دوره ها{" "}
                    </p>
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                  id="collapseSix"
                >
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button
                    class="accordion-button collapsed btn-img"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    <img
                      className=""
                      src="../img/calling.svg"
                      alt="icon-dash"
                    />{" "}
                    <p
                      style={{
                        fontSize: "14px",
                        textAlign: "right",
                        marginTop: "0.7rem",
                        width: "100px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      پروژه ها{" "}
                    </p>
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                  id="collapseSeven"
                >
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                  <div class="accordion-body">
                    <Link class="text-decoration-none professor-font" to={"#"}>
                      محصولات ما
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  start */}
        <div className="dashbord-admin-left-container-fileTask">
          <div
            className="accordion"
            id="accordionExample"
            style={{ width: "100%" }}
          >
            <div className="accordion-item">
              <div
                className="accordion-collapse collapse"
                aria-labelledby="headingTwenty"
                data-bs-parent="#accordionExample"
                id="collapseTwenty"
              >
                <div
                  className="accordion-collapse collapse "
                  aria-labelledby="headingNine"
                  data-bs-parent="#accordionExample"
                  id="collapseNine"
                >
                  <div className="accordion-body">
                    <div
                      dir="rtl"
                      className="table-responsive"
                      style={{ overflowY: "hidden", overflowX: "hidden" }}
                    >
                      <table
                        className="table"
                        style={{ width: "97%", marginRight: "2.5rem" }}
                      >
                        <thead>
                          <tr>
                            <th
                              style={{
                                backgroundColor: " #001f3f",
                                color: "white",
                                borderRadius: "0 10px 10px 0",
                              }}
                            >
                              {" "}
                              نام تسک
                              <i className="bi bi-arrow-down"></i>
                            </th>
                            <th
                              style={{
                                backgroundColor: " #001f3f",
                                color: "white",
                              }}
                            >
                              {" "}
                              فریلنسر
                              <i className="bi bi-arrow-down"></i>
                            </th>

                            <th
                              style={{
                                backgroundColor: " #001f3f",
                                color: "white",
                              }}
                            >
                              وضعیت
                              <i className="bi bi-arrow-down"></i>
                            </th>

                            <th
                              style={{
                                backgroundColor: " #001f3f",
                                color: "white",
                              }}
                            >
                              {" "}
                              درصد پیشرفت
                              <i className="bi bi-arrow-down"></i>
                            </th>

                            <th
                              style={{
                                backgroundColor: " #001f3f",
                                color: "white",
                              }}
                            >
                              {" "}
                              فایل
                              <i className="bi bi-arrow-down"></i>
                            </th>

                            <th
                              style={{
                                backgroundColor: " #001f3f",
                                color: "white",
                                borderRadius: "10px 0 0 10px",
                              }}
                            >
                              {" "}
                              نمایش فایل
                              {/* <i class="bi bi-arrow-down"></i> */}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"> صحبت با کارفرما</th>
                            <td> ایمان محمدی</td>
                            <td style={{ color: "rgba(37, 153, 132, 1)" }}>
                              تکمیل شده
                            </td>
                            <td style={{ color: "rgba(37, 153, 132, 1)" }}>
                              {" "}
                              100 درصد
                            </td>
                            <td style={{ color: "rgba(37, 153, 132, 1)" }}>
                              {" "}
                              ارسال شده
                            </td>
                            <td style={{ color: "rgba(37, 153, 132, 1)" }}>
                              نمایش فایل
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div
                        dir="rtl"
                        className="table-responsive"
                        style={{ overflowY: "hidden", overflowX: "hidden" }}
                      >
                        <table
                          className="table"
                          style={{ width: "97%", marginRight: "2.5rem" }}
                        >
                          <thead>
                            <tr></tr>
                          </thead>
                          <tbody></tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHoo">
                <button
                  className="accordion-button collapsed btn-img"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHoo"
                  aria-expanded="false"
                  aria-controls="collapseHoo"
                >
                  <div className="title-accordion-rows">
                    <div className="title-accordion-row">
                      <p style={{ fontWeight: "600" }}>
                        {" "}
                        محمد ایمانی در انتظار تایید رزومه{" "}
                      </p>
                    </div>

                    <div className="title-accordion-row">
                      <button
                        style={{ backgroundColor: "rgba(41, 172, 149, 1)" }}
                      >
                        تایید
                      </button>
                      <button
                        style={{ backgroundColor: "rgba(198, 48, 62, 1)" }}
                      >
                        لغو
                      </button>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                className="accordion-collapse collapse"
                aria-labelledby="headingHoo"
                data-bs-parent="#accordionExample"
                id="collapseHoo"
              >
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  درباره من
                </p>
                <p style={{ paddingRight: "15px" }}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  اطلاعات علمی رزومه
                </p>

                <div className="resome-info">
                  <p style={{ paddingRight: "15px" }}>نام: محمد</p>
                  <p>مرتبه علمی : دانشجو</p>
                  <p>گرایش تخصصی:مهندسی حرفه ای نرم افزار</p>
                </div>
                <div className="resome-info">
                  <p style={{ paddingRight: "15px" }}>نام خانوادگی : ایمانی</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>دانشگاه : دانشگاه آزاد واحد قزوین (باراجین)</p>
                </div>
                <div className="resome-info">
                  <p> </p>
                  <p>ایمیل شخصی : jack@gmail.com</p>
                  <p> تلفن شخصی : 09045351612</p>
                </div>
                <div className="resome-info">
                  <p> </p>
                  <p>ایمیل دانشگاه : azad@azad.com</p>
                  <p>لینک مقاله در گوگل اسکولار : google.com</p>
                </div>
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  سوابق تحصیلی
                </p>
                <div className="resome-info">
                  <p>کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>دانشگاه : دانشگاه آزاد واحد قزوین (باراجین)</p>
                </div>
                <div className="resome-info">
                  <p>نام خانوادگی : ایمانی</p>
                  <p> </p>
                  <p> </p>
                </div>

                <div className="resome-info">
                  <p> کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>دانشگاه : دانشگاه آزاد واحد قزوین (باراجین)</p>
                </div>
                <div className="resome-info">
                  <p>نام خانوادگی : ایمانی</p>
                  <p> </p>
                  <p> </p>
                </div>

                <div className="resome-info">
                  <p>کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>مدت : از سال 1401 تا کنون</p>
                </div>
                <div className="resome-info">
                  <p>نام خانوادگی : ایمانی</p>
                  <p> </p>
                  <p> </p>
                </div>
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  مسلط به دروس و زبان های{" "}
                </p>
                <div className="lesson-languaghe">
                  <button>bootstrap</button>
                  <button>
                    مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم افزار
                  </button>
                  <button>
                    آزمایشگاه مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم
                    افزار
                  </button>
                </div>

                <div
                  className="lesson-languaghe"
                  style={{ marginRight: "1rem", marginTop: "20px" }}
                >
                  <button>
                    مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم افزار
                  </button>
                  <button>
                    آزمایشگاه مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم
                    افزار
                  </button>
                </div>
                <p
                  style={{
                    fontWeight: "700",
                    paddingRight: "15px",
                    marginTop: "35px",
                  }}
                >
                  مسلط به دروس و زبان های{" "}
                </p>
                <p style={{ paddingRight: "15px" }}>
                  معلم کامپیوتر در هنرستان از سال 1399 تا سال 1400
                </p>
                <p style={{ paddingRight: "15px" }}>
                  معلم کامپیوتر در هنرستان از سال 1399 تا سال 1400
                </p>

                <p
                  style={{
                    fontWeight: "700",
                    paddingRight: "15px",
                    marginTop: "35px",
                  }}
                >
                  {" "}
                  بارگذاری ویدیو معرفی{" "}
                </p>
                <p style={{ paddingRight: "15px" }}>عنوان ویدیو : درباره من</p>
                <p style={{ paddingRight: "15px" }}>مدت زمان ویدیو: دقیقه</p>
                <p style={{ paddingRight: "15px" }}>
                  معلم کامپیوتر در هنرستان از سال 1399 تا سال 1400
                </p>

                <video
                  className="video-resome-professor"
                  src="#"
                  controls
                ></video>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHala">
                <button
                  className="accordion-button collapsed btn-img"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHala"
                  aria-expanded="false"
                  aria-controls="collapseHala"
                >
                  <div className="title-accordion-rows">
                    <div className="title-accordion-row">
                      <p style={{ fontWeight: "600" }}>
                        {" "}
                        محمد ایمانی در انتظار تایید رزومه{" "}
                      </p>
                    </div>

                    <div className="title-accordion-row">
                      <button
                        style={{ backgroundColor: "rgba(41, 172, 149, 1)" }}
                      >
                        تایید
                      </button>
                      <button
                        style={{ backgroundColor: "rgba(198, 48, 62, 1)" }}
                      >
                        لغو
                      </button>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                className="accordion-collapse collapse"
                aria-labelledby="headingHala"
                data-bs-parent="#accordionExample"
                id="collapseHala"
              >
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  درباره من
                </p>
                <p style={{ paddingRight: "15px" }}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  اطلاعات علمی رزومه
                </p>

                <div className="resome-info">
                  <p style={{ paddingRight: "15px" }}>نام: محمد</p>
                  <p>مرتبه علمی : دانشجو</p>
                  <p>گرایش تخصصی:مهندسی حرفه ای نرم افزار</p>
                </div>
                <div className="resome-info">
                  <p style={{ paddingRight: "15px" }}>نام خانوادگی : ایمانی</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>دانشگاه : دانشگاه آزاد واحد قزوین (باراجین)</p>
                </div>
                <div className="resome-info">
                  <p> </p>
                  <p>ایمیل شخصی : jack@gmail.com</p>
                  <p> تلفن شخصی : 09045351612</p>
                </div>
                <div className="resome-info">
                  <p> </p>
                  <p>ایمیل دانشگاه : azad@azad.com</p>
                  <p>لینک مقاله در گوگل اسکولار : google.com</p>
                </div>
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  سوابق تحصیلی
                </p>
                <div className="resome-info">
                  <p>کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>دانشگاه : دانشگاه آزاد واحد قزوین (باراجین)</p>
                </div>
                <div className="resome-info">
                  <p>نام خانوادگی : ایمانی</p>
                  <p> </p>
                  <p> </p>
                </div>

                <div className="resome-info">
                  <p> کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>دانشگاه : دانشگاه آزاد واحد قزوین (باراجین)</p>
                </div>
                <div className="resome-info">
                  <p>نام خانوادگی : ایمانی</p>
                  <p> </p>
                  <p> </p>
                </div>

                <div className="resome-info">
                  <p>کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>مدت : از سال 1401 تا کنون</p>
                </div>
                <div className="resome-info">
                  <p>نام خانوادگی : ایمانی</p>
                  <p> </p>
                  <p> </p>
                </div>
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  مسلط به دروس و زبان های{" "}
                </p>
                <div className="lesson-languaghe">
                  <button>bootstrap</button>
                  <button>
                    مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم افزار
                  </button>
                  <button>
                    آزمایشگاه مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم
                    افزار
                  </button>
                </div>

                <div
                  className="lesson-languaghe"
                  style={{ marginRight: "1rem", marginTop: "20px" }}
                >
                  <button>
                    مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم افزار
                  </button>
                  <button>
                    آزمایشگاه مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم
                    افزار
                  </button>
                </div>
                <p
                  style={{
                    fontWeight: "700",
                    paddingRight: "15px",
                    marginTop: "35px",
                  }}
                >
                  مسلط به دروس و زبان های{" "}
                </p>
                <p style={{ paddingRight: "15px" }}>
                  معلم کامپیوتر در هنرستان از سال 1399 تا سال 1400
                </p>
                <p style={{ paddingRight: "15px" }}>
                  معلم کامپیوتر در هنرستان از سال 1399 تا سال 1400
                </p>

                <p
                  style={{
                    fontWeight: "700",
                    paddingRight: "15px",
                    marginTop: "35px",
                  }}
                >
                  {" "}
                  بارگذاری ویدیو معرفی{" "}
                </p>
                <p style={{ paddingRight: "15px" }}>عنوان ویدیو : درباره من</p>
                <p style={{ paddingRight: "15px" }}>مدت زمان ویدیو: دقیقه</p>
                <p style={{ paddingRight: "15px" }}>
                  معلم کامپیوتر در هنرستان از سال 1399 تا سال 1400
                </p>

                <video
                  className="video-resome-professor"
                  src="#"
                  controls
                ></video>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHamim">
                <button
                  className="accordion-button collapsed btn-img"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHamim"
                  aria-expanded="false"
                  aria-controls="collapseHamim"
                >
                  <div className="title-accordion-rows">
                    <div className="title-accordion-row">
                      <p style={{ fontWeight: "600" }}>
                        {" "}
                        محمد ایمانی در انتظار تایید رزومه{" "}
                      </p>
                    </div>

                    <div className="title-accordion-row">
                      <button
                        style={{ backgroundColor: "rgba(41, 172, 149, 1)" }}
                      >
                        تایید
                      </button>
                      <button
                        style={{ backgroundColor: "rgba(198, 48, 62, 1)" }}
                      >
                        لغو
                      </button>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                className="accordion-collapse collapse"
                aria-labelledby="headingHamim"
                data-bs-parent="#accordionExample"
                id="collapseHamim"
              >
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  درباره من
                </p>
                <p style={{ paddingRight: "15px" }}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  اطلاعات علمی رزومه
                </p>

                <div className="resome-info">
                  <p style={{ paddingRight: "15px" }}>نام: محمد</p>
                  <p>مرتبه علمی : دانشجو</p>
                  <p>گرایش تخصصی:مهندسی حرفه ای نرم افزار</p>
                </div>
                <div className="resome-info">
                  <p style={{ paddingRight: "15px" }}>نام خانوادگی : ایمانی</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>دانشگاه : دانشگاه آزاد واحد قزوین (باراجین)</p>
                </div>
                <div className="resome-info">
                  <p> </p>
                  <p>ایمیل شخصی : jack@gmail.com</p>
                  <p> تلفن شخصی : 09045351612</p>
                </div>
                <div className="resome-info">
                  <p> </p>
                  <p>ایمیل دانشگاه : azad@azad.com</p>
                  <p>لینک مقاله در گوگل اسکولار : google.com</p>
                </div>
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  سوابق تحصیلی
                </p>
                <div className="resome-info">
                  <p>کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>دانشگاه : دانشگاه آزاد واحد قزوین (باراجین)</p>
                </div>
                <div className="resome-info">
                  <p>نام خانوادگی : ایمانی</p>
                  <p> </p>
                  <p> </p>
                </div>

                <div className="resome-info">
                  <p> کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>دانشگاه : دانشگاه آزاد واحد قزوین (باراجین)</p>
                </div>
                <div className="resome-info">
                  <p>نام خانوادگی : ایمانی</p>
                  <p> </p>
                  <p> </p>
                </div>

                <div className="resome-info">
                  <p>کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>مدت : از سال 1401 تا کنون</p>
                </div>
                <div className="resome-info">
                  <p>نام خانوادگی : ایمانی</p>
                  <p> </p>
                  <p> </p>
                </div>
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  مسلط به دروس و زبان های{" "}
                </p>
                <div className="lesson-languaghe">
                  <button>bootstrap</button>
                  <button>
                    مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم افزار
                  </button>
                  <button>
                    آزمایشگاه مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم
                    افزار
                  </button>
                </div>

                <div
                  className="lesson-languaghe"
                  style={{ marginRight: "1rem", marginTop: "20px" }}
                >
                  <button>
                    مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم افزار
                  </button>
                  <button>
                    آزمایشگاه مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم
                    افزار
                  </button>
                </div>
                <p
                  style={{
                    fontWeight: "700",
                    paddingRight: "15px",
                    marginTop: "35px",
                  }}
                >
                  مسلط به دروس و زبان های{" "}
                </p>
                <p style={{ paddingRight: "15px" }}>
                  معلم کامپیوتر در هنرستان از سال 1399 تا سال 1400
                </p>
                <p style={{ paddingRight: "15px" }}>
                  معلم کامپیوتر در هنرستان از سال 1399 تا سال 1400
                </p>

                <p
                  style={{
                    fontWeight: "700",
                    paddingRight: "15px",
                    marginTop: "35px",
                  }}
                >
                  {" "}
                  بارگذاری ویدیو معرفی{" "}
                </p>
                <p style={{ paddingRight: "15px" }}>عنوان ویدیو : درباره من</p>
                <p style={{ paddingRight: "15px" }}>مدت زمان ویدیو: دقیقه</p>
                <p style={{ paddingRight: "15px" }}>
                  معلم کامپیوتر در هنرستان از سال 1399 تا سال 1400
                </p>

                <video
                  className="video-resome-professor"
                  src="#"
                  controls
                ></video>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHay">
                <button
                  className="accordion-button collapsed btn-img"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHay"
                  aria-expanded="false"
                  aria-controls="collapseHay"
                >
                  <div className="title-accordion-rows">
                    <div className="title-accordion-row">
                      <p style={{ fontWeight: "600" }}>
                        {" "}
                        محمد ایمانی در انتظار تایید رزومه{" "}
                      </p>
                    </div>

                    <div className="title-accordion-row">
                      <button
                        style={{ backgroundColor: "rgba(41, 172, 149, 1)" }}
                      >
                        تایید
                      </button>
                      <button
                        style={{ backgroundColor: "rgba(198, 48, 62, 1)" }}
                      >
                        لغو
                      </button>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                className="accordion-collapse collapse"
                aria-labelledby="headingHay"
                data-bs-parent="#accordionExample"
                id="collapseHay"
              >
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  درباره من
                </p>
                <p style={{ paddingRight: "15px" }}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  اطلاعات علمی رزومه
                </p>

                <div className="resome-info">
                  <p style={{ paddingRight: "15px" }}>نام: محمد</p>
                  <p>مرتبه علمی : دانشجو</p>
                  <p>گرایش تخصصی:مهندسی حرفه ای نرم افزار</p>
                </div>
                <div className="resome-info">
                  <p style={{ paddingRight: "15px" }}>نام خانوادگی : ایمانی</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>دانشگاه : دانشگاه آزاد واحد قزوین (باراجین)</p>
                </div>
                <div className="resome-info">
                  <p> </p>
                  <p>ایمیل شخصی : jack@gmail.com</p>
                  <p> تلفن شخصی : 09045351612</p>
                </div>
                <div className="resome-info">
                  <p> </p>
                  <p>ایمیل دانشگاه : azad@azad.com</p>
                  <p>لینک مقاله در گوگل اسکولار : google.com</p>
                </div>
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  سوابق تحصیلی
                </p>
                <div className="resome-info">
                  <p>کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>دانشگاه : دانشگاه آزاد واحد قزوین (باراجین)</p>
                </div>
                <div className="resome-info">
                  <p>نام خانوادگی : ایمانی</p>
                  <p> </p>
                  <p> </p>
                </div>

                <div className="resome-info">
                  <p> کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>دانشگاه : دانشگاه آزاد واحد قزوین (باراجین)</p>
                </div>
                <div className="resome-info">
                  <p>نام خانوادگی : ایمانی</p>
                  <p> </p>
                  <p> </p>
                </div>

                <div className="resome-info">
                  <p>کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار</p>
                  <p>رشته تخصصی : کامپیوتر </p>
                  <p>مدت : از سال 1401 تا کنون</p>
                </div>
                <div className="resome-info">
                  <p>نام خانوادگی : ایمانی</p>
                  <p> </p>
                  <p> </p>
                </div>
                <p style={{ fontWeight: "700", paddingRight: "15px" }}>
                  مسلط به دروس و زبان های{" "}
                </p>
                <div className="lesson-languaghe">
                  <button>bootstrap</button>
                  <button>
                    مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم افزار
                  </button>
                  <button>
                    آزمایشگاه مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم
                    افزار
                  </button>
                </div>

                <div
                  className="lesson-languaghe"
                  style={{ marginRight: "1rem", marginTop: "20px" }}
                >
                  <button>
                    مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم افزار
                  </button>
                  <button>
                    آزمایشگاه مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم
                    افزار
                  </button>
                </div>
                <p
                  style={{
                    fontWeight: "700",
                    paddingRight: "15px",
                    marginTop: "35px",
                  }}
                >
                  مسلط به دروس و زبان های{" "}
                </p>
                <p style={{ paddingRight: "15px" }}>
                  معلم کامپیوتر در هنرستان از سال 1399 تا سال 1400
                </p>
                <p style={{ paddingRight: "15px" }}>
                  معلم کامپیوتر در هنرستان از سال 1399 تا سال 1400
                </p>

                <p
                  style={{
                    fontWeight: "700",
                    paddingRight: "15px",
                    marginTop: "35px",
                  }}
                >
                  {" "}
                  بارگذاری ویدیو معرفی{" "}
                </p>
                <p style={{ paddingRight: "15px" }}>عنوان ویدیو : درباره من</p>
                <p style={{ paddingRight: "15px" }}>مدت زمان ویدیو: دقیقه</p>
                <p style={{ paddingRight: "15px" }}>
                  معلم کامپیوتر در هنرستان از سال 1399 تا سال 1400
                </p>

                <video
                  className="video-resome-professor"
                  src="#"
                  controls
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
