function ProfessorHelp() {
  return (
    <>
      <div className="container-effects p-4 mt-0.5 mb-5 flex flex-col gap-5">
        <h2 className="flex items-center justify-between">
          <span className="text-lg font-bold">
            آموزش های موجود در کلاس آنلاین
          </span>
          <img src="/img/admin/plus.png" alt="Plus" />
        </h2>
        <div className="container-effects accordion-sidebar p-2">
          <label htmlFor="c2" className="flex justify-between px-4">
            <span>آموزش استفاده از قلم نوری در ادوبی کانکت</span>
            <span>مشاهده و ویرایش</span>
          </label>
          <input type="checkbox" className="hidden" id="c2" />
          <div className="professor-resoume-content !border-none">
            <form action="#" className="flex flex-col gap-5">
              <div>
                <label htmlFor="title">
                  <h3>عنوان آموزش</h3>
                </label>
                <input
                  id="title"
                  type="text"
                  className="container-effects w-full px-2 py-1 mt-1"
                />
              </div>
              <label htmlFor="title-img" className="flex items-center gap-2">
                <h3>عکس تیتر آموزش</h3>
                <div className="container-effects relative w-[300px] h-[40px] overflow-hidden">
                  <span className="absolute p-2 left-0 container-effects !rounded-none hover:bg-gray-100 transition-colors duraition-300 cursor-pointer">
                    Select
                  </span>
                </div>
              </label>
              <input type="file" id="title-img" hidden />
              <div>
                <label htmlFor="summary">
                  <h3>خلاصه آموزش</h3>
                </label>
                <div className="relative mt-2">
                  <div className="flex gap-3 items-center absolute mt-2 mr-4">
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/font-size.png" alt="Font size" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/underline.png" alt="Underline" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-right.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-center.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-left.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-justify.png" alt="Align" />
                    </button>

                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/italic.png" alt="Italic" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/bold.png" alt="Bold" />
                    </button>
                  </div>
                  <textarea
                    name=""
                    id="summary"
                    className="container-effects resize-none h-[175px] w-full p-2 pt-10 "
                  ></textarea>
                </div>
              </div>
              <label htmlFor="video" className="flex items-center gap-2">
                <h3>عکس تیتر آموزش</h3>
                <div className="container-effects relative w-[300px] h-[40px] overflow-hidden">
                  <span className="absolute p-2 left-0 container-effects !rounded-none hover:bg-gray-100 transition-colors duraition-300 cursor-pointer">
                    Select
                  </span>
                </div>
              </label>
              <input type="file" id="video" hidden />
              <div>
                <label htmlFor="text-1">
                  <h3>متن 1</h3>
                </label>
                <div className="relative mt-2">
                  <div className="flex gap-3 items-center absolute mt-2 mr-4">
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/font-size.png" alt="Font size" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/underline.png" alt="Underline" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-right.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-center.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-left.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-justify.png" alt="Align" />
                    </button>

                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/italic.png" alt="Italic" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/bold.png" alt="Bold" />
                    </button>
                  </div>
                  <textarea
                    name=""
                    id="text-1"
                    className="container-effects resize-none h-[175px] w-full p-2 pt-10 "
                  ></textarea>
                </div>
              </div>
              <div className="flex items-start flex-col gap-3">
                <button className="p-0 text-[#5171FC] text-lg font-bold hover:text-gray-400 transition-colors duration-300">
                  افزودن یک متن
                </button>
                <button className="p-0 text-[#5171FC] text-lg font-bold hover:text-gray-400 transition-colors duration-300">
                  افزودن یک عکس
                </button>
              </div>
              <div className="flex-end">
                <button className="py-1 px-6 rounded-md text-lg font-bold bg-teal-600 text-white hover:bg-teal-500 transition-colors duration-300">
                  ثبت تغییرات
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-effects p-4 mt-0.5 mb-5 flex flex-col gap-5">
        <h2 className="flex items-center justify-between">
          <span className="text-lg font-bold">
            آموزش های موجود در کلاس آنلاین
          </span>
          <img src="/img/admin/plus.png" alt="Plus" />
        </h2>
        <div className="container-effects accordion-sidebar p-2">
          <label htmlFor="c1" className="flex justify-between px-4">
            <span>آموزش استفاده از قلم نوری در ادوبی کانکت</span>
            <span>مشاهده و ویرایش</span>
          </label>
          <input type="checkbox" className="hidden" id="c1" />
          <div className="professor-resoume-content !border-none">
            <form action="#" className="flex flex-col gap-5">
              <div>
                <label htmlFor="title">
                  <h3>عنوان آموزش</h3>
                </label>
                <input
                  id="title"
                  type="text"
                  className="container-effects w-full px-2 py-1 mt-1"
                />
              </div>
              <label htmlFor="title-img" className="flex items-center gap-2">
                <h3>عکس تیتر آموزش</h3>
                <div className="container-effects relative w-[300px] h-[40px] overflow-hidden">
                  <span className="absolute p-2 left-0 container-effects !rounded-none hover:bg-gray-100 transition-colors duraition-300 cursor-pointer">
                    Select
                  </span>
                </div>
              </label>
              <input type="file" id="title-img" hidden />
              <div>
                <label htmlFor="summary">
                  <h3>خلاصه آموزش</h3>
                </label>
                <div className="relative mt-2">
                  <div className="flex gap-3 items-center absolute mt-2 mr-4">
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/font-size.png" alt="Font size" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/underline.png" alt="Underline" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-right.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-center.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-left.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-justify.png" alt="Align" />
                    </button>

                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/italic.png" alt="Italic" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/bold.png" alt="Bold" />
                    </button>
                  </div>
                  <textarea
                    name=""
                    id="summary"
                    className="container-effects resize-none h-[175px] w-full p-2 pt-10 "
                  ></textarea>
                </div>
              </div>
              <label htmlFor="video" className="flex items-center gap-2">
                <h3>عکس تیتر آموزش</h3>
                <div className="container-effects relative w-[300px] h-[40px] overflow-hidden">
                  <span className="absolute p-2 left-0 container-effects !rounded-none hover:bg-gray-100 transition-colors duraition-300 cursor-pointer">
                    Select
                  </span>
                </div>
              </label>
              <input type="file" id="video" hidden />
              <div>
                <label htmlFor="text-1">
                  <h3>متن 1</h3>
                </label>
                <div className="relative mt-2">
                  <div className="flex gap-3 items-center absolute mt-2 mr-4">
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/font-size.png" alt="Font size" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/underline.png" alt="Underline" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-right.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-center.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-left.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-justify.png" alt="Align" />
                    </button>

                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/italic.png" alt="Italic" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/bold.png" alt="Bold" />
                    </button>
                  </div>
                  <textarea
                    name=""
                    id="text-1"
                    className="container-effects resize-none h-[175px] w-full p-2 pt-10 "
                  ></textarea>
                </div>
              </div>
              <div className="flex items-start flex-col gap-3">
                <button className="p-0 text-[#5171FC] text-lg font-bold hover:text-gray-400 transition-colors duration-300">
                  افزودن یک متن
                </button>
                <button className="p-0 text-[#5171FC] text-lg font-bold hover:text-gray-400 transition-colors duration-300">
                  افزودن یک عکس
                </button>
              </div>
              <div className="flex-end">
                <button className="py-1 px-6 rounded-md text-lg font-bold bg-teal-600 text-white hover:bg-teal-500 transition-colors duration-300">
                  ثبت تغییرات
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-effects p-4 mt-0.5 mb-5 flex flex-col gap-5">
        <h2 className="flex items-center justify-between">
          <span className="text-lg font-bold">
            آموزش های موجود در کلاس آنلاین
          </span>
          <img src="/img/admin/plus.png" alt="Plus" />
        </h2>
        <div className="container-effects accordion-sidebar p-2">
          <label htmlFor="c3" className="flex justify-between px-4">
            <span>آموزش استفاده از قلم نوری در ادوبی کانکت</span>
            <span>مشاهده و ویرایش</span>
          </label>
          <input type="checkbox" className="hidden" id="c3" />
          <div className="professor-resoume-content !border-none">
            <form action="#" className="flex flex-col gap-5">
              <div>
                <label htmlFor="title">
                  <h3>عنوان آموزش</h3>
                </label>
                <input
                  id="title"
                  type="text"
                  className="container-effects w-full px-2 py-1 mt-1"
                />
              </div>
              <label htmlFor="title-img" className="flex items-center gap-2">
                <h3>عکس تیتر آموزش</h3>
                <div className="container-effects relative w-[300px] h-[40px] overflow-hidden">
                  <span className="absolute p-2 left-0 container-effects !rounded-none hover:bg-gray-100 transition-colors duraition-300 cursor-pointer">
                    Select
                  </span>
                </div>
              </label>
              <input type="file" id="title-img" hidden />
              <div>
                <label htmlFor="summary">
                  <h3>خلاصه آموزش</h3>
                </label>
                <div className="relative mt-2">
                  <div className="flex gap-3 items-center absolute mt-2 mr-4">
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/font-size.png" alt="Font size" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/underline.png" alt="Underline" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-right.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-center.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-left.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-justify.png" alt="Align" />
                    </button>

                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/italic.png" alt="Italic" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/bold.png" alt="Bold" />
                    </button>
                  </div>
                  <textarea
                    name=""
                    id="summary"
                    className="container-effects resize-none h-[175px] w-full p-2 pt-10 "
                  ></textarea>
                </div>
              </div>
              <label htmlFor="video" className="flex items-center gap-2">
                <h3>عکس تیتر آموزش</h3>
                <div className="container-effects relative w-[300px] h-[40px] overflow-hidden">
                  <span className="absolute p-2 left-0 container-effects !rounded-none hover:bg-gray-100 transition-colors duraition-300 cursor-pointer">
                    Select
                  </span>
                </div>
              </label>
              <input type="file" id="video" hidden />
              <div>
                <label htmlFor="text-1">
                  <h3>متن 1</h3>
                </label>
                <div className="relative mt-2">
                  <div className="flex gap-3 items-center absolute mt-2 mr-4">
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/font-size.png" alt="Font size" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/underline.png" alt="Underline" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-right.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-center.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-left.png" alt="Align" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/align-justify.png" alt="Align" />
                    </button>

                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/italic.png" alt="Italic" />
                    </button>
                    <button className="bg-transparent p-0 transition-opacity duration-300 hover:opacity-70">
                      <img src="/img/admin/bold.png" alt="Bold" />
                    </button>
                  </div>
                  <textarea
                    name=""
                    id="text-1"
                    className="container-effects resize-none h-[175px] w-full p-2 pt-10 "
                  ></textarea>
                </div>
              </div>
              <div className="flex items-start flex-col gap-3">
                <button className="p-0 text-[#5171FC] text-lg font-bold hover:text-gray-400 transition-colors duration-300">
                  افزودن یک متن
                </button>
                <button className="p-0 text-[#5171FC] text-lg font-bold hover:text-gray-400 transition-colors duration-300">
                  افزودن یک عکس
                </button>
              </div>
              <div className="flex-end">
                <button className="py-1 px-6 rounded-md text-lg font-bold bg-teal-600 text-white hover:bg-teal-500 transition-colors duration-300">
                  ثبت تغییرات
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfessorHelp;
