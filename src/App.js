import { ThemeProvider, Typography } from "@mui/material";
import { theme } from "./theme";
import Layout from "./components/layout/Layout";

const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Typography textAlign="center">CUKRO</Typography>
    </Layout>
  </ThemeProvider>
);

export default App;
