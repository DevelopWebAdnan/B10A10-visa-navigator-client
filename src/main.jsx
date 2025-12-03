import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import AllVisas from './pages/AllVisas';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Register from './pages/Register';
import Home from './pages/Home';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "allVisas",
    element: <AllVisas></AllVisas>
  },
  // {
  //   path: "login",
  //   element: <Login></Login>
  // },
  // {
  //   path: "register",
  //   element: <Register></Register>
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
