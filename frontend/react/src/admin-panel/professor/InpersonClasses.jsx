import ClassFilterForm from "../../components/ClassFilterForm";

function InpersonClasses() {
  return (
    <>
      <h2 className="font-bold mb-3">ابتدا دسته بندی خود را مشخص کنید</h2>
      <ClassFilterForm />
      <div className="flex flex-col gap-5">
        <div className="container-effects accordion-sidebar p-3 font-bold">
          <input type="checkbox" className="hidden" id="h2" />
          <label htmlFor="h2" className="flex justify-between px-4">
            <span>دانش آموز ها: سارا ایمانی، محمد ایمانی</span>
            <span>استاد: سارا محمدی گلابی</span>
            <img
              className="link-arrow"
              src="/img/admin/left-arrow.png"
              alt="Arrow"
            />
          </label>
          <div className="professor-resoume-content !border-none flex items-start justify-between">
            <p className="leading-10">
              زبان تدریس : فارسی
              <br />
              درخواست کلاس برای فرزند
              <br />
              تعداد شرکت کنندگان : 2 نفر
              <br />
              تعداد جلسات : یک
              <br />
              زمان های برگزاری : ۱۳:۵۰ - ۱۴:۰۰
            </p>
            <p className="leading-10">
              سطح تسلط دانش آموز ها : متوسط
              <br />
              هدف از گرفتن معلم خصوصی : رفع اشکال و آمادگی برای امتحان
              <br />
              مکان : ایران
              <br />
              توضیحات تکمیلی : ندارد
            </p>
          </div>
        </div>
        <div className="container-effects accordion-sidebar p-3 font-bold">
          <input type="checkbox" className="hidden" id="h3" />
          <label htmlFor="h3" className="flex justify-between px-4">
            <span>دانش آموز ها: سارا ایمانی، محمد ایمانی</span>
            <span>استاد: سارا محمدی گلابی</span>
            <img
              className="link-arrow"
              src="/img/admin/left-arrow.png"
              alt="Arrow"
            />
          </label>
          <div className="professor-resoume-content !border-none flex items-start justify-between">
            <p className="leading-10">
              زبان تدریس : فارسی
              <br />
              درخواست کلاس برای فرزند
              <br />
              تعداد شرکت کنندگان : 2 نفر
              <br />
              تعداد جلسات : یک
              <br />
              زمان های برگزاری : ۱۳:۵۰ - ۱۴:۰۰
            </p>
            <p className="leading-10">
              سطح تسلط دانش آموز ها : متوسط
              <br />
              هدف از گرفتن معلم خصوصی : رفع اشکال و آمادگی برای امتحان
              <br />
              مکان : ایران
              <br />
              توضیحات تکمیلی : ندارد
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InpersonClasses;
