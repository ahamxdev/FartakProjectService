import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="py-3 px-3 shadow-md rounded-2xl flex flex-col fixed top-[90px] right-[50px] w-[300px] bg-gray-100 z-50 overflow-y-auto">
      <div className="flex gap-3 py-2">
        <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center text-center"></div>
        <div className="h-1/2 w-1/2">
          <h5>محمد ایمانی</h5>
          <span className="text-sm text-gray-600 ms-1 ps-1 border-l border-gray-400/50">
            استاد
          </span>
          <span className="text-sm text-gray-600">25 امتیاز</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-[calc(100%-110px)]">
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "text-blue-600 no-underline" : "text-black no-underline"
          }
        >
          رزومه
        </NavLink>
        <NavLink
          to="personalInformation"
          className={({ isActive }) =>
            isActive ? "text-blue-600 no-underline" : "text-black no-underline"
          }
        >
          اطلاعات شخصی
        </NavLink>
        <div>تقویم کاری</div>
        <NavLink
          to="onlineClass"
          className={({ isActive }) =>
            isActive ? "text-blue-600 no-underline" : "text-black no-underline"
          }
        >
          کلاس آنلاین
        </NavLink>
        <div>کنکور</div>
        <div>مدریت درخواست ها</div>
        <div>آپلود برنامه کلاسی و کاری</div>
        <div>راهنمای موجود در بخش کلاس آنلاین</div>
        <div>درسنامه‌های مربوط به تکنیک‌های برگزاری کلاس آنلاین</div>
        <NavLink
          to="paymentAndWallet"
          className={({ isActive }) =>
            isActive ? "text-blue-600 no-underline" : "text-black no-underline"
          }
        >
          کیف پول
        </NavLink>
        <div>تیکت پشتیبانی</div>
        <div>سوالات متداول</div>
        <div>ویرایش اطلاعات</div>
        <div className="text-blue-600 mt-4">تنظیمات</div>
      </div>
    </div>
  );
};

export default SideBar;
