import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "./App.css";
// Employer Dashboard
import Chat from "./employe-panel/Chat";
import Notification from "./employe-panel/Notification";
import ContactCEO from "./employe-panel/ContactCEO";
import CreateOrder from "./employe-panel/CreateOrder";
// import Orders from "./employe-panel/Orders";
import WorkRoom from "./employe-panel/WorkRoom";
import EmployerLayout from "./employe-panel/EmployerLayout";
import OrderExecutors from "./employe-panel/OrderExecutors";
import Search from "./employe-panel/Search";
import Setting from "./employe-panel/Settings";
import EmployerPayment from "./employe-panel/EmployerPayment";
import EmployerHome from "./employe-panel/EmployerHome";
import OrderProgress from "./employe-panel/OrderProgress";
// Freelancer dashboard
import FreelancerLayout from "./freelancer/FreelancerLayout";
import FreelancerHome from "./freelancer/FreelancerHome";
import FreelancerPayment from "./freelancer/FreelancerPayment";
import CreatedOrders from "./freelancer/CreatedOrders";
import Cuts from "./freelancer/Cuts";
import Charts from "./pages/Charts";
import OrderId from "./freelancer/OrderId";
// Admin Panel
import AdminLayout from "./admin-panel/AdminLayout";
import FileTaskProject from "./admin-panel/FileTaskProject";
import PanelEmployer from "./admin-panel/PanelEmployer";
import PanelFreelancer from "./admin-panel/PanelFreelancer";
import PanelProffesor from "./admin-panel/PanelProffesor";
import RegisteringEmployerNotification from "./admin-panel/RegisteringEmployerNotification";
import StatusProject from "./admin-panel/StatusProject";
import TaskProject from "./admin-panel/TaskProject";
import ProfessorResoume from "./admin-panel/ProfessorResoume";
import ProfessorInfo from "./admin-panel/ProfessorInfo";
import Login from "./pages/Login";
import ProfessorHelp from "./admin-panel/ProfessorHelp";
import RecordedCourses from "./admin-panel/RecordedCourses";
import CourseField from "./admin-panel/CourseField";
import { loader as CourseFieldLoader } from "./admin-panel/CourseField";
// Student dashboard
import StudentLayout from "./student-panel/components/StudentLayout";
import Wallet from "./student-panel/Wallet";
import MyClasses from "./student-panel/MyClasses";
import OnlineCourses from "./student-panel/OnlineCourses";
import PurchasedCourses from "./student-panel/PurchasedCourses";
import FAQ from "./student-panel/FAQ";

import DiscountCode from "./student-panel/DiscountCode";
import RequestManagement from "./student-panel/RequestManagement";
import SupportTicket from "./student-panel/SupportTicket";
import HomeStudent from "./student-panel/HomeStudent";
import Orders from "./employe-panel/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => (
      <div className="flex justify-center pt-24 gap-20">
        <Link className="text-blue-500 hover:text-blue-300" to="/employer">
          کارفرما
        </Link>{" "}
        <Link className="text-blue-500 hover:text-blue-300" to="/freelancer">
          فریلنسر
        </Link>
        <Link className="text-blue-500 hover:text-blue-300" to="/admin">
          ادمین
        </Link>
        <Link className="text-blue-500 hover:text-blue-300" to="/login">
          Login
        </Link>
        <Link className="text-blue-500 hover:text-blue-300" to="/student">
          دانشجو
        </Link>
      </div>
    ),
  },
  // { path: "/login", Component: Login },
  {
    path: "/login",
    Component: Login,
  },
  { path: "/charts", Component: Charts },
  // Empoyer dashboard
  {
    path: "/employer",
    Component: EmployerLayout,
    children: [
      { path: "", Component: EmployerHome },
      { path: "chat", Component: Chat },
      { path: "notification", Component: Notification },
      { path: "work-room", Component: WorkRoom },
      { path: "orders", Component: Orders },
      { path: "create-order", Component: CreateOrder },
      { path: "contact-ceo", Component: ContactCEO },
      { path: "executors", Component: OrderExecutors },
      { path: "search", Component: Search },
      { path: "settings", Component: Setting },
      { path: "payment", Component: EmployerPayment },
      { path: "order-progress", Component: OrderProgress },
    ],
  },
  // Freelancer dashboard
  {
    path: "/freelancer",
    Component: FreelancerLayout,
    children: [
      { path: "", Component: FreelancerHome },
      { path: "payment", Component: FreelancerPayment },
      { path: "orders", Component: CreatedOrders },
      { path: "cuts", Component: Cuts },
      { path: "orders/:orderId", Component: OrderId },
    ],
  },
  // Admin panel
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { path: "filetask", Component: FileTaskProject },
      { path: "employer", Component: PanelEmployer },
      { path: "freelancer", Component: PanelFreelancer },
      { path: "register-employer", Component: RegisteringEmployerNotification },
      { path: "status-project", Component: StatusProject },
      { path: "task-project", Component: TaskProject },
      // Professors
      { path: "professors", Component: PanelProffesor },
      { path: "professor-resoume", Component: ProfessorResoume },
      { path: "professor-info", Component: ProfessorInfo },
      { path: "professor-help", Component: ProfessorHelp },
      {
        path: "courses",
        Component: RecordedCourses,
        children: [
          { path: "", Component: CourseField },
          { path: ":field", Component: CourseField, loader: CourseFieldLoader },
        ],
      },
    ],
  },

  // Student dashboard
  {
    path: "/student",
    Component: StudentLayout,
    children: [
      { path: "", Component: HomeStudent },
      { path: "wallet", Component: Wallet },
      { path: "request-management", Component: RequestManagement },
      { path: "my-classes", Component: MyClasses },
      { path: "online-courses", Component: OnlineCourses },
      { path: "purchased-courses", Component: PurchasedCourses },
      { path: "faq", Component: FAQ },
      { path: "support-ticket", Component: SupportTicket },
      { path: "discount-code", Component: DiscountCode },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
