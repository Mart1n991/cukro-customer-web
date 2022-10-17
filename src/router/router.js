import { createBrowserRouter, defer } from "react-router-dom";
import { getProductList } from "../api/requests";
import { cakesCategoryId, smallCakesCategoryId, specialitesCategoryId } from "../constans/productCategories";
import Error from "../components/error/Error";
import Cakes from "../pages/cakes/Cakes";
import SmallCakes from "../pages/small-cakes/SmallCakes";
import Specialties from "../pages/specialties/Specialties";
import Order from "../pages/order/Order";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/torty",
    element: <Cakes />,
    loader: async () => {
      let cakes = getProductList(cakesCategoryId);
      return defer({ cakes });
    },
    errorElement: <Error />,
  },
  {
    path: "/kolace",
    element: <SmallCakes />,
    loader: () => getProductList(smallCakesCategoryId),
    errorElement: <Error />,
  },
  {
    path: "/speciality",
    element: <Specialties />,
    loader: () => getProductList(specialitesCategoryId),
    errorElement: <Error />,
  },
  {
    path: "/objednavka",
    element: <Order />,
  },
]);
