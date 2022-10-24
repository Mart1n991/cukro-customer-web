import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { CukroProvider } from "./context/CukroContext";
import { router } from "./router/router";
import { theme } from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <CukroProvider>
      <RouterProvider router={router} />
    </CukroProvider>
  </ThemeProvider>
);

export default App;
