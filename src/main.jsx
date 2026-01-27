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
// import UpdateVisa from './components/UpdateVisa';
// import MyAddedVisa from './components/MyAddedVisa';
import VisaCard from './components/VisaCard';

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
          const visaRes = await fetch("http://localhost:5000/visas")
          // const addedVisaRes = await fetch("http://localhost:5000/addedVisas")
          // const addedVisaData = await addedVisaRes.json()
          const visaData = await visaRes.json()
          
          const userRes = await fetch("http://localhost:5000/users")
          const userData = await userRes.json()

          const visaApplicationRes = await fetch("http://localhost:5000/visaApplications")
          const visaApplicationData = await visaApplicationRes.json()
          
          // return { visaData, userData };
          return { visaData, userData, visaApplicationData };
        }
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
        loader: () => fetch("http://localhost:5000/visas"), 
        // loader: () => fetch("http://localhost:5000/addedVisas"), 
        children: [
          {
            // path: "allVisas/:visaType",
            path: "allVisas/:visaType",
            // element: <p>visaType</p>,
            element: <VisaCard></VisaCard>,
            loader: ({params}) => fetch(`http://localhost:5000/addedVisas/${params.visaType}`) 
          }
        ]
        // loader: ({params}) => fetch(`http://localhost:5000/visas/${params.visaType}`)
      },
      {
        path: "visaDetails/:id",
        element: <PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
        // loader: ({ params }) => fetch(`http://localhost:5000/addedVisas/${params.id}`)
        loader: ({ params }) => fetch(`http://localhost:5000/visas/${params.id}`)
        // loader: ({ params }) => fetch(`http://localhost:5000/visaApplications/${params.id}`)
      },
      {
        // path: 'visas/:email',
        path: 'myVisas/:email',
        // path: 'myVisas',
        // path: 'myAddedVisas',
        element: <PrivateRoute><MyAddedVisas></MyAddedVisas></PrivateRoute>,
        // loader: ({params}) => fetch(`http://localhost:5000/addedVisas/${params.email}`)
        loader: ({params}) => fetch(`http://localhost:5000/myVisas/${params.email}`)
        // loader: () => fetch('http://localhost:5000/myVisas')
        // loader: () => fetch('http://localhost:5000/addedVisas')
        // loader: () => fetch('http://localhost:5000/visas')
        //     {
        //   fetch('http://localhost:5000/visas')
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
        //       fetch(`http://localhost:5000/visas/${params.id}`)
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
      // loader: ({ params }) => fetch(`http://localhost:5000/visas/${params.id}`)
      //   {
      //   fetch(`http://localhost:5000/visas/${params.id}`)
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
        path: 'myVisaApplications/:email',
        // path: 'myVisaApplications',
        // loader: ({params}) => fetch(`http://localhost:5000/visas/${params.email}`),
        // loader: () => fetch('http://localhost:5000/visas'),
        // loader: () => fetch('http://localhost:5000/visaApplications'),
        loader: ({params}) => fetch(`http://localhost:5000/myVisaApplications/${params.email}`),
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
