import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/AboutUs.jsx";
import Partners from "./Pages/Partners/Partners.jsx";
import News from "./Pages/News/News.jsx";
import Resource from "./Pages/Resource/Resource.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import PortalLogin from "./Pages/Portal/PortalLogin.jsx";
import TraningAndAssignment from "./Pages/TraningAndAssignment/TraningAndAssignment.jsx";
import Qualification from "./Pages/Qualification/Qualification.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/skill-assessment/" element={<Home />} />
        <Route path="/skill-assessment/" element={<App />}>
          <Route path="/skill-assessment/about" element={<About />} />
          <Route path="/skill-assessment/partner" element={<Partners />} />
          <Route path="/skill-assessment/tp" element={<TraningAndAssignment />} />
          <Route path="/skill-assessment/qualification" element={<Qualification />} />
          <Route path="/skill-assessment/notification" element={<News />} />
          <Route path="/skill-assessment/resource" element={<Resource />} />
          <Route path="/skill-assessment/contact" element={<ContactUs />} />
          <Route path="/skill-assessment/portal" element={<PortalLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
