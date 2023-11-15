import MainRoute from "../MainRoute/MainRoute";
import About from "../pages/About/About";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";

export const Routes = [
  {
    path: "/",
    element: <MainRoute />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "faq",
        element: <Faq />,
      }
    ],
  },
];
