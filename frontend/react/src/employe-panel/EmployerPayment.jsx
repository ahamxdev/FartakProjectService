const myPayments = [
  {
    id: 0,
    Pname: "طراحی سایت شرکتی",
    fee: "۴,۰۰۰,۰۰۰ تومان",
    status: "پیش‌پرداخت",
    date: "۱۴۰۳/۰۲/۱۰",
  },
  {
    id: 0,
    Pname: "اپلیکیشن موبایل",
    fee: "۱۰,۰۰۰,۰۰۰ تومان",
    status: "تسویه کامل",
    date: "۱۴۰۳/۰۱/۲۸",
  },
];
const myWithdrawal = [
  { id: 0, fee: "۵۰۰,۰۰۰ تومان", status: "معلق", date: "۱۴۰۳/۰۲/۰۲" },
  { id: 1, fee: "۷۵۰,۰۰۰ تومان", status: "واریزشده", date: "۱۴۰۳/۰۱/۲۰" },
];
const EmployerPayment = () => {
  return (
    <>
      <div className="payment-cards">
        <div className="payment-card">
          <p>موجودی قابل استفاده</p>
          <p>2,500,000 تومان</p>
        </div>
        <div className="payment-card">
          <p>موجودی معلق</p>
          <p>1,000,000 تومان</p>
        </div>
        <div className="payment-card">
          <p>امتیاز فعلی</p>
          <p>100</p>
          <button className="btn-payment-card">تبدیل به تخفیف</button>
        </div>
      </div>
      <h2 className="payment-title"> پرداخت های من </h2>
      <table className="rounded-table">
        <tr>
          <th>پروژه</th>
          <th>مبلغ</th>
          <th>وضعیت</th>
          <th>تاریخ</th>
        </tr>
        {myPayments.map((item) => (
          <tr key={item.id}>
            <td>{item.Pname}</td>
            <td>{item.fee}</td>
            <td>{item.status}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </table>
      <h2 className="payment-title"> برداشت‌های من</h2>

      <table className="rounded-table">
        <tr>
          <th>مبلغ</th>
          <th>وضعیت</th>
          <th>تاریخ درخواست</th>
        </tr>
        {myWithdrawal.map((item) => (
          <tr key={item.id}>
            <td>{item.fee}</td>
            <td>{item.status}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </table>
      <div className="payment-cta">
        <h3>سؤالی درباره موجودی یا برداشت‌ها دارید؟</h3>
        <button className="btn-secondary"> ارتباط با پشتیبان مالی</button>
      </div>
    </>
  );
};

export default EmployerPayment;
