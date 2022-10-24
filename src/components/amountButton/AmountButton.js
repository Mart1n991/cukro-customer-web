import { Box, Button, Typography } from "@mui/material";

const AmountButton = ({ minAmount, setItem, amount }) => {
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
        <Button variant="contained" color="info" size="small" onClick={decrease} disabled={minAmount === amount}>
          -
        </Button>
        <Typography variant="subtitle2" mx={1}>
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
