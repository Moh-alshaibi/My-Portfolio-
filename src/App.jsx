import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import React, { useRef } from "react";

import Home from "./pages/Home";
import Testing from "./pages/Testing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/testing",
    element: <Testing />,
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
