import profImg from "../../../assest/img/proffesorPanelImg/3542 1.svg";

const PersonalInformation = () => {
  return (
    <div className="bg-gray-100 rounded-2xl p-3 mx-5 flex justify-between gap-4">
      <div className="w-full md:w-3/4 flex flex-col gap-3 mt-3">
        <div>نام : محمد</div>
        <div>نام خانوادگی : ایمانی</div>
        <div>کد ملی : 0123456789</div>
        <div>تاریخ تولد : 1380</div>
        <div>جنسیت : مرد</div>
        <div>وضعیت تاهل : مجرد</div>
        <div>شماره تلفن همراه : 09045351612</div>
        <div>شماره تلفن ثابت : 02835227334</div>
        <div>ایمیل : jackbazyar@gmail.com</div>
        <div>آدرس محل سکونت : قزوین</div>
      </div>

      <div className="w-full md:w-1/4 flex justify-center mt-3">
        <img
          src={profImg}
          alt="Profile"
          className="w-56 h-56 rounded-2xl shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
