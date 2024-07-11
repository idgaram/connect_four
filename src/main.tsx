import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../src/Styles/index.css";
import MainMenuPage from "./pages/MainMenuPage.tsx";
import Test from "./pages/Test.tsx";
import PvpGame from "./pages/PvpGame.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainMenuPage />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/pvp-game",
        element: <PvpGame />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
