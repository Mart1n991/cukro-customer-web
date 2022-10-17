import { Box } from "@mui/material";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import CardSkeleton from "../../components/cardSkeleton/CardSkeleton";
import SmallCakeList from "../../components/smallCakeList/SmallCakeList";

const SmallCakes = () => {
  const { smallCakes } = useLoaderData();

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Suspense fallback={<CardSkeleton />}>
          <Await resolve={smallCakes}>
            <SmallCakeList />
          </Await>
        </Suspense>
      </Box>
    </Layout>
  );
};

export default SmallCakes;
