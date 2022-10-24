import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import basicCakePicture from "../../assets/Torty_1.jpg";
import { useNavigate } from "react-router-dom";

const CakeCard = ({ id, name, price, weight }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 300, margin: 2 }}>
      <CardActionArea onClick={() => navigate(id)}>
        <CardMedia component="img" height="140" image={basicCakePicture} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Box>
            <Box sx={{ display: "flex" }}>
              <Typography variant="body2" color="text.secondary" width={80}>
                Hmotnosť:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {weight} gramov
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography variant="body2" color="text.secondary" width={80}>
                Cena:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {price}€
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained" onClick={() => navigate(id)}>
          Pozrieť tortu
        </Button>
      </CardActions>
    </Card>
  );
};

export default CakeCard;
