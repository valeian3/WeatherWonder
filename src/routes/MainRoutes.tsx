import { lazy } from "react";

// main layout
import MainLayout from "layout/MainLayout";

// suspense - loadable
import Loadable from "components/Loadable";

// app routes
const HomePage = Loadable(lazy(() => import("pages/Home")));
const AboutPage = Loadable(lazy(() => import("pages/About")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ],
};

export default MainRoutes;
