const FreelancerHome = () => {
  return (
    <div className="freelancer-home-card container-effects">
      <div>
        <p>جنسیت : مرد بزرگ</p>
        <p>وضعیت تاهل : مجرد تنها</p>
        <p>زبان مسلط : پارسی ایرانی</p>
        <p>استان محل سکونت : قزوین</p>
      </div>
      <img src="/img/freelancer/map.png" alt="map" />
      <div>
        <p>تخصص های من :</p>
        <div className="freelancer-skills">
          <span>front-end</span>
          <span>back-end</span>
          <span>ui</span>
          <span>ux</span>
        </div>
      </div>
    </div>
  );
};

export default FreelancerHome;
