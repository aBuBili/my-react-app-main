import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import App from "./App";
import ErrorPage from "./pages/error-page";
import Index from "./pages";
import Home from "./pages/tabbar";
import MouseRotate from "./pages/mouse-rotate";
import Background from "./pages/background";
import TurnMe from "./pages/turn-me";
import ScrollX from "./pages/scroll-x";
import ImageRotate from "./pages/image-rotate";
import AnimateIcon from "./pages/animate-icon";
import DayRecord from "./pages/day-record";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Index />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/background",
            element: <Background />,
          },
          {
            path: "/mouse-rotate",
            element: <MouseRotate />,
          },
          {
            path: "/turn-me",
            element: <TurnMe />,
          },
          {
            path: "/scroll-x",
            element: <ScrollX />,
          },
          {
            path: "/image-rotate",
            element: <ImageRotate />,
          },
          {
            path: "/animate-icon",
            element: <AnimateIcon />,
          },
        ],
      },
      {
        path: "/day-record",
        element: <DayRecord />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
