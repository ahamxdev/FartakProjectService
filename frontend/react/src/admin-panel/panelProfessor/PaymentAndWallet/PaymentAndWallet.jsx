import { transactions } from "./payFakeData";

const PaymentAndWallet = () => {
  const getStatusBadge = (status) => {
    const baseClass = "text-sm font-medium";
    switch (status) {
      case "انجام شد":
        return <span className={`${baseClass} text-green-600`}>{status}</span>;
      case "تایید شده":
        return <span className={`${baseClass} text-blue-600`}>{status}</span>;
      case "در انتظار":
        return <span className={`${baseClass} text-yellow-500`}>{status}</span>;
      case "رد شده":
        return <span className={`${baseClass} text-red-600`}>{status}</span>;
      default:
        return <span className={`${baseClass} text-gray-500`}>{status}</span>;
    }
  };

  return (
    <div className="mx-5">
      <div className="flex flex-col lg:flex-row justify-between gap-5 mt-4">
        <div className="flex flex-col justify-center items-center gap-2 bg-white shadow-md rounded-xl flex-1">
          <div className="text-gray-400">موجودی کل</div>
          <div className="text-green-600 text-lg font-bold">
            ۲,۵۰۰,۰۰۰ تومان
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 border bg-white shadow-md rounded-xl h-32 flex-1">
          <div className="text-gray-400">قابل برداشت</div>
          <div className="text-blue-600 text-lg font-bold">۲,۵۰۰,۰۰۰ تومان</div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 border bg-white shadow-md rounded-xl h-32 flex-1">
          <div className="text-gray-400">در انتظار تایید</div>
          <div className="text-yellow-500 text-lg font-bold">
            ۵,۰۰۰,۰۰۰ تومان
          </div>
        </div>
      </div>

      <div className="mt-5 mb-5">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
          برداشت وجه
        </button>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-300 text-center text-sm">
          <thead className="[background-color:#ef4444!important] text-white">
            <tr>
              <th className="border border-gray-300 py-2 px-4">تاریخ</th>
              <th className="border border-gray-300 py-2 px-4">نوع تراکنش</th>
              <th className="border border-gray-300 py-2 px-4">مبلغ</th>
              <th className="border border-gray-300 py-2 px-4">توضیحات</th>
              <th className="border border-gray-300 py-2 px-4">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 py-2 px-4">
                  {item.date}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {item.type}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {item.amount.toLocaleString("fa-IR")} تومان
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {item.description}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {getStatusBadge(item.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentAndWallet;
