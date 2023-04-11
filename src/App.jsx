import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import React, { useRef } from "react";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Aboutme from "./pages/Aboutme";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/testing",
    element: <Aboutme />,
  },
  {
    path: "/contact",
    element: <Contacts/>,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
