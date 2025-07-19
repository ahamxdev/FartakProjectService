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
        <div className="done-task-title task-title">
          <span>تسک اول طراحی داشبورد فریلنسر</span>
          <span>15 روز زمان باقی مانده</span>
          <span>اطلاعات بیشتر</span>
        </div>
        <div className="done-task-message">
          <p>آخرین پیام مدیر لاین فرانت اند :</p>
          <p>آخرین پیام مدیر لاین مهندسی نرم افزار :</p>
          <p>آخرین پیام مدیر کل :</p>
        </div>
        <form className="order-id-form">
          <label htmlFor="file">
            فایل خود را آپلود کنید
            <input type="file" id="file" />
            <span></span>
          </label>
          <button className="btn-tersiary">ارسال فایل</button>
        </form>
      </div>
      <div className="container-effects order-id-task">
        <div className="task-title">
          <span>تسک دوم طراحی داشبورد مدیر</span>
          <span>درصد دریافتی : 10 درصد</span>
          <form className="order-id-form">
            <label htmlFor="time">ثبت زمان پیشنهادی برای انجام تسک </label>
            <input type="text" className="container-effects" id="time" />
            <button className="btn-tersiary">درخواست تسک</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderId;
