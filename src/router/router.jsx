import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Jewerly from "../pages/JewerlySection";
import Men from "../pages/MenSection";
import Women from "../pages/WomenSection";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/jewerly",
      element: <Jewerly />
    },
    {
      path: "/men",
      element: <Men />
    },
    {
      path: "/women",
      element: <Women />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Router;