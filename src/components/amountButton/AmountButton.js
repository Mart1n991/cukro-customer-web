import { Box, Button, Typography } from "@mui/material";

const AmountButton = ({ minAmount }) => {
  return (
    <Box mb={3}>
      <Typography variant="subtitle2">Množstvo</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button variant="contained" color="info" size="small">
          -
        </Button>
        <Typography variant="subtitle2" mx={1}>
          {minAmount}
        </Typography>
        <Button variant="contained" color="info" size="small">
          +
        </Button>
      </Box>
    </Box>
  );
};

export default AmountButton;
