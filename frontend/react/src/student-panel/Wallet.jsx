import Sidebar from "./components/sidebar";
import Header from "../components/Header";

function Wallet() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="position-relative">
                  <img src="/img/wallet.png" alt="" className="img-fluid" />
                  <div
                    className="position-absolute top-50 start-50 translate-middle text-white"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                  >
                    <h2>٢,٥٠٠,٠٠٠ تومان</h2>
                  </div>
                </div>
                <div className="d-flex justify-content-start pe-5">
                  <button className="btn btn-success ms-4">
                    افزایش موجودی
                  </button>
                  <button className="btn btn-primary">
                    درخواست برداشت وجه
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative">
                  <img src="/img/cashout.png" alt="" className="img-fluid" />
                  <div
                    className="position-absolute top-50 start-50 translate-middle text-white"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                  >
                    <h2>٢,٥٠٠,٠٠٠ تومان</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="row mt-3">
              <div className="col-12">
                <div
                  className=""
                  dir="rtl"
                  lang="fa"
                  style={{ fontFamily: "Vazirmatn, sans-serif" }}
                >
                  <div className="table-responsive w-75 mx-auto">
                    <h4 className="text-end fs-5 mt-4">قسط های پیش رو :</h4>

                    <table className="table table-sm">
                      <thead className="table-dark text-white small fw-semibold text-center">
                        <tr>
                          <th>تاریخ قسط</th>
                          <th>مبلغ قسط</th>
                          <th className="text-center">بابت دوره </th>
                          <th
                            style={{ padding: "0.6rem" }}
                            className="text-center"
                          >
                            وضعیت{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1404/02/15{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1,200,000 تومان{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            دوره آمادگی برای امتحانات پایانی کلاس 11{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            در انتظار پرداخت{" "}
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1404/01/15{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1,200,000 تومان{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            دوره آمادگی برای امتحانات پایانی کلاس 11{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            پرداخت شده{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <div
                  className=""
                  dir="rtl"
                  lang="fa"
                  style={{ fontFamily: "Vazirmatn, sans-serif" }}
                >
                  <div className="table-responsive w-75 mx-auto">
                    <h4 className="text-end fs-5 mt-4">تاریخچه تراکنش ها : </h4>

                    <table className="table table-sm">
                      <thead className="table-dark text-white small fw-semibold text-center">
                        <tr>
                          <th>تاریخ</th>
                          <th> نوع تراکنش </th>
                          <th className="text-center">مبلغ</th>
                          <th
                            style={{ padding: "0.6rem" }}
                            className="text-center"
                          >
                            توضیحات{" "}
                          </th>
                          <th
                            style={{ padding: "0.6rem" }}
                            className="text-center"
                          >
                            وضعیت{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1404/02/15{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            برداشت{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1,120,000 تومان{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            برای دوره مهندسی نرم افزار{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            تایید شده{" "}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1404/02/15{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            برداشت{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1,120,000 تومان{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            برای دوره مهندسی نرم افزار{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            تایید شده{" "}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1404/02/15{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            برداشت{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1,120,000 تومان{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            برای دوره مهندسی نرم افزار{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            تایید شده{" "}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1404/02/15{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            برداشت{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1,120,000 تومان{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            برای دوره مهندسی نرم افزار{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            تایید شده{" "}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1404/02/15{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            برداشت{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1,120,000 تومان{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            برای دوره مهندسی نرم افزار{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            تایید شده{" "}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1404/02/15{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            برداشت{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1,120,000 تومان{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            برای دوره مهندسی نرم افزار{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            تایید شده{" "}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1404/02/15{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            برداشت{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            1,120,000 تومان{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            برای دوره مهندسی نرم افزار{" "}
                          </td>
                          <td
                            style={{ padding: "1rem" }}
                            className="text-center"
                          >
                            تایید شده{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Wallet;
