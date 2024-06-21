import "./App.css";

import Layout from "./layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Stackeholder from "./Pages/Stakeholder/Stackeholder";
import News from "./Pages/News/News";
import Resource from "./Pages/Resource/Resource";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SkillPortal from "./Pages/TraningAndAssignment/SkillPortal";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="stakeholder" element={<Stackeholder />} />
        <Route path="skillportal" element={<SkillPortal />} />
        <Route path="news" element={<News />} />
        <Route path="resource" element={<Resource />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
