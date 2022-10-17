import { Box } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import CakeCard from "../../components/cakeCard/CakeCard";
import Layout from "../../components/layout/Layout";

const Cakes = () => {
  const { data } = useLoaderData();

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {data.map(({ _id, name, price, weight }) => (
          <CakeCard key={_id} name={name} price={price} weight={weight} />
        ))}
      </Box>
    </Layout>
  );
};

export default Cakes;
