import { Card, Skeleton } from "@mui/material";

const CardSkeleton = () => (
  <>
    {["0", "1", "2"].map((index) => (
      <Card key={index} sx={{ width: 300, margin: 2 }}>
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" style={{ marginBottom: 20 }} />
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
        <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 20 }} />
      </Card>
    ))}
  </>
);

export default CardSkeleton;
