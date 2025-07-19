function ConfirmOrder() {
  return (
    <div class="p-6 bg-gray-100 min-h-screen">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-5 rounded-xl shadow">
          <h3 class="font-bold text-lg mb-2 text-right">سفارش شماره 196</h3>
          <p class="text-right">
            <span class="font-semibold">دسته بندی:</span> توسعه نرم افزار و آی
            تی
          </p>
          <p class="text-right">
            <span class="font-semibold">عنوان:</span> وبسایت و فروشگاهی شناخت
            حیوانات وحشی تهران
          </p>
          <p class="text-right mt-2 text-sm leading-7">
            ما نیاز داریم در این وبسایت به مردم آموزش بدیم که چجوری با گل‌ها
            بهتر تعامل داشته باشند...
          </p>
          <div class="text-right mt-4 text-sm space-y-1">
            <p>
              <span class="font-semibold">هزینه:</span> 500,000 تا 1,000,000
              تومان
            </p>
            <p>
              <span class="font-semibold">زمان:</span> 55 روز
            </p>
            <p>
              <span class="font-semibold">اولویت:</span> تحویل سریع
            </p>
            <p>
              <span class="font-semibold">فوریت:</span> ممتاز
            </p>
            <p>
              <span class="font-semibold">هزینه:</span> 250,000 تومان پرداخت شده
            </p>
            <p>
              <span class="font-semibold">شماره تماس کارفرما:</span> 09126663547
            </p>
          </div>
          <div class="flex flex-wrap justify-end gap-2 mt-4">
            <button class="bg-teal-400 text-white px-4 py-1 rounded hover:bg-teal-500">
              ثبت سفارش
            </button>
            <button class="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500">
              ارسال پیام
            </button>
            <button class="bg-yellow-200 text-black px-4 py-1 rounded hover:bg-yellow-300">
              عدم تایید سفارش
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOrder;
