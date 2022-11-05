import { createBrowserRouter, defer } from "react-router-dom";
import { getProduct, getProductList } from "../api/requests";
import { cakesCategoryId, smallCakesCategoryId, specialitesCategoryId } from "../constans/productCategories";
import Error from "../components/error/Error";
import Cakes from "../pages/cakes/Cakes";
import SmallCakes from "../pages/smallCakes/SmallCakes";
import Specialties from "../pages/specialties/Specialties";
import Order from "../pages/order/Order";
import Home from "../pages/home/Home";
import CakeDetailWrapper from "../components/cakeDetail/CakeDetailWrapper";
import SmallCakeDetailWrapper from "../components/smallCakeDetail/SmallCakeDetailWrapper";
import SpecialtiesDetailWrapper from "../components/specialtiesDetail/SpecialtiesDetailWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    index: true,
    path: "/torty",
    element: <Cakes />,
    loader: async () => {
      let cakes = getProductList(cakesCategoryId);
      return defer({ cakes });
    },
    errorElement: <Error />,
  },
  {
    path: "/torty/:id",
    element: <CakeDetailWrapper />,
    loader: async ({ params }) => {
      let cake = getProduct(params.id);
      return defer({ cake });
    },
    errorElement: <Error />,
  },
  {
    path: "/kolace",
    element: <SmallCakes />,
    loader: async () => {
      let smallCakes = getProductList(smallCakesCategoryId);
      return defer({ smallCakes });
    },
    errorElement: <Error />,
  },
  {
    path: "/kolace/:id",
    element: <SmallCakeDetailWrapper />,
    loader: async ({ params }) => {
      let smallCake = getProduct(params.id);
      let smallCakes = await getProductList(smallCakesCategoryId);
      return defer({ smallCake, smallCakes });
    },
    errorElement: <Error />,
  },
  {
    path: "/speciality",
    element: <Specialties />,
    loader: async () => {
      let specialties = getProductList(specialitesCategoryId);
      return defer({ specialties });
    },
    errorElement: <Error />,
  },
  {
    path: "/speciality/:id",
    element: <SpecialtiesDetailWrapper />,
    loader: async ({ params }) => {
      let specialty = getProduct(params.id);
      let specialties = await getProductList(specialitesCategoryId);
      return defer({ specialty, specialties });
    },
    errorElement: <Error />,
  },
  {
    path: "/objednavka",
    element: <Order />,
  },
]);
