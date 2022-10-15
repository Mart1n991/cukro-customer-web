import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} mt={5}>
    <Stack direction="row" spacing={2}>
      <Typography variant="caption">Obchodné podmienky</Typography>
      <Typography variant="caption">Ochrana osobných údajov</Typography>
      <Typography variant="caption">Q&A</Typography>
    </Stack>
    <Typography variant="caption">CUKRO©2022</Typography>
  </Box>
);

export default Footer;
