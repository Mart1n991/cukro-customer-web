import { Card, CardActionArea, CardMedia, ImageListItemBar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import torty from "../../assets/Torty_1.jpg";

const SmallCakeCard = ({ id, name }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 300, margin: 2 }}>
      <CardActionArea onClick={() => navigate(id)}>
        <CardMedia component="img" height="180" image={torty} alt="koláče" />
        <ImageListItemBar title={name} />
      </CardActionArea>
    </Card>
  );
};

export default SmallCakeCard;
