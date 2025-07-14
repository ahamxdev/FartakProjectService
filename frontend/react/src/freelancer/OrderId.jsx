function OrderId() {
  return (
    <div className="container-effects order-id">
      <h2>سفارش محمد ایمانی (وبسایت علی بالا 2)</h2>
      <div className="order-id-links">
        <span>ارتباط با مدیر لاین فرانت اند مهندس احمد علی مردانی</span>
        <span>تماس با مدیر کل مهندس محسن عبد اللهی</span>
        <span>صفحه چت گروه</span>
      </div>
      <div className="container-effects order-id-task">
        <div className="done-task-title">
          <span>تسک اول طراحی داشبورد فریلنسر</span>
          <span>15 روز زمان باقی مانده</span>
          <span>اطلاعات بیشتر</span>
        </div>
        <div className="done-task-message">
          <p>آخرین پیام مدیر لاین فرانت اند :</p>
          <p>آخرین پیام مدیر لاین مهندسی نرم افزار :</p>
          <p>آخرین پیام مدیر کل :</p>
        </div>
        {/* <form className="ord"></form> */}
      </div>
    </div>
  );
}

export default OrderId;
