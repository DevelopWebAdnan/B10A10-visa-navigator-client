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
import AddVisa from './pages/AddVisa';
import PrivateRoute from './routes/PrivateRoute';
import VisaDetails from './pages/VisaDetails';
import MyAddedVisas from './pages/MyAddedVisas';
import MyVisaApplications from './pages/myVisaApplications';
import VisaCard from './components/VisaCard';
import LatestVisas from './components/LatestVisas';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const latestVisaRes = await fetch("https://b10-a10-visa-navigator-server-ten.vercel.app/latestVisas")
          const latestVisaData = await latestVisaRes.json()

          const userRes = await fetch("https://b10-a10-visa-navigator-server-ten.vercel.app/users")
          const userData = await userRes.json()
          return { latestVisaData, userData };
        }
      },
      {
        path: "latestVisas",
        element: <LatestVisas></LatestVisas>,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "addVisa",
        element: <PrivateRoute><AddVisa></AddVisa></PrivateRoute>
      },
      {
        path: "allVisas",
        element: <AllVisas></AllVisas>,
        loader: () => fetch("https://b10-a10-visa-navigator-server-ten.vercel.app/visas"),

        children: [
          {
            path: "/allVisas/:visaType",
            element: <VisaCard></VisaCard>,
            loader: ({ params }) => fetch(`https://b10-a10-visa-navigator-server-ten.vercel.app/allVisas/${params.visaType}`)
          }
        ]
      },
      {
        path: "visaDetails/:id",
        element: <PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://b10-a10-visa-navigator-server-ten.vercel.app/visas/${params.id}`)
      },
      {
        path: 'myVisas/:email',
        element: <PrivateRoute><MyAddedVisas></MyAddedVisas></PrivateRoute>,
        loader: ({ params }) => fetch(`https://b10-a10-visa-navigator-server-ten.vercel.app/myVisas/${params.email}`)
      },
      {
        path: 'myVisaApplications/:email',
        loader: ({ params }) => fetch(`https://b10-a10-visa-navigator-server-ten.vercel.app/myVisaApplications/${params.email}`),
        element: <PrivateRoute><MyVisaApplications></MyVisaApplications></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
