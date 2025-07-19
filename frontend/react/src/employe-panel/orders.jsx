const orderArray = [
  {
    id: 0,
    title: "سفارش شماره 1",
    category: "توسعه نرم‌افزار و آی تی",
    status: "ثبت شده",
    description: "طراحی وب سایت دیکشنری مخصوص کامپیوتر",
  },
  {
    id: 1,
    title: "سفارش شماره 2",
    category: "محتوا و ترجمه",
    status: "در حال انجام",
    description:
      "ترجمه کامل کتاب Change your mind before change for you در سه هفته",
  },
  {
    id: 2,
    title: "سفارش شماره 3",
    category: "بازاریابی و فروش",
    status: "کنسل شده",
    description: "طراحی وب سایت دیکشنری مخصوص کامپیوتر",
  },
  {
    id: 3,
    title: "سفارش شماره 4",
    category: "طراحی و خلاقیت",
    status: "کامل شده",
    description: "طراحی وب سایت دیکشنری مخصوص کامپیوتر",
  },
  {
    id: 4,
    title: "سفارش شماره 5",
    category: "کسب و کار",
    status: "پرداخت شده",
    description: "طراحی وب سایت دیکشنری مخصوص کامپیوتر",
  },
  {
    id: 5,
    title: "سفارش شماره 6",
    category: "مهندسی و معماری",
    status: "غیر فعال شده",
    description: "طراحی وب سایت دیکشنری مخصوص کامپیوتر",
  },
];
const Orders = () => {
  return (
    <div className="orders-container">
      {orderArray.map((order) => {
        let orderColor = "#111";
        if (order.status === "ثبت شده") {
          orderColor = "#238F7C"; // Green
        } else if (
          (order.status === "در حال انجام") |
          (order.status === "پرداخت شده")
        ) {
          orderColor = "#BF9105"; // Yellow
        } else if (order.status === "کنسل شده") {
          orderColor = "#A52834"; // Blue
        }
        return (
          <div key={order.id} className="order-card container-effects">
            <h3>{order.title}</h3>
            <div>
              <p className="mb-0">دسته‌بندی: {order.category}</p>
              <span
                style={{
                  color: orderColor,
                }}
              >
                {order.status}
              </span>
            </div>
            <p className="mb-0">توضیحات: {order.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
