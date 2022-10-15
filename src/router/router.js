import { createBrowserRouter } from "react-router-dom";
import Cakes from "../pages/cakes/Cakes";
import SmallCakes from "../pages/small-cakes/SmallCakes";
import Specialties from "../pages/specialties/Specialties";
import Order from "../pages/order/Order";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: use for load API,
  },
  {
    path: "/torty",
    element: <Cakes />,
    // loader: use for load API,
  },
  {
    path: "/kolace",
    element: <SmallCakes />,
  },
  {
    path: "/speciality",
    element: <Specialties />,
  },
  {
    path: "/objednavka",
    element: <Order />,
  },
]);
