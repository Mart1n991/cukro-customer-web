import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Box } from "@mui/material";
import Layout from "../../components/layout/Layout";
import CakeList from "../../components/cakeList/CakeList";
import CardSkeleton from "../../components/cardSkeleton/CardSkeleton";

const Cakes = () => {
  const { cakes } = useLoaderData();

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Suspense fallback={<CardSkeleton />}>
          <Await resolve={cakes}>
            <CakeList />
          </Await>
        </Suspense>
      </Box>
    </Layout>
  );
};

export default Cakes;
