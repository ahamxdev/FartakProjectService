import { classes } from "./onFakeData";
import trashIcon from "../../../assest/img/proffesorPanelImg/trash.svg";

const OnlineClass = () => {
  return (
    <div className="oc-container mx-5 overflow-y-scroll custom-scrollbar">
      <div className="row g-3 section">
        <div className="col-12 col-md-6">
          <div
            className="rounded-5 p-3 flexCenter"
            style={{
              height: "130px",
              backgroundColor: "rgba(13, 110, 253, 0.4)",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            <span>آموزش استفاده از قلم نوری در ادوبی کانکت</span>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div
            className="rounded-5 p-3 flexCenter"
            style={{
              height: "130px",
              backgroundColor: "rgba(220, 53, 69, 0.4)",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            <span>آموزش انجام تنظیمات ادوبی کانکت</span>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div
            className="rounded-5 p-3 flexCenter"
            style={{
              height: "130px",
              backgroundColor: "rgba(255, 193, 7, 0.4)",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            <span>آموزش استفاده بدون قلم نوری در ادوبی کانکت</span>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div
            className="rounded-5 p-3 flexCenter"
            style={{
              height: "130px",
              backgroundColor: "rgba(25, 135, 84, 0.4)",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            <span>آموزش تهیه آزمون آنلاین در گوگل فرم</span>
          </div>
        </div>
      </div>
      <div className="table-responsive mt-5">
        <span className="fw-bold fs-5">ایجاد کلاس</span>
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <td>نام کلاس</td>
              <td>افراد</td>
              <td>مبلغ پرداخت شده</td>
              <td>ایجاد کلاس</td>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, index) => (
              <tr key={index} style={{ fontSize: "0.9rem" }}>
                <td>{cls.className}</td>
                <td>{cls.members.join(" - ")}</td>
                <td>{cls.amountPaid ? cls.amountPaid.toLocaleString() : ""}</td>
                <td style={{ width: "12%" }}>
                  <button className="btn btn-success w-100">
                    {cls.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-responsive mt-5">
        <span className="fw-bold fs-5">لیست کلاس ها</span>
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <td>نام کلاس</td>
              <td>افراد</td>
              <td>مبلغ پرداخت شده</td>
              <td style={{ width: "12%" }}>حذف کلاس</td>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, index) => (
              <tr key={index} style={{ fontSize: "0.9rem" }}>
                <td>{cls.className}</td>
                <td>{cls.members.join(" - ")}</td>
                <td>{cls.amountPaid ? cls.amountPaid.toLocaleString() : ""}</td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button style={{ background: "none", border: "none", padding: 0 }}>
                    <img src={trashIcon} alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OnlineClass;
