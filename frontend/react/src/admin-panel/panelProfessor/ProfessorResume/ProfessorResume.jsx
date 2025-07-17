import arrow from "../../../assest/img/proffesorPanelImg/Vector 458.svg";
import {
  cardData,
  jobData,
  skillsData,
  personalInfo,
  contactInfo,
  aboutMeVideo,
} from "./fakeData";

const ProfessorResume = () => {
  return (
    <div className="pr-container p-2 mx-5 overflow-y-scroll custom-scrollbar">
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
          {personalInfo.map((item, index) => (
            <span key={index}>
              {item.label} : {item.value}
            </span>
          ))}
        </div>

        <div className="d-flex flex-column gap-3">
          {contactInfo.map((item, index) => (
            <span key={index}>
              {item.label} : {item.value}
            </span>
          ))}
        </div>
      </div>
      <div className="spanStyle py-3">سوابق تحصیلی</div>
      {cardData.map((item) => (
        <div className="card" key={item.id}>
          <div className="cardSpan p-2 m-1">{item.title}</div>
          <div className="cardInfo p-2 d-flex justify-content-between flex-wrap m-1 gap-4">
            <div className="w-25">دانشگاه : {item.university}</div>
            <div className="w-50">محل : {item.location}</div>
            <div className="w-25">مدت : {item.duration}</div>
          </div>
        </div>
      ))}
      <div className="spanStyle py-3">مسلط به دروس و زبان های</div>
      <div className="d-flex flex-wrap gap-2 mt-4" style={{ fontSize: "15px" }}>
        {skillsData.map((item, index) => (
          <span
            key={index}
            className={`rounded-pill ${item.bg} border ${item.border} text-dark px-3 py-2`}
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="spanStyle py-3 mt-3">سوابق کاری</div>
      {jobData.map((text, index) => (
        <div key={index} className="mt-3 d-flex gap-3 align-items-center px-3">
          <img src={arrow} alt="" />
          <span>{text}</span>
        </div>
      ))}
      <div className="spanStyle py-3 mt-3">بارگذاری ویدیو معرفی</div>
      <div className="d-flex flex-column gap-3 mt-4 px-3">
        {aboutMeVideo.map((item, index) => (
          <div key={index}>
            <span>{item.label}:</span>{" "}
            <span style={{ fontSize: "14px" }}>
              {item.value || <em>وارد نشده</em>}
            </span>
          </div>
        ))}
        <video className="border w-75 mt-3" controls></video>
      </div>
    </div>
  );
};

export default ProfessorResume;
