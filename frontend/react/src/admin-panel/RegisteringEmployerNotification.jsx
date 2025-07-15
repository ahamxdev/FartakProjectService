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
            <div className="dasbord-admin-left-btns">
              <button style={{ backgroundColor: "rgba(23, 162, 184, 1)" }}>
                کارفرما ها{" "}
              </button>
              <button style={{ backgroundColor: "#ffff", color: "black" }}>
                فریلنسر های پروژه
              </button>
            </div>
            <hr
              style={{ marginTop: "-0.1rem" }}
              className="task-project-div3-line"
            />
            <div className="dasbord-admin-left-checkBox">
              <input type="checkbox" />
              <p>انتخواب تمام کارفرما ها</p>
            </div>
            <div className="dasbord-admin-left-checkBox">
              <input type="checkbox" />
              <p>دکتر محمد حسین رضوانی ایمانی در پروژه ازدر غیر فعال</p>
            </div>
            <div className="dasbord-admin-left-checkBox">
              <input type="checkbox" />
              <p>دکتر محمد حسین رضوانی ایمانی در پروژه ازدر غیر فعال</p>
            </div>
            <div className="dasbord-admin-left-checkBox">
              <input type="checkbox" />
              <p>دکتر محمد حسین رضوانی ایمانی در پروژه ازدر غیر فعال</p>
            </div>
            <div className="dasbord-admin-left-checkBox">
              <input type="checkbox" />
              <p>دکتر محمد حسین رضوانی ایمانی در پروژه ازدر غیر فعال</p>
            </div>
            <div className="dasbord-admin-left-checkBox">
              <input type="checkbox" />
              <p>دکتر محمد حسین رضوانی ایمانی در پروژه ازدر غیر فعال</p>
            </div>
            <div className="dasbord-admin-left-checkBox">
              <input type="checkbox" />
              <p>دکتر محمد حسین رضوانی ایمانی در پروژه ازدر غیر فعال</p>
            </div>
          </div>
          <div className="dasbord-admin-left-divBig">
            <p style={{ marginTop: "1.2rem" }}>ثبت اطلاعیه</p>
            <label style={{ marginTop: "1.2rem" }}>عنوان اطلاعیه </label>
            <input className="dasbord-admin-left-divBig-input1" type="text" />

            <label style={{ marginTop: "1.2rem" }}>متن اطلاعیه</label>
            <input className="dasbord-admin-left-divBig-input2" type="text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
