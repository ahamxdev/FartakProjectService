import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar py-2 px-3 sideShadow rounded-4 d-flex flex-column">
      <div className="h-1 d-flex gap-3 py-2">
        <div className="bg-primary rounded-circle profImg text-center"></div>
        <div className="h-50 w-50">
          <h5>محمد ایمانی</h5>
          <span className="profInfo ms-1 ps-1 infoBorder">استاد</span>
          <span className="profInfo">25 امتیاز</span>
        </div>
      </div>
      <div className="h-75 d-flex flex-column gap-2">
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "active-link" : "custom-link"
          }
        >
          رزومه
        </NavLink>
        <NavLink
          to="personalInformation"
          className={({ isActive }) =>
            isActive ? "active-link" : "custom-link"
          }
        >
          اطلاعات شخصی
        </NavLink>
        <div>تقویم کاری</div>
        <NavLink
          to="onlineClass"
          className={({ isActive }) =>
            isActive ? "active-link" : "custom-link"
          }
        >
          کلاس آنلاین
        </NavLink>
        <div>کنکور</div>
        <div>مدریت درخواست ها</div>
        <div>آپلود برنامه کلاسی و کاری</div>
        <div>راهنمای موجود در بخش کلاس آنلاین</div>
        <div>درسنامه‌های مربوط به تکنیک‌های برگزاری کلاس آنلاین</div>
        <div>کیف پول</div>
        <div>تیکت پشتیبانی</div>
        <div>سوالات متداول</div>
        <div>ویرایش اطلاعات</div>
        <div className="text-primary mt-4">تنظیمات</div>
      </div>
    </div>
  );
};

export default SideBar;
