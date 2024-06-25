import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout";
import Home from "./Pages/Home/Home.jsx";
import Adminstrative from "./Pages/Adminstrative/Adminstrative.jsx";
import Stakeholder from "./Pages/Stakeholder/Stackeholder.jsx";
import AssesmentAgencies from "./Pages/TraningAndAssignment/AssesmentAgencies.jsx";
import News from "./Pages/News/News.jsx";
import Resource from "./Pages/Resource/Resource.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="adminstrative" element={<Adminstrative />} />
        <Route path="stakeholder" element={<Stakeholder />} />
        <Route
          path="skillportal/traningpartner"
          element={<AssesmentAgencies />}
        />
        <Route
          path="skillportal/assesmentagencies"
          element={<AssesmentAgencies />}
        />
        <Route path="news" element={<News />} />
        <Route path="resource" element={<Resource />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
