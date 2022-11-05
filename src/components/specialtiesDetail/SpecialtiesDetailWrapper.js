import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import CardSkeleton from "../cardSkeleton/CardSkeleton";
import Layout from "../layout/Layout";
import SpecialtiesDetail from "./SpecialtiesDetail";

const SpecialtiesDetailWrapper = () => {
  const { specialty } = useLoaderData();

  return (
    <Layout>
      <Suspense fallback={<CardSkeleton />}>
        <Await resolve={specialty}>
          <SpecialtiesDetail />
        </Await>
      </Suspense>
    </Layout>
  );
};

export default SpecialtiesDetailWrapper;
