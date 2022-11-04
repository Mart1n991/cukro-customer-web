import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import CardSkeleton from "../cardSkeleton/CardSkeleton";
import Layout from "../layout/Layout";
import SmallCakeDetail from "./SmallCakeDetail";

const SmallCakeDetailWrapper = () => {
  const { smallCake } = useLoaderData();

  return (
    <Layout>
      <Suspense fallback={<CardSkeleton />}>
        <Await resolve={smallCake}>
          <SmallCakeDetail />
        </Await>
      </Suspense>
    </Layout>
  );
};

export default SmallCakeDetailWrapper;
