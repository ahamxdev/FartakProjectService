<<<<<<< HEAD
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

=======
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./employe-panel/Home";
import Chat from "./employe-panel/Chat";
import Notification from "./employe-panel/Notification";
import Pay from "./employe-panel/Pay";
import WorkSpace from "./employe-panel/WorkSpace";
import Orders from "./employe-panel/orders";
import PlaceOrder from "./employe-panel/place_order";
import Setting from "./employe-panel/Setting";
import Search from "./employe-panel/Search";
import ContactCEO from "./employe-panel/ContactCEO";
import OrderExcutors from "./employe-panel/OrderExecutors";
import OrderProgress from "./employe-panel/OrderProgress";

import Wallet from "./student-panel/Wallet";
import MyClasses from "./student-panel/MyClasses";
import OnlineCourses from "./student-panel/OnlineCourses";
import PurchasedCourses from "./student-panel/PurchasedCourses";
import FAQ from "./student-panel/FAQ";
import Money from "./student-panel/Money";
import MainOstad from "./student-panel/mainOstad";
import MoneyTwo from "./student-panel/money2";
>>>>>>> a43b147191de07cffa1536aca68daa0ad6e6a0a0
import DiscountCode from "./student-panel/DiscountCode";
import RequestManagement from "./student-panel/RequestManagement";
import SupportTicket from "./student-panel/SupportTicket";
import HomeStudent from "./student-panel/HomeStudent";
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./employe-panel/Home";
import Chat from "./employe-panel/Chat";
import Notification from "./employe-panel/Notification";
import Pay from "./employe-panel/Pay";
import WorkSpace from "./employe-panel/WorkSpace";
import Orders from "./employe-panel/orders";
import PlaceOrder from "./employe-panel/place_order";
import Setting from "./employe-panel/Setting";
import Search from "./employe-panel/Search";
import ContactCEO from "./employe-panel/ContactCEO";
import OrderExcutors from "./employe-panel/OrderExecutors";
import OrderProgress from "./employe-panel/OrderProgress";
>>>>>>> a43b147191de07cffa1536aca68daa0ad6e6a0a0

import Wallet from "./student-panel/Wallet";
import MyClasses from "./student-panel/MyClasses";
import OnlineCourses from "./student-panel/OnlineCourses";
import PurchasedCourses from "./student-panel/PurchasedCourses";
import FAQ from "./student-panel/FAQ";
import Money from "./student-panel/Money";
import MainOstad from "./student-panel/mainOstad";
import MoneyTwo from "./student-panel/money2";
import DiscountCode from "./student-panel/DiscountCode";
import RequestManagement from "./student-panel/RequestManagement";
import SupportTicket from "./student-panel/SupportTicket";
import HomeStudent from "./student-panel/HomeStudent";

<<<<<<< HEAD
=======

>>>>>>> origin/SP-layout
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
=======
<<<<<<< HEAD
=======

>>>>>>> origin/SP-layout
import PanelProfessor from "./admin-panel/panelProfessor/PanelProfessor";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 68e0518728d98227555524759677393c621674e9
import HomeFreelancer from "./freelancer/Home";
import PanelFreelanser from "./admin-panel/PanelFreelancer";
import TaskProject from "./admin-panel/TaskProject";
import PanelEmployer from "./admin-panel/PanelEmployer";
import RegisteringEmployerNotification from "./admin-panel/RegisteringEmployerNotification";
import FileTaskProject from "./admin-panel/FileTaskProject";
import StatusProject from "./admin-panel/StatusProject";
import ResoumeProfessor from "./admin-panel/ResoumeProfessor";
import PaymentAndWallet from "./admin-panel/panelProfessor/PaymentAndWallet/PaymentAndWallet";
<<<<<<< HEAD
=======
=======
>>>>>>> cd8b1b5f897b78fd8f241af07307339f5313cabf
import Wallet from './student-panel/Wallet';
import MyClasses from './student-panel/MyClasses';
import OnlineCourses from './student-panel/OnlineCourses';
import PurchasedCourses from './student-panel/PurchasedCourses';
import FAQ from './student-panel/FAQ';
import Money from './student-panel/Money';
import MainOstad from './student-panel/mainOstad';
import MoneyTwo from './student-panel/money2';
import DiscountCode from './student-panel/DiscountCode';
import RequestManagement from './student-panel/RequestManagement';
import SupportTicket from './student-panel/SupportTicket';
import HomeStudent from './student-panel/HomeStudent';







import PanelProffesor from './admin-panel/PanelProffesor'




import HomeFreelancer from './freelancer/Home'
import PanelFreelanser from './admin-panel/PanelFreelancer'
import TaskProject from './admin-panel/TaskProject'
import PanelEmployer from './admin-panel/PanelEmployer'
import RegisteringEmployerNotification from './admin-panel/RegisteringEmployerNotification'
import FileTaskProject from './admin-panel/FileTaskProject'
import StatusProject from './admin-panel/StatusProject'
import ResoumeProfessor from './admin-panel/ResoumeProfessor'
>>>>>>> 2507956968eee70d24f03051063e871ea02a7c6b
=======
import OnlineClass from "./admin-panel/panelProfessor/OnlineClass/OnlineClass";
import ProfessorResume from "./admin-panel/panelProfessor/ProfessorResume/ProfessorResume";
import PersonalInformation from "./admin-panel/panelProfessor/personalInformation/PersonalInformation";
>>>>>>> 68e0518728d98227555524759677393c621674e9
function App() {
  return (
    <>
      <Routes>
        {/* employe start */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Pay" element={<Pay />} />
        <Route path="/Room" element={<WorkSpace />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/ContactCEO" element={<ContactCEO />} />
        <Route path="/OrderExcutors" element={<OrderExcutors />} />
        <Route path="/OrderProgress" element={<OrderProgress />} />
        {/* employe end */}
        <Route path="/HomeStudent" element={<HomeStudent />} />
        <Route path="/Wallet" element={<Wallet />} />
        <Route path="/MyClasses" element={<MyClasses />} />
        <Route path="/OnlineCourses" element={<OnlineCourses />} />
        <Route path="/PurchasedCourses" element={<PurchasedCourses />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/MainOstad" element={<MainOstad />} />
        <Route path="/Money" element={<Money />} />
        <Route path="/MoneyTwo" element={<MoneyTwo />} />
        <Route path="/DiscountCode" element={<DiscountCode />} />
        <Route path="/RequestManagement" element={<RequestManagement />} />
        <Route path="/SupportTicket" element={<SupportTicket />} />
        {/* student end */}
        <Route path="/HomeFreelancer" element={<HomeFreelancer />} />
        {/* ADMIN */}
        <Route path="/PanelProfessor" element={<PanelProfessor />}>
          <Route path="/PanelProfessor" element={<ProfessorResume />} />
          <Route path="personalInformation" element={<PersonalInformation />} />
          <Route path="onlineClass" element={<OnlineClass />} />
          <Route path="paymentAndWallet" element={<PaymentAndWallet />} />
        </Route>
        <Route path="/PanelFreelanser" element={<PanelFreelanser />} />
        <Route path="/PanelEmployer" element={<PanelEmployer />} />
        <Route path="/TaskProject" element={<TaskProject />} />
        <Route
          path="/RegisteringEmployerNotification"
          element={<RegisteringEmployerNotification />}
        />
        <Route path="/StatusProject" element={<StatusProject />} />
        <Route path="/FileTaskProject" element={<FileTaskProject />} />
        <Route path="/ResoumeProfessor" element={<ResoumeProfessor />} />
        ResoumeProfessor
      </Routes>
    </>
  );
>>>>>>> a43b147191de07cffa1536aca68daa0ad6e6a0a0
}

export default App;
