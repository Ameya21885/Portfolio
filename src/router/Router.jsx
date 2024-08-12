import { createBrowserRouter } from "react-router-dom";
import {
  Root,
  Home,
  About,
  Services,
  Portfolio,
  Contact,
  Skills,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <p>404 Error- Nothing here...</p>,
      },
    ],
  },
]);

export default router;
