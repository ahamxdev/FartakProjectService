import "../styles/freelancer.css";
import PieChart from "../components/PieChart";

function Charts() {
  return (
    <>
      <header className="charts-header">
        <button className="btn-secondary">امیرحسین بازیار</button>
        <div>
          <img src="/img/Link → logo.png" alt="fartak" />
          <span>داشبورد فریلنسر</span>
        </div>
      </header>
      <main className="charts-main-container">
        <div className="charts-sidebar">
          <img src="/img/freelancer/settings.png" alt="settings" />
          <div className="charts-sidebar-info">
            <div>
              اب <span>27</span>
            </div>
            <h4>امیرحسین بازیار</h4>
            <span>فریلنسر</span>
            <span>فرانت اند - بک اند - ui - ux</span>
            <span>مرد - مجرد - فارسی - تاکستان</span>
          </div>
          <div className="charts-sidebar-projects">
            <span>پروژه آقای جباری</span>
            <span>پروژه آقای حیدری</span>
            <span>پروژه آقای محبی</span>
            <span>پروژه خانوم حیدری </span>
          </div>
          <div className="charts-sidebar-links">
            <span>کیف پول دیجیتال</span>
            <span>پروژه های انجام شده</span>
          </div>
        </div>
        <div className="charts">
          <h2>آخرین پروژه ها</h2>
          <div className="charts-container">
            <div>
              <h3>فرانت اند</h3>
              <span>project 1 - front end - 6 person - 20 task</span>
              <PieChart
                labels={["امیر حسین", "علی", "نازنین", "اکبر", "سارا", "محمد"]}
                dataValues={[30, 50, 20, 50, 10, 25]}
              />
            </div>
            <div>
              <h3>بک اند</h3>
              <span>project 1 - front end - 6 person - 20 task</span>
              <PieChart
                labels={["امیر حسین", "علی", "نازنین", "اکبر", "سارا", "محمد"]}
                dataValues={[30, 50, 20, 50, 10, 25]}
              />
            </div>
            <div>
              <h3>UI</h3>
              <span>project 1 - front end - 6 person - 20 task</span>
              <PieChart
                labels={["امیر حسین", "علی", "نازنین", "اکبر", "سارا", "محمد"]}
                dataValues={[30, 50, 20, 50, 10, 25]}
              />
            </div>
            <div>
              <h3>UX</h3>
              <span>project 1 - front end - 6 person - 20 task</span>
              <PieChart
                labels={["امیر حسین", "علی", "نازنین", "اکبر", "سارا", "محمد"]}
                dataValues={[30, 50, 20, 50, 10, 25]}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Charts;
