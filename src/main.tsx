import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./pages/form";
import Show from "./pages/show";

const router = createBrowserRouter([
  {
    path: "/caf-2023-t9wass",
    element: <Form />,
  },
  {
    path: "/caf-2023-t9wass/show",
    element: <Show />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
