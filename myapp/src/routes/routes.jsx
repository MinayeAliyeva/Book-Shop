import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Admin from "../components/Admin/Admin";
import Books from "../components/Books/Books";

const routes = [
  {
    path: "",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/books",
        element: <Books />,
      },
    ],
  },
];

export const router=createBrowserRouter(routes);