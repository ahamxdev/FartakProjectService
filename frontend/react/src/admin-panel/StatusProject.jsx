import React from "react";
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
        <div className="dashbord-admin-left-body-status">
          <div style={{ marginRight: "55rem", marginTop: "-2rem" }}>
            <button className="button-showPerson" type="button">
              <p>تعداد نمایش 10فرد</p>
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
          {/* table */}

          <div
            dir="rtl"
            class="table-responsive"
            style={{ overflowY: "hidden" }}
          >
            <table class="table">
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
                    نام پروژه
                    <i class="bi bi-arrow-down"></i>
                  </th>
                  <th style={{ backgroundColor: " #001f3f", color: "white" }}>
                    {" "}
                    وضعیت پروژه
                    <i class="bi bi-arrow-down"></i>
                  </th>

                  <th style={{ backgroundColor: " #001f3f", color: "white" }}>
                    درصد پیشرفت
                    <i class="bi bi-arrow-down"></i>
                  </th>

                  <th style={{ backgroundColor: " #001f3f", color: "white" }}>
                    {" "}
                    نوع پروژه
                    <i class="bi bi-arrow-down"></i>
                  </th>

                  <th style={{ backgroundColor: " #001f3f", color: "white" }}>
                    {" "}
                    نوع پرداخت
                    <i class="bi bi-arrow-down"></i>
                  </th>

                  <th style={{ backgroundColor: " #001f3f", color: "white" }}>
                    {" "}
                    حذف پروژه
                    {/* <i class="bi bi-arrow-down"></i> */}
                  </th>

                  <th
                    style={{
                      backgroundColor: " #001f3f",
                      color: "white",
                      borderRadius: "10px 0 0 10px",
                    }}
                  >
                    {" "}
                    اطلاعات تسک ها
                    {/* <i class="bi bi-arrow-down"></i> */}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">سایت عرفانی</th>
                  <td> در حال انجلام</td>
                  <td>23 درصد</td>
                  <td>طراحی وب سایت</td>
                  <td>5 ستاره</td>
                  <td> نوع دوم 25%</td>
                  <td> حذف پروژه</td>
                </tr>
                <tr>
                  <th style={{ color: "red" }} scope="row">
                    سایت امین سایت
                  </th>
                  <td style={{ color: "red" }}> کنسل شده</td>
                  <td style={{ color: "red" }}>45 درصد</td>
                  <td style={{ color: "red" }}>طراحی موبایل</td>
                  <td style={{ color: "red" }}>نوع اول 100% </td>
                  <td style={{ color: "red" }}> کنسل شده</td>
                  <td style={{ color: "red" }}> اطلاعات بیشتر</td>
                </tr>
                <tr>
                  <th scope="row">سایت نمادین های ایرانی</th>
                  <td> کنسل شده</td>
                  <td>2 درصد</td>
                  <td>طراحی cms</td>
                  <td>نوع دوم 25% </td>
                  <td class=" mt-2"> حذف پروژه</td>
                  <td class=" me-2 mt-2">اطلاعات بیشتر </td>
                </tr>
                <tr class="">
                  <th scope="row">سایت خاک هرمز حمایت</th>
                  <td> غیرفعال شده</td>
                  <td>90 درصد</td>
                  <td>طراحی اپلیکیشن</td>
                  <td>نوع اول 100% </td>
                  <td class=" mt-2"> حذف پروژه </td>
                  <td class=" me-2 mt-2"> اطلاعات بیشتر</td>
                </tr>
              </tbody>
            </table>

            <div
              dir="rtl"
              class="table-responsive"
              style={{ overflowY: "hidden" }}
            >
              <table
                class="table"
                style={{ width: "750px", marginRight: "4.5rem" }}
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
                      <i class="bi bi-arrow-down"></i>
                    </th>
                    <th style={{ backgroundColor: " #001f3f", color: "white" }}>
                      {" "}
                      فریلنسر
                      <i class="bi bi-arrow-down"></i>
                    </th>

                    <th style={{ backgroundColor: " #001f3f", color: "white" }}>
                      وضعیت
                      <i class="bi bi-arrow-down"></i>
                    </th>

                    <th style={{ backgroundColor: " #001f3f", color: "white" }}>
                      {" "}
                      درصد پیشرفت
                      <i class="bi bi-arrow-down"></i>
                    </th>

                    <th style={{ backgroundColor: " #001f3f", color: "white" }}>
                      {" "}
                      فایل
                      <i class="bi bi-arrow-down"></i>
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
                    <td> ایمان محمدی </td>
                    <td>تکمیل شده </td>
                    <td> 100 درصد </td>
                    <td> ارسال شده</td>
                    <td>نمایش فایل</td>
                  </tr>
                </tbody>
              </table>

              <nav
                style={{ marginRight: "12rem", marginTop: "3rem" }}
                aria-label="Page navigation example"
              >
                <ul class="pagination gap-3">
                  <li class="page-item ">
                    <Link to="#" class="page-link">
                      صفحه قبلی
                    </Link>
                  </li>
                  <li class="page-item d-sm-none">
                    <span class="page-link page-link-static">2 / 5</span>
                  </li>
                  <li class="page-item d-none d-sm-block">
                    <Link to="#" class="page-link">
                      1
                    </Link>
                  </li>
                  <li class="page-item  d-none d-sm-block" aria-current="page">
                    <span class="page-link">
                      2<span class="visually-hidden">(current)</span>
                    </span>
                  </li>
                  <li class="page-item d-none d-sm-block">
                    <Link to="#" class="page-link">
                      3
                    </Link>
                  </li>
                  <li class="page-item d-none d-sm-block">
                    <Link to="#" class="page-link">
                      4
                    </Link>
                  </li>
                  <li class="page-item d-none d-sm-block">
                    <Link to="#" class="page-link">
                      5
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link to="#" class="page-link">
                      صفحه بعدی
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
