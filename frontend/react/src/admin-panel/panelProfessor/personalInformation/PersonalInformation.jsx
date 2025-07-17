import profImg from '../../../assest/img/proffesorPanelImg/3542 1.svg'

const personalInformation = () => {
  return (
    <div className="pi-container mx-5 d-flex justify-between">
      <div className="w-75 d-flex flex-column gap-3 mt-3">
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
      <div className="w-25 d-flex mt-3 justify-content-center">
        <img src={profImg} alt="Profile" className="rounded-2xl piProfileImg bg-Primary" />
      </div>
    </div>
  );
};

export default personalInformation;
