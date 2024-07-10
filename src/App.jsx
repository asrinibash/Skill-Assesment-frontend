import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/AboutUs.jsx";
import Partners from "./Pages/Partners/Partners.jsx";
import News from "./Pages/News/News.jsx";
import Resource from "./Pages/Resource/Resource.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import PortalLogin from "./Pages/Portal/PortalLogin.jsx"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="partner" element={<Partners />} />
        <Route path="notification" element={<News />} />
        <Route path="resource" element={<Resource />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="portal" element={<PortalLogin />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
