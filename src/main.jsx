import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/AboutUs.jsx";
import Partners from "./Pages/Partners.jsx";
import Notification from "./Pages/Notification.jsx";
import Resource from "./Pages/Resource.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import PortalLogin from "./Pages/PortalLogin.jsx";
import TraningAndAssignment from "./Pages/TraningAndAssignment.jsx";
import Qualification from "./Pages/Qualification.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="partner" element={<Partners />} />
          <Route path="tp" element={<TraningAndAssignment />} />
          <Route path="qualification" element={<Qualification />} />
          <Route path="notification" element={<Notification />} />
          <Route path="resource" element={<Resource />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="portal" element={<PortalLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
