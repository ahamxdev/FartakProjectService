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
        <div className="dashbord-admin-left-container">
          <div className="dashbord-admin-up-body">
            <p style={{ marginRight: "-60rem" }}>افزودن فریلنسر</p>
            <div class="dashbord-admin-inputs">
              <div className="dashbord-admin-col">
                <label>نام</label>
                <input type="text" />
              </div>
              <div className="dashbord-admin-col">
                <label>جنسیت</label>
                <select>
                  <option value=""></option>
                  <option value="مرد">مرد</option>
                  <option value="زن">زن</option>
                </select>
              </div>
              <div className="dashbord-admin-col">
                <label>استان محل سکونت</label>
                <select>
                  <option value="تهران">تهران</option>
                  <option value="یزد">یزد</option>
                </select>
              </div>
            </div>
            <div class="dashbord-admin-inputs  dashbord-admin-input-secondary">
              <div className="dashbord-admin-col">
                <label>نام و نام خانوادگی</label>
                <input type="text" />
              </div>
              <div className="dashbord-admin-col">
                <label>وضعیت تاهل</label>
                <select>
                  <option value=""></option>
                  <option value="مرد">مجرد</option>
                  <option value="زن">متاهل</option>
                </select>
              </div>
            </div>

            <div class="dashbord-admin-inputs  dashbord-admin-input-secondary">
              <div className="dashbord-admin-col-lable-lang">
                <label> زبان مسلط </label>
                <input type="text" />
              </div>
              <div className="dashbord-admin-col-lang">
                <button>فارسی</button>
                <button>انگلیسی</button>
              </div>
            </div>

            <div class="dashbord-admin-inputs  dashbord-admin-input-secondary">
              <div className="dashbord-admin-col-lable-lang">
                <label> تخصص های من </label>
                <input type="text" />
              </div>
              <div className="dashbord-admin-col-lang">
                <button>frount end</button>
                <button>back end</button>
              </div>
            </div>
          </div>

          <div className="dashbord-admin-left-body">
            <div style={{ marginRight: "55rem", marginTop: "1rem" }}>
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
                    <th>
                      کد استاد
                      <i class="bi bi-arrow-down"></i>
                    </th>
                    <th>
                      نام استاد
                      <i class="bi bi-arrow-down"></i>
                    </th>

                    <th>
                      جنسیت
                      <i class="bi bi-arrow-down"></i>
                    </th>

                    <th>
                      استان محل سکونت
                      <i class="bi bi-arrow-down"></i>
                    </th>

                    <th>
                      لول استاد
                      <i class="bi bi-arrow-down"></i>
                    </th>

                    <th>
                      رتبه استاد
                      {/* <i class="bi bi-arrow-down"></i> */}
                    </th>

                    <th>
                      حذف استاد
                      {/* <i class="bi bi-arrow-down"></i> */}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">45B0</th>
                    <td>امیرحسین رحمانی</td>
                    <td>مرد</td>
                    <td>قزوین</td>
                    <td>5 ستاره</td>
                    <td class="btn btn-success mt-2">افزایش رتبه</td>
                    <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
                    <td>حذف استاد</td>
                  </tr>
                  <tr>
                    <th scope="row">45B1</th>
                    <td>امیرحسین رحمانی</td>
                    <td>مرد</td>
                    <td>تاکستان</td>
                    <td>5 ستاره</td>
                    <td class="btn btn-success mt-2">افزایش رتبه</td>
                    <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
                    <td>حذف استاد</td>
                  </tr>
                  <tr>
                    <th scope="row">45B2</th>
                    <td>امیرحسین رحمانی</td>
                    <td>مرد</td>
                    <td>تاکستان</td>
                    <td>5 ستاره</td>
                    <td class="btn btn-success mt-2">افزایش رتبه</td>
                    <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
                    <td>حذف استاد</td>
                  </tr>
                  <tr>
                    <th scope="row">45B3</th>
                    <td>امیرحسین رحمانی</td>
                    <td>مرد</td>
                    <td>تاکستان</td>
                    <td>5 ستاره</td>
                    <td class="btn btn-success mt-2">افزایش رتبه</td>
                    <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
                    <td>حذف استاد</td>
                  </tr>
                  <tr>
                    <th scope="row">45B4</th>
                    <td>امیرحسین رحمانی</td>
                    <td>مرد</td>
                    <td>تاکستان</td>
                    <td>5 ستاره</td>
                    <td class="btn btn-success mt-2">افزایش رتبه</td>
                    <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
                    <td>حذف استاد</td>
                  </tr>
                  <tr>
                    <th scope="row">45B5</th>
                    <td>امیرحسین رحمانی</td>
                    <td>مرد</td>
                    <td>تاکستان</td>
                    <td>5 ستاره</td>
                    <td class="btn btn-success mt-2">افزایش رتبه</td>
                    <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
                    <td>حذف استاد</td>
                  </tr>
                  <tr>
                    <th scope="row">45B6</th>
                    <td>امیرحسین رحمانی</td>
                    <td>مرد</td>
                    <td>تاکستان</td>
                    <td>5 ستاره</td>
                    <td class="btn btn-success mt-2">افزایش رتبه</td>
                    <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
                    <td>حذف استاد</td>
                  </tr>
                  <tr>
                    <th scope="row">45B7</th>
                    <td>امیرحسین رحمانی</td>
                    <td>مرد</td>
                    <td>Support</td>
                    <td>5 ستاره</td>
                    <td class="btn btn-success mt-2">افزایش رتبه</td>
                    <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
                    <td>حذف استاد</td>
                  </tr>
                  <tr>
                    <th scope="row">45B8</th>
                    <td>امیرحسین رحمانی</td>
                    <td>مرد</td>
                    <td>تاکستان</td>
                    <td>5 ستاره</td>
                    <td class="btn btn-success mt-2">افزایش رتبه</td>
                    <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
                    <td>حذف استاد</td>
                  </tr>
                  <tr class="">
                    <th scope="row">45B9</th>
                    <td>امیرحسین رحمانی</td>
                    <td>مرد</td>
                    <td>تاکستان</td>
                    <td>5 ستاره</td>
                    <td class="btn btn-success mt-2">افزایش رتبه</td>
                    <td class="btn btn-danger me-2 mt-2">کاهش رتبه</td>
                    <td>حذف استاد</td>
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
