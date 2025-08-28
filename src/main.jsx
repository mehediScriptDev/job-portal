import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./Components/Error.jsx";
import Register from "./Components/Register.jsx";
import Home from "./Components/Home.jsx";
import AuthProvider from "./Context/AuthContext/AuthProvider.jsx";
import Login from "./Components/Login.jsx";
import MainHome from "./Components/MainHome.jsx";
import FindJob from "./Components/FindJob.jsx";
import Contact from "./Components/Contact.jsx";
import JobDetails from "./Context/JobDetails.jsx";
import PrivateRoute from "./Components/Private/PrivateRoute.jsx";
import ApplyJob from "./Components/ApplyJob.jsx";
import MyApplications from "./Components/MyApplications.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <MainHome></MainHome>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
       {
        path: "/hotjobs",
        element: <FindJob></FindJob>,
      },
      {
        path:'/jobs/:id',
        element: <PrivateRoute> <JobDetails></JobDetails> </PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path:'/applyjob/:id',
        element: <ApplyJob></ApplyJob>,
      },
      {
        path: '/my-applications',
        element: <MyApplications></MyApplications>
      },
     {
        path: "/contact",
        element: <Contact></Contact>,
      },
    
    
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
