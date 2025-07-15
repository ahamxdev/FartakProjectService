import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import "./App.css";
// Employer Dashboard
import Chat from "./employe-panel/Chat";
import Notification from "./employe-panel/Notification";
import ContactCEO from "./employe-panel/ContactCEO";
import CreateOrder from "./employe-panel/CreateOrder";
import Orders from "./employe-panel/Orders";
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
import ResoumeProffesor from "./admin-panel/ResoumeProffesor";
import StatusProject from "./admin-panel/StatusProject";
import TaskProject from "./admin-panel/TaskProject";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => (
      <>
        <Link to="/employer">کارفرما</Link>{" "}
        <Link to="/freelancer">فریلنسر</Link>
        <Link to="/admin">ادمین</Link>
      </>
    ),
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
      { path: "professors", Component: PanelProffesor },
      { path: "register-employer", Component: RegisteringEmployerNotification },
      { path: "resoume-proffesor", Component: ResoumeProffesor },
      { path: "status-project", Component: StatusProject },
      { path: "task-project", Component: TaskProject },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
