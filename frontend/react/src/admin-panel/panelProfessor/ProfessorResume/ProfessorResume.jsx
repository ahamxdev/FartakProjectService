const ProfessorResume = () => {
  return (
    <div className="pr-container p-2 mx-5 overflow-y-scroll">
      <div className="spanStyle py-3">درباره من</div>
      <div className="p-3 textStyle">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
        رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </div>
      <div className="spanStyle py-3">اطلاعات علمی رزومه</div>
      <div
        className="d-flex justify-content-between p-4"
        style={{ maxWidth: "800px" }}
      >
        <div className="d-flex flex-column gap-3">
          <span>نام : محمد</span>
          <span>نام خانوادگی : ایمانی</span>
          <span>مرتبه علمی : دانشجو</span>
          <span>رشته تخصصی : کامپیوتر</span>
          <span>گرایش تخصصی : مهندسی حرفه ای نرم افزار</span>
        </div>
        <div className="d-flex flex-column gap-3">
          <div>دانشگاه : دانشگاه آزاد واحد قزوین (باراجین)</div>
          <div>ایمیل شخصی : jack@gmail.com</div>
          <div>ایمیل دانشگاه : azad@azad.com</div>
          <div>تلفن شخصی : 09045351612</div>
          <div>لینک مقاله در گوگل اسکولار : google.com</div>
        </div>
      </div>
      <div className="spanStyle py-3">سوابق تحصیلی</div>
      <div className="card">
        <div className="cardSpan p-2 m-1">
          کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار
        </div>
        <div className="cardInfo p-2 d-flex justify-content-between flex-wrap m-1 gap-4">
          <div className="w-25">دانشگاه : دانشگاه آزاد واحد باراجین</div>
          <div className="w-50">
            محل : ایران ، استان قزوین ، دانشگاه آزاد اسلامی واحد قزوین
          </div>
          <div className="w-25">مدت : از سال 1401 تا کنون</div>
        </div>
      </div>
      <div className="card">
        <div className="cardSpan p-2 m-1">
          کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار
        </div>
        <div className="cardInfo p-2 d-flex justify-content-between flex-wrap m-1 gap-4">
          <div className="w-25">دانشگاه : دانشگاه آزاد واحد باراجین</div>
          <div className="w-50">
            محل : ایران ، استان قزوین ، دانشگاه آزاد اسلامی واحد قزوین
          </div>
          <div className="w-25">مدت : از سال 1401 تا کنون</div>
        </div>
      </div>
      <div className="card">
        <div className="cardSpan p-2 m-1">
          کارشناسی ناپیوسته مهندسی حرفه ای نرم افزار
        </div>
        <div className="cardInfo p-2 d-flex justify-content-between flex-wrap m-1 gap-4">
          <div className="w-25">دانشگاه : دانشگاه آزاد واحد باراجین</div>
          <div className="w-50">
            محل : ایران ، استان قزوین ، دانشگاه آزاد اسلامی واحد قزوین
          </div>
          <div className="w-25">مدت : از سال 1401 تا کنون</div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorResume;
