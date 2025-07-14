import { Link } from "react-router-dom";
const FreelancerHome = () => {
  return (
    <>
      <div className="freelancer-container-header">
        <div className="header-top">
          <div className="header-icon">
            <img src="../img/Link → logo.png" alt="icon" />
          </div>

          <div>
            <h1 className="header-title">فرتاک پروژه</h1>
          </div>
          <div className="heder-icons-btn">
            <img src="../img/search 01.svg" alt="icon-head" />
            <img src="../img/brightness.svg" alt="icon-head" />
            <img src="../img/shopping bag.svg" alt="icon-head" />
            <button> ورود | عضویت</button>
          </div>
        </div>
        <hr className="header-line" />
        <div className="header-bottom">
          <Link className="header-bottom-link" href="#">
            خانه
          </Link>
          <Link className="header-bottom-link" href="#">
            تدریس
          </Link>
          <Link className="header-bottom-link" href="#">
            پروژه ها
          </Link>
          <Link className="header-bottom-link" href="#">
            دوره ها
          </Link>
          <Link className="header-bottom-link" href="#">
            وبلاگ
          </Link>
          <Link className="header-bottom-link" href="#">
            درباره ما
          </Link>
          <Link className="header-bottom-link" href="#">
            تماس با ما
          </Link>
          <Link className="header-bottom-link" href="#">
            پشتیبانی
          </Link>
        </div>
      </div>

      <div className="body-search-container">
        <div className="body-seach-paragraphs">
          <p>در بین نمونه کارها جستجو کنید</p>
          <p>و مطمئن پروژه‌های خود را برون‌سپاری کنید</p>
        </div>
        <div>
          <img src="../img/326598983 2.png" alt="img" />
        </div>
      </div>
      <div className="freelancer-body-seach-input">
        <input type="search" />
        <img src="../img/search 01.svg" alt="icon-search" />
      </div>

      <div className="freelancer-level">
        <p className="freelancer-level-border">1</p>
        <p>ثبت پروژه و پرداخت امن</p>
        <p className="freelancer-level-border">2</p>
        <p>ارزیابی پروژه توسط تیم فرتاک و توافق بر کیفیت بالا</p>
        <p className="freelancer-level-border">3</p>
        <p>ظارت بر پروژه</p>
        <p className="freelancer-level-border">4</p>
        <p>تحویل پروژه</p>
        <button>همین حالا پروژه خود را سفارش دهید </button>
      </div>
      <div className="freelancer-body-count">
        <div className="freelancer-count">
          <img src="../img/coding.png" alt="img" />
          <p>توسعه نرم افزار و ای تی</p>
        </div>

        <div className="freelancer-count">
          <img src="../img/content.png" alt="img" />
          <p>توسعه نرم افزار و ای تی</p>
        </div>

        <div className="freelancer-count">
          <img src="../img/Digital Marketing-05 1.png" alt="img" />
          <p>توسعه نرم افزار و ای تی</p>
        </div>
      </div>
      <div className="freelanser-count-para">
        <p>+200 فریلنسر</p>
        <p>+200 فریلنسر</p>
        <p>+200 فریلنسر</p>
      </div>
      <div className="freelancer-body-count">
        <div className="freelancer-count">
          <img src="../img/coding.png" alt="img" />
          <p>توسعه نرم افزار و ای تی</p>
        </div>

        <div className="freelancer-count">
          <img src="../img/Digital Marketing-05 1 (1).png" alt="img" />
          <p>توسعه نرم افزار و ای تی</p>
        </div>

        <div className="freelancer-count">
          <img src="../img/Digital Marketing-05 1 (2).png" alt="img" />
          <p>توسعه نرم افزار و ای تی</p>
        </div>
      </div>
      <div className="freelanser-count-para">
        <p>+200 فریلنسر</p>
        <p>+200 فریلنسر</p>
        <p>+200 فریلنسر</p>
      </div>
    </>
  );
};

export default FreelancerHome;
