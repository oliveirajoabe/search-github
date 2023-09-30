import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/repos",
    element: <Profile />,
  },
  {
    path: "*",
    element: <div>pagina não encontrada</div>,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
