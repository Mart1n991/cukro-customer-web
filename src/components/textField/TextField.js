import { Box, Typography } from "@mui/material";

const TextField = ({ label, value, unit }) => (
  <Box display="flex">
    <Typography variant="body2" color="text.secondary" width={100}>
      {label}:
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {value} {unit}
    </Typography>
  </Box>
);

export default TextField;
