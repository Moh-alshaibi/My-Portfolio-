import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from 'react-router-dom';
import React, { useRef } from 'react';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Aboutme from './pages/Aboutme';
import Experience from './pages/Skills';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/aboutme',
    element: <Aboutme />,
  },
  {
    path: '/contact',
    element: <Contacts />,
  },
  {
    path: '/skills',
    element: <Skills />
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/',
    element: <Navigate to='/home' replace={true} />,
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