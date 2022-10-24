import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import CardSkeleton from "../cardSkeleton/CardSkeleton";
import Layout from "../layout/Layout";
import CakeDetail from "./CakeDetail";

const CakeDetailWrapper = () => {
  const { cake } = useLoaderData();

  return (
    <Layout>
      <Suspense fallback={<CardSkeleton />}>
        <Await resolve={cake}>
          <CakeDetail />
        </Await>
      </Suspense>
    </Layout>
  );
};

export default CakeDetailWrapper;
