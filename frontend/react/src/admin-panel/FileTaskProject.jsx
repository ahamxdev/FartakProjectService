import React from "react";
import "../styles/home.css";
import { Link } from 'react-router-dom';



const DashboardLayout = () => {
  return (
    <>

      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        position: "relative",
      }}>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          position: "absolute",
        }}>
          <div style={{marginRight: "-60rem"}}>
            <div className="dashbord-admin-profile">
              <img src="../img/img-person.jpg" alt="img"/>
              <div>
                <h5>شهلا ایمانی</h5>
                <p>ادمین سطح 2</p>
              </div>
            </div>

            <div class="accordion d-flex flex-column justify-content-center  admin-dashbord-Acordin"
                 id="accordionExample">

              <div class="accordion-item">

                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button btn-img" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><img
                      src="../img/calling.svg" alt="icon-dash"/> <p style={{
                    fontSize: "14px",
                    textAlign: "right",
                    marginTop: "0.7rem",
                    marginLeft: "0.4rem",
                    fontWeight: "700"
                  }}> مدیر گروه ها</p></button>
                </h2>
                <div class="accordion-collapse collapse " aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample" id="collapseOne">
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><img
                      className="" src="../img/calling.svg" alt="icon-dash"/> <p style={{
                    fontSize: "14px",
                    textAlign: "right",
                    marginTop: "0.7rem",
                    width: "100px",
                    fontWeight: "700"
                  }}> پنل کارفرما</p></button>
                </h2>
                <div class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"
                     id="collapseTwo">
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>تایید پروژه های
                    جدید </Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> تسک بندی پروژه
                    های جدید</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> ثبت اطلاعیه
                    جدید به کارفرما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> چت با
                    کارفرما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> هزینه
                    ها؟؟</Link></div>
                </div>
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEight">
                  <button class="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight"><img
                      className="" src="../img/calling.svg" alt="icon-dash"/> <p style={{
                    fontSize: "14px",
                    textAlign: "right",
                    marginTop: "0.7rem",
                    width: "100px",
                    fontWeight: "700"
                  }}> پنل فریلنسر </p></button>
                </h2>

                <div class="accordion-collapse collapse" aria-labelledby="headingEight"
                     data-bs-parent="#accordionExample" id="collapseEight">

                  <div class="accordion-body"><Link class="text-decoration-none professor-font" style={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "8px"
                  }} to={"#"}> لیست و افزودن فریلنسر </Link></div>

                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> لیست وضعیت
                    پروژه </Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> فایل تسک های
                    پروژه ها</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> درخواست های
                    تسک پروژه</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>چت با
                    فریلنسرها </Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> تایید فرایند
                    مالی تسک ها</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> پروژه های
                    انجام شده</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> تایید اطلاعات
                    فریلنسر</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> هزینه
                    ها</Link></div>


                </div>
              </div>


              <div class="accordion-item ">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><img
                      className="" src="../img/calling.svg" alt="icon-dash"/> <p style={{
                    fontSize: "14px",
                    textAlign: "right",
                    marginTop: "0.7rem",
                    width: "100px",
                    fontWeight: "700"
                  }}> پنل اساتید </p></button>
                </h2>

                <div class="accordion-collapse collapse" aria-labelledby="headingThree"
                     data-bs-parent="#accordionExample" id="collapseThree">
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> نمایش اساتید و
                    سطح بندی</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> تایید رزومه
                    استاد</Link></div>

                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>تایید اطلاعات
                    شخصی</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> مدیریت
                    راهنماهای عملکردی</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> آموزش های ضبط
                    شده</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>کلاس های خصوصی
                    آنلاین</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> کلاس های ضبط
                    شده</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}> کلاس های خصوصی
                    حضوری</Link></div>

                </div>
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"><img
                      className="" src="../img/calling.svg" alt="icon-dash"/> <p style={{
                    fontSize: "14px",
                    textAlign: "right",
                    marginTop: "0.7rem",
                    width: "100px",
                    fontWeight: "700"
                  }}> تدریس </p></button>
                </h2>
                <div class="accordion-collapse collapse" aria-labelledby="headingFive"
                     data-bs-parent="#accordionExample" id="collapseFive">
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                </div>
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button class="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"><img
                      className="" src="../img/calling.svg" alt="icon-dash"/> <p style={{
                    fontSize: "14px",
                    textAlign: "right",
                    marginTop: "0.7rem",
                    width: "100px",
                    fontWeight: "700"
                  }}> دوره ها </p></button>
                </h2>
                <div class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample"
                     id="collapseSix">
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                </div>
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button class="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven"><img
                      className="" src="../img/calling.svg" alt="icon-dash"/> <p style={{
                    fontSize: "14px",
                    textAlign: "right",
                    marginTop: "0.7rem",
                    width: "100px",
                    fontWeight: "700"
                  }}> پروژه ها </p></button>
                </h2>
                <div class="accordion-collapse collapse" aria-labelledby="headingSeven"
                     data-bs-parent="#accordionExample" id="collapseSeven">
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                  <div class="accordion-body"><Link class="text-decoration-none professor-font" to={"#"}>محصولات
                    ما</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  start */}
        <div className="dashbord-admin-left-container-fileTask">


          <div className="accordion" id="accordionExample" style={{width: "100%"}}>
            <div className="accordion-item">


              <div className="accordion-collapse collapse" aria-labelledby="headingTwenty"
                   data-bs-parent="#accordionExample" id="collapseTwenty">


                <div className="accordion-collapse collapse " aria-labelledby="headingNine"
                     data-bs-parent="#accordionExample" id="collapseNine">
                  <div className="accordion-body">
                    <div dir="rtl" className="table-responsive" style={{overflowY: "hidden", overflowX: "hidden"}}>
                      <table className="table" style={{width: "97%", marginRight: "2.5rem"}}>
                        <thead>
                        <tr>
                          <th style={{backgroundColor: " #001f3f", color: "white", borderRadius: "0 10px 10px 0"}}> نام
                            تسک
                            <i className="bi bi-arrow-down"></i>
                          </th>
                          <th style={{backgroundColor: " #001f3f", color: "white"}}> فریلنسر
                            <i className="bi bi-arrow-down"></i>
                          </th>

                          <th style={{backgroundColor: " #001f3f", color: "white"}}>وضعیت
                            <i className="bi bi-arrow-down"></i>
                          </th>


                          <th style={{backgroundColor: " #001f3f", color: "white"}}> درصد پیشرفت
                            <i className="bi bi-arrow-down"></i>

                          </th>

                          <th style={{backgroundColor: " #001f3f", color: "white"}}> فایل
                            <i className="bi bi-arrow-down"></i>

                          </th>

                          <th style={{
                            backgroundColor: " #001f3f",
                            color: "white",
                            borderRadius: "10px 0 0 10px"
                          }}> نمایش فایل
                            {/* <i class="bi bi-arrow-down"></i> */}

                          </th>


                        </tr>
                        </thead>
                        <tbody>


                        <tr>
                          <th scope="row"> صحبت با کارفرما</th>
                          <td> ایمان محمدی</td>
                          <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                          <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                          <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                          <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                        </tr>
                        </tbody>
                      </table>


                      <div dir="rtl" className="table-responsive" style={{overflowY: "hidden", overflowX: "hidden"}}>
                        <table className="table" style={{width: "97%", marginRight: "2.5rem"}}>
                          <thead>
                          <tr>
                          </tr>
                          </thead>
                          <tbody>







                          </tbody>
                        </table>


                      </div>

                    </div>

                  </div>

                </div>


              </div>

            </div>


            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHoo">
                <button className="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseHoo" aria-expanded="false" aria-controls="collapseHoo">
                  <div>
                    <div className="title-accordion">
                      <p>نام پروژه : سایت عرفانی</p>
                      <p> درصد پیشرفت :23 درصد</p>
                      <p style={{marginLeft: "7rem"}}>نوع پرداخت : نوع دوم 25%</p>
                    </div>

                    <div className="title-accordion">
                      <p>وضعیت پرداخت : در حال انجام</p>
                      <p style={{marginRight: "-3rem"}}> نوع پروژه : طراحی وب سایت</p>
                      <p style={{marginLeft: "7rem"}}>c</p>
                    </div>

                  </div>
                </button>
              </h2>
              <div className="accordion-collapse collapse" aria-labelledby="headingHoo"
                   data-bs-parent="#accordionExample"
                   id="collapseHoo">
                <div dir="rtl" className="table-responsive" style={{overflowY: "hidden", overflowX: "hidden"}}>
                  <table className="table" style={{width: "97%", marginRight: "2.5rem"}}>
                    <thead>
                    <tr>
                      <th style={{backgroundColor: " #001f3f", color: "white", borderRadius: "0 10px 10px 0"}}> نام
                        تسک
                        <i className="bi bi-arrow-down"></i>
                      </th>
                      <th style={{backgroundColor: " #001f3f", color: "white"}}> فریلنسر
                        <i className="bi bi-arrow-down"></i>
                      </th>

                      <th style={{backgroundColor: " #001f3f", color: "white"}}>وضعیت
                        <i className="bi bi-arrow-down"></i>
                      </th>


                      <th style={{backgroundColor: " #001f3f", color: "white"}}> درصد پیشرفت
                        <i className="bi bi-arrow-down"></i>

                      </th>

                      <th style={{backgroundColor: " #001f3f", color: "white"}}> فایل
                        <i className="bi bi-arrow-down"></i>

                      </th>

                      <th style={{
                        backgroundColor: " #001f3f",
                        color: "white",
                        borderRadius: "10px 0 0 10px"
                      }}> نمایش فایل
                        {/* <i class="bi bi-arrow-down"></i> */}

                      </th>


                    </tr>
                    </thead>
                    <tbody>


                    <tr>
                      <th scope="row"> صحبت با کارفرما</th>
                      <td> ایمان محمدی</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                    </tr>
                    </tbody>
                  </table>
                  <div className="div-formated">
                    <div>
                      <img src="../img/file-png.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-video.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-doc.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-pdf.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>
                  </div>

                  <div dir="rtl" className="table-responsive" style={{overflowY: "hidden", overflowX: "hidden"}}>
                    <table className="table" style={{width: "97%", marginRight: "2.5rem"}}>
                      <thead>
                      <tr>
                      </tr>
                      </thead>
                      <tbody>


                      <tr>
                        <th scope="row"> صحبت با کارفرما</th>
                        <td> ایمان محمدی</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                      </tr>
                      <tr>
                        <th scope="row"> صحبت با کارفرما</th>
                        <td> ایمان محمدی</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                      </tr>
                      <tr>
                        <th scope="row"> صحبت با کارفرما</th>
                        <td> ایمان محمدی</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                      </tr>
                      </tbody>
                    </table>


                  </div>
                </div>


              </div>
            </div>


            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHala">
                <button className="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseHala" aria-expanded="false" aria-controls="collapseHala">
                  <div>
                    <div className="title-accordion">
                      <p>نام پروژه : سایت عرفانی</p>
                      <p> درصد پیشرفت :23 درصد</p>
                      <p style={{marginLeft: "7rem"}}>نوع پرداخت : نوع دوم 25%</p>
                    </div>

                    <div className="title-accordion">
                      <p>وضعیت پرداخت : در حال انجام</p>
                      <p style={{marginRight: "-3rem"}}> نوع پروژه : طراحی وب سایت</p>
                      <p style={{marginLeft: "7rem"}}>c</p>
                    </div>

                  </div>
                </button>
              </h2>
              <div className="accordion-collapse collapse" aria-labelledby="headingHala"
                   data-bs-parent="#accordionExample"
                   id="collapseHala">
                <div dir="rtl" className="table-responsive" style={{overflowY: "hidden", overflowX: "hidden"}}>
                  <table className="table" style={{width: "97%", marginRight: "2.5rem"}}>
                    <thead>
                    <tr>
                      <th style={{backgroundColor: " #001f3f", color: "white", borderRadius: "0 10px 10px 0"}}> نام
                        تسک
                        <i className="bi bi-arrow-down"></i>
                      </th>
                      <th style={{backgroundColor: " #001f3f", color: "white"}}> فریلنسر
                        <i className="bi bi-arrow-down"></i>
                      </th>

                      <th style={{backgroundColor: " #001f3f", color: "white"}}>وضعیت
                        <i className="bi bi-arrow-down"></i>
                      </th>


                      <th style={{backgroundColor: " #001f3f", color: "white"}}> درصد پیشرفت
                        <i className="bi bi-arrow-down"></i>

                      </th>

                      <th style={{backgroundColor: " #001f3f", color: "white"}}> فایل
                        <i className="bi bi-arrow-down"></i>

                      </th>

                      <th style={{
                        backgroundColor: " #001f3f",
                        color: "white",
                        borderRadius: "10px 0 0 10px"
                      }}> نمایش فایل
                        {/* <i class="bi bi-arrow-down"></i> */}

                      </th>


                    </tr>
                    </thead>
                    <tbody>


                    <tr>
                      <th scope="row"> صحبت با کارفرما</th>
                      <td> ایمان محمدی</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                    </tr>
                    </tbody>
                  </table>
                  <div className="div-formated">
                    <div>
                      <img src="../img/file-png.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-video.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-doc.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-pdf.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>
                  </div>

                  <div dir="rtl" className="table-responsive" style={{overflowY: "hidden", overflowX: "hidden"}}>
                    <table className="table" style={{width: "97%", marginRight: "2.5rem"}}>
                      <thead>
                      <tr>
                      </tr>
                      </thead>
                      <tbody>


                      <tr>
                        <th scope="row"> صحبت با کارفرما</th>
                        <td> ایمان محمدی</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                      </tr>
                      <tr>
                        <th scope="row"> صحبت با کارفرما</th>
                        <td> ایمان محمدی</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                      </tr>
                      <tr>
                        <th scope="row"> صحبت با کارفرما</th>
                        <td> ایمان محمدی</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                      </tr>
                      </tbody>
                    </table>


                  </div>
                </div>


              </div>
            </div>


            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHamim">
                <button className="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseHamim" aria-expanded="false" aria-controls="collapseHamim">
                  <div>
                    <div className="title-accordion">
                      <p>نام پروژه : سایت عرفانی</p>
                      <p> درصد پیشرفت :23 درصد</p>
                      <p style={{marginLeft: "7rem"}}>نوع پرداخت : نوع دوم 25%</p>
                    </div>

                    <div className="title-accordion">
                      <p>وضعیت پرداخت : در حال انجام</p>
                      <p style={{marginRight: "-3rem"}}> نوع پروژه : طراحی وب سایت</p>
                      <p style={{marginLeft: "7rem"}}>c</p>
                    </div>

                  </div>
                </button>
              </h2>
              <div className="accordion-collapse collapse" aria-labelledby="headingHamim"
                   data-bs-parent="#accordionExample"
                   id="collapseHamim">
                <div dir="rtl" className="table-responsive" style={{overflowY: "hidden", overflowX: "hidden"}}>
                  <table className="table" style={{width: "97%", marginRight: "2.5rem"}}>
                    <thead>
                    <tr>
                      <th style={{backgroundColor: " #001f3f", color: "white", borderRadius: "0 10px 10px 0"}}> نام
                        تسک
                        <i className="bi bi-arrow-down"></i>
                      </th>
                      <th style={{backgroundColor: " #001f3f", color: "white"}}> فریلنسر
                        <i className="bi bi-arrow-down"></i>
                      </th>

                      <th style={{backgroundColor: " #001f3f", color: "white"}}>وضعیت
                        <i className="bi bi-arrow-down"></i>
                      </th>


                      <th style={{backgroundColor: " #001f3f", color: "white"}}> درصد پیشرفت
                        <i className="bi bi-arrow-down"></i>

                      </th>

                      <th style={{backgroundColor: " #001f3f", color: "white"}}> فایل
                        <i className="bi bi-arrow-down"></i>

                      </th>

                      <th style={{
                        backgroundColor: " #001f3f",
                        color: "white",
                        borderRadius: "10px 0 0 10px"
                      }}> نمایش فایل
                        {/* <i class="bi bi-arrow-down"></i> */}

                      </th>


                    </tr>
                    </thead>
                    <tbody>


                    <tr>
                      <th scope="row"> صحبت با کارفرما</th>
                      <td> ایمان محمدی</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                    </tr>
                    </tbody>
                  </table>
                  <div className="div-formated">
                    <div>
                      <img src="../img/file-png.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-video.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-doc.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-pdf.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>
                  </div>

                  <div dir="rtl" className="table-responsive" style={{overflowY: "hidden", overflowX: "hidden"}}>
                    <table className="table" style={{width: "97%", marginRight: "2.5rem"}}>
                      <thead>
                      <tr>
                      </tr>
                      </thead>
                      <tbody>


                      <tr>
                        <th scope="row"> صحبت با کارفرما</th>
                        <td> ایمان محمدی</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                      </tr>
                      <tr>
                        <th scope="row"> صحبت با کارفرما</th>
                        <td> ایمان محمدی</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                      </tr>
                      <tr>
                        <th scope="row"> صحبت با کارفرما</th>
                        <td> ایمان محمدی</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                      </tr>
                      </tbody>
                    </table>


                  </div>
                </div>


              </div>
            </div>


            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHagh">
                <button className="accordion-button collapsed btn-img" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseHagh" aria-expanded="false" aria-controls="collapseHagh">
                  <div>
                    <div className="title-accordion">
                      <p>نام پروژه : سایت عرفانی</p>
                      <p> درصد پیشرفت :23 درصد</p>
                      <p style={{marginLeft: "7rem"}}>نوع پرداخت : نوع دوم 25%</p>
                    </div>

                    <div className="title-accordion">
                      <p>وضعیت پرداخت : در حال انجام</p>
                      <p style={{marginRight: "-3rem"}}> نوع پروژه : طراحی وب سایت</p>
                      <p style={{marginLeft: "7rem"}}>c</p>
                    </div>

                  </div>
                </button>
              </h2>
              <div className="accordion-collapse collapse" aria-labelledby="headingHagh"
                   data-bs-parent="#accordionExample"
                   id="collapseHagh">
                <div dir="rtl" className="table-responsive" style={{overflowY: "hidden", overflowX: "hidden"}}>
                  <table className="table" style={{width: "97%", marginRight: "2.5rem"}}>
                    <thead>
                    <tr>
                      <th style={{backgroundColor: " #001f3f", color: "white", borderRadius: "0 10px 10px 0"}}> نام
                        تسک
                        <i className="bi bi-arrow-down"></i>
                      </th>
                      <th style={{backgroundColor: " #001f3f", color: "white"}}> فریلنسر
                        <i className="bi bi-arrow-down"></i>
                      </th>

                      <th style={{backgroundColor: " #001f3f", color: "white"}}>وضعیت
                        <i className="bi bi-arrow-down"></i>
                      </th>


                      <th style={{backgroundColor: " #001f3f", color: "white"}}> درصد پیشرفت
                        <i className="bi bi-arrow-down"></i>

                      </th>

                      <th style={{backgroundColor: " #001f3f", color: "white"}}> فایل
                        <i className="bi bi-arrow-down"></i>

                      </th>

                      <th style={{
                        backgroundColor: " #001f3f",
                        color: "white",
                        borderRadius: "10px 0 0 10px"
                      }}> نمایش فایل
                        {/* <i class="bi bi-arrow-down"></i> */}

                      </th>


                    </tr>
                    </thead>
                    <tbody>


                    <tr>
                      <th scope="row"> صحبت با کارفرما</th>
                      <td> ایمان محمدی</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                      <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                    </tr>
                    </tbody>
                  </table>
                  <div className="div-formated">
                    <div>
                      <img src="../img/file-png.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-video.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-doc.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-pdf.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format"/>
                      <p>main.png</p>
                    </div>
                  </div>

                  <div dir="rtl" className="table-responsive" style={{overflowY: "hidden", overflowX: "hidden"}}>
                    <table className="table" style={{width: "97%", marginRight: "2.5rem"}}>
                      <thead>
                      <tr>
                      </tr>
                      </thead>
                      <tbody>


                      <tr>
                        <th scope="row"> صحبت با کارفرما</th>
                        <td> ایمان محمدی</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                      </tr>
                      <tr>
                        <th scope="row"> صحبت با کارفرما</th>
                        <td> ایمان محمدی</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                      </tr>
                      <tr>
                        <th scope="row"> صحبت با کارفرما</th>
                        <td> ایمان محمدی</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>تکمیل شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> 100 درصد</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}> ارسال شده</td>
                        <td style={{color: "rgba(37, 153, 132, 1)",}}>نمایش فایل</td>


                      </tr>
                      </tbody>
                    </table>


                  </div>
                </div>


              </div>
            </div>


          </div>

        </div>

      </div>


    </>
  );
};


export default DashboardLayout;