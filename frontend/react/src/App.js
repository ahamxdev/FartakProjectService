import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./employe-panel/Home";
import Chat from "./employe-panel/Chat";
import Notification from "./employe-panel/Notification";
import Pay from "./employe-panel/Pay";
import WorkSpace from "./employe-panel/WorkSpace";
// import Setting from "./employe-panel/Setting";
// import Search from "./employe-panel/Search";
// import ContactCEO from "./employe-panel/ContactCEO";
// import OrderExcutors from "./employe-panel/OrderExecutors";
// import OrderProgress from "./employe-panel/OrderProgress";

// import Wallet from "./panel-professor/Wallet";
// import MyClasses from "./panel-professor/MyClasses";
// import OnlineCourses from "./panel-professor/OnlineCourses";
// import PurchasedCourses from "./panel-professor/PurchasedCourses";
// import FAQ from "./panel-professor/FAQ";
// import Money from "./panel-professor/Money";
// import MainOstad from "./panel-professor/mainOstad";
// import MoneyTwo from "./panel-professor/money2";
// import DiscountCode from "./panel-professor/DiscountCode";
// import RequestManagement from "./panel-professor/RequestManagement";
// import SupportTicket from "./panel-professor/SupportTicket";
// import HomeStudent from "./panel-professor/HomeStudent";

// import PanelProffesor from "./admin-panel/PanelProffesor";

// import HomeFreelancer from "./freelancer/Home";
// import PanelFreelanser from "./admin-panel/PanelFreelancer";
// import TaskProject from "./admin-panel/TaskProject";
// import PanelEmployer from "./admin-panel/PanelEmployer";
// import RegisteringEmployerNotification from "./admin-panel/RegisteringEmployerNotification";
// import FileTaskProject from "./admin-panel/FileTaskProject";
// import StatusProject from "./admin-panel/StatusProject";
// import ResoumeProfessor from "./admin-panel/ResoumeProfessor";
import CreateOrder from "./employe-panel/CreateOrder";
import Orders from "./employe-panel/Orders";
import WorkRoom from "./employe-panel/WorkRoom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      { path: "chat", Component: Chat },
      { path: "notification", Component: Notification },
      { path: "pay", Component: Pay },
      { path: "work-room", Component: WorkRoom },
      { path: "orders", Component: Orders },
      { path: "create-order", Component: CreateOrder },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <>
    //   <Routes>
    //     {/* employe start */}
    //     <Route path="/" element={<Home />} />
    //     <Route path="/Chat" element={<Chat />} />
    //     <Route path="/Notification" element={<Notification />} />
    //     <Route path="/Pay" element={<Pay />} />
    //     <Route path="/Room" element={<WorkSpace />} />
    //     <Route path="/Orders" element={<Orders />} />
    //     <Route path="/PlaceOrder" element={<PlaceOrder />} />
    //     <Route path="/Setting" element={<Setting />} />
    //     <Route path="/Search" element={<Search />} />
    //     <Route path="/ContactCEO" element={<ContactCEO />} />
    //     <Route path="/OrderExcutors" element={<OrderExcutors />} />
    //     <Route path="/OrderProgress" element={<OrderProgress />} />
    //     {/* employe end */}
    //     <Route path="/HomeStudent" element={<HomeStudent />} />
    //     <Route path="/Wallet" element={<Wallet />} />
    //     <Route path="/MyClasses" element={<MyClasses />} />
    //     <Route path="/OnlineCourses" element={<OnlineCourses />} />
    //     <Route path="/PurchasedCourses" element={<PurchasedCourses />} />
    //     <Route path="/FAQ" element={<FAQ />} />
    //     <Route path="/MainOstad" element={<MainOstad />} />
    //     <Route path="/Money" element={<Money />} />
    //     <Route path="/MoneyTwo" element={<MoneyTwo />} />
    //     <Route path="/DiscountCode" element={<DiscountCode />} />
    //     <Route path="/RequestManagement" element={<RequestManagement />} />
    //     <Route path="/SupportTicket" element={<SupportTicket />} />
    //     {/* student end */}
    //     <Route path="/HomeFreelancer" element={<HomeFreelancer />} />
    //     {/* ADMIN */}
    //     <Route path="/PanelProffesor" element={<PanelProffesor />} />
    //     <Route path="/PanelFreelanser" element={<PanelFreelanser />} />
    //     <Route path="/PanelEmployer" element={<PanelEmployer />} />
    //     <Route path="/TaskProject" element={<TaskProject />} />
    //     <Route
    //       path="/RegisteringEmployerNotification"
    //       element={<RegisteringEmployerNotification />}
    //     />
    //     <Route path="/StatusProject" element={<StatusProject />} />
    //     <Route path="/FileTaskProject" element={<FileTaskProject />} />
    //     <Route path="/ResoumeProfessor" element={<ResoumeProfessor />} />
    //     ResoumeProfessor
    //   </Routes>
    // </>
  );
}

export default App;
