import "../styles/create-order.css";
const infoCards = [
  {
    title: "مهارت بهتر فرتاک",
    description: "نگران هیچی نباش با فرتاک همیشه و همه جا آموزش ببین.",
    image: "/img/employer/create-order-2.png",
  },
  {
    title: "مشاوره با مدیر های موفق فرتاک",
    description: "نگران هیچی نباش با فرتاک همیشه و همه جا آموزش ببین.",
    image: "/img/employer/create-order-1.png",
  },
  {
    title: "دسترسی به نمونه کار ها",
    description: "نگران هیچی نباش با فرتاک همیشه و همه جا آموزش ببین.",
    image: "/img/employer/create-order-3.png",
  },
];
const qualities = [
  {
    title: "تمام وقت",
    img: "/img/employer/quality-control.png",
    price: "2.5",
  },
  {
    title: "برجسته و فوری",
    img: "/img/employer/quality-control.png",
    price: "1.5",
  },
  {
    title: "معمولی",
    img: "/img/employer/quality-control.png",
    price: "1",
  },
  {
    title: "متمایز",
    img: "/img/employer/quality-control.png",
    price: "2",
  },
  {
    title: "حضوری و یا محرمانه",
    img: "/img/employer/quality-control.png",
    price: "3",
  },
];
const payments = [
  {
    title: "پرداخت با زرین پال",
    img: "/img/employer/zarin-pal.png",
    value: "zarin-pal",
  },
  {
    title: "پرداخت با کیف پول من",
    img: "/img/employer/my-wallet.png",
    value: "my-wallet",
  },
];

const CreateOrder = () => {
  const submitProject = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };
  return (
    <>
      <div className="container-effects create-order-container">
        <div className="create-order-title">
          <h1>از کوچک ترین تا بزرگ ترین پروژه</h1>
          <span>با فرتاک خیالت راحت</span>
        </div>
        <div className="create-order-about">
          {infoCards.map((card, index) => (
            <div className="create-order-about-card" key={index}>
              <div className="create-order-about-card-text">
                <h3>{card.title}</h3>
                <p className="mt-0">{card.description}</p>
              </div>
              <div className="create-order-card-img">
                <img src={card.image} alt={card.title} />
                <button>مشاهده اطلاعات</button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <form action={submitProject}>
            <h2 className="create-order-form-title">اطلاعات اولیه</h2>
            <div className="create-order-form-section">
              <div className="create-order-form-input">
                <label htmlFor="category">دسته بندی</label>
                <select name="category" id="category">
                  <option value="">دسته‌بندی پروژه خود را انتخاب کنید</option>
                  <option value="web-development">توسعه وب</option>
                  <option value="mobile-development">توسعه موبایل</option>
                  <option value="graphic-design">طراحی گرافیک</option>
                </select>
              </div>
              <div className="create-order-form-input create-order-description-input">
                <label htmlFor="description">توضیحات</label>
                <textarea
                  placeholder="توضیحاتی برای شفاف‌تر شدن درخواست خود بنویسید."
                  name="description"
                  id="description"
                  rows="4"
                ></textarea>
              </div>
              <div className="create-order-form-input">
                <label htmlFor="title">عنوان پروژه</label>
                <input type="text" name="title" id="title" />
              </div>
            </div>
            <h2 className="create-order-form-title">بودجه و زمان بندی</h2>
            <div className="create-order-form-section">
              <div className="create-order-form-input">
                <label htmlFor="budget">
                  بودجه مالی{" "}
                  <p>
                    میزان هزینه‌ای که برای پروژه خود درنظر دارید را وارد کنید.
                  </p>
                </label>
                <div className="budget-select-input">
                  <p className="mb-0">از</p>
                  <input
                    type="number"
                    name="budget"
                    id="budget"
                    step={100000}
                    min={0}
                  />
                  <p className="mb-0">تا</p>
                  <input
                    type="number"
                    name="budget"
                    id="budget"
                    step={100000}
                    min={300000}
                  />
                </div>
              </div>
              <div className="create-order-form-input">
                <label htmlFor="deadline">زمان بندی</label>
                <input type="number" name="deadline" id="deadline" />
                <span>روز</span>
              </div>
            </div>
            <h2 className="create-order-form-title">اولویت شما</h2>
            <div className="create-order-form-priority">
              <label htmlFor="highest-prc">
                <input type="radio" name="priority" id="highest-prc" />{" "}
                <span>بالاترین قیمت</span>
              </label>
              <label htmlFor="lowest-prc">
                <input type="radio" name="priority" id="lowest-prc" />{" "}
                <span>کمترین قیمت</span>
              </label>
              <label htmlFor="fast-delivery">
                <input type="radio" name="priority" id="fast-delivery" />{" "}
                <span>تحویل سریع</span>
              </label>
              <label htmlFor="average">
                <input type="radio" name="priority" id="average" />{" "}
                <span>میانه</span>
              </label>
            </div>
            <h2 className="create-order-form-title">
              نحوه و فوریت خود را انتخاب کنید
            </h2>
            <div className="create-order-quality-select">
              {qualities.map((quality, index) => (
                <div
                  key={index}
                  className="container-effects create-order-quality"
                >
                  <span>{quality.title}</span>
                  <img src={quality.img} alt="Quality-control" />
                  <span>price &times;{quality.price}</span>
                </div>
              ))}
            </div>
            <h2 className="create-order-form-title">
              روش پرداخت خودتان را انتخاب کنید
            </h2>
            <div className="create-order-payment">
              {payments.map((payment, index) => (
                <label key={index} htmlFor={payment.value}>
                  <span>
                    <img src={payment.img} alt="Payment method" />{" "}
                    {payment.title}
                  </span>
                  <input type="radio" name="payment" id={payment.value} />
                </label>
              ))}
            </div>
            <div className="create-order-submit">
              <button type="submit" className="btn-primary">
                ثبت سفارش
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h2 className="featured-in-title">
          کسب و کارهایی که با <span>فرتاک</span> همکاری کردند
        </h2>
        <div className="featured-in-list">
          <img src="/img/employer/tavat.png" alt="tavat" />
          <img src="/img/employer/tpc.png" alt="tpc" />
          <img src="/img/employer/brick.png" alt="brick" />
        </div>
      </div>
    </>
  );
};

export default CreateOrder;
