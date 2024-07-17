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
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="partner" element={<Partners />} />
          <Route path="tp" element={<TraningAndAssignment />} />
          <Route path="qualification" element={<Qualification />} />
          <Route path="notification" element={<News />} />
          <Route path="resource" element={<Resource />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="portal" element={<PortalLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
