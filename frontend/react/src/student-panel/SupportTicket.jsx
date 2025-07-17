import React from "react";

function SupportTicket() {
  return (
    <main className="p-4">
      <div className="w-full px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-4">
            <div className="border rounded-xl p-4 shadow h-full">
              <h3 className="font-bold mb-4 text-xl">ارسال تیکت پشتیبانی</h3>
              <form>
                <div className="mb-3">
                  <div className="flex items-center">
                    <input
                      name="check"
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600 ml-2"
                      id="check"
                    />
                    <label className="cursor-pointer" htmlFor="check">
                      پاسخ خود را از تیکت قبلی دریافت نکردم
                    </label>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className="block mb-2">گروه پیام:</label>
                    <select className="w-full border rounded">
                      <option value="">گروه خود را انتخاب کنید</option>
                    </select>
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className="block mb-2">موضوع پیام:</label>
                    <select className="w-full border rounded">
                      <option value="">موضوع پیام را انتخاب کنید</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className="block mb-2">زیر موضوع پیام:</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="الویت پیام را وارد کنید"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className="block mb-2">اولویت پیام:</label>
                    <select className="w-full border rounded">
                      <option value="">موضوع پیام را انتخاب کنید</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block mb-2">پیام خود را وارد کنید:</label>
                  <textarea
                    className="w-full p-2 border rounded"
                    rows="6"
                    placeholder="پیام خود را با جزئیات کامل وارد کنید"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-black text-white px-5 py-2 rounded"
                  >
                    ارسال تیکت
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4 mb-4">
            <div className="border rounded-xl p-4 shadow h-full">
              <h3 className="text-center mb-4 text-xl">وضعیت تیکت های پشتیبانی</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="p-2">شماره</th>
                      <th className="p-2">عنوان</th>
                      <th className="p-2">وضعیت</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">3a00</td>
                      <td className="p-2">مشکل در برداشت وجه</td>
                      <td className="p-2 text-yellow-500 font-bold">منتظر پاسخ</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">2fd4</td>
                      <td className="p-2">
                        من نمی‌توانم وارد پنل پسر بچه بشم تا حسابش را...
                      </td>
                      <td className="p-2 text-green-500 font-bold">
                        پاسخ داده شده
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">120f</td>
                      <td className="p-2">مشکل در برداشت وجه</td>
                      <td className="p-2 text-green-500 font-bold">
                        پاسخ داده شده
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-center mt-4">
                <button className="bg-black text-white px-4 py-2 rounded">
                  نمایش کامل تیکت ها
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border rounded-xl shadow-sm py-4 mt-3 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-right mb-4 md:mb-0">
              <p className="mb-2">شماره تماس پشتیبانی: 0913-627-9624</p>
              <p className="mb-2">شماره تماس دفتر مرکزی: 021-3522-7334</p>
              <p className="mb-0">آدرس دفتر مرکزی: تهران - میدان انقلاب</p>
            </div>
            <div className="flex flex-wrap justify-center">
              <a href="#" className="no-underline mx-3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  className="text-gray-800"
                >
                  <path
                    fill="currentColor"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
              </a>

              <a href="#" className="no-underline mx-3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  className="text-gray-800"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.03-.07.06-.33-.12-.46-.18-.14-.43-.1-.61-.06-.26.06-4.39 2.77-6.3 4.04-.49.33-.93.49-1.33.48-.44-.01-1.27-.24-1.89-.44-.75-.25-1.35-.38-1.3-.8.03-.25.33-.51.91-.77 3.79-1.61 6.83-3.19 9.51-4.77.9-.53 1.72-.8 1.98-.7.54.17.78.7.71 1.64z"
                  />
                </svg>
              </a>

              <a href="#" className="no-underline mx-3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  className="text-gray-800"
                >
                  <path
                    fill="currentColor"
                    d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                  />
                </svg>
              </a>

              <a href="#" className="no-underline mx-3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  className="text-gray-800"
                >
                  <path
                    fill="currentColor"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  />
                </svg>
              </a>

              <a href="#" className="no-underline mx-3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  className="text-gray-800"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  />
                </svg>
              </a>

              <a href="#" className="no-underline mx-3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  className="text-gray-800"
                >
                  <path
                    fill="currentColor"
                    d="M21.582 6.186a2.506 2.506 0 0 0-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM9.955 15.568V8.432L15.818 12l-5.863 3.568z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SupportTicket;