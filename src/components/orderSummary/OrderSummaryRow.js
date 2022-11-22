import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import AmountButton from "./AmountButton";

const OrderSummaryRow = ({ item, updateAmount, removeOrderItem }) => {
  const finalPrice = Math.round((item.amount * item.price + Number.EPSILON) * 100) / 100;

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", my: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", minWidth: 200 }}>
          <Typography variant="h5">{item.name}</Typography>
          {item?.glutenFree && <Typography variant="caption">Bezlepková</Typography>}
          {item?.lactoseFree && <Typography variant="caption">Bezlaktózová</Typography>}
          <Typography variant="caption">{item.variants?.flavour}</Typography>
        </Box>
        <Box>
          <AmountButton minAmount={item.minimumAmount} amount={item.amount} orderItem={item} updateAmount={updateAmount} />
        </Box>
        <Box minWidth={100}>
          <Typography variant="h6">{finalPrice}€</Typography>
        </Box>
        <Button variant="contained" onClick={() => removeOrderItem(item._id)}>
          Odstrániť
        </Button>
        <Box>
          <TextField label="Poznámka" multiline rows={3} />
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default OrderSummaryRow;
