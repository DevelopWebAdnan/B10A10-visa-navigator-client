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
import UpdateVisa from './components/UpdateVisa';
import MyAddedVisa from './components/MyAddedVisa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/allVisas")
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
        loader: () => fetch("http://localhost:5000/allVisas")
      },
      {
        path: "visaDetails",
        element: <PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>
      },
      {
        path: 'myAddedVisas',
        element: <PrivateRoute><MyAddedVisas></MyAddedVisas></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/allVisas')
      //     {
      //   fetch('http://localhost:5000/allVisas')
      //     .then(res => res.json())
      //     .then(data => {
      //       console.log(data);
      //       const singleDataId = data.map(singleVisa => singleVisa._id);
      //       console.log(singleDataId);
      //     })
      // }
        // children: [
        //   {
        //     path: 'myAddedVisas/updateVisa/:id',
        //     element: <UpdateVisa></UpdateVisa>,
        //     loader: ({ params }) => {
        //       fetch(`http://localhost:5000/allVisas/${params.id}`)
        //         .then(res => res.json())
        //         .then(data => {
        //           console.log(data);
        //           const definiteVisa = data.find(visa => visa._id === data._id)
        //           console.log(definiteVisa);
        //           return definiteVisa;
        //         })
        //     }
        //   },
        // ]
      },
  // {
    // path: 'myAddedVisas/updateVisa/:id',
    // element: <UpdateVisa></UpdateVisa>,
    // path: 'myAddedVisas/myAddedVisa/:id',
    // element: <MyAddedVisa></MyAddedVisa>,
    // loader: ({ params }) => fetch(`http://localhost:5000/allVisas/${params.id}`)
    //   {
    //   fetch(`http://localhost:5000/allVisas/${params.id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data);
    //       const definiteVisa = data.find(visa => visa._id === data._id)
    //       console.log(definiteVisa);
    //       return definiteVisa;
    //     })
    // }
  // },
  {
    path: 'myVisaApplications',
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
