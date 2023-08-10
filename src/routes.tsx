import { createBrowserRouter, RouteObject } from "react-router-dom";

import { Home } from "./pages/home";
import { Detail } from "./pages/detail";
import { NotFound } from "./pages/notfound/";
import { Layout } from "./components/layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "detail/:cripto", element: <Detail /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  // Movendo a rota NotFound para o início do array
  { path: "*", element: <NotFound /> },
];

const router = createBrowserRouter(routes);

export { router };
