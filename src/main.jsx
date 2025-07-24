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
        path: "/jobs",
        element: <FindJob></FindJob>,
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
