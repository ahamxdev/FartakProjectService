import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './employe-panel/Home';
import './styles/home.css';
import Chat from './employe-panel/Chat';
import Notification from './employe-panel/Notification';
import Pay from './employe-panel/Pay';
import Room from './employe-panel/Room';
import ShowOrder from './employe-panel/show-order';
import BagMoney from './panel-professor/bag-money';
import Class from './panel-professor/class';
import CorsesInformation from './panel-professor/corses-information';
import Courses from './panel-professor/courses';
import FrequentlyAskedQuestions from './panel-professor/Frequently asked questions';
import Index from './panel-professor/index';
import Money from './panel-professor/Money';
import MainOstad from './panel-professor/mainOstad';
import MoneyTwo from './panel-professor/money2';
import OffPrecent from './panel-professor/Off-Precent';
import Request from './panel-professor/request';
import Ticket from './panel-professor/Ticket';









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Home />
    <Chat />
    <Notification />
    <Pay />
    <Room />
    <ShowOrder />
    <BagMoney />
    <Class />
    <CorsesInformation />
    <Courses />
    <Index />
    <FrequentlyAskedQuestions />
    <MainOstad />
    <Money />
    <MoneyTwo />
    <OffPrecent />
    <Request />
    <Ticket />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
