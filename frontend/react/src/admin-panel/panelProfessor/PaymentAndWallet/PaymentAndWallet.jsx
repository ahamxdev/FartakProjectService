import { transactions } from "./payFakeData";

const PaymentAndWallet = () => {
  const getStatusBadge = (status) => {
    switch (status) {
      case "انجام شد":
        return <span className="text-success">{status}</span>;
      case "تایید شده":
        return <span className="text-primary">{status}</span>;
      case "در انتظار":
        return <span className="text-warning">{status}</span>;
      case "رد شده":
        return <span className="text-danger">{status}</span>;
      default:
        return <span className="text-secondary">{status}</span>;
    }
  };

  return (
    <div className="pw-container mx-5">
      <div className="w-100 h-25 d-flex justify-content-between gap-5 mt-2">
        <div
          className="h-75 w-50 rounded-5 d-flex flex-column justify-content-center align-items-center gap-2"
          style={{
            boxShadow: "-1px 1px 5px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div style={{ color: "#979797" }}>موجودی کل</div>
          <div className="text-success">2,500,000 تومان</div>
        </div>
        <div
          className="h-75 w-50 border rounded-5 d-flex flex-column justify-content-center align-items-center gap-2"
          style={{
            boxShadow: "-1px 1px 5px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div style={{ color: "#979797" }}>قابل برداشت</div>
          <div className="text-primary">2,500,000 تومان</div>
        </div>
        <div
          className="h-75 w-50 border rounded-5 d-flex flex-column justify-content-center align-items-center gap-2"
          style={{
            boxShadow: "-1px 1px 5px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div style={{ color: "#979797" }}>در انتظار تایید</div>
          <div className="text-warning">5,000,000 تومان</div>
        </div>
      </div>
      <button className="btn btn-primary px-4 py-2 m-2">برداشت وجه</button>
      <div className="table-responsive mt-5">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr>
              <td>تاریخ</td>
              <td>نوع تراکنش</td>
              <td>مبلغ</td>
              <td>توضیحات</td>
              <td>وضعیت</td>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.type}</td>
                <td>{item.amount.toLocaleString("fa-IR")} تومان</td>
                <td>{item.description}</td>
                <td>{getStatusBadge(item.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentAndWallet;
