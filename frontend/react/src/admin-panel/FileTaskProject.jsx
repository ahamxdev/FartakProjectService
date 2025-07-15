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
                  <div>
                    <div className="title-accordion">
                      <p>نام پروژه : سایت عرفانی</p>
                      <p> درصد پیشرفت :23 درصد</p>
                      <p style={{ marginLeft: "7rem" }}>
                        نوع پرداخت : نوع دوم 25%
                      </p>
                    </div>

                    <div className="title-accordion">
                      <p>وضعیت پرداخت : در حال انجام</p>
                      <p style={{ marginRight: "-3rem" }}>
                        {" "}
                        نوع پروژه : طراحی وب سایت
                      </p>
                      <p style={{ marginLeft: "7rem" }}>c</p>
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
                  <div className="div-formated">
                    <div>
                      <img src="../img/file-png.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-video.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-doc.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-pdf.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>
                  </div>

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
                  </div>
                </div>
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
                  <div>
                    <div className="title-accordion">
                      <p>نام پروژه : سایت عرفانی</p>
                      <p> درصد پیشرفت :23 درصد</p>
                      <p style={{ marginLeft: "7rem" }}>
                        نوع پرداخت : نوع دوم 25%
                      </p>
                    </div>

                    <div className="title-accordion">
                      <p>وضعیت پرداخت : در حال انجام</p>
                      <p style={{ marginRight: "-3rem" }}>
                        {" "}
                        نوع پروژه : طراحی وب سایت
                      </p>
                      <p style={{ marginLeft: "7rem" }}>c</p>
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
                  <div className="div-formated">
                    <div>
                      <img src="../img/file-png.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-video.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-doc.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-pdf.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>
                  </div>

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
                  </div>
                </div>
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
                  <div>
                    <div className="title-accordion">
                      <p>نام پروژه : سایت عرفانی</p>
                      <p> درصد پیشرفت :23 درصد</p>
                      <p style={{ marginLeft: "7rem" }}>
                        نوع پرداخت : نوع دوم 25%
                      </p>
                    </div>

                    <div className="title-accordion">
                      <p>وضعیت پرداخت : در حال انجام</p>
                      <p style={{ marginRight: "-3rem" }}>
                        {" "}
                        نوع پروژه : طراحی وب سایت
                      </p>
                      <p style={{ marginLeft: "7rem" }}>c</p>
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
                  <div className="div-formated">
                    <div>
                      <img src="../img/file-png.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-video.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-doc.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-pdf.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>
                  </div>

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
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHagh">
                <button
                  className="accordion-button collapsed btn-img"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHagh"
                  aria-expanded="false"
                  aria-controls="collapseHagh"
                >
                  <div>
                    <div className="title-accordion">
                      <p>نام پروژه : سایت عرفانی</p>
                      <p> درصد پیشرفت :23 درصد</p>
                      <p style={{ marginLeft: "7rem" }}>
                        نوع پرداخت : نوع دوم 25%
                      </p>
                    </div>

                    <div className="title-accordion">
                      <p>وضعیت پرداخت : در حال انجام</p>
                      <p style={{ marginRight: "-3rem" }}>
                        {" "}
                        نوع پروژه : طراحی وب سایت
                      </p>
                      <p style={{ marginLeft: "7rem" }}>c</p>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                className="accordion-collapse collapse"
                aria-labelledby="headingHagh"
                data-bs-parent="#accordionExample"
                id="collapseHagh"
              >
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
                  <div className="div-formated">
                    <div>
                      <img src="../img/file-png.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-video.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-doc.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file-pdf.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>

                    <div>
                      <img src="../img/file 04.svg" alt="icon-format" />
                      <p>main.png</p>
                    </div>
                  </div>

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
