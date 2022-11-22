import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const AmountButton = ({ minAmount, amount, orderItem, updateAmount }) => {
  const [item, setItem] = useState(orderItem);

  useEffect(() => {
    updateAmount(item._id, item.amount);
  }, [item]);

  const increase = () => {
    setItem((prevState) => ({
      ...prevState,
      amount: prevState.amount + 1,
    }));
  };

  const decrease = () => {
    setItem((prevState) => ({
      ...prevState,
      amount: prevState.amount - 1,
    }));
  };

  return (
    <Box mb={3}>
      <Typography variant="subtitle2">Množstvo</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button variant="contained" color="info" onClick={decrease} size="small" disabled={minAmount === amount || amount === 0}>
          -
        </Button>
        <Typography variant="subtitle2" mx={1} width={20} textAlign="center">
          {amount}
        </Typography>
        <Button variant="contained" color="info" size="small" onClick={increase}>
          +
        </Button>
      </Box>
    </Box>
  );
};

export default AmountButton;
