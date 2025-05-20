import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import './index';
import './App.css';
// import './employe-panel/Home';
// import './employe-panel/Chat';
import Home from "./employe-panel/Home";
import Chat from "./employe-panel/Chat";
import Notification from './employe-panel/Notification';
// import Pay from './employe-panel/Pay';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/" element={<Notification />} />
        {/* <Route path="/" element={<Pay />} /> */}

        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}


export default App;
