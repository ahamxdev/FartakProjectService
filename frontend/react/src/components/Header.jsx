function Header() {
  return (
    <header className=" header__left container-effects">
      <div className="header--dashobord">
        <img src="../img/Link → logo.png" alt="" />
        <span className="header__right--para"></span>
        <img
          className="header__right--img"
          src="../img/img-person.jpg"
          alt="person"
        />
        <div className="header--dashbord-p-home">
          <p className="mb-0">پروفایل شخصی</p>
        </div>
      </div>

      <div className="add-project-container">
        <button className="add-project">
          <img src="../img/plus.svg" alt="add-project" />
        </button>
        <p className="add-project-para mb-0">افزودن پروژه</p>
      </div>
      <div className="search-nav-container">
        <form action="" className="header-search-form">
          <input
            type="text"
            className="search-input-home"
            placeholder="دنبال چه چیزی میگردید؟"
          />
          <button className="header-search-btn">
            <img
              src="../img/search 01.svg"
              className="search-icon-home"
              alt="search"
            />
          </button>
        </form>
        <span className="header__right--para"></span>

        <img className="header__left--img" src="../img/setting.svg" alt="" />
        <span className="header__right--para"></span>
        <img
          className="header__left--img"
          src="../img/notification 03.svg"
          alt=""
        />
        <span className="header__right--para"></span>
        <img className="header__left--img" src="../img/out.svg" alt="" />
      </div>
    </header>
  );
}

export default Header;
