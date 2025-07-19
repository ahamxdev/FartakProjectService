const withrawalHistory = [
  {
    date: "1404/01/17",
    type: "برداشت",
    amount: "1,120,000 تومان",
    description: "به کارت بانکی",
    status: "انجام شد",
  },
  {
    date: "1404/01/17",
    type: "درخواست برداشت",
    amount: "1,120,000 تومان",
    description: "به کارت بانکی",
    status: "تایید شد",
  },
];
const paymentHistory = [
  {
    date: "1404/01/15",
    type: "درآمد پروژه",
    amount: "1,120,000 تومان",
    description: "پروژه طراحی سایت",
    status: "در حال تایید",
  },
  {
    date: "1404/01/10",
    type: "درآمد پروژه",
    amount: "1,120,000 تومان",
    description: "پروژه آغازگر",
    status: "تایید شد",
  },
];

function FreelancerPayment() {
  return (
    <>
      <div className="container-effects free-payment-container">
        <div className="free-payment-infos">
          <div>
            <span>موجودی کل</span>
            <span>2,500,000 تومان</span>
          </div>
          <div>
            <span>قابل برداشت</span>
            <span>2,000,000 تومان</span>
          </div>
          <div>
            <span>در انتظار تایید</span>
            <span>500,000 تومان</span>
          </div>
        </div>
        <h2 className="free-pay-title">تاریخچه برداشت ها</h2>
        <table className="rounded-table">
          <tr>
            <th>تاریخ</th>
            <th>نوع تراکنش</th>
            <th>مبلغ</th>
            <th>توضیحات</th>
            <th>وضعیت</th>
          </tr>
          {withrawalHistory.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </table>
        <h2 className="free-pay-title">تاریخچه تراکنش ها</h2>
        <table className="rounded-table">
          <tr>
            <th>تاریخ</th>
            <th>نوع تراکنش</th>
            <th>مبلغ</th>
            <th>توضیحات</th>
            <th>وضعیت</th>
          </tr>
          {paymentHistory.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="free-pay-forms">
        <form className="container-effects">
          <h2 className="free-pay-title">درخواست برداشت وجه </h2>
          <label htmlFor="amount">
            مبلغ درخواستی خود را در کادر زیر وارد کنید
          </label>
          <input type="text" className="container-effects" />
          <div className="flex-end">
            <button className="btn-tersiary">درخواست وجه</button>
          </div>
        </form>
        <form className="container-effects">
          <h2 className="free-pay-title">افزودن شماره شبا بانکی</h2>
          <div className="free-card-id">
            <input type="text" className="container-effects" />
            <span>-</span>
            <span>IR</span>
          </div>
          <div className="flex-end">
            <button className="btn-tersiary">تایید شماره شبا</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FreelancerPayment;
