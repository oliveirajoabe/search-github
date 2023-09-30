import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Repos } from "./pages/Repos";
import { ReposDetail } from "./pages/ReposDetail";
import { PageNotFound } from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/repos",
    element: <Repos />,
  },
  {
    path: "/repos/details",
    element: <ReposDetail />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
