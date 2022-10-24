import { Button, Box, Checkbox, FormGroup, FormControlLabel, Grid, Typography } from "@mui/material";
import torta from "../../assets/Torty_1.jpg";
import { useAsyncValue } from "react-router-dom";
import ProductBasicInformation from "../productBasicInformation/ProductBasicInformation";
import AmountButton from "../amountButton/AmountButton";
import MaterialCard from "../materialCard/MaterialCard";

const CakeDetail = () => {
  const data = useAsyncValue();
  const { weight, height, width, deliveryDate, price, minimumAmount, materials } = data;

  const basicInformation = {
    weight,
    height,
    width,
    deliveryDate,
    price,
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={6} lg={4}>
        <Box sx={{ height: { xs: 300, md: 350 } }}>
          <img src={torta} alt="torta" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <Box>
          <Typography variant="h4" mb={2}>
            {data.name}
          </Typography>
          <ProductBasicInformation basicInformation={basicInformation} />
          <Box>
            <Typography variant="subtitle2">Ak ste na niečo intoleratný zvoľte jednu z možností</Typography>
            <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel control={<Checkbox size="small" />} label={<Typography variant="body2">Bezlepková</Typography>} />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={<Typography variant="body2">Bezlaktózová</Typography>}
              />
            </FormGroup>
          </Box>
        </Box>
        <AmountButton minAmount={minimumAmount} />
        <Button variant="contained">Pridať do objednávky</Button>
      </Grid>
      <Grid item xs={12}>
        {materials.length > 0 && <MaterialCard materials={materials} />}
      </Grid>
    </Grid>
  );
};

export default CakeDetail;
