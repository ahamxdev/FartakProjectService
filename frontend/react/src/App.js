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
import DiscountCode from "./student-panel/DiscountCode";
import RequestManagement from "./student-panel/RequestManagement";
import SupportTicket from "./student-panel/SupportTicket";
import HomeStudent from "./student-panel/HomeStudent";

import PanelProfessor from "./admin-panel/panelProfessor/PanelProfessor";

import HomeFreelancer from "./freelancer/Home";
import PanelFreelanser from "./admin-panel/PanelFreelancer";
import TaskProject from "./admin-panel/TaskProject";
import PanelEmployer from "./admin-panel/PanelEmployer";
import RegisteringEmployerNotification from "./admin-panel/RegisteringEmployerNotification";
import FileTaskProject from "./admin-panel/FileTaskProject";
import StatusProject from "./admin-panel/StatusProject";
import ResoumeProfessor from "./admin-panel/ResoumeProfessor";
import PaymentAndWallet from "./admin-panel/panelProfessor/PaymentAndWallet/PaymentAndWallet";
import OnlineClass from "./admin-panel/panelProfessor/OnlineClass/OnlineClass";
import ProfessorResume from "./admin-panel/panelProfessor/ProfessorResume/ProfessorResume";
import PersonalInformation from "./admin-panel/panelProfessor/personalInformation/PersonalInformation";
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
}

export default App;
