import { Card, CardActionArea, CardMedia, ImageListItemBar } from "@mui/material";
import torty from "../../assets/Torty_1.jpg";

const SmallCakeCard = ({ name }) => {
  return (
    <Card sx={{ width: 300, margin: 2 }}>
      <CardActionArea>
        <CardMedia component="img" height="180" image={torty} alt="koláče" />
        <ImageListItemBar title={name} />
      </CardActionArea>
    </Card>
  );
};

export default SmallCakeCard;
