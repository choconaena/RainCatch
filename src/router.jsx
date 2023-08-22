import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import Main from "./pages/main/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
    ],
  },
]);

export default router;
