import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Perso from "./pages/Perso.jsx";
import Seance from "./pages/Seance.jsx";
import Therapie from "./pages/Therapie.jsx";
import Objectifs from "./pages/Objectifs.jsx";
import Tarifs from "./pages/Tarifs.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/qui-suis-je",
        element: <Perso />,
      },
      {
        path: "/seance",
        element: <Seance />,
      },
      {
        path: "/therapie",
        element: <Therapie />,
      },
      {
        path: "/objectifs",
        element: <Objectifs />,
      },
      {
        path: "/tarifs",
        element: <Tarifs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
