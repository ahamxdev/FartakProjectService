function ProfessorInfo() {
  return (
    <>
      <div className="flex justify-end mb-5">
        <select className="bg-transparent border border-black px-2 mb-2">
          <option value="10">تعداد نمایش 10 رزومه</option>
          <option value="10">تعداد نمایش 10 رزومه</option>
          <option value="10">تعداد نمایش 10 رزومه</option>
          <option value="10">تعداد نمایش 10 رزومه</option>
        </select>
      </div>
      <div className="accordion-sidebar container-effects mb-5">
        <input className="hidden" type="checkbox" id="pi1" />
        <label htmlFor="pi1" className="flex justify-between items-center p-4">
          <span className="font-bold">
            محمد ایمانی در انتظار تایید اطلاعات شخصی
          </span>
          <div className="flex items-center gap-2">
            <button className="w-[60px] h-[30px] text-white rounded-md bg-green-600 transition-colors duration-300 hover:bg-green-500">
              تایید
            </button>
            <button className="w-[60px] h-[30px] text-white rounded-md bg-red-700 transition-colors duration-300 hover:bg-red-600">
              رد
            </button>
            <img
              src="/img/admin/left-arrow.png"
              alt="arrow"
              className="link-arrow mr-4"
            />
          </div>
        </label>
        <div className="professor-resoume-content flex items-center justify-between">
          <p>
            نام : محمد
            <br />
            نام خانوادگی : ایمانی
            <br />
            کد ملی : 0123456789 <br />
            تاریخ تولد : 1380 <br />
            جنسیت : مرد
          </p>
          <p>
            وضعیت تاهل : مجرد <br />
            شماره تلفن همراه : 09045351612 <br />
            شماره تلفن ثابت : 02835227334 <br />
            ایمیل : jackbazyar@gmail.com <br />
            آدرس محل سکونت : قزوین
          </p>
          <img src="/img/admin/professor.png" alt="Professor" />
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center">
        <button className="border border-black rounded-md px-2 py-1 hover:bg-slate-200 bg-transparent text-black">
          صفحه قبلی
        </button>
        <div className="flex gap-1">
          <span className="p-1.5 rounded-full border border-black inline-block bg-gray-400"></span>
          <span className="p-1.5 rounded-full border border-black inline-block"></span>
          <span className="p-1.5 rounded-full border border-black inline-block"></span>
          <span className="p-1.5 rounded-full border border-black inline-block"></span>
        </div>
        <button className="border border-black rounded-md px-2 py-1 hover:bg-slate-200 bg-transparent text-black">
          صفحه بعدی
        </button>
      </div>
    </>
  );
}

export default ProfessorInfo;
