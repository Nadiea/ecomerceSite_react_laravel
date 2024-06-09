import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import Login from "./page/Login";
import Register from "./page/Register";
import Home from "./page/Home";
import AdminLayout from "./page/admin/AdminLayout";
import Admin from "./page/admin/Admin";
import AddCategory from "./page/admin/AddCategory";
import AdminLogin from "./page/admin/AdminLogin";
import DataContextProvider from  "./context/Context"


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  //admi
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin/AddCategory",
        element: <AddCategory />,
      },
    ],
  },

  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      {" "}
      <RouterProvider router={router} />
    </DataContextProvider>
  </React.StrictMode>
);
