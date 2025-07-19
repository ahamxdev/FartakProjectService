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
    <div className="h-full px-5 py-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-gray-200">
      {/* درباره من */}
      <div className="border-b border-blue-600 text-xl py-3">درباره من</div>
      <div className="text-base leading-7 p-3">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است...
      </div>

      <div className="border-b border-blue-600 text-xl py-3">
        اطلاعات علمی رزومه
      </div>
      <div className="flex flex-wrap justify-between max-w-3xl p-4 gap-4">
        <div className="flex flex-col gap-3 text-sm">
          {personalInfo.map((item, index) => (
            <span key={index}>
              {item.label} : {item.value}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3 text-sm">
          {contactInfo.map((item, index) => (
            <span key={index}>
              {item.label} : {item.value}
            </span>
          ))}
        </div>
      </div>

      <div className="border-b border-blue-600 text-xl py-3">سوابق تحصیلی</div>
      {cardData.map((item) => (
        <div
          className="bg-blue-100 w-[90%] rounded-xl my-4 p-3 shadow-sm"
          key={item.id}
        >
          <div className="text-sm font-medium border-b border-blue-600 pb-2 mb-2">
            {item.title}
          </div>
          <div className="flex flex-wrap justify-between gap-4 text-sm">
            <div className="w-1/4">دانشگاه : {item.university}</div>
            <div className="w-1/2">محل : {item.location}</div>
            <div className="w-1/4">مدت : {item.duration}</div>
          </div>
        </div>
      ))}

      <div className="border-b border-blue-600 text-xl py-3">
        مسلط به دروس و زبان های
      </div>
      <div className="flex flex-wrap gap-2 mt-4 text-sm">
        {skillsData.map((item, index) => (
          <span
            key={index}
            className={`rounded-full px-3 py-2 border text-gray-800 ${item.bg} ${item.border}`}
          >
            {item.text}
          </span>
        ))}
      </div>

      <div className="border-b border-blue-600 text-xl py-3 mt-4">
        سوابق کاری
      </div>
      {jobData.map((text, index) => (
        <div key={index} className="flex items-center gap-3 mt-3 px-3">
          <img src={arrow} alt="arrow" />
          <span>{text}</span>
        </div>
      ))}

      <div className="border-b border-blue-600 text-xl py-3 mt-4">
        بارگذاری ویدیو معرفی
      </div>
      <div className="flex flex-col gap-3 mt-4 mb-5 px-3">
        {aboutMeVideo.map((item, index) => (
          <div key={index}>
            <span>{item.label}:</span>{" "}
            <span className="text-sm">{item.value || <em>وارد نشده</em>}</span>
          </div>
        ))}
        <video className="border w-3/4 mt-3 rounded-md" controls></video>
      </div>
    </div>
  );
};

export default ProfessorResume;
