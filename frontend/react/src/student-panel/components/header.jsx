import "./Header.css";

const Header = () => {
  return (
    <nav
      className="navbar bg-white shadow-sm px-3 py-2 d-flex justify-content-between align-items-center border border-light-subtle rounded-3 mx-3 mt-2"
      dir="rtl"
    >
      <div className="d-flex align-items-center gap-2">
        <img
          src="/img/Link → logo.png"
          alt="Top Rank"
          width="50"
          height="50"
          title="Top Rank"
        />
        <div className="vr"></div>
        <img
          src="/img/img-person.jpg"
          className="rounded-circle"
          alt="User Avatar"
          width="40"
          height="40"
        />
      </div>

      <div className="d-flex align-items-center gap-3">
        <form className="position-relative" role="search">
          <i
            className="bi bi-search position-absolute"
            style={{
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              color: "#aaa",
            }}
          ></i>
          <input
            className="form-control rounded-3 text-end pe-5 py-2"
            type="search"
            placeholder="دنبال چه چیزی می‌گردی؟"
            aria-label="Search"
            style={{ width: "300px" }}
          />
        </form>
        <div className="vr"></div>

        <i className="bi bi-gear fs-5" title="تنظیمات"></i>
        <div className="vr"></div>

        <i className="bi bi-bell fs-5" title="اعلان‌ها"></i>
        <div className="vr"></div>

        <img src="/img/out.svg" alt="خروج" />
      </div>
    </nav>
  );
};

export default Header;
