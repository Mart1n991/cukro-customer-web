import { createBrowserRouter } from "react-router-dom";
import Cakes from "../pages/cakes/Cakes";
import SmallCakes from "../pages/small-cakes/SmallCakes";
import Specialties from "../pages/specialties/Specialties";
import Order from "../pages/order/Order";
import Home from "../pages/home/Home";
import { getProductList } from "../api/requests";
import { cakesCategoryId, smallCakesCategoryId, specialitesCategoryId } from "../constans/productCategories";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/torty",
    element: <Cakes />,
    loader: () => getProductList(cakesCategoryId),
  },
  {
    path: "/kolace",
    element: <SmallCakes />,
    loader: () => getProductList(smallCakesCategoryId),
  },
  {
    path: "/speciality",
    element: <Specialties />,
    loader: () => getProductList(specialitesCategoryId),
  },
  {
    path: "/objednavka",
    element: <Order />,
  },
]);
