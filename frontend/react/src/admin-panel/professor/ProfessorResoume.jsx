function ProfessorResoume() {
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
        <input className="hidden" type="checkbox" id="p1" />
        <label htmlFor="p1" className="flex justify-between items-center p-4">
          <span className="font-bold">محمد ایمانی در انتظار تایید رزومه</span>
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
        <div className="professor-resoume-content">
          <h3>درباره من</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <h3>اطلاعات علمی رزومه</h3>
          <div className="flex justify-between items-start">
            <p>
              نام : محمد <br />
              نام خانوادگی : ایمانی
            </p>
            <p>
              مرتبه علمی : دانشجو
              <br />
              رشته تخصصی : کامپیوتر
              <br />
              ایمیل شخصی : jack@gmail.com
              <br />
              ایمیل دانشگاه : azad@azad.com
            </p>
            <p>
              گرایش تخصصی : مهندسی حرفه ای نرم افزار
              <br />
              دانشگاه : دانشگاه آزاد واحد قزوین (باراجین)
              <br />
              تلفن شخصی : 09045351612
              <br />
              لینک مقاله در گوگل اسکولار : google.com
            </p>
          </div>
          <h3>سوابق تحصیلی</h3>
          <div className="flex flex-col gap-0">
            <div className="flex items-start justify-between">
              <p>
                کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار
                <br />
                محل : ایران ، استان قزوین ، دانشگاه آزاد اسلامی واحد قزوین
              </p>
              <p>دانشگاه : دانشگاه آزاد واحد باراجین</p>
              <p>مدت : از سال 1401 تا کنون</p>
            </div>
            <div className="flex items-start justify-between">
              <p>
                کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار
                <br />
                محل : ایران ، استان قزوین ، دانشگاه آزاد اسلامی واحد قزوین
              </p>
              <p>دانشگاه : دانشگاه آزاد واحد باراجین</p>
              <p>مدت : از سال 1401 تا کنون</p>
            </div>
            <div className="flex items-start justify-between">
              <p>
                کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار
                <br />
                محل : ایران ، استان قزوین ، دانشگاه آزاد اسلامی واحد قزوین
              </p>
              <p>دانشگاه : دانشگاه آزاد واحد باراجین</p>
              <p>مدت : از سال 1401 تا کنون</p>
            </div>
          </div>
          <h3>مسلط به دروس و زبان های</h3>
          <div className="flex gap-2 flex-wrap text-sm mb-4">
            <span className="border-2 border-[#29AC95] rounded-full py-1 px-2">
              Bootstrap
            </span>
            <span className="border-2 border-[#29AC95] rounded-full py-1 px-2">
              مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم افزار
            </span>
            <span className="border-2 border-[#29AC95] rounded-full py-1 px-2">
              آزمایشگاه مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم افزار
            </span>
            <span className="border-2 border-[#29AC95] rounded-full py-1 px-2">
              توسعه مهندسی نرم افزار - کارشناسی ناپیوسته حرفه ای نرم افزار
            </span>
            <span className="border-2 border-[#29AC95] rounded-full py-1 px-2">
              نظریه زبان ها و ماشین ها - کارشناسی نرم افزار
            </span>
          </div>
          <h3>سوابق کاری</h3>
          <p>
            معلم کامپیوتر در هنرستان از سال 1399 تا سال 1400 <br />
            کار در شرکت رویان پرداز از سال 1401 به مدت 6 ماه
          </p>
          <h3>بارگذاری ویدیو معرفی</h3>
          <p>
            عنوان ویدیو : درباره من
            <br />
            مدت زمان ویدیو : 5 دقیقه <br />
            توضیح مختصر درباره محتوای ویدیو : من کیم و علایقم چی هست و چی بلدم
          </p>
          <div className="flex justify-center">
            <img src="/img/admin/about-master.png" alt="" />
          </div>
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

export default ProfessorResoume;
