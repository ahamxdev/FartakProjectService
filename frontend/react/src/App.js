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

import Wallet from "./panel-professor/Wallet";
import MyClasses from "./panel-professor/MyClasses";
import OnlineCourses from "./panel-professor/OnlineCourses";
import PurchasedCourses from "./panel-professor/PurchasedCourses";
import FAQ from "./panel-professor/FAQ";
import Money from "./panel-professor/Money";
import MainOstad from "./panel-professor/mainOstad";
import MoneyTwo from "./panel-professor/money2";
import DiscountCode from "./panel-professor/DiscountCode";
import RequestManagement from "./panel-professor/RequestManagement";
import SupportTicket from "./panel-professor/SupportTicket";
import HomeStudent from "./panel-professor/HomeStudent";

import PanelProffesor from "./admin-panel/panelProfessor/PanelProffesor";

import HomeFreelancer from "./freelancer/Home";
import PanelFreelanser from "./admin-panel/PanelFreelancer";
import TaskProject from "./admin-panel/TaskProject";
import PanelEmployer from "./admin-panel/PanelEmployer";
import RegisteringEmployerNotification from "./admin-panel/RegisteringEmployerNotification";
import FileTaskProject from "./admin-panel/FileTaskProject";
import StatusProject from "./admin-panel/StatusProject";
import ResoumeProfessor from "./admin-panel/ResoumeProfessor";
import PersonalInformation from "./admin-panel/panelProfessor/personalInformation/PersonalInformation";
import ProfessorResume from "./admin-panel/panelProfessor/ProfessorResume/ProfessorResume";
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
        <Route path="/PanelProffesor" element={<PanelProffesor />}>
          <Route path="/PanelProffesor" element={<ProfessorResume />} />
          <Route path="personalInformation" element={<PersonalInformation />} />
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
}

export default App;
