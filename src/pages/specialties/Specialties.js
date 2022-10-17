import { Box } from "@mui/material";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import CardSkeleton from "../../components/cardSkeleton/CardSkeleton";
import Layout from "../../components/layout/Layout";
import SpecialtyList from "../../components/specialtyList/SpecialtyList";

const Specialties = () => {
  const { specialties } = useLoaderData();

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Suspense fallback={<CardSkeleton />}>
          <Await resolve={specialties}>
            <SpecialtyList />
          </Await>
        </Suspense>
      </Box>
    </Layout>
  );
};

export default Specialties;
