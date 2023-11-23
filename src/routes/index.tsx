import { useState } from "react";
import { useRoutes } from "react-router-dom";
// routes
import MainRoutes from "./MainRoutes";
// import LoginRoutes from './LoginRoutes';
// import AuthenticationRoutes from './AuthenticationRoutes';

import { RouteObject } from "react-router-dom";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const [mainRoutes, setMainRoutes] = useState<RouteObject>(MainRoutes);

  return useRoutes([mainRoutes]);
}
