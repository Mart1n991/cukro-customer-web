import { Box } from "@mui/material";
import TextField from "../textField/TextField";

const ProductBasicInformation = ({ basicInformation }) => {
  const { weight, height, width, deliveryDate, price } = basicInformation;
  const value = `${height} x ${width}`;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} mb={2}>
      <TextField label="Hmotnosť" value={weight} unit="gramov" />
      {(height !== 0 || width !== 0) && <TextField label="Rozmery" value={value} unit="cm" />}
      {deliveryDate !== 0 && <TextField label="Čas dodania" value={deliveryDate} unit="Pracovné dni" />}
      <TextField label="Cena" value={price} unit="EUR" />
    </Box>
  );
};

export default ProductBasicInformation;
